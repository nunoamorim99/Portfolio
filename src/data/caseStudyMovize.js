import mBanner from '@/assets/projects/movize/m-banner.png'
import m2 from '@/assets/projects/movize/m-2.jpeg'
import m3 from '@/assets/projects/movize/m-3.jpeg'
import m4 from '@/assets/projects/movize/m-4.png'
import wa1 from '@/assets/projects/movizeWebApp/wa-1.png'
import wa2 from '@/assets/projects/movizeWebApp/wa-2.png'
import mc1 from '@/assets/projects/movizeConnect/mc-1.JPG'
import mc2 from '@/assets/projects/movizeConnect/mc-2.JPG'
import mcEvents1 from '@/assets/projects/movizeConnect/eventsModule/mc-events-1.png'

// Structure only — all copy lives in i18n under `caseStudy.movize`.
export const movizeCase = {
  url: 'https://movize.pt/',
  heroImage: mBanner,
  appShots: [m2, m3, m4],
  modules: [
    { id: 'gtfs', image: wa1 },
    { id: 'networkMap', image: wa2 },
    { id: 'news', image: mc2 },
    { id: 'events', image: mcEvents1 },
    { id: 'sensors', image: mc1 },
    { id: 'drivers', image: null, inDev: true },
  ],
  decisions: ['feedback', 'ecosystem', 'events', 'portal'],
}
