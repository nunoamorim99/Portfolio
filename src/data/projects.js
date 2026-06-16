import mBanner from '@/assets/projects/movize/m-banner.png'
import mobileAppImg from '@/assets/projects/mobileapp.png'
import webAppImg from '@/assets/projects/webapp.png'
import movizeConnectImg from '@/assets/projects/movizeconnect.png'

// How the Movize ecosystem is organised on the Projects page:
// two rider-facing apps, plus the Movize Connect operator platform.
// The Connect modules are rendered from caseStudyMovize.js (single source);
// the *-module entries below remain only so the homepage stat counts them.
export const projectGroups = {
  riderApps: ['mobile-app', 'web-app'],
  connectId: 'web-platform',
  connectModules: ['events-module', 'gtfs-management-module', 'furniture-sensors-module'],
}

export const projects = [
  {
    id: 'mobile-app',
    platforms: ['android', 'ios'],
    images: [mobileAppImg],
  },
  {
    id: 'web-app',
    platforms: ['desktop', 'tablet', 'phone'],
    url: 'https://movize.pt/',
    images: [webAppImg],
  },
  {
    id: 'web-platform',
    platforms: ['desktop'],
    images: [movizeConnectImg],
  },
  {
    id: 'events-module',
    platforms: ['desktop'],
    images: [mBanner],
  },
  {
    id: 'gtfs-management-module',
    platforms: ['desktop'],
    images: [mBanner],
  },
  {
    id: 'furniture-sensors-module',
    platforms: ['desktop'],
    images: [mBanner],
  },
]
