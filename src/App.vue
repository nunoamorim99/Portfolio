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

// Offset so a hash target lands below the fixed navbar instead of under it.
const HASH_OFFSET = -80
let hashTimers = []

function clearHashTimers() {
  hashTimers.forEach(clearTimeout)
  hashTimers = []
}

// Scroll to a hash target reliably. The case-study pages are full of
// `data-reveal` elements and lazy images, so a target's real Y position keeps
// shifting for up to ~1s after mount. A single scroll lands at a stale spot
// (often the bottom). So we refresh ScrollTrigger and re-scroll on a few
// staggered ticks until layout settles. `force`/`immediate` because Lenis
// owns the scroll position and may be mid-momentum from the previous page.
function scrollToHash(hash, { smooth = false } = {}) {
  clearHashTimers()
  const attempt = (immediate) => {
    const el = document.querySelector(hash)
    if (!el) return
    ScrollTrigger.refresh()
    if (lenis) {
      lenis.scrollTo(el, { offset: HASH_OFFSET, force: true, immediate })
    } else {
      const y = window.scrollY + el.getBoundingClientRect().top + HASH_OFFSET
      window.scrollTo({ top: y, behavior: immediate ? 'auto' : 'smooth' })
    }
  }
  // First pass instant (no visible scroll-through); later passes correct for
  // late layout shifts. The final pass can be smooth for a gentle settle.
  attempt(true)
  hashTimers = [
    setTimeout(() => attempt(true), 150),
    setTimeout(() => attempt(true), 400),
    setTimeout(() => attempt(!smooth), 750),
  ]
}

function scrollToTop({ immediate = true } = {}) {
  clearHashTimers()
  if (lenis) lenis.scrollTo(0, { immediate, force: true })
  else window.scrollTo(0, 0)
}

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

  // Direct load / refresh on a URL that already has a hash: the route watcher
  // below never fires (fullPath didn't change), so honor the anchor here.
  if (route.hash) {
    nextTick(() => scrollToHash(route.hash))
  }
})

// On navigation: jump to the top (or settle onto the hash target), then
// recompute trigger positions once the entering page has laid out.
//
// Lenis owns the scroll position, so vue-router's scrollBehavior can't move
// the page — we drive it here instead.
watch(
  () => route.fullPath,
  async () => {
    const hash = route.hash
    if (!hash) {
      // Reset before the new page paints so it never flashes at the old offset.
      scrollToTop()
    }
    await nextTick()
    // The page mounts fresh (keyed on route.path) after this tick; scroll to
    // the anchor now that it exists, with retries for late layout shifts.
    if (hash) scrollToHash(hash)
    clearTimeout(refreshTimer)
    refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 500)
  },
  { flush: 'pre' }
)

onUnmounted(() => {
  clearHashTimers()
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
