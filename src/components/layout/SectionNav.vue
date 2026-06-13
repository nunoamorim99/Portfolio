<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { scrollToTarget } from '@/lib/scroll'

gsap.registerPlugin(ScrollTrigger)

const { t } = useI18n()
const active = ref('about')

const sections = [
  { id: 'about', labelKey: 'about.title' },
  { id: 'education', labelKey: 'education.title' },
  { id: 'interests', labelKey: 'interests.title' },
  { id: 'experience', labelKey: 'experience.title' },
  { id: 'skills', labelKey: 'skills.title' },
  { id: 'contact', labelKey: 'contact.title' },
]

let st = null
let els = []

// Pick the active section from real on-screen positions (getBoundingClientRect
// reflects pinned sections correctly): the last section whose top has crossed
// the reference line. Driven by one page-wide ScrollTrigger so it stays in sync
// with the smooth scroll and recomputes on refresh/resize.
function update() {
  const line = window.innerHeight * 0.4
  let current = null
  for (const s of els) {
    if (s.el.getBoundingClientRect().top <= line) current = s.id
  }
  active.value = current
}

onMounted(() => {
  els = sections
    .map((s) => ({ ...s, el: document.getElementById(s.id) }))
    .filter((s) => s.el)

  st = ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate: update,
    onRefresh: update,
  })
  update()
})

onUnmounted(() => {
  st?.kill()
  st = null
})

function go(id) {
  scrollToTarget(`#${id}`, { offset: -80 })
}
</script>

<template>
  <nav
    class="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    aria-label="Section navigation"
  >
    <ul class="flex flex-col items-end gap-4">
      <li v-for="s in sections" :key="s.id">
        <button
          type="button"
          class="group flex items-center gap-3"
          :aria-current="active === s.id ? 'true' : undefined"
          @click="go(s.id)"
        >
          <span
            class="text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            :class="active === s.id ? 'opacity-100 text-vermillion' : 'text-charcoal-400 dark:text-charcoal-300'"
          >{{ t(s.labelKey) }}</span>
          <span
            class="h-2 w-2 rounded-full border transition-all duration-300"
            :class="active === s.id
              ? 'scale-125 border-vermillion bg-vermillion'
              : 'border-charcoal-300 group-hover:border-vermillion dark:border-charcoal-500'"
          />
        </button>
      </li>
    </ul>
  </nav>
</template>
