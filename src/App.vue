<script setup>
import { onMounted, onUnmounted, ref, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
import Lightbox from '@/components/shared/Lightbox.vue'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '@/composables/useReducedMotion'
import { setLenis } from '@/lib/scroll'

gsap.registerPlugin(ScrollTrigger)

const route = useRoute()
const progressRef = ref(null)
let lenis
let ctx
let refreshTimer

onMounted(() => {
  const reduced = prefersReducedMotion()

  // Smooth scroll is itself motion — skip it entirely for reduced-motion users.
  if (!reduced) {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    setLenis(lenis)
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)
  }

  // Reading-progress bar — informational, kept on for everyone.
  // start:0 / end:'max' tracks the true scroll distance, so it stays
  // accurate even with pinned sections injecting pin-spacers.
  ctx = gsap.context(() => {
    gsap.to(progressRef.value, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        start: 0,
        end: 'max',
        scrub: 0.3,
        invalidateOnRefresh: true,
      },
    })
  })
})

// On navigation: jump to the top (or to the hash target) and recompute
// trigger positions once the entering page has settled.
//
// Lenis owns the scroll position, so vue-router's scrollBehavior can't move
// the page on its own — we reset Lenis here instead. `immediate: true` makes
// it an instant jump (no visible scroll-up), and `force: true` lets it fire
// even mid-momentum. Falls back to window.scrollTo for reduced-motion users.
watch(
  () => route.fullPath,
  async () => {
    const hash = route.hash
    // Reset before the new page paints so it never flashes at the old offset.
    if (lenis) {
      lenis.scrollTo(hash || 0, { immediate: !hash, force: true, offset: hash ? -80 : 0 })
    } else {
      const el = hash && document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' })
      else window.scrollTo(0, 0)
    }

    await nextTick()
    // A hash target's real position isn't known until the page has laid out;
    // re-scroll to it once settled so we land accurately.
    if (hash && lenis) {
      requestAnimationFrame(() => lenis.scrollTo(hash, { offset: -80, force: true }))
    }
    clearTimeout(refreshTimer)
    refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 500)
  },
  { flush: 'pre' }
)

onUnmounted(() => {
  clearTimeout(refreshTimer)
  ctx?.revert()
  lenis?.destroy()
})
</script>

<template>
  <div class="flex min-h-screen flex-col relative">
    <!-- Reading progress bar -->
    <div ref="progressRef" class="scroll-progress" aria-hidden="true" />

    <!-- Grain texture overlay -->
    <div class="grain-overlay" aria-hidden="true" />

    <Navbar />
    <main class="flex-1">
      <router-view v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </router-view>
    </main>
    <Footer />
    <Lightbox />
  </div>
</template>
