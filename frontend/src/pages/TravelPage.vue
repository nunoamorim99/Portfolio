<template>
  <div class="section-container py-16 md:py-24">
    <router-link to="/personal" class="inline-flex items-center gap-1 text-sm text-dark-500 hover:text-primary-600 transition-colors mb-6">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
      Back to Personal
    </router-link>

    <SectionHeading title="Travel" subtitle="Places I've explored around the world" />

    <!-- Map -->
    <div class="relative rounded-2xl overflow-hidden border border-dark-200 mb-12 z-0" style="height: 450px">
      <div ref="mapContainer" class="w-full h-full" />
    </div>

    <!-- City list -->
    <h3 class="font-display font-semibold text-xl text-dark-800 mb-6">Cities Visited</h3>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="city in cities"
        :key="city.id"
        class="card cursor-pointer group"
        @click="openCity(city)"
      >
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          </div>
          <div>
            <h4 class="font-semibold text-dark-900">{{ city.name }}</h4>
            <p class="text-sm text-dark-500">{{ city.country }} · {{ city.visitDate }}</p>
          </div>
        </div>
      </div>
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
import { ref, onMounted, reactive, computed, nextTick } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import LightBox from '@/components/ui/LightBox.vue'

const store = usePortfolioStore()
const cities = computed(() => store.travelCities)
const mapContainer = ref(null)
const lightbox = reactive({ visible: false, images: [], startIndex: 0 })

function openCity(city) {
  if (city.photos?.length) {
    lightbox.images = city.photos
    lightbox.startIndex = 0
    lightbox.visible = true
  }
}

async function initMap() {
  const L = await import('leaflet')

  if (!document.querySelector('link[href*="leaflet"]')) {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    document.head.appendChild(link)
  }

  await nextTick()
  await new Promise(r => setTimeout(r, 100))

  const map = L.map(mapContainer.value, {
    scrollWheelZoom: false,
  }).setView([45, 10], 4)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 18,
  }).addTo(map)

  const icon = L.divIcon({
    className: '',
    html: '<div style="width:14px;height:14px;background:#4263eb;border:2.5px solid white;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.3);"></div>',
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  })

  cities.value.forEach(city => {
    L.marker([city.lat, city.lng], { icon })
      .addTo(map)
      .bindPopup(`<strong>${city.name}</strong><br>${city.country}`)
      .on('click', () => openCity(city))
  })
}

onMounted(async () => {
  await store.fetchTravelCities()
  initMap()
})
</script>
