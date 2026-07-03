import { sideProjects } from '@/data/sideProjects'
import nibbleHero from '@/assets/projects/nibble/hero.png'
import nibbleDesktop from '@/assets/projects/nibble/desktop.png'
import nibblePhone from '@/assets/projects/nibble/phone.png'

const base = sideProjects.find((p) => p.id === 'nibble')

// Structure only — all copy lives in i18n under `caseStudy.nibble`.
// liveUrl / repoUrl / tech are single-sourced from sideProjects.js.
export const nibbleCase = {
  liveUrl: base.liveUrl,
  repoUrl: base.repoUrl,
  tech: base.tech,
  heroImage: nibbleHero, // dedicated wide banner (desktop + phone)
  desktopImage: nibbleDesktop, // shown full in the overview
  mobileImage: nibblePhone, // shown in the PWA section
  features: ['modes', 'challenges', 'economy', 'leaderboard'],
}
