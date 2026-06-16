<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { astroHopCase } from '@/data/caseStudyAstroHop'
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
      <p class="cs-hero-reveal text-xs font-bold uppercase tracking-[0.3em] text-turquoise mb-6">
        {{ t('caseStudy.astroHop.label') }}
      </p>
      <div class="heading-mask">
        <h1 class="cs-hero-title font-serif text-display-xl text-charcoal dark:text-cream-100">
          {{ t('caseStudy.astroHop.title') }}
        </h1>
      </div>
      <p
        class="cs-hero-reveal mt-8 max-w-2xl font-serif text-xl lg:text-2xl leading-relaxed text-charcoal-600 dark:text-charcoal-200"
      >
        {{ t('caseStudy.astroHop.tagline') }}
      </p>
      <div class="cs-hero-reveal mt-8 flex flex-wrap items-center gap-3">
        <span class="badge">{{ t('caseStudy.astroHop.badgeContext') }}</span>
        <span class="badge border-turquoise/40 text-turquoise">{{ t('caseStudy.astroHop.badgeAi') }}</span>
        <a
          :href="astroHopCase.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-turquoise transition-colors hover:text-turquoise-700"
        >
          {{ t('projects.playLive') }}
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </div>
    </header>

    <!-- Hero banner -->
    <div data-parallax class="relative h-[38vh] overflow-hidden lg:h-[58vh]">
      <img :src="astroHopCase.heroImage" alt="Astro Hop" class="h-full w-full object-cover" loading="eager" />
    </div>

    <!-- ───────── OVERVIEW ───────── -->
    <section class="section-container py-20 lg:py-28">
      <p
        data-reveal
        class="max-w-3xl font-serif text-lg lg:text-2xl leading-relaxed text-charcoal-600 dark:text-charcoal-200"
      >
        {{ t('caseStudy.astroHop.overview') }}
      </p>
      <div data-reveal class="mt-12 overflow-hidden border border-charcoal-100 dark:border-charcoal-700">
        <img
          :src="astroHopCase.desktopImage"
          alt="Astro Hop on desktop"
          class="aspect-video w-full object-cover"
          loading="lazy"
        />
      </div>
    </section>

    <!-- ───────── 01 — APPROACH (built with AI / Fable 5) ───────── -->
    <section class="bg-cream-100 dark:bg-charcoal-800 py-20 lg:py-28">
      <div class="section-container grid gap-8 lg:grid-cols-12">
        <div class="lg:col-span-4">
          <p data-reveal class="text-xs font-bold uppercase tracking-[0.2em] text-turquoise">
            {{ t('caseStudy.astroHop.approach.kicker') }}
          </p>
          <h2 data-reveal class="mt-4 font-serif text-display-sm text-charcoal dark:text-cream-100">
            {{ t('caseStudy.astroHop.approach.title') }}
          </h2>
        </div>
        <div class="lg:col-span-8">
          <p data-reveal class="max-w-2xl text-lg leading-relaxed text-charcoal-500 dark:text-charcoal-300">
            {{ t('caseStudy.astroHop.approach.body') }}
          </p>
        </div>
      </div>
    </section>

    <!-- ───────── 02 — UNDER THE HOOD (feature grid) ───────── -->
    <section class="section-container py-20 lg:py-28">
      <p data-reveal class="text-xs font-bold uppercase tracking-[0.2em] text-turquoise">
        {{ t('caseStudy.astroHop.highlightsKicker') }}
      </p>
      <h2 data-reveal class="mt-3 font-serif text-display-sm text-charcoal dark:text-cream-100">
        {{ t('caseStudy.astroHop.highlightsTitle') }}
      </h2>
      <div
        class="mt-12 grid gap-px border border-charcoal-100 bg-charcoal-100 dark:border-charcoal-700 dark:bg-charcoal-700 sm:grid-cols-2"
      >
        <div
          v-for="(f, i) in astroHopCase.features"
          :key="f"
          data-reveal
          class="bg-cream-50 p-8 dark:bg-charcoal-900 lg:p-10"
        >
          <span class="font-serif text-4xl text-turquoise/30">0{{ i + 1 }}</span>
          <h3 class="mt-4 font-serif text-xl text-charcoal dark:text-cream-100">
            {{ t(`caseStudy.astroHop.features.${f}.title`) }}
          </h3>
          <p class="mt-3 leading-relaxed text-charcoal-500 dark:text-charcoal-300">
            {{ t(`caseStudy.astroHop.features.${f}.body`) }}
          </p>
        </div>
      </div>
    </section>

    <!-- ───────── AUDIO (dark statement) ───────── -->
    <section class="bg-charcoal py-28 text-cream-100 lg:py-40">
      <div class="section-container max-w-4xl">
        <p data-reveal class="mb-8 text-xs font-bold uppercase tracking-[0.3em] text-turquoise">
          {{ t('caseStudy.astroHop.audio.kicker') }}
        </p>
        <h2 data-reveal class="font-serif text-display-md leading-tight">
          {{ t('caseStudy.astroHop.audio.statement') }}
        </h2>
      </div>
    </section>

    <!-- ───────── 03 — RUNS ANYWHERE (text + mobile shot) ───────── -->
    <section class="section-container py-20 lg:py-28">
      <div class="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div class="lg:col-span-7">
          <p data-reveal class="text-xs font-bold uppercase tracking-[0.2em] text-turquoise">
            {{ t('caseStudy.astroHop.platform.kicker') }}
          </p>
          <h2 data-reveal class="mt-4 font-serif text-display-sm text-charcoal dark:text-cream-100">
            {{ t('caseStudy.astroHop.platform.title') }}
          </h2>
          <div data-reveal class="accent-line mt-6" />
          <p data-reveal class="mt-6 text-lg leading-relaxed text-charcoal-500 dark:text-charcoal-300">
            {{ t('caseStudy.astroHop.platform.body') }}
          </p>
        </div>
        <div data-reveal class="lg:col-span-5">
          <div
            data-parallax
            class="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden border border-charcoal-100 dark:border-charcoal-700"
          >
            <img :src="astroHopCase.mobileImage" alt="" class="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- ───────── TECH ───────── -->
    <section class="section-container pb-20 lg:pb-28">
      <p
        data-reveal
        class="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-charcoal-300 dark:text-charcoal-400"
      >
        {{ t('caseStudy.astroHop.techTitle') }}
      </p>
      <div data-reveal class="flex flex-wrap gap-2">
        <span v-for="tech in astroHopCase.tech" :key="tech" class="badge">{{ tech }}</span>
      </div>
    </section>

    <!-- ───────── CTA ───────── -->
    <section class="bg-charcoal py-24 text-cream-100 lg:py-32">
      <div class="section-container text-center">
        <h2 data-reveal class="font-serif text-display-md">{{ t('caseStudy.astroHop.ctaTitle') }}</h2>
        <p data-reveal class="mx-auto mt-4 max-w-lg text-cream-300/80">
          {{ t('caseStudy.astroHop.ctaBody') }}
        </p>
        <div data-reveal class="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            :href="astroHopCase.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 bg-cream-200 px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-charcoal-900 transition-all duration-300 hover:bg-turquoise hover:text-white"
          >
            {{ t('projects.playLive') }}
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
