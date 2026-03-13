<template>
  <div class="section-container py-16 md:py-24">
    <SectionHeading :title="t('personalPage.title')" :subtitle="t('personalPage.subtitle')" />

    <div class="max-w-3xl mb-16">
      <p class="text-dark-600 leading-relaxed text-lg">{{ t('personalPage.intro') }}</p>
    </div>

    <div class="grid sm:grid-cols-2 gap-6">
      <router-link
        v-for="hobby in hobbies"
        :key="hobby.key"
        :to="hobby.to"
        class="card group flex flex-col items-start"
      >
        <div class="w-14 h-14 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-600 group-hover:text-white transition-colors">
          <span class="text-2xl" v-html="hobby.icon" />
        </div>
        <h3 class="font-display font-semibold text-xl text-dark-900 mb-2">{{ hobby.title }}</h3>
        <p class="text-dark-500 leading-relaxed mb-4 flex-1">{{ hobby.description }}</p>
        <span class="text-primary-600 font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
          {{ t('common.explore') }}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '@/stores/i18n'
import SectionHeading from '@/components/ui/SectionHeading.vue'

const i18n = useI18n()
const t = (key) => i18n.t(key)

const hobbies = computed(() => {
  const h = i18n.t('personalPage.hobbies')
  return [
    { key: 'travel', ...h.travel, to: '/personal/travel', icon: '&#9992;' },
    { key: 'sports', ...h.sports, to: '/personal/sports', icon: '&#127939;' },
    { key: 'photography', ...h.photography, to: '/personal/photography', icon: '&#128247;' },
    { key: 'other', ...h.other, to: '/personal/hobbies', icon: '&#127775;' },
  ]
})
</script>
