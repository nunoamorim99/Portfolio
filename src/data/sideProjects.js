import gameboyImg from '@/assets/projects/astrohop/gameboyastro.png'
import nibbleCover from '@/assets/projects/nibble/cover.png'
import beagleCover from '@/assets/projects/beaglechomp/cover.png'

// Standalone projects shown on the Projects page alongside the Movize flagship.
// Kept separate from the Movize `projects` array so they don't inflate the
// homepage "products & modules shipped" stat. Tech names live here (brand
// names, identical across languages); copy lives in i18n under projects.items.
export const sideProjects = [
  {
    id: 'astro-hop',
    image: gameboyImg,
    liveUrl: 'https://nunoamorim99.github.io/AstroHop/',
    repoUrl: 'https://github.com/nunoamorim99/AstroHop',
    tech: [
      'Phaser 3',
      'Vite',
      'JavaScript (ES Modules)',
      'Web Audio API',
      'GitHub Actions',
      'GitHub Pages',
    ],
  },
  {
    id: 'nibble',
    image: nibbleCover,
    liveUrl: 'https://nunoamorim99.github.io/nibble/',
    repoUrl: 'https://github.com/nunoamorim99/nibble',
    tech: [
      'TypeScript',
      'Vite',
      'Canvas 2D',
      'IndexedDB',
      'Vitest',
      'PWA (Workbox)',
      'Supabase',
      'GitHub Actions',
      'GitHub Pages',
    ],
  },
  {
    id: 'beagle-chomp',
    image: beagleCover,
    liveUrl: 'https://beaglechomp.nunoamorim.dev',
    // No `repoUrl` on purpose — the repo is private, so neither the Projects
    // page nor the case study shows a source link for this one.
    tech: [
      'TypeScript',
      'three.js r169',
      'Vite',
      'PWA (vite-plugin-pwa)',
      'Web Audio API',
      'Canvas 2D',
      'Node 22',
      'Hono',
      'PostgreSQL 17',
      'Zod',
      'argon2id',
      'Playwright',
      'Docker',
      'Cloudflare Pages',
      'Hetzner + Dokploy',
    ],
  },
]
