<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { skillsCase } from '@/data/caseStudySkills'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '@/composables/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

const { t } = useI18n()
const rootRef = ref(null)
let ctx

onMounted(() => {
  if (prefersReducedMotion()) return

  ctx = gsap.context(() => {
    gsap.from('.cs-hero-title', { yPercent: 110, duration: 1, ease: 'power4.out' })
    gsap.from('.cs-hero-reveal', {
      y: 24,
      opacity: 0,
      stagger: 0.12,
      duration: 0.7,
      delay: 0.15,
      ease: 'power3.out',
    })

    rootRef.value.querySelectorAll('[data-reveal]').forEach((el) => {
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
      })
    })
  }, rootRef.value)
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <div ref="rootRef" class="bg-cream-50 dark:bg-charcoal-900">
    <!-- Back link -->
    <div class="section-container pt-28">
      <router-link to="/projects" class="back-link">
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        {{ t('caseStudy.back') }}
      </router-link>
    </div>

    <!-- ───────── HERO ───────── -->
    <header class="section-container pb-16 pt-2 lg:pb-24">
      <p class="cs-hero-reveal text-xs font-bold uppercase tracking-[0.3em] text-turquoise mb-6">
        {{ t('caseStudy.skills.label') }}
      </p>
      <div class="heading-mask">
        <h1 class="cs-hero-title font-serif text-display-xl text-charcoal dark:text-cream-100">
          {{ t('caseStudy.skills.title') }}
        </h1>
      </div>
      <p
        class="cs-hero-reveal mt-8 max-w-2xl font-serif text-xl lg:text-2xl leading-relaxed text-charcoal-600 dark:text-charcoal-200"
      >
        {{ t('caseStudy.skills.tagline') }}
      </p>
      <div class="cs-hero-reveal mt-8 flex flex-wrap items-center gap-3">
        <span class="badge">{{ t('caseStudy.skills.badgeContext') }}</span>
        <span class="badge border-turquoise/40 text-turquoise">{{ t('caseStudy.skills.badgeAi') }}</span>
      </div>
    </header>

    <!-- ───────── OVERVIEW ───────── -->
    <section class="section-container pb-20 lg:pb-28">
      <p
        data-reveal
        class="max-w-3xl font-serif text-lg lg:text-2xl leading-relaxed text-charcoal-600 dark:text-charcoal-200"
      >
        {{ t('caseStudy.skills.overview') }}
      </p>
    </section>

    <!-- ───────── 01 — WHY ───────── -->
    <section class="bg-cream-100 dark:bg-charcoal-800 py-20 lg:py-28">
      <div class="section-container grid gap-8 lg:grid-cols-12">
        <div class="lg:col-span-4">
          <p data-reveal class="text-xs font-bold uppercase tracking-[0.2em] text-turquoise">
            {{ t('caseStudy.skills.why.kicker') }}
          </p>
          <h2 data-reveal class="mt-4 font-serif text-display-sm text-charcoal dark:text-cream-100">
            {{ t('caseStudy.skills.why.title') }}
          </h2>
        </div>
        <div class="lg:col-span-8">
          <p data-reveal class="max-w-2xl text-lg leading-relaxed text-charcoal-500 dark:text-charcoal-300">
            {{ t('caseStudy.skills.why.body') }}
          </p>
        </div>
      </div>
    </section>

    <!-- ───────── ONE SECTION PER SKILL ───────── -->
    <section
      v-for="(skill, i) in skillsCase.skills"
      :id="skill.id"
      :key="skill.id"
      :class="i % 2 === 1 ? 'bg-cream-100 dark:bg-charcoal-800' : ''"
      class="py-20 lg:py-28"
    >
      <div class="section-container">
        <div class="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div :class="i % 2 === 1 ? 'lg:order-2' : ''" class="lg:col-span-7">
            <p data-reveal class="text-xs font-bold uppercase tracking-[0.2em] text-turquoise">
              0{{ i + 2 }} — {{ t(`caseStudy.skills.items.${skill.id}.name`) }}
            </p>
            <h2 data-reveal class="mt-4 font-serif text-display-sm text-charcoal dark:text-cream-100">
              {{ t(`caseStudy.skills.items.${skill.id}.tagline`) }}
            </h2>
            <div data-reveal class="accent-line mt-6" />
            <p data-reveal class="mt-6 text-lg leading-relaxed text-charcoal-500 dark:text-charcoal-300">
              {{ t(`caseStudy.skills.items.${skill.id}.body`) }}
            </p>
            <ul class="mt-8 space-y-4">
              <li
                v-for="h in skill.highlights"
                :key="h"
                data-reveal
                class="flex items-start gap-3 text-charcoal-500 dark:text-charcoal-300"
              >
                <span class="mt-1.5 h-2 w-2 shrink-0 bg-turquoise" />
                <span class="leading-relaxed">
                  {{ t(`caseStudy.skills.items.${skill.id}.highlights.${h}`) }}
                </span>
              </li>
            </ul>
            <div data-reveal class="mt-8">
              <p class="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-charcoal-300 dark:text-charcoal-400">
                {{ t('projects.builtWith') }}
              </p>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="tech in skill.tech" :key="tech" class="badge text-[10px]">{{ tech }}</span>
              </div>
            </div>
            <a
              data-reveal
              :href="skill.repoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-turquoise transition-colors hover:text-turquoise-700"
            >
              {{ t('projects.viewSource') }}
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
          <div :class="i % 2 === 1 ? 'lg:order-1' : ''" data-reveal class="lg:col-span-5">
            <div
              v-if="skill.image"
              class="overflow-hidden border border-charcoal-100 dark:border-charcoal-700"
            >
              <img
                :src="skill.image"
                :alt="t(`caseStudy.skills.items.${skill.id}.name`)"
                class="w-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              v-else
              class="flex aspect-[4/3] items-center justify-center border border-dashed border-charcoal-200 dark:border-charcoal-600"
            >
              <span class="text-xs font-bold uppercase tracking-[0.2em] text-charcoal-300 dark:text-charcoal-500">
                {{ t('projects.imageSoon') }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ───────── WHAT IT TAUGHT ME (dark statement) ───────── -->
    <section class="bg-charcoal py-28 text-cream-100 lg:py-40">
      <div class="section-container max-w-4xl">
        <p data-reveal class="mb-8 text-xs font-bold uppercase tracking-[0.3em] text-turquoise">
          {{ t('caseStudy.skills.learned.kicker') }}
        </p>
        <h2 data-reveal class="font-serif text-display-md leading-tight">
          {{ t('caseStudy.skills.learned.statement') }}
        </h2>
      </div>
    </section>

    <!-- ───────── CTA ───────── -->
    <section class="section-container py-24 lg:py-32">
      <div class="text-center">
        <h2 data-reveal class="font-serif text-display-md text-charcoal dark:text-cream-100">
          {{ t('caseStudy.skills.ctaTitle') }}
        </h2>
        <p data-reveal class="mx-auto mt-4 max-w-lg text-charcoal-500 dark:text-charcoal-300">
          {{ t('caseStudy.skills.ctaBody') }}
        </p>
        <div data-reveal class="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            v-for="skill in skillsCase.skills"
            :key="skill.id"
            :href="skill.repoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 border border-charcoal-200 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-charcoal-600 transition-all duration-300 hover:border-turquoise hover:text-turquoise dark:border-charcoal-600 dark:text-charcoal-200"
          >
            {{ t(`caseStudy.skills.items.${skill.id}.name`) }}
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
