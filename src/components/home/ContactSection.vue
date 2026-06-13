<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { profile } from '@/data/profile'
import ProfileCard from '@/components/ProfileCard/ProfileCard.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '@/composables/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

const { t } = useI18n()
const sectionRef = ref(null)
const headerRef = ref(null)
const cardRef = ref(null)
let ctx

const handleContact = () => {
  window.location.href = `mailto:${profile.email}`
}

onMounted(() => {
  if (prefersReducedMotion()) return

  ctx = gsap.context(() => {
    // Header elements fade up
    const headerChildren = headerRef.value?.children
    if (headerChildren?.length) {
      gsap.from(headerChildren, {
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
      })
    }

    // ProfileCard scales up dramatically
    gsap.from(cardRef.value, {
      scrollTrigger: {
        trigger: cardRef.value,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      scale: 0.85,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: 'power3.out',
    })
  }, sectionRef.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <section ref="sectionRef" id="contact" class="py-24 lg:py-32 bg-cream-200 dark:bg-charcoal-800">
    <div class="section-container">
      <div ref="headerRef" class="text-center mb-16">
        <h2 class="section-title">{{ t('contact.title') }}</h2>
        <p class="section-subtitle mx-auto">{{ t('contact.subtitle') }}</p>
        <div class="accent-line mt-6 mx-auto" />
      </div>

      <div ref="cardRef" class="flex justify-center">
        <ProfileCard
          :avatar-url="profile.photo"
          :mini-avatar-url="profile.photo"
          :name="profile.name"
          :title="t('hero.role')"
          handle="nunoamorim99"
          :status="t('contact.status')"
          :contact-text="t('contact.button')"
          :show-user-info="true"
          :enable-tilt="true"
          @contact-click="handleContact"
        />
      </div>
    </div>
  </section>
</template>
