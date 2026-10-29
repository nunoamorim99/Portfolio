import mBanner from '@/assets/projects/movize/m-banner.png'
import mobileAppImg from '@/assets/projects/mobileapp.png'
import webAppImg from '@/assets/projects/webapp.png'
import movizeConnectImg from '@/assets/projects/movizeconnect.png'
import movizeWebsiteCombined from '@/assets/projects/movizeWebsite/combined.png'
import movizeWebsiteDesktop from '@/assets/projects/movizeWebsite/desktop.png'
import movizeWebsitePhone from '@/assets/projects/movizeWebsite/phone.png'

// How the Movize ecosystem is organised on the Projects page:
// two rider-facing apps, the public ecosystem website, plus the
// Movize Connect operator platform.
// The Connect modules are rendered from caseStudyMovize.js (single source);
// the *-module entries below remain only so the homepage stat counts them.
// Tech names are brand names (identical across languages), as in sideProjects.js;
// the rider apps list their shared backend (Symfony API + OpenTripPlanner) last.
export const projectGroups = {
  riderApps: ['mobile-app', 'web-app'],
  websiteId: 'movize-website',
  connectId: 'web-platform',
  connectModules: ['events-module', 'gtfs-management-module', 'furniture-sensors-module'],
}

export const projects = [
  {
    id: 'mobile-app',
    platforms: ['android', 'ios'],
    images: [mobileAppImg],
    tech: [
      'React Native 0.81',
      'Expo SDK 54',
      'TypeScript',
      'MapLibre',
      'Expo Router',
      'Reanimated 4',
      'react-native-maps',
      'i18next',
      'Expo Push',
      'EAS',
      'Symfony 8 (PHP 8.4)',
      'OpenTripPlanner 2.5',
    ],
  },
  {
    id: 'web-app',
    platforms: ['desktop', 'tablet', 'phone'],
    url: 'https://movize.app/',
    images: [webAppImg],
    tech: [
      'Vue 3',
      'JavaScript',
      'Vite',
      'MapLibre GL',
      'Leaflet',
      'OpenFreeMap',
      'Google Places',
      'Symfony 8 (PHP 8.4)',
      'OpenTripPlanner 2.5',
    ],
  },
  {
    id: 'movize-website',
    platforms: ['desktop', 'tablet', 'phone'],
    url: 'https://movize.pt/',
    tech: ['Vue 3', 'JavaScript', 'Vite', 'vue-i18n', 'sharp', 'Web3Forms', 'nginx', 'Helm + GKE'],
    // Combined desktop+phone hero first (card image); the standalone shots
    // follow as extra frames in the click-through gallery.
    images: [movizeWebsiteCombined, movizeWebsiteDesktop, movizeWebsitePhone],
  },
  {
    id: 'web-platform',
    platforms: ['desktop'],
    images: [movizeConnectImg],
    tech: [
      'Vue 3',
      'TypeScript',
      'Vuetify 3',
      'FastAPI',
      'gRPC',
      'PostgreSQL + PostGIS',
      'Redis',
      'Server-Sent Events',
      'Pinia',
      'Tiptap',
      'ApexCharts',
      'Google Maps',
      'Vitest',
      'Playwright',
      'Helm + GKE',
    ],
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
