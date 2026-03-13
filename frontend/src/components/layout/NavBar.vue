<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'"
  >
    <nav class="section-container flex items-center justify-between h-16 md:h-20" aria-label="Main navigation">
      <router-link to="/" class="font-display font-bold text-xl md:text-2xl text-dark-900 hover:text-primary-600 transition-colors">
        Nuno<span class="text-primary-600">.</span>
      </router-link>

      <!-- Desktop nav -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in links" :key="link.to">
          <router-link
            :to="link.to"
            class="relative text-sm font-medium text-dark-600 hover:text-dark-900 transition-colors py-2"
            :class="{ '!text-primary-600': isActive(link.to) }"
          >
            {{ link.label }}
            <span
              v-if="isActive(link.to)"
              class="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
            />
          </router-link>
        </li>
      </ul>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden p-2 rounded-lg hover:bg-dark-100 transition-colors"
        :aria-expanded="mobileOpen"
        aria-label="Toggle navigation menu"
        @click="mobileOpen = !mobileOpen"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!mobileOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileOpen" class="md:hidden bg-white/95 backdrop-blur-md border-t border-dark-200 shadow-lg">
        <ul class="section-container py-4 space-y-1">
          <li v-for="link in links" :key="link.to">
            <router-link
              :to="link.to"
              class="block px-4 py-3 rounded-xl text-dark-700 font-medium hover:bg-primary-50 hover:text-primary-700 transition-colors"
              :class="{ 'bg-primary-50 !text-primary-600': isActive(link.to) }"
              @click="mobileOpen = false"
            >
              {{ link.label }}
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </header>

  <!-- Spacer -->
  <div class="h-16 md:h-20" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileOpen = ref(false)
const scrolled = ref(false)

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/courses', label: 'Courses' },
  { to: '/personal', label: 'Personal' },
]

function isActive(to) {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to)
}

function onScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
