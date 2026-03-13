import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import en from '@/locales/en.js'
import pt from '@/locales/pt.js'

const messages = { en, pt }

export const useI18n = defineStore('i18n', () => {
  const locale = ref(localStorage.getItem('locale') || 'en')

  const current = computed(() => messages[locale.value] || messages.en)

  function t(path) {
    const keys = path.split('.')
    let result = current.value
    for (const key of keys) {
      if (result == null) return path
      result = result[key]
    }
    return result ?? path
  }

  function setLocale(lang) {
    locale.value = lang
    localStorage.setItem('locale', lang)
    document.documentElement.lang = lang
  }

  return { locale, t, setLocale }
})
