<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div class="section-container py-20 md:py-32">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="animate-fade-in">
            <p class="text-primary-600 font-semibold mb-3 tracking-wide uppercase text-sm">Welcome to my portfolio</p>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-dark-900 leading-tight">
              Hi, I'm <span class="text-primary-600">Nuno Amorim</span>
            </h1>
            <p class="mt-4 text-xl md:text-2xl text-dark-600 font-light">Product Manager</p>
            <p class="mt-6 text-dark-600 leading-relaxed max-w-lg">
              Passionate about building digital products that make a real impact. I combine strategic thinking with a deep understanding
              of technology to drive product success from ideation to delivery.
            </p>
            <div class="mt-8 flex flex-wrap gap-4">
              <router-link to="/projects" class="btn-primary">
                View My Work
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </router-link>
              <a href="#about" class="btn-secondary">Learn More</a>
            </div>
          </div>

          <div class="flex justify-center animate-slide-up">
            <div class="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div class="absolute inset-0 bg-primary-200 rounded-3xl rotate-6" />
              <img
                src="https://picsum.photos/seed/profile/400/400"
                alt="Nuno Amorim professional photo"
                class="relative w-full h-full object-cover rounded-3xl shadow-xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Decorative blobs -->
      <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50" />
      <div class="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-40" />
    </section>

    <!-- About Me -->
    <section id="about" class="section-container py-20">
      <SectionHeading title="About Me" subtitle="A little bit about who I am and what drives me" />
      <div class="grid md:grid-cols-2 gap-12">
        <div class="space-y-4 text-dark-600 leading-relaxed">
          <p>
            I'm a Product Manager with a strong foundation in engineering and a passion for digital transformation.
            I thrive at the intersection of business, technology, and user experience — translating complex problems
            into elegant product solutions.
          </p>
          <p>
            With a background in Engineering and Management of Information Systems from Universidade do Minho,
            I bring a data-driven and user-centric approach to everything I build. I believe great products come
            from understanding people deeply and iterating relentlessly.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="card text-center">
            <div class="text-3xl font-display font-bold text-primary-600">3+</div>
            <div class="text-sm text-dark-500 mt-1">Years Experience</div>
          </div>
          <div class="card text-center">
            <div class="text-3xl font-display font-bold text-primary-600">10+</div>
            <div class="text-sm text-dark-500 mt-1">Projects Delivered</div>
          </div>
          <div class="card text-center">
            <div class="text-3xl font-display font-bold text-primary-600">5+</div>
            <div class="text-sm text-dark-500 mt-1">Certifications</div>
          </div>
          <div class="card text-center">
            <div class="text-3xl font-display font-bold text-primary-600">MSc</div>
            <div class="text-sm text-dark-500 mt-1">Engineering & IS</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Interests -->
    <section class="bg-dark-50 py-20">
      <div class="section-container">
        <SectionHeading title="Professional Interests" subtitle="Areas I'm passionate about and actively explore" />
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="interest in interests" :key="interest.title" class="card group">
            <div class="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
              <span class="text-xl" v-html="interest.icon" />
            </div>
            <h3 class="font-display font-semibold text-lg text-dark-900 mb-2">{{ interest.title }}</h3>
            <p class="text-dark-500 text-sm leading-relaxed">{{ interest.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section class="section-container py-20">
      <SectionHeading title="Education" subtitle="Academic background" />
      <div class="card max-w-2xl">
        <div class="flex items-start gap-4">
          <div class="w-14 h-14 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
          </div>
          <div>
            <h3 class="font-display font-semibold text-lg text-dark-900">
              MSc in Engineering and Management of Information Systems
            </h3>
            <p class="text-primary-600 font-medium mt-1">Universidade do Minho</p>
            <p class="text-dark-500 text-sm mt-2">
              Comprehensive program covering systems engineering, data management, project management,
              and digital transformation — building a strong bridge between technology and business.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section class="bg-dark-50 py-20">
      <div class="section-container">
        <SectionHeading title="Experience" subtitle="My professional journey so far" />

        <div class="space-y-10">
          <!-- Foco Criativo (grouped) -->
          <div class="card !p-0 overflow-hidden">
            <!-- Company header -->
            <div class="flex items-center gap-4 px-6 pt-6 pb-4 border-b border-dark-100">
              <div class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span class="text-red-600 font-bold text-sm">FC</span>
              </div>
              <div>
                <h3 class="font-display font-bold text-lg text-dark-900">Foco Criativo</h3>
                <p class="text-sm text-dark-500">2 yrs 3 mos &middot; Hybrid &middot; Povoa de Lanhoso, Braga, Portugal</p>
              </div>
            </div>

            <!-- Roles timeline -->
            <div class="px-6 py-2">
              <div v-for="(role, i) in focoCriativoRoles" :key="role.title" class="relative pl-8 py-5" :class="{ 'border-b border-dark-100': i < focoCriativoRoles.length - 1 }">
                <!-- Timeline dot + line -->
                <div class="absolute left-0 top-0 bottom-0 flex flex-col items-center">
                  <div class="mt-6 w-3 h-3 rounded-full border-2 flex-shrink-0" :class="role.current ? 'bg-primary-600 border-primary-600' : 'bg-white border-dark-400'" />
                  <div v-if="i < focoCriativoRoles.length - 1" class="flex-1 w-0.5 bg-dark-200 mt-1" />
                </div>

                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h4 class="font-semibold text-dark-900">{{ role.title }}</h4>
                    <p class="text-sm text-dark-500">{{ role.type }}</p>
                  </div>
                  <span class="text-sm text-dark-400 whitespace-nowrap">{{ role.date }}</span>
                </div>

                <p v-if="role.description" class="text-sm text-dark-600 mt-2 leading-relaxed">{{ role.description }}</p>

                <div v-if="role.skills.length" class="flex flex-wrap gap-1.5 mt-3">
                  <span v-for="skill in role.skills" :key="skill" class="px-2 py-0.5 text-xs rounded-md bg-primary-50 text-primary-700 font-medium">{{ skill }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Other experiences -->
          <div v-for="job in otherExperience" :key="job.title + job.company" class="card">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" :class="job.iconBg">
                <span class="font-bold text-sm" :class="job.iconColor">{{ job.iconText }}</span>
              </div>
              <div class="flex-1">
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h4 class="font-semibold text-dark-900">{{ job.title }}</h4>
                    <p class="text-sm text-dark-500">{{ job.company }} &middot; {{ job.type }}</p>
                  </div>
                  <span class="text-sm text-dark-400 whitespace-nowrap">{{ job.date }}</span>
                </div>
                <p class="text-sm text-dark-500 mt-1">{{ job.location }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CV Download -->
    <section class="bg-gradient-to-r from-primary-600 to-primary-700 py-16">
      <div class="section-container text-center">
        <h2 class="text-3xl font-display font-bold text-white mb-3">Curriculum Vitae</h2>
        <p class="text-primary-100 mb-8 max-w-lg mx-auto">
          Download my full CV to learn more about my professional experience, education, and achievements.
        </p>
        <a
          href="/cv.pdf"
          download
          class="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
          Download CV (PDF)
        </a>
      </div>
    </section>

    <!-- Skills -->
    <section class="section-container py-20">
      <SectionHeading title="Skills" subtitle="Core competencies and tools I work with" />

      <!-- Top 5 Skills -->
      <div class="mb-14">
        <h3 class="font-display font-semibold text-xl text-dark-800 mb-6">Core Skills</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="skill in skills.top"
            :key="skill.name"
            class="card flex items-center justify-between"
          >
            <span class="font-medium text-dark-800">{{ skill.name }}</span>
            <SkillDots :name="skill.name" :rating="skill.rating" />
          </div>
        </div>
      </div>

      <!-- Other Skills -->
      <div class="grid md:grid-cols-3 gap-8 mb-14">
        <div>
          <h3 class="font-display font-semibold text-lg text-dark-800 mb-4">Technical Skills</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="s in skills.technical" :key="s.name" class="badge">{{ s.name }}</span>
          </div>
        </div>
        <div>
          <h3 class="font-display font-semibold text-lg text-dark-800 mb-4">Soft Skills</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="s in skills.soft" :key="s.name" class="badge">{{ s.name }}</span>
          </div>
        </div>
        <div>
          <h3 class="font-display font-semibold text-lg text-dark-800 mb-4">Tools</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="s in skills.tools" :key="s.name" class="badge">{{ s.name }}</span>
          </div>
        </div>
      </div>

      <!-- Languages -->
      <div>
        <h3 class="font-display font-semibold text-xl text-dark-800 mb-6">Languages</h3>
        <div class="grid sm:grid-cols-2 gap-6 max-w-lg">
          <LanguageBar
            v-for="lang in skills.languages"
            :key="lang.name"
            :name="lang.name"
            :level="lang.level"
            :rating="lang.rating"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import SkillDots from '@/components/ui/SkillDots.vue'
import LanguageBar from '@/components/ui/LanguageBar.vue'

const store = usePortfolioStore()
const skills = computed(() => store.skills)

const focoCriativoRoles = [
  {
    title: 'Product Manager',
    type: 'Full-time',
    date: 'Nov 2025 – Present',
    current: true,
    description: '',
    skills: ['Product Management', 'Product Strategy', 'Wireframing', 'Jira', 'UX Design', 'Generative AI', 'AI', 'Backlog Management', 'Prototyping', 'UI Design', 'Design Thinking', 'Git', 'Product Road Mapping', 'Cross-functional Collaborations', 'User Stories', 'Stakeholder Management', 'Scrum', 'User Research'],
  },
  {
    title: 'Product Owner',
    type: 'Full-time',
    date: 'Nov 2024 – Nov 2025',
    current: false,
    description: '',
    skills: ['Product Strategy', 'Wireframing', 'Jira', 'UX Design', 'Generative AI', 'AI', 'Backlog Management', 'Prototyping', 'UI Design', 'Design Thinking', 'Git', 'Product Road Mapping', 'Cross-functional Collaborations', 'User Stories', 'Product Ownership', 'Stakeholder Management', 'Scrum', 'User Research'],
  },
  {
    title: 'Software Engineer',
    type: 'Full-time',
    date: 'Jun 2024 – Nov 2024',
    current: false,
    description: '',
    skills: ['CSS', 'UX Design', 'UI Design', 'Front-End Development', 'HTML5', 'React Native', 'JavaScript', 'Scrum'],
  },
  {
    title: 'Intern',
    type: 'Internship',
    date: 'Jan 2024 – Jun 2024',
    current: false,
    description: 'The main objective of this internship was to develop my dissertation for my Master\'s degree in Information Systems Engineering and Management. My dissertation, entitled Design and optimization of logistics and production processes, consisted of a survey of the logistics and production processes of the company Foco Criativo and an analysis of them. The aim was to develop an optimization proposal for the respective processes in order to help the company become more efficient and optimize its processes.',
    skills: [],
  },
]

const otherExperience = [
  {
    title: 'Nadador Salvador',
    company: 'Camara Municipal da Povoa de Lanhoso',
    type: 'Seasonal',
    date: 'Jun 2023 – Sep 2023',
    location: 'Povoa de Lanhoso, Braga, Portugal · On-site',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    iconText: 'CM',
  },
  {
    title: 'Nadador Salvador',
    company: 'Diver Lanhoso',
    type: 'Seasonal',
    date: 'Jul 2022 – Sep 2022',
    location: 'Povoa de Lanhoso, Braga, Portugal · On-site',
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
    iconText: 'DL',
  },
  {
    title: 'Assistente de Caixa',
    company: 'Zara',
    type: 'Contract',
    date: 'Jun 2022 – Jul 2022',
    location: 'Braga, Portugal · On-site',
    iconBg: 'bg-dark-100',
    iconColor: 'text-dark-800',
    iconText: 'Z',
  },
]

const interests = [
  {
    title: 'Product Strategy',
    description: 'Defining product vision, setting roadmaps, and aligning stakeholders around a shared direction to deliver maximum user and business value.',
    icon: '&#9881;',
  },
  {
    title: 'Digital Transformation',
    description: 'Leveraging technology to reimagine business processes, improve efficiency, and create new digital-first experiences for users and organizations.',
    icon: '&#9889;',
  },
  {
    title: 'Agile Methodologies',
    description: 'Leading cross-functional teams with Scrum and Kanban, fostering a culture of continuous improvement and fast iteration cycles.',
    icon: '&#9851;',
  },
  {
    title: 'Data-Driven Decisions',
    description: 'Using analytics, A/B testing, and user metrics to inform product decisions and validate hypotheses before scaling solutions.',
    icon: '&#128202;',
  },
  {
    title: 'User-Centric Design',
    description: 'Putting users at the center of every decision through research, interviews, usability testing, and persona-driven development.',
    icon: '&#128100;',
  },
  {
    title: 'Innovation & Emerging Tech',
    description: 'Exploring AI, IoT, and emerging platforms to identify opportunities for product innovation and competitive advantage.',
    icon: '&#128161;',
  },
]

onMounted(() => {
  store.fetchSkills()
})
</script>
