<template>
  <div class="section-container py-16 md:py-24">
    <SectionHeading title="Projects" subtitle="A selection of products and initiatives I've led" />

    <div class="space-y-20">
      <article
        v-for="(project, idx) in projects"
        :key="project.id"
        class="grid md:grid-cols-2 gap-10 items-center"
        :class="{ 'md:[direction:rtl]': idx % 2 !== 0 }"
      >
        <!-- Image Gallery -->
        <div class="md:[direction:ltr]">
          <div class="relative overflow-hidden rounded-2xl aspect-video bg-dark-100 cursor-pointer group" @click="openLightbox(project, 0)">
            <img
              :src="project.images[0]"
              :alt="`${project.title} screenshot`"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>
          <div v-if="project.images.length > 1" class="grid grid-cols-3 gap-3 mt-3">
            <div
              v-for="(img, i) in project.images.slice(1, 4)"
              :key="i"
              class="aspect-video rounded-xl overflow-hidden bg-dark-100 cursor-pointer group"
              @click="openLightbox(project, i + 1)"
            >
              <img
                :src="img"
                :alt="`${project.title} screenshot ${i + 2}`"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <!-- Details -->
        <div class="md:[direction:ltr] space-y-4">
          <span class="badge">{{ project.role }}</span>
          <h2 class="text-2xl md:text-3xl font-display font-bold text-dark-900">{{ project.title }}</h2>
          <p class="text-dark-600 leading-relaxed">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2 pt-2">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="px-3 py-1 text-xs font-medium rounded-lg bg-dark-100 text-dark-600"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </article>
    </div>

    <LightBox
      :visible="lightbox.visible"
      :images="lightbox.images"
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
const projects = computed(() => store.projects)

const lightbox = reactive({ visible: false, images: [], startIndex: 0 })

function openLightbox(project, index) {
  lightbox.images = project.images
  lightbox.startIndex = index
  lightbox.visible = true
}

onMounted(() => { store.fetchProjects() })
</script>
