<script setup>
import { useI18n } from 'vue-i18n'
import { professionalCertificates, individualCourses } from '@/data/courses'
import CourseCard from '@/components/courses/CourseCard.vue'

const { t } = useI18n()
</script>

<template>
  <div class="pt-28 pb-24">
    <div class="section-container">
      <div class="mb-16">
        <h1 class="section-title">{{ t('courses.title') }}</h1>
        <p class="section-subtitle">{{ t('courses.subtitle') }}</p>
        <div class="accent-line mt-6" />
      </div>

      <section class="mb-20">
        <h2 class="font-serif text-2xl text-charcoal dark:text-cream-100 mb-2">
          {{ t('courses.professionalCertificatesTitle') }}
        </h2>
        <p class="text-sm text-charcoal-300 dark:text-charcoal-400 mb-8">
          {{ t('courses.professionalCertificatesSubtitle') }}
        </p>
        <div class="grid gap-8 sm:grid-cols-2">
          <CourseCard v-for="course in professionalCertificates" :key="course.id" :course="course" />
        </div>
      </section>

      <section>
        <h2 class="font-serif text-2xl text-charcoal dark:text-cream-100 mb-2">
          {{ t('courses.individualCoursesTitle') }}
        </h2>
        <p class="text-sm text-charcoal-300 dark:text-charcoal-400 mb-8">
          {{ t('courses.individualCoursesSubtitle') }}
        </p>
        <div class="grid gap-8 sm:grid-cols-2">
          <CourseCard v-for="course in individualCourses" :key="course.id" :course="course" />
        </div>
      </section>
    </div>
  </div>
</template>
