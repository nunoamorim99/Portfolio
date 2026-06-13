<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { topSkills, otherSkillIds, languages } from '@/data/skills'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '@/composables/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

const { t } = useI18n()
const sectionRef = ref(null)
const titleRef = ref(null)
const subtitleRef = ref(null)
const lineRef = ref(null)
const topSkillsRef = ref(null)
const otherSkillsRef = ref(null)
const languagesRef = ref(null)
let ctx

onMounted(() => {
  if (prefersReducedMotion()) return

  ctx = gsap.context(() => {
    // Title wipes up from behind a mask
    gsap.from(titleRef.value, {
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      yPercent: 110,
      duration: 0.9,
      ease: 'power3.out',
    })

    // Subtitle fades in
    gsap.from(subtitleRef.value, {
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
      y: 30,
      opacity: 0,
      duration: 0.7,
      delay: 0.15,
      ease: 'power3.out',
    })

    // Accent line grows
    gsap.from(lineRef.value, {
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 0.8,
      delay: 0.25,
      ease: 'power3.out',
    })

    // Top skills: progress bars animate from 0
    const skillBars = topSkillsRef.value?.querySelectorAll('.skill-bar-fill')
    if (skillBars?.length) {
      gsap.from(skillBars, {
        scrollTrigger: {
          trigger: topSkillsRef.value,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        scaleX: 0,
        transformOrigin: 'left center',
        stagger: 0.12,
        duration: 1.2,
        ease: 'power2.out',
      })
    }

    // Skill labels stagger
    const skillLabels = topSkillsRef.value?.querySelectorAll('.skill-label')
    if (skillLabels?.length) {
      gsap.from(skillLabels, {
        scrollTrigger: {
          trigger: topSkillsRef.value,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        x: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
      })
    }

    // Other skills badges cascade in
    const badges = otherSkillsRef.value?.querySelectorAll('.badge')
    if (badges?.length) {
      gsap.from(badges, {
        scrollTrigger: {
          trigger: otherSkillsRef.value,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        scale: 0.7,
        opacity: 0,
        stagger: 0.03,
        duration: 0.4,
        ease: 'back.out(2)',
      })
    }

    // Language bars animate
    const langBars = languagesRef.value?.querySelectorAll('.lang-bar-fill')
    if (langBars?.length) {
      gsap.from(langBars, {
        scrollTrigger: {
          trigger: languagesRef.value,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        scaleX: 0,
        transformOrigin: 'left center',
        stagger: 0.15,
        duration: 1,
        ease: 'power2.out',
      })
    }
  }, sectionRef.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <section ref="sectionRef" id="skills" class="py-24 lg:py-32">
    <div class="section-container">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div class="lg:col-span-4">
          <div class="heading-mask">
            <h2 ref="titleRef" class="section-title">{{ t('skills.title') }}</h2>
          </div>
          <p ref="subtitleRef" class="section-subtitle">{{ t('skills.subtitle') }}</p>
          <div ref="lineRef" class="accent-line mt-6" />
        </div>

        <div class="lg:col-span-8 space-y-16">
          <!-- Top 5 Skills -->
          <div ref="topSkillsRef">
            <h3 class="font-serif text-xl text-charcoal dark:text-cream-100 mb-8">{{ t('skills.topTitle') }}</h3>
            <div class="space-y-6">
              <div v-for="skill in topSkills" :key="skill.id" class="group">
                <div class="skill-label flex items-center justify-between mb-2">
                  <span class="text-sm font-bold uppercase tracking-widest text-charcoal-500 dark:text-charcoal-300">{{ t(`skills.top.${skill.id}`) }}</span>
                  <span class="text-xs text-charcoal-300 dark:text-charcoal-400">{{ skill.rating }}/5</span>
                </div>
                <div class="h-1 bg-charcoal-100 dark:bg-charcoal-700 overflow-hidden">
                  <div
                    class="skill-bar-fill h-full bg-vermillion"
                    :style="{ width: (skill.rating / 5 * 100) + '%' }"
                    role="progressbar"
                    :aria-valuenow="skill.rating"
                    aria-valuemin="0"
                    aria-valuemax="5"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Other Skills -->
          <div ref="otherSkillsRef">
            <h3 class="font-serif text-xl text-charcoal dark:text-cream-100 mb-6">{{ t('skills.otherTitle') }}</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="id in otherSkillIds" :key="id" class="badge">
                {{ t(`skills.other.${id}`) }}
              </span>
            </div>
          </div>

          <!-- Languages -->
          <div ref="languagesRef">
            <h3 class="font-serif text-xl text-charcoal dark:text-cream-100 mb-8">{{ t('skills.langTitle') }}</h3>
            <div class="space-y-6">
              <div v-for="lang in languages" :key="lang.id">
                <div class="flex items-baseline justify-between mb-2">
                  <span class="text-sm font-bold uppercase tracking-widest text-charcoal-500 dark:text-charcoal-300">{{ t(`skills.languages.${lang.id}.name`) }}</span>
                  <span class="text-xs text-charcoal-300 dark:text-charcoal-400">{{ t(`skills.languages.${lang.id}.level`) }}</span>
                </div>
                <div class="h-1 bg-charcoal-100 dark:bg-charcoal-700 overflow-hidden">
                  <div
                    class="lang-bar-fill h-full bg-sage"
                    :style="{ width: lang.percentage + '%' }"
                    role="progressbar"
                    :aria-valuenow="lang.percentage"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
