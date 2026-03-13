<template>
  <div class="section-container py-16 md:py-24">
    <router-link to="/personal" class="inline-flex items-center gap-1 text-sm text-dark-500 hover:text-primary-600 transition-colors mb-6">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
      {{ t('common.backToPersonal') }}
    </router-link>

    <SectionHeading :title="t('photographyPage.title')" :subtitle="t('photographyPage.subtitle')" />

    <p class="text-dark-600 leading-relaxed max-w-2xl mb-12">{{ t('photographyPage.intro') }}</p>

    <div class="columns-2 md:columns-3 gap-4 space-y-4">
      <div v-for="(photo, i) in photos" :key="i" class="break-inside-avoid rounded-xl overflow-hidden bg-dark-100 cursor-pointer group relative" @click="openLightbox(i)">
        <img :src="photo.url" :alt="photo.caption || 'Photography'" class="w-full block transition-transform duration-500 group-hover:scale-105" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <span v-if="photo.caption" class="text-white text-sm font-medium">{{ photo.caption }}</span>
        </div>
      </div>
    </div>

    <LightBox :visible="lightbox.visible" :images="lightboxImages" :captions="lightboxCaptions" :start-index="lightbox.startIndex" @close="lightbox.visible = false" />
  </div>
</template>

<script setup>
import { onMounted, computed, reactive } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'
import { useI18n } from '@/stores/i18n'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import LightBox from '@/components/ui/LightBox.vue'

const store = usePortfolioStore()
const i18n = useI18n()
const t = (key) => i18n.t(key)

const photos = computed(() => store.photos.photography || [])
const lightboxImages = computed(() => photos.value.map(p => p.url))
const lightboxCaptions = computed(() => photos.value.map(p => p.caption || ''))
const lightbox = reactive({ visible: false, startIndex: 0 })

function openLightbox(i) {
  lightbox.startIndex = i
  lightbox.visible = true
}

onMounted(() => { store.fetchPhotos('photography') })
</script>
