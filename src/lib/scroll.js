import { prefersReducedMotion } from '@/composables/useReducedMotion'

// Shared Lenis instance, registered once from App.vue. Lets any component
// (e.g. the section dot-nav) trigger smooth scroll without prop drilling.
let lenis = null

export function setLenis(instance) {
  lenis = instance
}

export function getLenis() {
  return lenis
}

/**
 * Smoothly scroll to an element or selector. Falls back to native scroll
 * (instant under reduced-motion) when Lenis isn't running.
 */
export function scrollToTarget(target, { offset = 0, duration } = {}) {
  const el = typeof target === 'string' ? document.querySelector(target) : target
  if (!el && typeof target !== 'number') return

  if (lenis) {
    lenis.scrollTo(target, { offset, duration })
    return
  }

  el?.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start',
  })
}
