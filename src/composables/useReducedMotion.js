import { ref, onMounted, onUnmounted } from 'vue'

const QUERY = '(prefers-reduced-motion: reduce)'

/**
 * Instant, non-reactive check. Safe to call inside onMounted / gsap setup.
 * Use this to early-return out of scroll animations.
 */
export function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia(QUERY).matches
  )
}

/**
 * Reactive version: returns a ref that updates if the user changes their
 * OS-level motion preference while the page is open.
 */
export function useReducedMotion() {
  const reduced = ref(prefersReducedMotion())
  let mql = null
  const onChange = (e) => {
    reduced.value = e.matches
  }

  onMounted(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return
    mql = window.matchMedia(QUERY)
    mql.addEventListener?.('change', onChange)
  })

  onUnmounted(() => {
    mql?.removeEventListener?.('change', onChange)
  })

  return reduced
}
