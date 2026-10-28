// Screen content drawn in code: the PM dashboard, the code editor and the
// brick phone's LCD. Kept separate from the Blender bake so the screens can
// change (or become live) without re-exporting the room.

import { CanvasTexture, SRGBColorSpace } from 'three'

const TEAL = '#14b8a6'
const TEAL_DIM = '#0f766e'

function canvas(w: number, h: number): [HTMLCanvasElement, CanvasRenderingContext2D] {
  const c = document.createElement('canvas')
  c.width = w
  c.height = h
  const ctx = c.getContext('2d')
  if (!ctx) throw new Error('2D canvas unavailable')
  return [c, ctx]
}

function toTexture(c: HTMLCanvasElement): CanvasTexture {
  const t = new CanvasTexture(c)
  t.colorSpace = SRGBColorSpace
  t.anisotropy = 4
  return t
}

// Deterministic pseudo-random so the screens look the same on every load.
function rng(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

/** Product dashboard: KPI tiles, a sprint burndown and a bar chart. */
export function dashboardTexture(): CanvasTexture {
  const W = 1024
  const H = 572
  const [c, g] = canvas(W, H)
  const r = rng(7)

  g.fillStyle = '#0f1724'
  g.fillRect(0, 0, W, H)
  // top bar
  g.fillStyle = '#16233a'
  g.fillRect(0, 0, W, 56)
  g.fillStyle = TEAL
  g.fillRect(24, 20, 16, 16)
  g.fillStyle = '#c9d4e5'
  g.font = '600 22px sans-serif'
  g.fillText('Product overview', 52, 36)
  g.fillStyle = '#5b6b85'
  g.font = '18px sans-serif'
  g.fillText('Sprint 24  ·  Roadmap  ·  Backlog', W - 330, 36)

  // Status tiles: decorative progress bars only, no figures, so nothing on
  // the screen reads as a real product metric.
  const tiles = ['Roadmap', 'Backlog', 'Sprint', 'Release']
  tiles.forEach((label, i) => {
    const x = 24 + i * 246
    g.fillStyle = '#16233a'
    g.fillRect(x, 80, 226, 110)
    g.fillStyle = '#7d8ca6'
    g.font = '17px sans-serif'
    g.fillText(label, x + 18, 112)
    g.fillStyle = '#24344f'
    g.fillRect(x + 18, 140, 190, 14)
    g.fillStyle = i === 2 ? TEAL : '#5b7bb0'
    g.fillRect(x + 18, 140, 190 * [0.7, 0.45, 0.85, 0.3][i], 14)
  })

  // burndown
  g.fillStyle = '#16233a'
  g.fillRect(24, 214, 480, 334)
  g.fillStyle = '#7d8ca6'
  g.font = '17px sans-serif'
  g.fillText('Burndown', 42, 246)
  g.strokeStyle = '#2a3a57'
  g.lineWidth = 2
  g.beginPath()
  g.moveTo(60, 280)
  g.lineTo(470, 520)
  g.stroke()
  g.strokeStyle = TEAL
  g.lineWidth = 5
  g.beginPath()
  let y = 280
  for (let i = 0; i <= 10; i++) {
    const x = 60 + i * 41
    y = Math.min(520, y + (i === 0 ? 0 : 10 + r() * 30))
    if (i === 0) g.moveTo(x, y)
    else g.lineTo(x, y)
  }
  g.stroke()

  // bars
  g.fillStyle = '#16233a'
  g.fillRect(526, 214, 474, 334)
  g.fillStyle = '#7d8ca6'
  g.fillText('Delivered per release', 544, 246)
  for (let i = 0; i < 9; i++) {
    const h = 60 + r() * 190
    g.fillStyle = i === 8 ? TEAL : TEAL_DIM
    g.fillRect(560 + i * 48, 520 - h, 30, h)
  }
  return toTexture(c)
}

/** Code editor: file tree, line numbers and syntax-coloured lines. */
export function editorTexture(): CanvasTexture {
  const W = 1024
  const H = 614
  const [c, g] = canvas(W, H)
  const r = rng(42)
  const palette = ['#c792ea', '#82aaff', '#c3e88d', '#f78c6c', '#89ddff', '#d6deeb', TEAL]

  g.fillStyle = '#0b1416'
  g.fillRect(0, 0, W, H)
  // title bar + tabs
  g.fillStyle = '#081012'
  g.fillRect(0, 0, W, 40)
  ;['#ff5f57', '#febc2e', '#28c840'].forEach((col, i) => {
    g.fillStyle = col
    g.beginPath()
    g.arc(22 + i * 22, 20, 7, 0, Math.PI * 2)
    g.fill()
  })
  g.fillStyle = '#12201f'
  g.fillRect(230, 40, 190, 38)
  g.fillStyle = '#c9d4e5'
  g.font = '17px monospace'
  g.fillText('Experience.ts', 248, 65)
  g.fillStyle = '#5b6b85'
  g.fillText('World.ts', 446, 65)

  // file tree
  g.fillStyle = '#081012'
  g.fillRect(0, 40, 210, H - 40)
  const files = ['src', '  workshop', '    config.ts', '    Experience.ts', '    screens.ts', '  pages', '  data', 'public', 'blender']
  files.forEach((f, i) => {
    g.fillStyle = f.includes('Experience') ? TEAL : '#7d8ca6'
    g.font = '16px monospace'
    g.fillText(f, 18, 82 + i * 28)
  })

  // code
  for (let line = 0; line < 19; line++) {
    const y = 108 + line * 26
    g.fillStyle = '#3b4a52'
    g.font = '15px monospace'
    g.fillText(String(line + 1).padStart(2, ' '), 230, y)
    let x = 272 + Math.floor(r() * 3) * 28
    const tokens = 2 + Math.floor(r() * 5)
    for (let t = 0; t < tokens && x < W - 40; t++) {
      const w = 24 + r() * 110
      g.fillStyle = palette[Math.floor(r() * palette.length)]
      g.fillRect(x, y - 11, w, 12)
      x += w + 12
    }
  }
  // cursor
  g.fillStyle = TEAL
  g.fillRect(560, 108 + 11 * 26 - 14, 3, 18)
  return toTexture(c)
}

/** Brick-phone LCD with a pixel snake, a nod to Nibble's origin. */
export function lcdTexture(): CanvasTexture {
  const W = 168
  const H = 144
  const [c, g] = canvas(W, H)
  g.fillStyle = '#9bbc6a'
  g.fillRect(0, 0, W, H)
  g.fillStyle = '#2f3f1f'
  const cell = 12
  const snake = [
    [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [6, 7], [6, 6], [7, 6], [8, 6], [9, 6],
  ]
  snake.forEach(([x, y]) => g.fillRect(x * cell + 1, y * cell + 1, cell - 2, cell - 2))
  g.fillRect(11 * cell + 3, 3 * cell + 3, cell - 6, cell - 6) // food
  g.fillRect(0, 0, W, 4)
  g.fillRect(0, H - 4, W, 4)
  g.font = 'bold 18px monospace'
  g.fillText('0042', 8, 26)
  return toTexture(c)
}
