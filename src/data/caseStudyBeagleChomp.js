import { sideProjects } from '@/data/sideProjects'
import beagleHero from '@/assets/projects/beaglechomp/hero.png'
import beagleCover from '@/assets/projects/beaglechomp/cover.png'

const base = sideProjects.find((p) => p.id === 'beagle-chomp')

// Structure only — all copy lives in i18n under `caseStudy.beagleChomp`.
// liveUrl / tech are single-sourced from sideProjects.js. There is no repoUrl:
// unlike Astro Hop and Nibble, this repo is private, so no source link ships.
export const beagleChompCase = {
  liveUrl: base.liveUrl,
  apiUrl: 'https://beaglechomp-api.nunoamorim.dev',
  tech: base.tech,
  heroImage: beagleHero, // wide banner
  artImage: beagleCover, // square key art, shown in the art-direction section
  mobileImage: null, // real device shot still to come
  // Scope numbers, quoted verbatim from the project's own release log so they
  // stay auditable. Labels live in i18n under `caseStudy.beagleChomp.numbers`.
  numbers: [
    { id: 'releases', value: '15' },
    { id: 'lines', value: '55k' },
    { id: 'files', value: '177' },
    { id: 'tests', value: '~1,600' },
    { id: 'content', value: '18' },
    { id: 'assets', value: '0' },
  ],
  features: ['generated', 'toon', 'ui', 'content', 'fullstack', 'validation'],
  lessons: ['purity', 'generate', 'reject', 'measure'],
}
