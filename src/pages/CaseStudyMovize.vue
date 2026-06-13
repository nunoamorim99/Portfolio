<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { movizeCase } from '@/data/caseStudyMovize'
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
    // Hero intro on load
    gsap.from('.cs-hero-title', { yPercent: 110, duration: 1, ease: 'power4.out' })
    gsap.from('.cs-hero-reveal', {
      y: 24,
      opacity: 0,
      stagger: 0.12,
      duration: 0.7,
      delay: 0.15,
      ease: 'power3.out',
    })

    // Generic scroll reveals
    rootRef.value.querySelectorAll('[data-reveal]').forEach((el) => {
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
      })
    })

    // Module timeline draws as you scroll the ecosystem
    const line = rootRef.value.querySelector('.cs-modules-line')
    if (line) {
      gsap.from(line, {
        scaleY: 0,
        transformOrigin: 'top center',
        ease: 'none',
        scrollTrigger: { trigger: '.cs-modules', start: 'top 75%', end: 'bottom 75%', scrub: true },
      })
    }

    // Subtle image parallax (scaled so edges never show during the shift)
    rootRef.value.querySelectorAll('[data-parallax] img').forEach((img) => {
      gsap.fromTo(
        img,
        { yPercent: -6, scale: 1.12 },
        {
          yPercent: 6,
          scale: 1.12,
          ease: 'none',
          scrollTrigger: {
            trigger: img.closest('[data-parallax]'),
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
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
      <p class="cs-hero-reveal text-xs font-bold uppercase tracking-[0.3em] text-vermillion mb-6">
        {{ t('caseStudy.movize.label') }}
      </p>
      <div class="heading-mask">
        <h1 class="cs-hero-title font-serif text-display-xl text-charcoal dark:text-cream-100">
          {{ t('caseStudy.movize.title') }}
        </h1>
      </div>
      <p
        class="cs-hero-reveal mt-8 max-w-2xl font-serif text-xl lg:text-2xl leading-relaxed text-charcoal-600 dark:text-charcoal-200"
      >
        {{ t('caseStudy.movize.tagline') }}
      </p>
      <div class="cs-hero-reveal mt-8 flex flex-wrap items-center gap-3">
        <span class="badge">{{ t('caseStudy.movize.role') }}</span>
        <span class="badge">{{ t('caseStudy.movize.period') }}</span>
        <a
          :href="movizeCase.url"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-vermillion transition-colors hover:text-vermillion-700"
        >
          {{ t('caseStudy.visit') }}
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </div>
    </header>

    <!-- Hero banner -->
    <div data-parallax class="relative h-[38vh] overflow-hidden lg:h-[58vh]">
      <img :src="movizeCase.heroImage" alt="Movize" class="h-full w-full object-cover" loading="eager" />
    </div>

    <!-- ───────── OVERVIEW ───────── -->
    <section class="section-container py-20 lg:py-28">
      <p
        data-reveal
        class="max-w-3xl font-serif text-lg lg:text-2xl leading-relaxed text-charcoal-600 dark:text-charcoal-200"
      >
        {{ t('caseStudy.movize.overview') }}
      </p>
    </section>

    <!-- ───────── PROBLEM ───────── -->
    <section class="bg-cream-100 dark:bg-charcoal-800 py-20 lg:py-28">
      <div class="section-container grid gap-8 lg:grid-cols-12">
        <div class="lg:col-span-4">
          <p data-reveal class="text-xs font-bold uppercase tracking-[0.2em] text-vermillion">
            {{ t('caseStudy.movize.problem.kicker') }}
          </p>
          <h2 data-reveal class="mt-4 font-serif text-display-sm text-charcoal dark:text-cream-100">
            {{ t('caseStudy.movize.problem.title') }}
          </h2>
        </div>
        <div class="lg:col-span-8">
          <p data-reveal class="max-w-2xl text-lg leading-relaxed text-charcoal-500 dark:text-charcoal-300">
            {{ t('caseStudy.movize.problem.body') }}
          </p>
        </div>
      </div>
    </section>

    <!-- ───────── V1 — THE APP ───────── -->
    <section class="section-container py-20 lg:py-28">
      <div class="grid items-start gap-8 lg:grid-cols-12">
        <div class="lg:col-span-4">
          <p data-reveal class="text-xs font-bold uppercase tracking-[0.2em] text-vermillion">
            {{ t('caseStudy.movize.v1.kicker') }}
          </p>
          <h2 data-reveal class="mt-4 font-serif text-display-sm text-charcoal dark:text-cream-100">
            {{ t('caseStudy.movize.v1.title') }}
          </h2>
          <p data-reveal class="mt-6 text-lg leading-relaxed text-charcoal-500 dark:text-charcoal-300">
            {{ t('caseStudy.movize.v1.body') }}
          </p>
        </div>
        <div class="grid grid-cols-3 gap-4 lg:col-span-8">
          <div
            v-for="(shot, i) in movizeCase.appShots"
            :key="i"
            data-reveal
            class="overflow-hidden border border-charcoal-100 dark:border-charcoal-700"
          >
            <img :src="shot" alt="" class="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- ───────── PIVOT (dark statement) ───────── -->
    <section class="bg-charcoal py-28 text-cream-100 lg:py-40">
      <div class="section-container max-w-4xl">
        <p data-reveal class="mb-8 text-xs font-bold uppercase tracking-[0.3em] text-vermillion">
          {{ t('caseStudy.movize.pivot.kicker') }}
        </p>
        <h2 data-reveal class="font-serif text-display-md leading-tight">
          {{ t('caseStudy.movize.pivot.title') }}
        </h2>
        <p data-reveal class="mt-8 max-w-2xl text-lg lg:text-xl leading-relaxed text-cream-300/80">
          {{ t('caseStudy.movize.pivot.body') }}
        </p>
      </div>
    </section>

    <!-- ───────── ECOSYSTEM + MODULES ───────── -->
    <section class="section-container pt-20 lg:pt-28">
      <p data-reveal class="text-xs font-bold uppercase tracking-[0.2em] text-vermillion">
        {{ t('caseStudy.movize.ecosystem.kicker') }}
      </p>
      <h2 data-reveal class="mt-4 font-serif text-display-md text-charcoal dark:text-cream-100">
        {{ t('caseStudy.movize.ecosystem.title') }}
      </h2>
      <p data-reveal class="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal-500 dark:text-charcoal-300">
        {{ t('caseStudy.movize.ecosystem.body') }}
      </p>
    </section>

    <section class="cs-modules section-container py-16 lg:py-24">
      <div class="relative pl-8 lg:pl-12">
        <span
          class="cs-modules-line absolute left-0 top-2 h-[calc(100%-1rem)] w-0.5 origin-top bg-vermillion/30"
          aria-hidden="true"
        />
        <div
          v-for="mod in movizeCase.modules"
          :key="mod.id"
          data-reveal
          class="relative mb-12 last:mb-0"
        >
          <span
            class="absolute -left-[calc(2rem+5px)] top-2 h-2.5 w-2.5 bg-vermillion lg:-left-[calc(3rem+5px)]"
            aria-hidden="true"
          />
          <div class="grid items-center gap-6 lg:grid-cols-12">
            <div class="lg:col-span-5">
              <div class="flex flex-wrap items-center gap-3">
                <h3 class="font-serif text-2xl text-charcoal dark:text-cream-100">
                  {{ t(`caseStudy.movize.modules.${mod.id}.name`) }}
                </h3>
                <span
                  v-if="mod.inDev"
                  class="badge text-[10px] border-vermillion/40 text-vermillion"
                >
                  {{ t('caseStudy.movize.ecosystem.inDev') }}
                </span>
              </div>
              <p class="mt-3 leading-relaxed text-charcoal-500 dark:text-charcoal-300">
                {{ t(`caseStudy.movize.modules.${mod.id}.body`) }}
              </p>
            </div>
            <div class="lg:col-span-7">
              <div
                v-if="mod.image"
                data-parallax
                class="relative aspect-video overflow-hidden border border-charcoal-100 dark:border-charcoal-700"
              >
                <img :src="mod.image" alt="" class="h-full w-full object-cover" loading="lazy" />
              </div>
              <div
                v-else
                class="flex aspect-video items-center justify-center border border-dashed border-charcoal-200 text-charcoal-300 dark:border-charcoal-600 dark:text-charcoal-500"
              >
                <span class="text-xs font-bold uppercase tracking-[0.2em]">
                  {{ t('caseStudy.movize.ecosystem.inDev') }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ───────── KEY DECISIONS ───────── -->
    <section class="bg-cream-100 dark:bg-charcoal-800 py-20 lg:py-28">
      <div class="section-container">
        <h2 data-reveal class="font-serif text-display-sm text-charcoal dark:text-cream-100">
          {{ t('caseStudy.movize.decisionsTitle') }}
        </h2>
        <div
          class="mt-12 grid gap-px border border-charcoal-100 bg-charcoal-100 dark:border-charcoal-700 dark:bg-charcoal-700 sm:grid-cols-2"
        >
          <div
            v-for="(d, i) in movizeCase.decisions"
            :key="d"
            data-reveal
            class="bg-cream-50 p-8 dark:bg-charcoal-900 lg:p-10"
          >
            <span class="font-serif text-4xl text-vermillion/30">0{{ i + 1 }}</span>
            <h3 class="mt-4 font-serif text-xl text-charcoal dark:text-cream-100">
              {{ t(`caseStudy.movize.decisions.${d}.title`) }}
            </h3>
            <p class="mt-3 leading-relaxed text-charcoal-500 dark:text-charcoal-300">
              {{ t(`caseStudy.movize.decisions.${d}.body`) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ───────── VALIDATION ───────── -->
    <section class="section-container py-24 text-center lg:py-32">
      <p data-reveal class="mb-8 text-xs font-bold uppercase tracking-[0.3em] text-vermillion">
        {{ t('caseStudy.movize.validation.kicker') }}
      </p>
      <blockquote
        data-reveal
        class="mx-auto max-w-3xl font-serif text-display-sm leading-tight text-charcoal dark:text-cream-100"
      >
        “{{ t('caseStudy.movize.validation.quote') }}”
      </blockquote>
      <p data-reveal class="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-charcoal-500 dark:text-charcoal-300">
        {{ t('caseStudy.movize.validation.body') }}
      </p>
    </section>

    <!-- ───────── CTA ───────── -->
    <section class="bg-charcoal py-24 text-cream-100 lg:py-32">
      <div class="section-container text-center">
        <h2 data-reveal class="font-serif text-display-md">{{ t('caseStudy.movize.ctaTitle') }}</h2>
        <p data-reveal class="mx-auto mt-4 max-w-lg text-cream-300/80">
          {{ t('caseStudy.movize.ctaBody') }}
        </p>
        <div data-reveal class="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            :href="movizeCase.url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 bg-cream-200 px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-charcoal-900 transition-all duration-300 hover:bg-vermillion hover:text-white"
          >
            {{ t('caseStudy.visit') }}
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
          <router-link
            to="/projects"
            class="inline-flex items-center gap-2 border-2 border-cream-300 px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-cream-200 transition-all duration-300 hover:bg-cream-200 hover:text-charcoal-900"
          >
            {{ t('caseStudy.back') }}
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
