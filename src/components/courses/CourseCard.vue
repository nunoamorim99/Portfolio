<script setup>
import { useI18n } from 'vue-i18n'
import { useUiStore } from '@/stores/ui'

const { t, tm } = useI18n()

const props = defineProps({
  course: { type: Object, required: true },
})

const ui = useUiStore()

function viewCertificate() {
  ui.openLightbox([props.course.certificateImage], 0)
}
</script>

<template>
  <article class="card flex flex-col p-0 overflow-hidden">
    <button
      class="group relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-inset focus:ring-turquoise"
      :aria-label="t('courses.viewCertificate')" @click="viewCertificate">
      <img :src="course.certificateImage" :alt="t(`courses.items.${course.id}.title`)"
        class="aspect-[3/2] w-full object-cover transition-all duration-500 group-hover:scale-105"
        loading="lazy" />
      <div
        class="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
        <span
          class="scale-90 bg-white p-3 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
          <svg class="h-5 w-5 text-charcoal" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
          </svg>
        </span>
      </div>
    </button>

    <div class="flex flex-1 flex-col p-6">
      <p class="text-xs font-bold uppercase tracking-widest text-charcoal-300 dark:text-charcoal-400">{{ t(`courses.items.${course.id}.provider`) }}</p>
      <h3 class="mt-2 font-serif text-xl text-charcoal dark:text-cream-100">{{
        t(`courses.items.${course.id}.title`) }}</h3>

      <div class="mt-4 flex flex-wrap gap-1.5">
        <span v-for="skill in tm(`courses.items.${course.id}.skills`)" :key="skill" class="badge text-[11px]">
          {{ skill }}
        </span>
      </div>

      <div class="mt-auto pt-6">
        <a :href="course.certificateUrl" target="_blank" rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-turquoise transition-colors hover:text-turquoise-700">
          {{ t('courses.viewCertificate') }}
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </div>
    </div>
  </article>
</template>
