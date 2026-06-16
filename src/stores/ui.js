import { defineStore } from 'pinia'
import { ref, markRaw } from 'vue'

export const useUiStore = defineStore('ui', () => {
  const isMobileMenuOpen = ref(false)
  const lightbox = ref({ open: false, images: [], index: 0, originEl: null })

  // Dark mode is permanent - applied once at app start.
  const isDark = ref(true)
  document.documentElement.classList.add('dark')

  function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  function closeMobileMenu() {
    isMobileMenuOpen.value = false
  }

  // originEl (optional): the clicked thumbnail, used by the lightbox to
  // morph open from it (GSAP Flip). markRaw keeps Vue from proxying the node.
  function openLightbox(images, index = 0, originEl = null) {
    lightbox.value = {
      open: true,
      images,
      index,
      originEl: originEl ? markRaw(originEl) : null,
    }
  }

  function closeLightbox() {
    lightbox.value = { open: false, images: [], index: 0, originEl: null }
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
