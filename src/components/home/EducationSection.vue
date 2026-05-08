<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { profile } from '@/data/profile'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const { t } = useI18n()
const sectionRef = ref(null)
const leftColRef = ref(null)
const rightColRef = ref(null)
let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    // Left column slides in from the left
    gsap.from(leftColRef.value, {
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      x: -80,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })

    // Right column slides in from the right
    gsap.from(rightColRef.value, {
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      x: 80,
      opacity: 0,
      duration: 1,
      delay: 0.15,
      ease: 'power3.out',
    })
  }, sectionRef.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <section ref="sectionRef" id="education" class="py-24 lg:py-32 overflow-hidden bg-cream-100/50 dark:bg-charcoal-800/30">
    <div class="section-container">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div ref="leftColRef" class="lg:col-span-4">
          <h2 class="section-title">{{ t('education.title') }}</h2>
          <div class="accent-line mt-6" />
        </div>
        <div ref="rightColRef" class="lg:col-span-8">
          <div class="space-y-0">
            <div
              v-for="id in profile.educationIds"
              :key="id"
              class="group border-b border-charcoal-100 py-8 first:pt-0 last:border-b-0 dark:border-charcoal-700"
            >
              <div class="flex items-start justify-between gap-4">
                <div>
                  <h3 class="font-serif text-2xl text-charcoal dark:text-cream-100">{{ t(`education.items.${id}.degree`) }}</h3>
                  <p class="mt-2 text-sm font-bold uppercase tracking-widest text-vermillion">{{ t(`education.items.${id}.institution`) }}</p>
                </div>
                <span class="flex-shrink-0 text-xs font-bold uppercase tracking-widest text-charcoal-300 dark:text-charcoal-400 mt-2">{{ profile.educationPeriods[id] }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
