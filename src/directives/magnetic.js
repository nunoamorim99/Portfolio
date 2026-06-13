import gsap from 'gsap'
import { prefersReducedMotion } from '@/composables/useReducedMotion'

/**
 * v-magnetic — the element gently pulls toward the cursor while hovered,
 * then springs back on leave. Pointer/hover devices only, and a no-op
 * under prefers-reduced-motion.
 *
 *   <a v-magnetic>…</a>
 *   <a v-magnetic="{ strength: 0.5 }">…</a>
 */
export const magnetic = {
  mounted(el, binding) {
    if (prefersReducedMotion()) return
    if (typeof window === 'undefined') return
    // Skip devices without a real hover pointer (touch).
    if (window.matchMedia?.('(hover: none)').matches) return

    const strength = binding.value?.strength ?? 0.4
    const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3' })

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const relX = e.clientX - (rect.left + rect.width / 2)
      const relY = e.clientY - (rect.top + rect.height / 2)
      xTo(relX * strength)
      yTo(relY * strength)
    }
    const onLeave = () => {
      xTo(0)
      yTo(0)
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    el.__magnetic = { onMove, onLeave }
  },
  unmounted(el) {
    if (!el.__magnetic) return
    el.removeEventListener('mousemove', el.__magnetic.onMove)
    el.removeEventListener('mouseleave', el.__magnetic.onLeave)
    gsap.killTweensOf(el)
    delete el.__magnetic
  },
}
