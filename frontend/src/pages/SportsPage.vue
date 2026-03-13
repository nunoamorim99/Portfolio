<template>
  <div class="section-container py-16 md:py-24">
    <router-link to="/personal" class="inline-flex items-center gap-1 text-sm text-dark-500 hover:text-primary-600 transition-colors mb-6">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
      Back to Personal
    </router-link>

    <SectionHeading title="Sports" subtitle="Staying active, setting goals, and pushing limits" />

    <!-- Sports I Practice -->
    <div class="grid sm:grid-cols-2 gap-6 mb-16">
      <div v-for="sport in sports" :key="sport.title" class="card">
        <div class="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-4">
          <span class="text-2xl" v-html="sport.icon" />
        </div>
        <h3 class="font-display font-semibold text-lg text-dark-900 mb-2">{{ sport.title }}</h3>
        <p class="text-dark-500 leading-relaxed text-sm">{{ sport.description }}</p>
      </div>
    </div>

    <!-- Achievements -->
    <h3 class="font-display font-semibold text-xl text-dark-800 mb-6">Goals & Achievements</h3>
    <div class="relative mb-16">
      <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-dark-200" />
      <div v-for="achievement in achievements" :key="achievement.title" class="relative pl-12 pb-8 last:pb-0">
        <div class="absolute left-2.5 top-1 w-3 h-3 bg-primary-600 rounded-full border-2 border-white shadow" />
        <div class="card">
          <span class="text-xs font-medium text-primary-600 mb-1 block">{{ achievement.date }}</span>
          <h4 class="font-semibold text-dark-900 mb-1">{{ achievement.title }}</h4>
          <p class="text-sm text-dark-500">{{ achievement.description }}</p>
        </div>
      </div>
    </div>

    <!-- Photo Gallery -->
    <h3 class="font-display font-semibold text-xl text-dark-800 mb-6">Gallery</h3>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div
        v-for="(photo, i) in photos"
        :key="i"
        class="aspect-square rounded-xl overflow-hidden bg-dark-100 cursor-pointer group"
        @click="openLightbox(i)"
      >
        <img
          :src="photo.url"
          :alt="photo.caption || 'Sports photo'"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
    </div>

    <LightBox
      :visible="lightbox.visible"
      :images="lightboxImages"
      :captions="lightboxCaptions"
      :start-index="lightbox.startIndex"
      @close="lightbox.visible = false"
    />
  </div>
</template>

<script setup>
import { onMounted, computed, reactive } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import LightBox from '@/components/ui/LightBox.vue'

const store = usePortfolioStore()
const photos = computed(() => store.photos.sports || [])
const lightboxImages = computed(() => photos.value.map(p => p.url))
const lightboxCaptions = computed(() => photos.value.map(p => p.caption || ''))

const lightbox = reactive({ visible: false, startIndex: 0 })

function openLightbox(i) {
  lightbox.startIndex = i
  lightbox.visible = true
}

const sports = [
  { title: 'Running', description: 'From casual jogs to half marathons — running is my go-to way to clear my mind and challenge myself physically.', icon: '&#127939;' },
  { title: 'Cycling', description: 'Weekend rides through the countryside help me disconnect and explore new routes around the region.', icon: '&#128692;' },
]

const achievements = [
  { title: 'First Half Marathon', date: '2023', description: 'Completed my first 21.1km race in 1:52:30, a personal milestone after months of training.' },
  { title: 'Century Ride (100km)', date: '2024', description: 'Rode 100km in a single day through the Minho countryside, exploring scenic rural roads.' },
  { title: '500km Running Goal', date: '2024', description: 'Reached the goal of running 500km in a calendar year, averaging ~42km per month.' },
]

onMounted(() => { store.fetchPhotos('sports') })
</script>
