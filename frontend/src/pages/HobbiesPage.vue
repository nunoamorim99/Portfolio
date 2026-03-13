<template>
  <div class="section-container py-16 md:py-24">
    <router-link to="/personal" class="inline-flex items-center gap-1 text-sm text-dark-500 hover:text-primary-600 transition-colors mb-6">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
      Back to Personal
    </router-link>

    <SectionHeading title="Other Hobbies" subtitle="Things that keep me curious and inspired" />

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="hobby in hobbies" :key="hobby.title" class="card group">
        <div class="aspect-video rounded-xl overflow-hidden bg-dark-100 mb-5">
          <img
            :src="hobby.image"
            :alt="hobby.title"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <h3 class="font-display font-semibold text-lg text-dark-900 mb-2">{{ hobby.title }}</h3>
        <p class="text-dark-500 text-sm leading-relaxed">{{ hobby.description }}</p>
      </div>
    </div>

    <div class="mt-16 card bg-dark-50 border-dashed border-dark-300 text-center py-12">
      <p class="text-dark-500 text-lg">More hobbies coming soon...</p>
      <p class="text-dark-400 text-sm mt-1">This section grows as I discover new interests!</p>
    </div>
  </div>
</template>

<script setup>
import SectionHeading from '@/components/ui/SectionHeading.vue'

const hobbies = [
  {
    title: 'Cooking',
    description: 'Experimenting with new recipes and cuisines from around the world. I find cooking to be both meditative and rewarding.',
    image: 'https://picsum.photos/seed/cooking/600/400',
  },
  {
    title: 'Reading',
    description: 'From product management books to sci-fi novels — reading helps me learn continuously and stay creative.',
    image: 'https://picsum.photos/seed/reading/600/400',
  },
  {
    title: 'Music',
    description: 'A lifelong listener and occasional guitar player. Music is the backdrop to everything I do, from work to workouts.',
    image: 'https://picsum.photos/seed/music/600/400',
  },
]
</script>
