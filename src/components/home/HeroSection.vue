<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { profile } from '@/data/profile'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

const { t } = useI18n()

const sectionRef = ref(null)
const contentRef = ref(null)
const bgWordRef = ref(null)
const roleRef = ref(null)
const nameRef = ref(null)
const lineRef = ref(null)
const bioRef = ref(null)
const ctaRef = ref(null)
const photoWrapRef = ref(null)
const scrollHintRef = ref(null)
const cvOpen = ref(false)
let mm

const cvOptions = [
  { code: 'en', flag: 'gb', file: 'Nuno_Amorim_CV_EN.pdf' },
  { code: 'pt', flag: 'pt', file: 'Nuno_Amorim_CV_PT.pdf' },
]

function flagUrl(countryCode) {
  return `https://flagcdn.com/w40/${countryCode}.png`
}

function cvHref(file) {
  return `${import.meta.env.BASE_URL}${file}`
}

function onCvClickOutside(e) {
  if (!e.target.closest('.cv-switcher')) cvOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', onCvClickOutside)

  mm = gsap.matchMedia()

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    let split

    // Pre-hide so there's no flash of the final layout before fonts load.
    gsap.set(roleRef.value, { autoAlpha: 0, y: 24 })
    gsap.set(bioRef.value, { autoAlpha: 0, y: 24 })
    gsap.set(lineRef.value, { autoAlpha: 0, scaleX: 0, transformOrigin: 'left center' })
    gsap.set(nameRef.value, { autoAlpha: 0 })
    if (ctaRef.value) gsap.set(ctaRef.value.children, { autoAlpha: 0, y: 24 })
    gsap.set(photoWrapRef.value, { clipPath: 'inset(100% 0% 0% 0%)' })

    // ── Intro timeline (runs once fonts are ready so SplitText measures right)
    const buildIntro = () => {
      if (!nameRef.value) return
      split = new SplitText(nameRef.value, { type: 'lines,chars', linesClass: 'split-line' })
      gsap.set(nameRef.value, { autoAlpha: 1 })
      gsap.set(split.chars, { yPercent: 115, autoAlpha: 0 })

      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.to(roleRef.value, { autoAlpha: 1, y: 0, duration: 0.6 }, 0)
        .to(split.chars, { yPercent: 0, autoAlpha: 1, stagger: 0.022, duration: 0.9 }, 0.15)
        .to(lineRef.value, { autoAlpha: 1, scaleX: 1, duration: 0.7 }, 0.5)
        .to(bioRef.value, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.65)
        .to(
          ctaRef.value ? ctaRef.value.children : [],
          { autoAlpha: 1, y: 0, stagger: 0.12, duration: 0.6 },
          0.8
        )
        .to(
          photoWrapRef.value,
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1, ease: 'power3.inOut' },
          0.2
        )
    }

    if (document.fonts?.ready) document.fonts.ready.then(buildIntro)
    else buildIntro()

    // ── Scroll-driven parallax: content lifts + fades, bg word drifts
    gsap.to(contentRef.value, {
      yPercent: -15,
      autoAlpha: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    gsap.to(bgWordRef.value, {
      xPercent: -20,
      yPercent: 14,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    gsap.to(scrollHintRef.value, {
      autoAlpha: 0,
      y: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top top',
        end: '12% top',
        scrub: true,
      },
    })

    return () => split?.revert()
  })
})

onUnmounted(() => {
  document.removeEventListener('click', onCvClickOutside)
  mm?.revert()
})
</script>

<template>
  <section
    ref="sectionRef"
    class="relative min-h-screen flex items-center overflow-hidden bg-cream-50 dark:bg-charcoal-900"
  >
    <!-- Oversized kinetic background word -->
    <div
      ref="bgWordRef"
      class="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden will-change-transform"
      aria-hidden="true"
    >
      <span
        class="select-none font-serif font-medium leading-none whitespace-nowrap text-vermillion/[0.06] dark:text-vermillion-500/[0.08]"
        style="font-size: clamp(7rem, 26vw, 24rem)"
      >
        {{ t('hero.bgWord') }}
      </span>
    </div>

    <!-- Soft depth glow -->
    <div
      class="pointer-events-none absolute -left-1/4 top-1/4 z-0 h-[60vh] w-[60vh] rounded-full bg-vermillion/[0.07] blur-3xl dark:bg-vermillion/[0.05]"
      aria-hidden="true"
    />

    <div ref="contentRef" class="section-container relative z-10 py-32 will-change-transform">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <!-- Text content: asymmetric, editorial -->
        <div class="lg:col-span-7 xl:col-span-8">
          <p
            ref="roleRef"
            class="text-xs font-bold uppercase tracking-[0.3em] text-vermillion mb-6"
          >
            {{ t('hero.role') }}
          </p>
          <h1 ref="nameRef" class="font-serif text-display-xl text-charcoal dark:text-cream-100">
            {{ profile.name }}
          </h1>
          <div ref="lineRef" class="accent-line mt-8" />
          <p
            ref="bioRef"
            class="mt-8 max-w-lg text-lg leading-relaxed text-charcoal-400 dark:text-charcoal-300"
          >
            {{ t('hero.shortBio') }}
          </p>
          <div ref="ctaRef" class="mt-10 flex flex-wrap items-center gap-4">
            <router-link v-magnetic to="/projects" class="btn-primary">
              {{ t('hero.viewProjects') }}
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </router-link>
            <div class="cv-switcher relative">
              <button
                type="button"
                class="btn-secondary"
                :aria-expanded="cvOpen"
                aria-haspopup="menu"
                @click="cvOpen = !cvOpen"
              >
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                {{ t('hero.downloadCv') }}
              </button>
              <Transition
                enter-active-class="transition duration-150 ease-out"
                enter-from-class="scale-95 opacity-0"
                enter-to-class="scale-100 opacity-100"
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="scale-100 opacity-100"
                leave-to-class="scale-95 opacity-0"
              >
                <ul
                  v-if="cvOpen"
                  role="menu"
                  class="absolute left-0 top-full mt-2 z-20 min-w-[200px] origin-top-left overflow-hidden border border-charcoal-100 bg-cream-50 py-1 shadow-lg dark:border-charcoal-700 dark:bg-charcoal-800"
                >
                  <li v-for="opt in cvOptions" :key="opt.code" role="none">
                    <a
                      :href="cvHref(opt.file)"
                      :download="opt.file"
                      role="menuitem"
                      class="flex w-full items-center gap-3 px-4 py-3 text-xs font-bold uppercase tracking-wider text-charcoal-500 transition-colors hover:bg-charcoal-50 hover:text-charcoal dark:text-charcoal-300 dark:hover:bg-charcoal-700 dark:hover:text-cream-100"
                      @click="cvOpen = false"
                    >
                      <img :src="flagUrl(opt.flag)" :alt="opt.code" class="h-3.5 w-5 rounded-sm object-cover" />
                      {{ t(`lang.${opt.code}`) }}
                    </a>
                  </li>
                </ul>
              </Transition>
            </div>
          </div>
        </div>

        <!-- Photo: offset, editorial framing -->
        <div class="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end">
          <div ref="photoWrapRef" class="relative will-change-transform">
            <div class="absolute -inset-4 bg-vermillion/10 -rotate-3 dark:bg-vermillion/5" aria-hidden="true" />
            <img
              :src="profile.photo"
              :alt="`Photo of ${profile.name}`"
              class="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96 object-cover grayscale hover:grayscale-0 transition-all duration-700"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      ref="scrollHintRef"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
    >
      <span class="text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal-300 dark:text-charcoal-500">Scroll</span>
      <div class="h-12 w-px bg-charcoal-100 dark:bg-charcoal-700 relative overflow-hidden">
        <div class="absolute inset-x-0 top-0 h-3 bg-vermillion animate-scroll-line" />
      </div>
    </div>
  </section>
</template>
