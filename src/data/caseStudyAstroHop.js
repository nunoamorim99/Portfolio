import { sideProjects } from '@/data/sideProjects'
import astroCover from '@/assets/projects/astrohop/astrocover.jpeg'
import astroDesktop from '@/assets/projects/astrohop/astrodesktop.png'
import astroMobile from '@/assets/projects/astrohop/astropmobile.png'

const base = sideProjects.find((p) => p.id === 'astro-hop')

// Structure only — all copy lives in i18n under `caseStudy.astroHop`.
// liveUrl / repoUrl / tech are single-sourced from sideProjects.js.
export const astroHopCase = {
  liveUrl: base.liveUrl,
  repoUrl: base.repoUrl,
  tech: base.tech,
  heroImage: astroCover, // dedicated wide banner
  desktopImage: astroDesktop, // shown full in the overview
  mobileImage: astroMobile,
  features: ['physics', 'powerups', 'world', 'loop'],
}
