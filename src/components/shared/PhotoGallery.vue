<script setup>
import { useUiStore } from '@/stores/ui'

const props = defineProps({
  images: { type: Array, required: true },
  columns: { type: Number, default: 3 },
})

const ui = useUiStore()

function openImage(index, e) {
  const srcs = props.images.map(img => typeof img === 'string' ? img : img.src)
  ui.openLightbox(srcs, index, e?.currentTarget?.querySelector('img'))
}
</script>

<template>
  <div
    class="grid gap-2"
    :class="{
      'grid-cols-1 sm:grid-cols-2': columns === 2,
      'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3': columns === 3,
      'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4': columns === 4,
    }"
  >
    <button
      v-for="(image, index) in images"
      :key="index"
      class="group relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-turquoise focus:ring-offset-2"
      :aria-label="`View image ${index + 1} of ${images.length}`"
      @click="openImage(index, $event)"
    >
      <img
        :src="typeof image === 'string' ? image : image.src"
        :alt="typeof image === 'string' ? `Photo ${index + 1}` : (image.alt || `Photo ${index + 1}`)"
        class="aspect-[4/3] w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-turquoise/0 transition-colors duration-300 group-hover:bg-turquoise/10" />
    </button>
  </div>
</template>
