import { defineStore } from 'pinia'
import { ref } from 'vue'

const API_BASE = '/api'

async function fetchJson(url) {
  const res = await fetch(`${API_BASE}${url}`)
  if (!res.ok) throw new Error(`Failed to fetch ${url}`)
  return res.json()
}

export const usePortfolioStore = defineStore('portfolio', () => {
  const projects = ref([])
  const courses = ref([])
  const skills = ref({ top: [], technical: [], soft: [], tools: [], languages: [] })
  const travelCities = ref([])
  const photos = ref({})
  const loading = ref(false)

  async function fetchProjects() {
    if (projects.value.length) return
    loading.value = true
    try {
      projects.value = await fetchJson('/projects')
    } catch { projects.value = getFallbackProjects() }
    finally { loading.value = false }
  }

  async function fetchCourses() {
    if (courses.value.length) return
    loading.value = true
    try {
      courses.value = await fetchJson('/courses')
    } catch { courses.value = getFallbackCourses() }
    finally { loading.value = false }
  }

  async function fetchSkills() {
    if (skills.value.top.length) return
    loading.value = true
    try {
      skills.value = await fetchJson('/skills')
    } catch { skills.value = getFallbackSkills() }
    finally { loading.value = false }
  }

  async function fetchTravelCities() {
    if (travelCities.value.length) return
    loading.value = true
    try {
      travelCities.value = await fetchJson('/travel/cities')
    } catch { travelCities.value = getFallbackCities() }
    finally { loading.value = false }
  }

  async function fetchPhotos(hobby) {
    if (photos.value[hobby]?.length) return
    loading.value = true
    try {
      const data = await fetchJson(`/photos/${hobby}`)
      photos.value[hobby] = data
    } catch { photos.value[hobby] = getFallbackPhotos(hobby) }
    finally { loading.value = false }
  }

  return { projects, courses, skills, travelCities, photos, loading, fetchProjects, fetchCourses, fetchSkills, fetchTravelCities, fetchPhotos }
})

// Fallback data so the frontend works without the backend
function getFallbackProjects() {
  return [
    {
      id: 1, title: 'HealthTrack Mobile App', role: 'Product Manager',
      description: 'Led the end-to-end product development of a health tracking mobile application. Defined the product roadmap, conducted user research with 200+ participants, and coordinated a cross-functional team of 8 engineers and 2 designers. The app achieved 15,000 downloads in the first month and a 4.7-star rating on the App Store.',
      technologies: ['React Native', 'Node.js', 'Firebase', 'Figma', 'Jira', 'Mixpanel'],
      images: ['https://picsum.photos/seed/proj1a/800/500', 'https://picsum.photos/seed/proj1b/800/500', 'https://picsum.photos/seed/proj1c/800/500'],
    },
    {
      id: 2, title: 'E-Commerce Platform Redesign', role: 'Associate Product Manager',
      description: 'Spearheaded the redesign of a B2C e-commerce platform serving 50,000+ monthly active users. Conducted competitive analysis, defined user stories, and prioritized features using the RICE framework. The redesign resulted in a 32% increase in conversion rate and a 25% reduction in cart abandonment.',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'AWS', 'Hotjar', 'Google Analytics'],
      images: ['https://picsum.photos/seed/proj2a/800/500', 'https://picsum.photos/seed/proj2b/800/500', 'https://picsum.photos/seed/proj2c/800/500', 'https://picsum.photos/seed/proj2d/800/500'],
    },
  ]
}

function getFallbackCourses() {
  return [
    { id: 1, title: 'Google Project Management Professional Certificate', skills: ['Project Planning', 'Agile Management', 'Risk Management', 'Stakeholder Communication'], certificateImg: 'https://picsum.photos/seed/cert1/600/400', externalLink: 'https://www.coursera.org/professional-certificates/google-project-management' },
    { id: 2, title: 'Product Management Fundamentals — Product School', skills: ['Product Strategy', 'User Research', 'Roadmapping', 'Metrics & KPIs'], certificateImg: 'https://picsum.photos/seed/cert2/600/400', externalLink: 'https://productschool.com/' },
    { id: 3, title: 'SQL for Data Analysis — Udemy', skills: ['SQL', 'Data Analysis', 'Database Design', 'Reporting'], certificateImg: 'https://picsum.photos/seed/cert3/600/400', externalLink: 'https://www.udemy.com/' },
    { id: 4, title: 'Advanced Scrum Master Certification (A-CSM)', skills: ['Scrum Framework', 'Team Facilitation', 'Continuous Improvement', 'Servant Leadership'], certificateImg: 'https://picsum.photos/seed/cert4/600/400', externalLink: 'https://www.scrumalliance.org/' },
  ]
}

function getFallbackSkills() {
  return {
    top: [
      { id: 1, name: 'Product Strategy', rating: 5 },
      { id: 2, name: 'Agile / Scrum', rating: 5 },
      { id: 3, name: 'Data Analysis', rating: 4 },
      { id: 4, name: 'Stakeholder Management', rating: 4 },
      { id: 5, name: 'User Research', rating: 4 },
    ],
    technical: [
      { name: 'SQL' }, { name: 'Python' }, { name: 'HTML / CSS' }, { name: 'JavaScript' }, { name: 'REST APIs' }, { name: 'Git' },
    ],
    soft: [
      { name: 'Leadership' }, { name: 'Communication' }, { name: 'Problem Solving' }, { name: 'Critical Thinking' }, { name: 'Teamwork' },
    ],
    tools: [
      { name: 'Jira' }, { name: 'Confluence' }, { name: 'Figma' }, { name: 'Notion' }, { name: 'Miro' }, { name: 'Google Analytics' }, { name: 'Mixpanel' },
    ],
    languages: [
      { name: 'Portuguese', rating: 5, level: 'Native' },
      { name: 'English', rating: 4, level: 'Fluent' },
    ],
  }
}

function getFallbackCities() {
  return [
    { id: 1, name: 'Venice', country: 'Italy', lat: 45.4408, lng: 12.3155, photos: ['https://picsum.photos/seed/venice1/800/600', 'https://picsum.photos/seed/venice2/800/600', 'https://picsum.photos/seed/venice3/800/600'], visitDate: '2024' },
    { id: 2, name: 'Barcelona', country: 'Spain', lat: 41.3874, lng: 2.1686, photos: ['https://picsum.photos/seed/bcn1/800/600', 'https://picsum.photos/seed/bcn2/800/600'], visitDate: '2023' },
    { id: 3, name: 'Paris', country: 'France', lat: 48.8566, lng: 2.3522, photos: ['https://picsum.photos/seed/paris1/800/600', 'https://picsum.photos/seed/paris2/800/600'], visitDate: '2023' },
  ]
}

function getFallbackPhotos(hobby) {
  const data = {
    photography: [
      { url: 'https://picsum.photos/seed/photo1/800/600', caption: 'Golden hour landscape' },
      { url: 'https://picsum.photos/seed/photo2/600/800', caption: 'Urban architecture' },
      { url: 'https://picsum.photos/seed/photo3/800/600', caption: 'Street photography' },
      { url: 'https://picsum.photos/seed/photo4/600/800', caption: 'Nature close-up' },
      { url: 'https://picsum.photos/seed/photo5/800/600', caption: 'Coastal sunset' },
      { url: 'https://picsum.photos/seed/photo6/800/600', caption: 'Mountain trail' },
      { url: 'https://picsum.photos/seed/photo7/600/800', caption: 'City at night' },
      { url: 'https://picsum.photos/seed/photo8/800/600', caption: 'Autumn colors' },
    ],
    sports: [
      { url: 'https://picsum.photos/seed/sport1/800/600', caption: 'Morning run' },
      { url: 'https://picsum.photos/seed/sport2/800/600', caption: 'Cycling route' },
      { url: 'https://picsum.photos/seed/sport3/800/600', caption: 'Race day' },
      { url: 'https://picsum.photos/seed/sport4/800/600', caption: 'Trail running' },
    ],
  }
  return data[hobby] || []
}
