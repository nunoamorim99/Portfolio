<script setup>
import { useI18n } from 'vue-i18n'

defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  image: { type: String, default: '' },
  to: { type: String, required: true },
})

const { t } = useI18n()
</script>

<template>
  <router-link :to="to" class="card group flex flex-col overflow-hidden p-0">
    <div class="relative overflow-hidden">
      <img
        v-if="image"
        :src="image"
        :alt="title"
        class="aspect-[16/10] w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
        loading="lazy"
      />
      <div v-else class="flex aspect-[16/10] w-full items-center justify-center bg-cream-200 dark:bg-charcoal-700">
        <svg class="h-12 w-12 text-charcoal-200 dark:text-charcoal-500" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
        </svg>
      </div>
      <!-- Hover overlay with turquoise accent -->
      <div class="absolute inset-0 bg-turquoise/0 transition-colors duration-300 group-hover:bg-turquoise/10" />
    </div>
    <div class="flex flex-1 flex-col p-6">
      <h3 class="font-serif text-xl text-charcoal group-hover:text-turquoise transition-colors duration-300 dark:text-cream-100">{{ title }}</h3>
      <p v-if="description" class="mt-2 text-sm leading-relaxed text-charcoal-400 dark:text-charcoal-300">{{ description }}</p>
      <div class="mt-auto flex items-center gap-2 pt-5 text-xs font-bold uppercase tracking-widest text-turquoise">
        {{ t('personal.explore') }}
        <svg class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </div>
  </router-link>
</template>
