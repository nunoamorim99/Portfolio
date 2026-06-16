<script setup>
import HeroSection from '@/components/home/HeroSection.vue'
import StatsSection from '@/components/home/StatsSection.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import InterestsSection from '@/components/home/InterestsSection.vue'
import EducationSection from '@/components/home/EducationSection.vue'
import ExperienceSection from '@/components/home/ExperienceSection.vue'
import SkillsSection from '@/components/home/SkillsSection.vue'
import ContactSection from '@/components/home/ContactSection.vue'
import SectionNav from '@/components/layout/SectionNav.vue'
</script>

<template>
  <div>
    <SectionNav />
    <HeroSection />
    <StatsSection />
    <AboutSection />
    <EducationSection />
    <InterestsSection />
    <ExperienceSection />
    <SkillsSection />
    <ContactSection />
  </div>
</template>
