<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { visitedCities } from '@/data/travel'
import TravelMap from '@/components/personal/TravelMap.vue'

const { t } = useI18n()

const selectedCityData = ref(null)

const translatedCities = computed(() =>
  visitedCities.map(city => ({
    ...city,
    city: t(`travel.cities.${city.id}.city`),
    country: t(`travel.cities.${city.id}.country`),
    description: t(`travel.cities.${city.id}.description`),
  }))
)

const selectedCity = computed(() => {
  if (!selectedCityData.value) return null
  const raw = selectedCityData.value
  return {
    ...raw,
    city: t(`travel.cities.${raw.id}.city`),
    country: t(`travel.cities.${raw.id}.country`),
    description: t(`travel.cities.${raw.id}.description`),
  }
})

function onMarkerClick(city) {
  selectedCityData.value = visitedCities.find(c => c.id === city.id) || city
}

function closePanel() {
  selectedCityData.value = null
}
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

      <div class="mb-12">
        <h1 class="section-title">{{ t('travel.title') }}</h1>
        <p class="section-subtitle">{{ t('travel.subtitle') }}</p>
        <div class="accent-line mt-6" />
      </div>

      <div class="relative">
        <TravelMap :cities="translatedCities" @marker-click="onMarkerClick" />

        <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 translate-x-4"
          enter-to-class="opacity-100 translate-x-0"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100 translate-x-0"
          leave-to-class="opacity-0 translate-x-4"
        >
          <div
            v-if="selectedCity"
            class="absolute right-4 top-4 z-[1000] w-80 overflow-hidden border border-charcoal-100 bg-white dark:border-charcoal-700 dark:bg-charcoal-800"
          >
            <div class="relative">
              <img :src="selectedCity.photos[0]" :alt="selectedCity.city" class="aspect-video w-full object-cover" />
              <button
                class="absolute right-2 top-2 bg-white p-1.5 text-charcoal transition-colors hover:bg-turquoise hover:text-white"
                aria-label="Close"
                @click="closePanel"
              >
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="p-5">
              <h3 class="font-serif text-xl text-charcoal dark:text-cream-100">{{ selectedCity.city }}</h3>
              <p class="mt-1 text-xs font-bold uppercase tracking-widest text-charcoal-300">{{ selectedCity.country }}</p>
              <p class="mt-3 text-sm leading-relaxed text-charcoal-400 dark:text-charcoal-300">{{ selectedCity.description }}</p>
              <div v-if="selectedCity.photos.length > 1" class="mt-4 grid grid-cols-3 gap-1">
                <img
                  v-for="(photo, i) in selectedCity.photos.slice(1)"
                  :key="i"
                  :src="photo"
                  :alt="`${selectedCity.city} ${i + 2}`"
                  class="aspect-square object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Transition>
      </div>

      <div class="mt-20">
        <h2 class="font-serif text-display-sm text-charcoal dark:text-cream-100">{{ t('travel.visitedCities') }}</h2>
        <div class="mt-8 grid gap-px border border-charcoal-100 dark:border-charcoal-700 sm:grid-cols-2 lg:grid-cols-3">
          <button
            v-for="city in translatedCities"
            :key="city.id"
            class="group flex items-center gap-5 p-5 text-left bg-white transition-colors hover:bg-cream-100 dark:bg-charcoal-800 dark:hover:bg-charcoal-700"
            @click="onMarkerClick(city)"
          >
            <img :src="city.photos[0]" :alt="city.city" class="h-16 w-16 flex-shrink-0 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" loading="lazy" />
            <div>
              <h3 class="font-serif text-lg text-charcoal group-hover:text-turquoise transition-colors dark:text-cream-100">{{ city.city }}</h3>
              <p class="text-xs font-bold uppercase tracking-widest text-charcoal-300 dark:text-charcoal-400">{{ city.country }}</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
