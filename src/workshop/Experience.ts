// The Workshop 3D experience: one renderer, one orthographic camera, the room
// and one pivot group per project object. Scroll progress (0 → STOPS.length-1)
// is the single clock: it picks the camera pose, and the page owns the scroll.

import {
  AgXToneMapping,
  Box3,
  BufferAttribute,
  CanvasTexture,
  Color,
  DirectionalLight,
  Group,
  HemisphereLight,
  LoadingManager,
  Material,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  OrthographicCamera,
  PointLight,
  Raycaster,
  SRGBColorSpace,
  Scene,
  Texture,
  TextureLoader,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { BAKED, BOOK_SKILLS, MODELS, PLANET_PRODUCTS, STOPS, STOP_BY_MODEL, type ModelKey, type Stop, type StopId } from './config'
import { dashboardTexture, editorTexture, lcdTexture, robotTexture } from './screens'

interface SceneData {
  camera: { position: number[]; target: number[]; orthoScale: number; renderAspect: number }
  orrery: { sun: number[]; planets: string[] }
}

export interface HoverInfo {
  stop: StopId
  /** Sub-item under the pointer: a Movize product (planet) or a skill (book). */
  item?: string
  /** Pointer position in CSS pixels, relative to the canvas. */
  x: number
  y: number
}

export interface ExperienceOptions {
  canvas: HTMLCanvasElement
  /** Where public/3d is served from (import.meta.env.BASE_URL + '3d/'). */
  assetsUrl: string
  reducedMotion: boolean
  onProgress?: (loaded: number) => void
  onPick?: (stop: StopId, item?: string) => void
  onHover?: (hit: HoverInfo | null) => void
}

interface Pose {
  look: Vector3
  zoom: number
}

interface Book {
  node: Object3D
  skill: string
  baseX: number
  out: number
}

interface Planet {
  node: Object3D
  product: string
  radius: number
  angle: number
  speed: number
  y: number
}

const WORLD_UP = new Vector3(0, 1, 0)
const CAMERA_DISTANCE = 20

const clamp01 = (v: number) => Math.min(1, Math.max(0, v))
const smooth = (t: number) => t * t * (3 - 2 * t)

export class Experience {
  static isSupported(): boolean {
    try {
      const c = document.createElement('canvas')
      return !!(c.getContext('webgl2') || c.getContext('webgl'))
    } catch {
      return false
    }
  }

  private opts: ExperienceOptions
  private renderer: WebGLRenderer
  private scene = new Scene()
  private camera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 100)
  private lastTime = -1
  private raycaster = new Raycaster()
  private pointer = new Vector2()
  private resizeObserver: ResizeObserver

  // Camera basis (fixed iso direction from Blender's camera A).
  private dir = new Vector3() // look point → camera
  private right = new Vector3()
  private up = new Vector3()
  private baseLook = new Vector3()
  private overviewHeight = 4.2 // world units visible vertically at zoom 1

  private width = 1
  private height = 1
  private progress = 0
  private poses: Pose[] = []
  private current: Pose = { look: new Vector3(), zoom: 1 }
  private settled = false

  private pivots = new Map<ModelKey, Group>()
  private sizes = new Map<ModelKey, number>()
  private hoverAmount = new Map<ModelKey, number>()
  private pickables: Object3D[] = []
  private planets: Planet[] = []
  private sun = new Vector3()
  private hovered: { model: ModelKey; item?: string } | null = null
  private selectedProduct: string | null = null
  private selectedSkill: string | null = null
  private books: Book[] = []
  private pointerDown: { x: number; y: number } | null = null
  private ownedTextures: Texture[] = []

  constructor(opts: ExperienceOptions) {
    this.opts = opts
    this.renderer = new WebGLRenderer({ canvas: opts.canvas, antialias: true, alpha: true })
    this.renderer.setClearColor(0x000000, 0)
    this.renderer.outputColorSpace = SRGBColorSpace
    this.renderer.toneMapping = AgXToneMapping
    this.renderer.toneMappingExposure = 1.1

    this.addLights()

    const parent = opts.canvas.parentElement ?? opts.canvas
    this.resizeObserver = new ResizeObserver(() => this.resize())
    this.resizeObserver.observe(parent)

    opts.canvas.addEventListener('pointermove', this.onPointerMove)
    opts.canvas.addEventListener('pointerdown', this.onPointerDown)
    opts.canvas.addEventListener('pointerup', this.onPointerUp)
    opts.canvas.addEventListener('pointerleave', this.onPointerLeave)
  }

  // ───────────────────────── loading ─────────────────────────

  async load(): Promise<void> {
    const res = await fetch(`${this.opts.assetsUrl}scene.json`)
    const data = (await res.json()) as SceneData
    this.setupCamera(data)

    const manager = new LoadingManager()
    manager.onProgress = (_url, loaded, total) => this.opts.onProgress?.(loaded / total)
    const loader = new GLTFLoader(manager)
    const textures = new TextureLoader(manager)

    const [gltfs, baked] = await Promise.all([
      Promise.all(MODELS.map((key) => loader.loadAsync(`${this.opts.assetsUrl}models/${key}.glb`).then((g) => [key, g] as const))),
      Promise.all(
        Object.entries(BAKED).map(([key, file]) =>
          textures.loadAsync(`${this.opts.assetsUrl}${file}`).then((t) => [key as ModelKey, t] as const),
        ),
      ),
    ])
    const bakedByModel = new Map(baked)

    for (const [key, gltf] of gltfs) {
      const map = bakedByModel.get(key)
      if (map) this.applyBake(gltf.scene, map)
      if (key === 'room') {
        this.scene.add(gltf.scene)
        continue
      }
      // Re-parent the object under a pivot at its own centre, so hover scale
      // and focus framing work around the object, not the world origin.
      const box = new Box3().setFromObject(gltf.scene)
      const center = box.getCenter(new Vector3())
      const pivot = new Group()
      pivot.name = key
      pivot.position.copy(center)
      for (const child of [...gltf.scene.children]) {
        child.position.sub(center)
        pivot.add(child)
      }
      pivot.traverse((o) => {
        o.userData.model = key
        if ((o as Mesh).isMesh) this.pickables.push(o)
      })
      this.scene.add(pivot)
      this.pivots.set(key, pivot)
      this.sizes.set(key, box.getSize(new Vector3()).length())
      this.hoverAmount.set(key, 0)
    }

    this.setupScreens()
    this.setupWindow()
    this.setupOrrery(data)
    this.setupBooks()
    this.resize()
    this.renderer.setAnimationLoop(this.tick)
  }

  /** Swap a model's materials for one unlit material showing its baked lighting. */
  private applyBake(root: Object3D, map: Texture) {
    map.flipY = false // glTF UV convention
    map.colorSpace = SRGBColorSpace
    map.anisotropy = Math.min(8, this.renderer.capabilities.getMaxAnisotropy())
    this.ownedTextures.push(map)
    const material = new MeshBasicMaterial({ map, toneMapped: false }) // tone mapping is baked in
    root.traverse((o) => {
      const mesh = o as Mesh
      if (!mesh.isMesh) return
      const old = mesh.material as Material
      mesh.material = material
      if (old !== material) old.dispose()
    })
  }

  private setupCamera(data: SceneData) {
    const pos = new Vector3().fromArray(data.camera.position)
    this.baseLook.fromArray(data.camera.target)
    this.dir.subVectors(pos, this.baseLook).normalize()
    const forward = this.dir.clone().negate()
    this.right.crossVectors(forward, WORLD_UP).normalize()
    this.up.crossVectors(this.right, forward).normalize()
    // Blender's ortho scale is the frame width at its render aspect.
    this.overviewHeight = data.camera.orthoScale / data.camera.renderAspect
  }

  private setupScreens() {
    const screens: Record<string, () => CanvasTexture> = {
      pm_display: dashboardTexture,
      dev_display: editorTexture,
      nibble_lcd: lcdTexture,
      laptop_display: robotTexture,
    }
    for (const [name, make] of Object.entries(screens)) {
      const mesh = this.scene.getObjectByName(name) as Mesh | undefined
      if (!mesh) continue
      const map = make()
      map.flipY = false // glTF UV convention
      this.ownedTextures.push(map)
      const old = mesh.material as Material
      mesh.material = new MeshBasicMaterial({ map, toneMapped: false })
      old.dispose()
    }
  }

  /** Blender's gradient emission doesn't survive glTF export: rebuild the dusk sky with vertex colours. */
  private setupWindow() {
    const pane = this.scene.getObjectByName('window_pane') as Mesh | undefined
    if (!pane) return
    const geo = pane.geometry
    geo.computeBoundingBox()
    const { min, max } = geo.boundingBox!
    const pos = geo.getAttribute('position')
    const colors = new Float32Array(pos.count * 3)
    const low = new Color(0xf39a5b)
    const mid = new Color(0xc9607a)
    const high = new Color(0x3b2f6b)
    const c = new Color()
    for (let i = 0; i < pos.count; i++) {
      const t = (pos.getY(i) - min.y) / Math.max(1e-6, max.y - min.y)
      if (t < 0.45) c.lerpColors(low, mid, t / 0.45)
      else c.lerpColors(mid, high, (t - 0.45) / 0.55)
      c.toArray(colors, i * 3)
    }
    geo.setAttribute('color', new BufferAttribute(colors, 3))
    const old = pane.material as Material
    pane.material = new MeshBasicMaterial({ vertexColors: true, toneMapped: false })
    old.dispose()
  }

  private setupOrrery(data: SceneData) {
    const pivot = this.pivots.get('obj_movize_orrery')
    if (!pivot) return
    this.sun.fromArray(data.orrery.sun).sub(pivot.position)
    data.orrery.planets.forEach((name, i) => {
      const node = pivot.getObjectByName(name)
      if (!node) return
      const dx = node.position.x - this.sun.x
      const dz = node.position.z - this.sun.z
      this.planets.push({
        node,
        product: PLANET_PRODUCTS[name],
        radius: Math.hypot(dx, dz),
        angle: Math.atan2(dz, dx),
        speed: 0.42 - i * 0.08, // inner planets move faster
        y: node.position.y,
      })
    })
  }

  private setupBooks() {
    const pivot = this.pivots.get('obj_skills')
    if (!pivot) return
    for (const [name, skill] of Object.entries(BOOK_SKILLS)) {
      const node = pivot.getObjectByName(name)
      if (node) this.books.push({ node, skill, baseX: node.position.x, out: 0 })
    }
  }

  private addLights() {
    // Rough-build lighting only: the baked texture replaces all of this later.
    this.scene.add(new HemisphereLight(0x8a96d0, 0x3a2633, 1.6))

    const windowLight = new DirectionalLight(0xff9a76, 2.2) // dusk through the window
    windowLight.position.set(-1.6, 3.2, -4)
    windowLight.target.position.set(0.3, 0.6, 0.6)
    this.scene.add(windowLight, windowLight.target)

    const fill = new DirectionalLight(0x7d8cc4, 0.9)
    fill.position.set(6, 8, 6)
    this.scene.add(fill)

    // Monitor light bars: a warm wash down onto the desk from each bar.
    for (const x of [0.86, 1.54]) {
      const bar = new PointLight(0xffd6a0, 1.6, 1.6, 2)
      bar.position.set(x, 1.3, -1.6)
      this.scene.add(bar)
    }

    // Turquoise LED strips: under the two personal shelves and the work shelf.
    for (const [x, y, z, len] of [
      [-1.7, 0.96, -0.5, 1.2],
      [-1.7, 1.4, -0.5, 1.2],
      [-1.7, 1.85, -0.5, 1.2],
      [1.2, 1.77, -1.55, 1.4],
    ]) {
      const led = new PointLight(0x14b8a6, 1.1, len, 2)
      led.position.set(x, y, z)
      this.scene.add(led)
    }
  }

  // ───────────────────────── camera ─────────────────────────

  private isWide() {
    return this.width >= 900 && this.width / this.height > 1.05
  }

  /** World size of the view at a given zoom. */
  private view(zoom: number) {
    const h = this.overviewHeight / zoom
    return { w: h * (this.width / this.height), h }
  }

  private poseFor(stop: Stop): Pose {
    const wide = this.isWide()
    const aspect = this.width / this.height
    let center: Vector3
    let zoom: number

    if (!stop.model) {
      center = this.baseLook.clone()
      // Fit the whole room: on screen it spans ~7.4 units across and ~6.8 up.
      const fitH = this.overviewHeight / 6.8
      const fitW = (this.overviewHeight * aspect * (wide ? 0.6 : 1)) / 7.4
      zoom = Math.min(fitH, fitW)
    } else {
      const pivot = this.pivots.get(stop.model)!
      center = pivot.position.clone()
      const span = this.sizes.get(stop.model)! * (stop.frame ?? 2.5)
      // On wide screens the object gets the right ~55% of the frame.
      const zoomH = this.overviewHeight / span
      const zoomW = (this.overviewHeight * aspect * (wide ? 0.55 : 1)) / span
      zoom = Math.min(zoomH, zoomW)
    }

    const v = this.view(zoom)
    const look = center.clone()
    if (wide) {
      // Card on the left, object in the right part of the frame.
      look.addScaledVector(this.right, -(stop.model ? 0.2 : 0.21) * v.w)
    } else {
      // Phones: the card sits at the bottom, so objects go in the top part.
      // The intro is the exception: its text is at the top, the room below it.
      const shift = stop.id === 'intro' ? -0.23 : stop.model ? 0.23 : 0.2
      look.addScaledVector(this.up, -shift * v.h)
    }
    return { look, zoom }
  }

  private targetPose(): Pose {
    const last = this.poses.length - 1
    const p = Math.min(Math.max(this.progress, 0), last)
    const i = Math.min(Math.floor(p), last - 1)
    // Hold on each stop for a while, then travel to the next one.
    const t = smooth(clamp01((p - i - 0.2) / 0.6))
    const a = this.poses[i]
    const b = this.poses[i + 1]
    return {
      look: a.look.clone().lerp(b.look, t),
      zoom: Math.exp(Math.log(a.zoom) + (Math.log(b.zoom) - Math.log(a.zoom)) * t),
    }
  }

  /** Scroll position as a stop index, e.g. 1.5 = halfway from stop 1 to stop 2. */
  setProgress(p: number) {
    this.progress = p
  }

  setMovizeProduct(product: string | null) {
    this.selectedProduct = product
  }

  setSkill(skill: string | null) {
    this.selectedSkill = skill
  }

  // ───────────────────────── frame loop ─────────────────────────

  private tick = (time: number) => {
    const dt = this.lastTime < 0 ? 0 : Math.min((time - this.lastTime) / 1000, 0.1)
    this.lastTime = time

    if (this.poses.length) {
      const target = this.targetPose()
      const k = this.opts.reducedMotion || !this.settled ? 1 : 1 - Math.exp(-dt * 5)
      this.settled = true
      this.current.look.lerp(target.look, k)
      this.current.zoom = Math.exp(Math.log(this.current.zoom) + (Math.log(target.zoom) - Math.log(this.current.zoom)) * k)
      this.camera.position.copy(this.current.look).addScaledVector(this.dir, CAMERA_DISTANCE)
      this.camera.lookAt(this.current.look)
      this.camera.zoom = this.current.zoom
      this.camera.updateProjectionMatrix()
    }

    // Orrery: planets orbit the sun; the selected product's planet grows.
    for (const pl of this.planets) {
      if (!this.opts.reducedMotion) pl.angle += pl.speed * dt
      pl.node.position.set(this.sun.x + Math.cos(pl.angle) * pl.radius, pl.y, this.sun.z + Math.sin(pl.angle) * pl.radius)
      const s = pl.product === this.selectedProduct || pl.product === this.hovered?.item ? 1.6 : 1
      pl.node.scale.setScalar(pl.node.scale.x + (s - pl.node.scale.x) * Math.min(1, dt * 10))
    }

    // AI shelf: the selected skill's book slides out towards the room. Hover only
    // shows the label: sliding on hover would move the book out from under the
    // pointer and flicker between neighbours.
    for (const b of this.books) {
      const goal = b.skill === this.selectedSkill ? 1 : 0
      b.out = this.opts.reducedMotion ? goal : b.out + (goal - b.out) * Math.min(1, dt * 10)
      b.node.position.x = b.baseX + b.out * 0.07
    }

    // Hover: the object under the pointer lifts slightly.
    for (const [key, pivot] of this.pivots) {
      const goal = this.hovered?.model === key && key !== 'obj_skills' ? 1 : 0
      const cur = this.hoverAmount.get(key)!
      const next = this.opts.reducedMotion ? goal : cur + (goal - cur) * Math.min(1, dt * 10)
      this.hoverAmount.set(key, next)
      pivot.scale.setScalar(1 + next * 0.06)
    }

    this.renderer.render(this.scene, this.camera)
  }

  private resize() {
    const parent = this.opts.canvas.parentElement
    if (!parent) return
    this.width = Math.max(1, parent.clientWidth)
    this.height = Math.max(1, parent.clientHeight)
    const mobile = this.width < 768
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.5 : 2))
    this.renderer.setSize(this.width, this.height, false)

    const halfH = this.overviewHeight / 2
    const halfW = halfH * (this.width / this.height)
    this.camera.left = -halfW
    this.camera.right = halfW
    this.camera.top = halfH
    this.camera.bottom = -halfH
    this.camera.updateProjectionMatrix()

    if (this.pivots.size) {
      this.poses = STOPS.map((s) => this.poseFor(s))
      this.settled = false // jump, don't glide, after a resize
    }
  }

  // ───────────────────────── picking ─────────────────────────

  private pick(clientX: number, clientY: number): { model: ModelKey; item?: string } | null {
    const rect = this.opts.canvas.getBoundingClientRect()
    this.pointer.set(((clientX - rect.left) / rect.width) * 2 - 1, -((clientY - rect.top) / rect.height) * 2 + 1)
    this.raycaster.setFromCamera(this.pointer, this.camera)
    const hit = this.raycaster.intersectObjects(this.pickables, false)[0]
    if (!hit) return null
    const model = hit.object.userData.model as ModelKey
    let item: string | undefined
    for (let o: Object3D | null = hit.object; o && !item; o = o.parent) {
      item = PLANET_PRODUCTS[o.name] ?? BOOK_SKILLS[o.name]
    }
    return { model, item }
  }

  private onPointerMove = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse') return // touch: no hover state
    const hit = this.pick(e.clientX, e.clientY)
    this.hovered = hit
    this.opts.canvas.style.cursor = hit ? 'pointer' : ''
    const rect = this.opts.canvas.getBoundingClientRect()
    const stop = hit && STOP_BY_MODEL[hit.model]
    this.opts.onHover?.(stop ? { stop, item: hit.item, x: e.clientX - rect.left, y: e.clientY - rect.top } : null)
  }

  private onPointerDown = (e: PointerEvent) => {
    this.pointerDown = { x: e.clientX, y: e.clientY }
  }

  private onPointerUp = (e: PointerEvent) => {
    const down = this.pointerDown
    this.pointerDown = null
    if (!down || Math.hypot(e.clientX - down.x, e.clientY - down.y) > 8) return // a drag/scroll, not a tap
    const hit = this.pick(e.clientX, e.clientY)
    const stop = hit && STOP_BY_MODEL[hit.model]
    if (stop) this.opts.onPick?.(stop, hit.item)
  }

  private onPointerLeave = () => {
    this.hovered = null
    this.opts.canvas.style.cursor = ''
    this.opts.onHover?.(null)
  }

  // ───────────────────────── teardown ─────────────────────────

  dispose() {
    this.renderer.setAnimationLoop(null)
    this.resizeObserver.disconnect()
    const c = this.opts.canvas
    c.removeEventListener('pointermove', this.onPointerMove)
    c.removeEventListener('pointerdown', this.onPointerDown)
    c.removeEventListener('pointerup', this.onPointerUp)
    c.removeEventListener('pointerleave', this.onPointerLeave)

    this.scene.traverse((o) => {
      const mesh = o as Mesh
      if (!mesh.isMesh) return
      mesh.geometry.dispose()
      const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material]
      for (const m of mats) {
        for (const v of Object.values(m)) if (v instanceof Texture) v.dispose()
        m.dispose()
      }
    })
    this.ownedTextures.forEach((t) => t.dispose())
    this.renderer.dispose()
    this.renderer.forceContextLoss()
  }
}
