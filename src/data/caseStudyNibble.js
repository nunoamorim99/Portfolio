import { sideProjects } from '@/data/sideProjects'

const base = sideProjects.find((p) => p.id === 'nibble')

// Structure only — all copy lives in i18n under `caseStudy.nibble`.
// liveUrl / repoUrl / tech are single-sourced from sideProjects.js.
// Images pending — drop screenshots in assets/projects/nibble and wire here.
export const nibbleCase = {
  liveUrl: base.liveUrl,
  repoUrl: base.repoUrl,
  tech: base.tech,
  heroImage: null, // dedicated wide banner
  desktopImage: null, // shown full in the overview
  mobileImage: null, // shown in the PWA section
  features: ['modes', 'challenges', 'economy', 'leaderboard'],
}
