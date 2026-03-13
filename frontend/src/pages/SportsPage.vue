<template>
  <div class="section-container py-16 md:py-24">
    <router-link to="/personal" class="inline-flex items-center gap-1 text-sm text-dark-500 hover:text-primary-600 transition-colors mb-6">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
      {{ t('common.backToPersonal') }}
    </router-link>

    <SectionHeading :title="t('sportsPage.title')" :subtitle="t('sportsPage.subtitle')" />

    <!-- Sports I Practice -->
    <div class="grid sm:grid-cols-2 gap-6 mb-16">
      <div v-for="(sport, idx) in sportsItems" :key="idx" class="card">
        <div class="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-4">
          <span class="text-2xl" v-html="sportIcons[idx]" />
        </div>
        <h3 class="font-display font-semibold text-lg text-dark-900 mb-2">{{ sport.title }}</h3>
        <p class="text-dark-500 leading-relaxed text-sm">{{ sport.description }}</p>
      </div>
    </div>

    <!-- Achievements -->
    <h3 class="font-display font-semibold text-xl text-dark-800 mb-6">{{ t('sportsPage.goalsTitle') }}</h3>
    <div class="relative mb-16">
      <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-dark-200" />
      <div v-for="(achievement, idx) in achievementItems" :key="idx" class="relative pl-12 pb-8 last:pb-0">
        <div class="absolute left-2.5 top-1 w-3 h-3 bg-primary-600 rounded-full border-2 border-white shadow" />
        <div class="card">
          <span class="text-xs font-medium text-primary-600 mb-1 block">{{ achievement.date }}</span>
          <h4 class="font-semibold text-dark-900 mb-1">{{ achievement.title }}</h4>
          <p class="text-sm text-dark-500">{{ achievement.description }}</p>
        </div>
      </div>
    </div>

    <!-- Photo Gallery -->
    <h3 class="font-display font-semibold text-xl text-dark-800 mb-6">{{ t('common.gallery') }}</h3>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="(photo, i) in photos" :key="i" class="aspect-square rounded-xl overflow-hidden bg-dark-100 cursor-pointer group" @click="openLightbox(i)">
        <img :src="photo.url" :alt="photo.caption || 'Sports photo'" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
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

const photos = computed(() => store.photos.sports || [])
const lightboxImages = computed(() => photos.value.map(p => p.url))
const lightboxCaptions = computed(() => photos.value.map(p => p.caption || ''))
const lightbox = reactive({ visible: false, startIndex: 0 })

function openLightbox(i) {
  lightbox.startIndex = i
  lightbox.visible = true
}

const sportIcons = ['&#127939;', '&#128692;']
const sportsItems = computed(() => i18n.t('sportsPage.sports'))
const achievementItems = computed(() => i18n.t('sportsPage.achievements'))

onMounted(() => { store.fetchPhotos('sports') })
</script>
