<template>
  <div class="section-container py-16 md:py-24">
    <SectionHeading title="Courses & Certifications" subtitle="Continuous learning is at the core of my growth" />

    <div class="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
      <div v-for="course in courses" :key="course.id" class="card group">
        <!-- Certificate image -->
        <div
          class="relative aspect-[3/2] rounded-xl overflow-hidden bg-dark-100 mb-5 cursor-pointer"
          @click="openLightbox(course)"
        >
          <img
            :src="course.certificateImg"
            :alt="`${course.title} certificate`"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <span class="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-dark-800 px-4 py-2 rounded-lg text-sm font-medium">
              View Certificate
            </span>
          </div>
        </div>

        <h3 class="font-display font-semibold text-lg text-dark-900 mb-3 leading-snug">
          {{ course.title }}
        </h3>

        <!-- Skills tags -->
        <div class="flex flex-wrap gap-2 mb-5">
          <span v-for="skill in course.skills" :key="skill" class="badge text-xs">{{ skill }}</span>
        </div>

        <!-- External link -->
        <a
          v-if="course.externalLink"
          :href="course.externalLink"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-800 transition-colors"
        >
          View Certificate
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
        </a>
      </div>
    </div>

    <LightBox
      :visible="lightbox.visible"
      :images="lightbox.images"
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
const courses = computed(() => store.courses)

const lightbox = reactive({ visible: false, images: [], startIndex: 0 })

function openLightbox(course) {
  if (!course.certificateImg) return
  lightbox.images = [course.certificateImg]
  lightbox.startIndex = 0
  lightbox.visible = true
}

onMounted(() => { store.fetchCourses() })
</script>
