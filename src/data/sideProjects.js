import gameboyImg from '@/assets/projects/astrohop/gameboyastro.png'

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
    // Screenshots pending — drop them in assets/projects/nibble and wire here.
    image: null,
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
]
