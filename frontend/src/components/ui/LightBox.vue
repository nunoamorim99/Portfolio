<template>
  <teleport to="body">
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="visible"
        class="lightbox-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
        @click.self="$emit('close')"
        @keydown.escape="$emit('close')"
      >
        <button
          class="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close lightbox"
          @click="$emit('close')"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <button
          v-if="images.length > 1"
          class="absolute left-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Previous image"
          @click="prev"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <img
          :src="images[currentIndex]"
          :alt="captions[currentIndex] || `Image ${currentIndex + 1}`"
          class="max-w-[90vw] max-h-[85vh] rounded-xl object-contain shadow-2xl"
          loading="lazy"
        />

        <button
          v-if="images.length > 1"
          class="absolute right-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Next image"
          @click="next"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div v-if="captions[currentIndex]" class="absolute bottom-6 text-white/90 text-sm bg-black/40 px-4 py-2 rounded-full">
          {{ captions[currentIndex] }}
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  visible: { type: Boolean, default: false },
  images: { type: Array, required: true },
  captions: { type: Array, default: () => [] },
  startIndex: { type: Number, default: 0 },
})

const emit = defineEmits(['close'])
const currentIndex = ref(props.startIndex)

watch(() => props.startIndex, (val) => { currentIndex.value = val })
watch(() => props.visible, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

function next() {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

function onKey(e) {
  if (!props.visible) return
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'Escape') emit('close')
}

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>
