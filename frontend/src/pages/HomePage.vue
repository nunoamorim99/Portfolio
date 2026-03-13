<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div class="section-container py-20 md:py-32">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="animate-fade-in">
            <p class="text-primary-600 font-semibold mb-3 tracking-wide uppercase text-sm">{{ t('hero.welcome') }}</p>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-dark-900 leading-tight">
              {{ t('hero.greeting') }} <span class="text-primary-600">Nuno Amorim</span>
            </h1>
            <p class="mt-4 text-xl md:text-2xl text-dark-600 font-light">{{ t('hero.role') }}</p>
            <p class="mt-6 text-dark-600 leading-relaxed max-w-lg">{{ t('hero.bio') }}</p>
            <div class="mt-8 flex flex-wrap gap-4">
              <router-link to="/projects" class="btn-primary">
                {{ t('hero.cta') }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </router-link>
              <a href="#about" class="btn-secondary">{{ t('hero.learnMore') }}</a>
            </div>
          </div>

          <div class="flex justify-center animate-slide-up">
            <div class="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div class="absolute inset-0 bg-primary-200 rounded-3xl rotate-6" />
              <img
                src="https://picsum.photos/seed/profile/400/400"
                :alt="t('hero.photoAlt')"
                class="relative w-full h-full object-cover rounded-3xl shadow-xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50" />
      <div class="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-40" />
    </section>

    <!-- About Me -->
    <section id="about" class="section-container py-20">
      <SectionHeading :title="t('about.title')" :subtitle="t('about.subtitle')" />
      <div class="grid md:grid-cols-2 gap-12">
        <div class="space-y-4 text-dark-600 leading-relaxed">
          <p>{{ t('about.p1') }}</p>
          <p>{{ t('about.p2') }}</p>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="card text-center">
            <div class="text-3xl font-display font-bold text-primary-600">3+</div>
            <div class="text-sm text-dark-500 mt-1">{{ t('about.yearsExp') }}</div>
          </div>
          <div class="card text-center">
            <div class="text-3xl font-display font-bold text-primary-600">10+</div>
            <div class="text-sm text-dark-500 mt-1">{{ t('about.projectsDone') }}</div>
          </div>
          <div class="card text-center">
            <div class="text-3xl font-display font-bold text-primary-600">5+</div>
            <div class="text-sm text-dark-500 mt-1">{{ t('about.certifications') }}</div>
          </div>
          <div class="card text-center">
            <div class="text-3xl font-display font-bold text-primary-600">MSc</div>
            <div class="text-sm text-dark-500 mt-1">{{ t('about.engineeringIS') }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Interests -->
    <section class="bg-dark-50 py-20">
      <div class="section-container">
        <SectionHeading :title="t('interests.title')" :subtitle="t('interests.subtitle')" />
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(interest, idx) in interestItems" :key="idx" class="card group">
            <div class="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
              <span class="text-xl" v-html="interestIcons[idx]" />
            </div>
            <h3 class="font-display font-semibold text-lg text-dark-900 mb-2">{{ interest.title }}</h3>
            <p class="text-dark-500 text-sm leading-relaxed">{{ interest.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section class="section-container py-20">
      <SectionHeading :title="t('education.title')" :subtitle="t('education.subtitle')" />
      <div class="card max-w-2xl">
        <div class="flex items-start gap-4">
          <div class="w-14 h-14 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
          </div>
          <div>
            <h3 class="font-display font-semibold text-lg text-dark-900">{{ t('education.degree') }}</h3>
            <p class="text-primary-600 font-medium mt-1">{{ t('education.university') }}</p>
            <p class="text-dark-500 text-sm mt-2">{{ t('education.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Work Experience -->
    <section class="section-container py-20">
      <SectionHeading :title="t('experience.title')" :subtitle="t('experience.subtitle')" />

      <div class="relative ml-4 md:ml-6">
        <div class="absolute left-0 top-2 bottom-0 w-0.5 bg-primary-200" />

        <div v-for="(job, i) in allExperience" :key="i" class="relative pl-10 pb-14 last:pb-0">
          <div class="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full -translate-x-[6.5px] border-[3px] border-white shadow-sm"
            :class="job.current ? 'bg-primary-600 ring-4 ring-primary-100' : 'bg-primary-500'"
          />

          <h3 class="font-display font-bold text-xl md:text-2xl text-primary-600 leading-tight">{{ job.company }}</h3>
          <p class="text-dark-500 text-sm mt-0.5">{{ job.location }}</p>

          <div class="mt-4 space-y-6">
            <div v-for="(role, j) in job.roles" :key="j">
              <h4 class="font-semibold text-lg text-dark-900">{{ role.title }}</h4>
              <p class="text-primary-500 font-medium text-sm mt-0.5">{{ role.date }}</p>

              <ul v-if="role.bullets.length" class="mt-3 space-y-1.5">
                <li v-for="(bullet, k) in role.bullets" :key="k" class="text-dark-600 text-sm leading-relaxed flex gap-2">
                  <span class="text-dark-400 mt-1 flex-shrink-0">&bull;</span>
                  <span>{{ bullet }}</span>
                </li>
              </ul>

              <div v-if="role.skills.length" class="flex flex-wrap gap-1.5 mt-3">
                <span v-for="skill in role.skills" :key="skill" class="px-2.5 py-0.5 text-xs rounded-md bg-primary-50 text-primary-700 font-medium">{{ skill }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CV Download -->
    <section class="bg-gradient-to-r from-primary-600 to-primary-700 py-16">
      <div class="section-container text-center">
        <h2 class="text-3xl font-display font-bold text-white mb-3">{{ t('cv.title') }}</h2>
        <p class="text-primary-100 mb-8 max-w-lg mx-auto">{{ t('cv.description') }}</p>
        <a
          href="/cv.pdf"
          download
          class="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
          {{ t('cv.download') }}
        </a>
      </div>
    </section>

    <!-- Skills -->
    <section class="section-container py-20">
      <SectionHeading :title="t('skills.title')" :subtitle="t('skills.subtitle')" />

      <div class="mb-14">
        <h3 class="font-display font-semibold text-xl text-dark-800 mb-6">{{ t('skills.core') }}</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="skill in storeSkills.top" :key="skill.name" class="card flex items-center justify-between">
            <span class="font-medium text-dark-800">{{ skill.name }}</span>
            <SkillDots :name="skill.name" :rating="skill.rating" />
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-8 mb-14">
        <div>
          <h3 class="font-display font-semibold text-lg text-dark-800 mb-4">{{ t('skills.technical') }}</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="s in storeSkills.technical" :key="s.name" class="badge">{{ s.name }}</span>
          </div>
        </div>
        <div>
          <h3 class="font-display font-semibold text-lg text-dark-800 mb-4">{{ t('skills.soft') }}</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="s in storeSkills.soft" :key="s.name" class="badge">{{ s.name }}</span>
          </div>
        </div>
        <div>
          <h3 class="font-display font-semibold text-lg text-dark-800 mb-4">{{ t('skills.tools') }}</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="s in storeSkills.tools" :key="s.name" class="badge">{{ s.name }}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 class="font-display font-semibold text-xl text-dark-800 mb-6">{{ t('skills.languages') }}</h3>
        <div class="grid sm:grid-cols-2 gap-6 max-w-lg">
          <LanguageBar
            v-for="lang in storeSkills.languages"
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
import { useI18n } from '@/stores/i18n'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import SkillDots from '@/components/ui/SkillDots.vue'
import LanguageBar from '@/components/ui/LanguageBar.vue'

const store = usePortfolioStore()
const i18n = useI18n()
const t = (key) => i18n.t(key)

const storeSkills = computed(() => store.skills)

const interestIcons = ['&#9881;', '&#9889;', '&#9851;', '&#128202;', '&#128100;', '&#128161;']
const interestItems = computed(() => i18n.t('interests.items'))

const allExperience = computed(() => {
  const exp = i18n.t('experience')
  return [
    {
      company: 'Foco Criativo',
      location: 'Povoa de Lanhoso, Braga, Portugal',
      current: true,
      roles: [
        { title: exp.roles.productManager, date: `November 2025 - ${exp.present}`, bullets: [], skills: ['Product Management', 'Product Strategy', 'Wireframing', 'Jira', 'UX Design', 'Generative AI', 'Backlog Management', 'Prototyping', 'UI Design', 'Design Thinking', 'Product Road Mapping', 'Stakeholder Management', 'Scrum', 'User Research'] },
        { title: exp.roles.productOwner, date: 'November 2024 - November 2025', bullets: [], skills: ['Product Strategy', 'Wireframing', 'Jira', 'UX Design', 'Generative AI', 'Backlog Management', 'Prototyping', 'UI Design', 'Design Thinking', 'Product Road Mapping', 'User Stories', 'Product Ownership', 'Stakeholder Management', 'Scrum', 'User Research'] },
        { title: exp.roles.softwareEngineer, date: 'June 2024 - November 2024', bullets: [], skills: ['CSS', 'UX Design', 'UI Design', 'Front-End Development', 'HTML5', 'React Native', 'JavaScript', 'Scrum'] },
        { title: exp.roles.intern, date: 'January 2024 - June 2024', bullets: exp.internBullets, skills: [] },
      ],
    },
    { company: 'Camara Municipal da Povoa de Lanhoso', location: 'Povoa de Lanhoso, Braga, Portugal', current: false, roles: [{ title: exp.roles.lifeguard, date: 'June 2023 - September 2023', bullets: [], skills: [] }] },
    { company: 'Diver Lanhoso', location: 'Povoa de Lanhoso, Braga, Portugal', current: false, roles: [{ title: exp.roles.lifeguard, date: 'July 2022 - September 2022', bullets: [], skills: [] }] },
    { company: 'Zara', location: 'Braga, Portugal', current: false, roles: [{ title: exp.roles.cashier, date: 'June 2022 - July 2022', bullets: [], skills: [] }] },
  ]
})

onMounted(() => { store.fetchSkills() })
</script>
