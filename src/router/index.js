import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('@/pages/HomePage.vue')
const ProjectsPage = () => import('@/pages/ProjectsPage.vue')
const CaseStudyMovize = () => import('@/pages/CaseStudyMovize.vue')
const CaseStudyAstroHop = () => import('@/pages/CaseStudyAstroHop.vue')
const CaseStudyNibble = () => import('@/pages/CaseStudyNibble.vue')
const CaseStudySkills = () => import('@/pages/CaseStudySkills.vue')
const CoursesPage = () => import('@/pages/CoursesPage.vue')
const PersonalPage = () => import('@/pages/PersonalPage.vue')
const TravelPage = () => import('@/pages/TravelPage.vue')
const SportsPage = () => import('@/pages/SportsPage.vue')
const PhotographyPage = () => import('@/pages/PhotographyPage.vue')
const HobbiesPage = () => import('@/pages/HobbiesPage.vue')
const GammingPage = () => import('@/pages/GammingPage.vue')
const ReadingPage = () => import('@/pages/ReadingPage.vue')
const LegoPage = () => import('@/pages/LegoPage.vue')
const PuzzlePage = () => import('@/pages/PuzzlePage.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsPage,
  },
  {
    path: '/projects/movize',
    name: 'movize',
    component: CaseStudyMovize,
  },
  {
    path: '/projects/astro-hop',
    name: 'astro-hop',
    component: CaseStudyAstroHop,
  },
  {
    path: '/projects/nibble',
    name: 'nibble',
    component: CaseStudyNibble,
  },
  {
    path: '/projects/claude-skills',
    name: 'claude-skills',
    component: CaseStudySkills,
  },
  {
    path: '/courses',
    name: 'courses',
    component: CoursesPage,
  },
  {
    path: '/personal',
    name: 'personal',
    component: PersonalPage,
  },
  {
    path: '/personal/travel',
    name: 'travel',
    component: TravelPage,
  },
  {
    path: '/personal/sports',
    name: 'sports',
    component: SportsPage,
  },
  {
    path: '/personal/photography',
    name: 'photography',
    component: PhotographyPage,
  },
  {
    path: '/personal/hobbies',
    name: 'hobbies',
    component: HobbiesPage,
  },
  {
    path: '/personal/gamming',
    name: 'gamming',
    component: GammingPage,
  },
  {
    path: '/personal/reading',
    name: 'reading',
    component: ReadingPage,
  },
  {
    path: '/personal/lego',
    name: 'lego',
    component: LegoPage,
  },
  {
    path: '/personal/puzzle',
    name: 'puzzle',
    component: PuzzlePage,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
