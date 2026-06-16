import mBanner from '@/assets/projects/movize/m-banner.png'
import generalImg from '@/assets/projects/general.png'
import gtfsImg from '@/assets/projects/movizeConnect/modules/gtfs.png'
import networkMapImg from '@/assets/projects/movizeConnect/modules/networkmap.png'
import newsImg from '@/assets/projects/movizeConnect/modules/news.png'
import eventsImg from '@/assets/projects/movizeConnect/modules/events.jpeg'
import sensorsImg from '@/assets/projects/movizeConnect/modules/streetfurniture_sensors.png'
import driversImg from '@/assets/projects/movizeConnect/modules/drivers.png'

// Structure only — all copy lives in i18n under `caseStudy.movize`.
export const movizeCase = {
  url: 'https://movize.pt/',
  heroImage: mBanner,
  v1Image: generalImg,
  modules: [
    { id: 'gtfs', image: gtfsImg },
    { id: 'networkMap', image: networkMapImg },
    { id: 'news', image: newsImg },
    { id: 'events', image: eventsImg },
    { id: 'sensors', image: sensorsImg },
    { id: 'drivers', image: driversImg },
  ],
  decisions: ['feedback', 'ecosystem', 'events', 'portal'],
}
