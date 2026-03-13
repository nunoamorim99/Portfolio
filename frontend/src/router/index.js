import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/HomePage.vue'),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/pages/ProjectsPage.vue'),
  },
  {
    path: '/courses',
    name: 'Courses',
    component: () => import('@/pages/CoursesPage.vue'),
  },
  {
    path: '/personal',
    name: 'Personal',
    component: () => import('@/pages/PersonalPage.vue'),
  },
  {
    path: '/personal/travel',
    name: 'Travel',
    component: () => import('@/pages/TravelPage.vue'),
  },
  {
    path: '/personal/sports',
    name: 'Sports',
    component: () => import('@/pages/SportsPage.vue'),
  },
  {
    path: '/personal/photography',
    name: 'Photography',
    component: () => import('@/pages/PhotographyPage.vue'),
  },
  {
    path: '/personal/hobbies',
    name: 'Hobbies',
    component: () => import('@/pages/HobbiesPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
