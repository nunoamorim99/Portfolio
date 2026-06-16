<script setup>
import { useI18n } from 'vue-i18n'
import { photos } from '@/data/photos'
import { useUiStore } from '@/stores/ui'

const { t } = useI18n()
const ui = useUiStore()

function openPhoto(index) {
  ui.openLightbox(photos.map(p => p.src), index)
}
</script>

<template>
  <div class="pt-28 pb-24">
    <div class="section-container">
      <router-link to="/personal" class="back-link">
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        {{ t('personal.backToPersonal') }}
      </router-link>

      <div class="mb-16">
        <h1 class="section-title">{{ t('photography.title') }}</h1>
        <p class="section-subtitle">{{ t('photography.subtitle') }}</p>
        <div class="accent-line mt-6" />
      </div>

      <div class="columns-1 gap-4 sm:columns-2 lg:columns-3">
        <button
          v-for="(photo, index) in photos"
          :key="photo.id"
          class="group relative mb-4 block w-full overflow-hidden break-inside-avoid focus:outline-none focus:ring-2 focus:ring-turquoise focus:ring-offset-2"
          :aria-label="t(`photography.photos.${photo.id}`)"
          @click="openPhoto(index)"
        >
          <img
            :src="photo.src"
            :alt="t(`photography.photos.${photo.id}`)"
            class="w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div class="absolute bottom-0 left-0 right-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <span class="badge bg-cream-50 text-charcoal">{{ t(`photography.categories.${photo.category}`) }}</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
