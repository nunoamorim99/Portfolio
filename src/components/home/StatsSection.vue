<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '@/composables/useReducedMotion'
import { projects } from '@/data/projects'
import { experience } from '@/data/experience'
import { professionalCertificates, courses } from '@/data/courses'

gsap.registerPlugin(ScrollTrigger)

const { t } = useI18n()
const sectionRef = ref(null)
const gridRef = ref(null)
let ctx

// Honest, data-derived metrics — recomputed from the source data so they
// can never drift out of sync with the rest of the site.
const foco = experience.find((c) => c.id === 'foco-criativo')

const stats = [
  { value: projects.length, suffix: '', labelKey: 'stats.products' },
  { value: foco?.positions.length ?? 0, suffix: '', labelKey: 'stats.roles' },
  { value: professionalCertificates.length, suffix: '', labelKey: 'stats.certificates' },
  { value: courses.length, suffix: '+', labelKey: 'stats.courses' },
]

onMounted(() => {
  const nums = gridRef.value?.querySelectorAll('.stat-value')
  if (!nums?.length) return

  if (prefersReducedMotion()) return // template already shows final values

  ctx = gsap.context(() => {
    nums.forEach((el) => {
      const target = Number(el.dataset.target)
      const suffix = el.dataset.suffix || ''
      const counter = { v: 0 }
      el.textContent = `0${suffix}`
      gsap.to(counter, {
        v: target,
        duration: 1.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: gridRef.value, start: 'top 85%', toggleActions: 'play none none none' },
        onUpdate: () => {
          el.textContent = Math.round(counter.v) + suffix
        },
      })
    })

    gsap.from(gridRef.value.children, {
      scrollTrigger: { trigger: gridRef.value, start: 'top 85%', toggleActions: 'play none none none' },
      y: 30,
      opacity: 0,
      stagger: 0.12,
      duration: 0.7,
      ease: 'power3.out',
    })
  }, sectionRef.value)
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <section
    ref="sectionRef"
    class="border-y border-charcoal-100 bg-cream-100/40 dark:border-charcoal-700 dark:bg-charcoal-800/30"
  >
    <div class="section-container py-16 lg:py-20">
      <div ref="gridRef" class="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 lg:grid-cols-4">
        <div
          v-for="stat in stats"
          :key="stat.labelKey"
          class="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <span
            class="stat-value font-serif text-display-md leading-none text-turquoise"
            :data-target="stat.value"
            :data-suffix="stat.suffix"
          >{{ stat.value }}{{ stat.suffix }}</span>
          <span
            class="mt-3 max-w-[14ch] text-xs font-bold uppercase tracking-[0.2em] text-charcoal-400 dark:text-charcoal-300 lg:max-w-[18ch]"
          >{{ t(stat.labelKey) }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
