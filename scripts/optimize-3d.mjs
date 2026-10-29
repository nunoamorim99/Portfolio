// Compress the Workshop's models and baked textures for the web.
//
//   npm run optimize:3d
//
// Blender exports the raw GLBs to blender/export/ and the bakes to
// blender/bake/*.png (both git-ignored). This script writes what the page
// loads: a meshopt-compressed copy of each model to public/3d/models/, and
// each bake as WebP (quality 80) to public/3d/textures/.
//
// Models: positions and UVs are quantised to 14 bits (well under a
// millimetre in the room, and finer than a texel of the 2048 bake), then
// compressed with EXT_meshopt_compression; Experience.ts registers the decoder.
//
// Uses the glTF Transform CLI through npx, so it adds nothing to package.json.
// Node names are kept: picking, decals and the screens look meshes up by name.

import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import sharp from 'sharp'

const SRC = 'blender/export'
const OUT = 'public/3d/models'
const BAKES = 'blender/bake'
const TEXTURES = 'public/3d/textures'
const CLI = '@gltf-transform/cli@4.5.1'
const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx'

if (!existsSync(SRC)) {
  console.error(`No ${SRC}/ folder: export the models from blender/workshop.blend first.`)
  process.exit(1)
}
mkdirSync(OUT, { recursive: true })

const files = readdirSync(SRC).filter((f) => f.endsWith('.glb'))
let before = 0
let after = 0
for (const file of files) {
  const input = join(SRC, file)
  const output = join(OUT, file)
  execFileSync(
    npx,
    ['--yes', CLI, 'meshopt', input, output, '--level', 'medium', '--quantize-position', '14', '--quantize-texcoord', '14'],
    { stdio: ['ignore', 'ignore', 'inherit'], shell: process.platform === 'win32' },
  )
  const a = statSync(input).size
  const b = statSync(output).size
  before += a
  after += b
  console.log(`${file.padEnd(26)} ${(a / 1024).toFixed(0).padStart(5)} KB → ${(b / 1024).toFixed(0).padStart(4)} KB`)
}
console.log(`${'total'.padEnd(26)} ${(before / 1024).toFixed(0).padStart(5)} KB → ${(after / 1024).toFixed(0).padStart(4)} KB`)

// Baked lighting: blender/bake/<model>.png → public/3d/textures/<model>.webp
// (the room's atlas is saved as room_bake.png).
if (existsSync(BAKES)) {
  mkdirSync(TEXTURES, { recursive: true })
  for (const file of readdirSync(BAKES).filter((f) => f.endsWith('.png'))) {
    const key = file === 'room_bake.png' ? 'room' : file.replace(/\.png$/, '')
    const output = join(TEXTURES, `${key}.webp`)
    await sharp(join(BAKES, file)).webp({ quality: 80, effort: 6 }).toFile(output)
    console.log(`${(key + '.webp').padEnd(26)} ${(statSync(output).size / 1024).toFixed(0).padStart(4)} KB`)
  }
}
