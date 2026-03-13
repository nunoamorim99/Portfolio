<template>
  <div class="section-container py-16 md:py-24">
    <SectionHeading title="Personal" subtitle="Who I am beyond the professional world" />

    <div class="max-w-3xl mb-16">
      <p class="text-dark-600 leading-relaxed text-lg">
        Outside of work, I'm someone who loves exploring the world, staying active, and capturing moments through photography.
        I believe that a rich personal life fuels creativity and perspective in everything I do professionally.
        Here are some of the things I'm passionate about.
      </p>
    </div>

    <div class="grid sm:grid-cols-2 gap-6">
      <router-link
        v-for="hobby in hobbies"
        :key="hobby.title"
        :to="hobby.to"
        class="card group flex flex-col items-start"
      >
        <div class="w-14 h-14 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-600 group-hover:text-white transition-colors">
          <span class="text-2xl" v-html="hobby.icon" />
        </div>
        <h3 class="font-display font-semibold text-xl text-dark-900 mb-2">{{ hobby.title }}</h3>
        <p class="text-dark-500 leading-relaxed mb-4 flex-1">{{ hobby.description }}</p>
        <span class="text-primary-600 font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
          Explore
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import SectionHeading from '@/components/ui/SectionHeading.vue'

const hobbies = [
  {
    title: 'Travel',
    description: 'Exploring new cultures, cuisines, and landscapes across the globe. Every trip is an opportunity to broaden my perspective.',
    to: '/personal/travel',
    icon: '&#9992;',
  },
  {
    title: 'Sports',
    description: 'Staying active through running and cycling. Training for goals keeps me disciplined and energized.',
    to: '/personal/sports',
    icon: '&#127939;',
  },
  {
    title: 'Photography',
    description: 'Capturing moments, places, and emotions through the lens. Photography teaches me to see the beauty in everyday life.',
    to: '/personal/photography',
    icon: '&#128247;',
  },
  {
    title: 'Other Hobbies',
    description: 'A collection of other interests that keep me curious and always learning something new.',
    to: '/personal/hobbies',
    icon: '&#127775;',
  },
]
</script>
