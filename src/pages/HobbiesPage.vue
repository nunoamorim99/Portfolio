<script setup>
import { useI18n } from 'vue-i18n'
import { hobbies } from '@/data/hobbies'

const { t } = useI18n()
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
        <h1 class="section-title">{{ t('hobbies.title') }}</h1>
        <p class="section-subtitle">{{ t('hobbies.subtitle') }}</p>
        <div class="accent-line mt-6" />
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="hobby in hobbies" :key="hobby.id" class="card group overflow-hidden p-0">
          <div class="relative overflow-hidden">
            <img
              :src="hobby.image"
              :alt="t(`hobbies.items.${hobby.id}.title`)"
              class="aspect-[4/3] w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-turquoise/0 transition-colors duration-300 group-hover:bg-turquoise/10" />
          </div>
          <div class="p-6">
            <h3 class="font-serif text-xl text-charcoal dark:text-cream-100">{{ t(`hobbies.items.${hobby.id}.title`) }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-charcoal-400 dark:text-charcoal-300">{{ t(`hobbies.items.${hobby.id}.description`) }}</p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
