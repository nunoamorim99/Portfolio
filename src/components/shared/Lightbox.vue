<script setup>
import { onMounted, onUnmounted, computed, ref, watch, nextTick } from 'vue'
import { useUiStore } from '@/stores/ui'
import gsap from 'gsap'
import { Flip } from 'gsap/Flip'
import { prefersReducedMotion } from '@/composables/useReducedMotion'

gsap.registerPlugin(Flip)

const ui = useUiStore()
const imgRef = ref(null)

const currentImage = computed(() =>
  ui.lightbox.images[ui.lightbox.index] || ''
)

// Morph the lightbox image out of the clicked thumbnail when it opens.
watch(
  () => ui.lightbox.open,
  (open) => {
    if (!open) return
    const origin = ui.lightbox.originEl
    if (!origin || prefersReducedMotion()) return

    nextTick(() => {
      const imgEl = imgRef.value
      if (!imgEl) return

      const run = () => {
        try {
          Flip.fit(imgEl, origin, { scale: true }) // place over the thumbnail
          const state = Flip.getState(imgEl) // record that position
          gsap.set(imgEl, { clearProps: 'transform' }) // jump to final layout
          Flip.from(state, { duration: 0.5, ease: 'power2.inOut' }) // animate thumb -> final
        } catch {
          gsap.set(imgEl, { clearProps: 'all' }) // never leave it mid-transform
        }
      }

      if (imgEl.complete && imgEl.naturalWidth) run()
      else imgEl.addEventListener('load', run, { once: true })
    })
  }
)

const hasPrev = computed(() => ui.lightbox.index > 0)
const hasNext = computed(() => ui.lightbox.index < ui.lightbox.images.length - 1)

function prev() {
  if (hasPrev.value) ui.setLightboxIndex(ui.lightbox.index - 1)
}

function next() {
  if (hasNext.value) ui.setLightboxIndex(ui.lightbox.index + 1)
}

function onKeydown(e) {
  if (!ui.lightbox.open) return
  if (e.key === 'Escape') ui.closeLightbox()
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="ui.lightbox.open"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-4"
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
        @click.self="ui.closeLightbox()"
      >
        <!-- Close button -->
        <button
          class="absolute right-6 top-6 bg-white/10 p-2.5 text-white transition-colors hover:bg-vermillion"
          aria-label="Close lightbox"
          @click="ui.closeLightbox()"
        >
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Prev button -->
        <button
          v-if="hasPrev"
          class="absolute left-6 bg-white/10 p-3 text-white transition-colors hover:bg-vermillion"
          aria-label="Previous image"
          @click="prev"
        >
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <!-- Image -->
        <img
          ref="imgRef"
          :src="currentImage"
          alt=""
          class="max-h-[85vh] max-w-[90vw] object-contain"
          loading="lazy"
        />

        <!-- Next button -->
        <button
          v-if="hasNext"
          class="absolute right-6 bg-white/10 p-3 text-white transition-colors hover:bg-vermillion"
          aria-label="Next image"
          @click="next"
        >
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        <!-- Counter -->
        <div class="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-widest text-white/60">
          {{ ui.lightbox.index + 1 }} / {{ ui.lightbox.images.length }}
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
