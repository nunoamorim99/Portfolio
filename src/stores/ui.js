import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
  const isMobileMenuOpen = ref(false)
  const lightbox = ref({ open: false, images: [], index: 0 })

  // Dark mode is permanent — applied once at app start.
  const isDark = ref(true)
  document.documentElement.classList.add('dark')

  function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  function closeMobileMenu() {
    isMobileMenuOpen.value = false
  }

  function openLightbox(images, index = 0) {
    lightbox.value = { open: true, images, index }
  }

  function closeLightbox() {
    lightbox.value = { open: false, images: [], index: 0 }
  }

  function setLightboxIndex(index) {
    lightbox.value.index = index
  }

  return {
    isMobileMenuOpen,
    lightbox,
    isDark,
    toggleMobileMenu,
    closeMobileMenu,
    openLightbox,
    closeLightbox,
    setLightboxIndex,
  }
})
