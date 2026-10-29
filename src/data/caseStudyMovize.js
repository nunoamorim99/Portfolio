import mBanner from '@/assets/projects/movize/m-banner.png'
import generalImg from '@/assets/projects/general.png'
import gtfsImg from '@/assets/projects/movizeConnect/modules/gtfs.png'
import networkMapImg from '@/assets/projects/movizeConnect/modules/networkmap.png'
import newsImg from '@/assets/projects/movizeConnect/modules/news.png'
import eventsImg from '@/assets/projects/movizeConnect/modules/events.jpeg'
import sensorsImg from '@/assets/projects/movizeConnect/modules/streetfurniture_sensors.png'
import driversImg from '@/assets/projects/movizeConnect/modules/drivers.png'

// Structure only — all copy lives in i18n under `caseStudy.movize`.
// Tech names are brand names (identical across languages); the stack layer
// labels live in i18n under `caseStudy.movize.stack`.
export const movizeCase = {
  url: 'https://movize.pt/',
  heroImage: mBanner,
  v1Image: generalImg,
  modules: [
    {
      id: 'gtfs',
      image: gtfsImg,
      tech: ['FastAPI', 'gRPC', 'PostgreSQL + PostGIS', 'GTFS-Realtime', 'pandas'],
    },
    {
      id: 'networkMap',
      image: networkMapImg,
      tech: ['Vue 3', 'TypeScript', 'FastAPI', 'LOOM (C++)', 'CairoSVG', 'ReportLab'],
    },
    {
      id: 'news',
      image: newsImg,
      tech: ['FastAPI', 'gRPC', 'PostgreSQL', 'Tiptap', 'Google Cloud Storage'],
    },
    {
      id: 'events',
      image: eventsImg,
      tech: ['FastAPI', 'gRPC', 'PostGIS', 'Redis pub/sub', 'Google Cloud Storage'],
    },
    {
      id: 'sensors',
      image: sensorsImg,
      tech: ['FastAPI', 'MQTT', 'The Things Network (LoRaWAN)', 'PostGIS', 'APScheduler', 'ReportLab'],
    },
    {
      id: 'drivers',
      image: driversImg,
      tech: ['FastAPI', 'Celery', 'OR-Tools', 'PostgreSQL RLS', 'React Native', 'WatermelonDB'],
    },
  ],
  decisions: ['feedback', 'ecosystem', 'events', 'portal'],
  // The whole platform's stack, by layer.
  stack: [
    {
      id: 'mobile',
      tech: ['React Native 0.81', 'Expo SDK 54', 'TypeScript', 'Expo Router', 'Reanimated 4', 'MapLibre', 'WatermelonDB', 'EAS'],
    },
    {
      id: 'web',
      tech: ['Vue 3', 'TypeScript', 'Vite', 'Pinia', 'Vuetify 3', 'Tiptap', 'Leaflet', 'MapLibre GL', 'vue-i18n'],
    },
    {
      id: 'backend',
      tech: ['Python (FastAPI)', 'PHP 8.4 (Symfony 8)', 'gRPC + Protobuf', 'Celery', 'OpenTripPlanner 2.5', 'LOOM (C++)', 'OR-Tools'],
    },
    {
      id: 'data',
      tech: ['PostgreSQL 16 + PostGIS', 'MySQL 8', 'Redis 7', 'GTFS / GTFS-Realtime', 'MQTT (LoRaWAN)'],
    },
    {
      id: 'infra',
      tech: ['Docker', 'Helm', 'Google Kubernetes Engine', 'Google Cloud Storage', 'GitHub Actions', 'Cloudflare', 'Prometheus'],
    },
    {
      id: 'services',
      tech: ['Google Maps Platform', 'Expo Push', 'DeepL', 'Firebase Analytics', 'Sentry', 'PostHog'],
    },
  ],
}
