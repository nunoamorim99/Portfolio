import mBanner from '@/assets/projects/movize/m-banner.png'
import mLogo from '@/assets/projects/movize/m-logo.png'
import m1 from '@/assets/projects/movize/m-1.JPG'
import m2 from '@/assets/projects/movize/m-2.jpeg'
import m3 from '@/assets/projects/movize/m-3.jpeg'
import mcEvents1 from '@/assets/projects/movizeConnect/eventsModule/mc-events-1.png'
import mcEvents2 from '@/assets/projects/movizeConnect/eventsModule/mc-events-2.png'
import mcEvents3 from '@/assets/projects/movizeConnect/eventsModule/mc-events-3.jpeg'
import mcEvents4 from '@/assets/projects/movizeConnect/eventsModule/mc-events-4.jpeg'
import mcEvents5 from '@/assets/projects/movizeConnect/eventsModule/mc-events-5.jpeg'
import mcEvents6 from '@/assets/projects/movizeConnect/eventsModule/mc-events-6.jpeg'
import wa1 from '@/assets/projects/movizeWebApp/wa-1.png'
import wa2 from '@/assets/projects/movizeWebApp/wa-2.png'
import wa3 from '@/assets/projects/movizeWebApp/wa-3.png'

export const projects = [
  {
    id: 'mobile-app',
    platforms: ['android', 'ios'],
    images: [
      mLogo,
      m2,
      m3,
      mcEvents4,
    ],
  },
  {
    id: 'web-app',
    platforms: ['desktop', 'tablet', 'phone'],
    url: 'https://movize.pt/',
    images: [
      wa1,
      wa2,
      wa3,
    ],
  },
  {
    id: 'web-platform',
    platforms: ['desktop'],
    images: [
      mBanner,
    ],
  },
  {
    id: 'events-module',
    platforms: ['desktop'],
    images: [
      mcEvents5,
      mcEvents6,
      mcEvents1,
      mcEvents3,
    ],
  },
  {
    id: 'gtfs-management-module',
    platforms: ['desktop'],
    images: [
      mBanner,
    ],
  },
  {
    id: 'furniture-sensors-module',
    platforms: ['desktop'],
    images: [
      mBanner,
    ],
  },
]
