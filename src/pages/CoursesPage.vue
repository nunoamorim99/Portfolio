<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import {
  professionalCertificates,
  courses,
  courseTracks,
} from "@/data/courses";
import { useUiStore } from "@/stores/ui";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/composables/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const { t } = useI18n();
const ui = useUiStore();
const pageRef = ref(null);
let ctx;

const urlById = Object.fromEntries(courses.map((c) => [c.id, c.certificateUrl]));
const countByCertId = Object.fromEntries(
  courseTracks.filter((tk) => tk.certId).map((tk) => [tk.certId, tk.courseIds.length]),
);

const totalCerts = professionalCertificates.length;
const totalCourses = courses.length;

// Collapsible tracks — first one open by default.
const open = ref(
  Object.fromEntries(courseTracks.map((tk, i) => [tk.id, i === 0])),
);
function toggle(id) {
  open.value[id] = !open.value[id];
}

function viewCert(image, e) {
  ui.openLightbox([image], 0, e?.currentTarget?.querySelector("img"));
}

onMounted(() => {
  if (prefersReducedMotion()) return;
  ctx = gsap.context(() => {
    pageRef.value.querySelectorAll("[data-reveal]").forEach((el) => {
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
      });
    });
  }, pageRef.value);
});

onUnmounted(() => ctx?.revert());
</script>

<template>
  <div ref="pageRef" class="bg-cream-50 pb-24 pt-28 dark:bg-charcoal-900">
    <div class="section-container">
      <!-- Masthead -->
      <div class="mb-16">
        <h1 data-reveal class="section-title">{{ t("courses.title") }}</h1>
        <p data-reveal class="section-subtitle">{{ t("courses.subtitle") }}</p>
        <div data-reveal class="accent-line mt-6" />
        <p
          data-reveal
          class="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-charcoal-400 dark:text-charcoal-300"
        >
          {{ t("courses.summary", { certs: totalCerts, courses: totalCourses }) }}
        </p>
      </div>

      <!-- ───────── FEATURED: Professional Certificates ───────── -->
      <section class="mb-20">
        <div
          data-reveal
          class="mb-8 flex items-end justify-between gap-4 border-b border-charcoal-100 pb-5 dark:border-charcoal-700"
        >
          <div>
            <h2 class="font-serif text-display-sm text-charcoal dark:text-cream-100">
              {{ t("courses.professionalCertificatesTitle") }}
            </h2>
            <p class="mt-2 text-sm text-charcoal-400 dark:text-charcoal-300">
              {{ t("courses.professionalCertificatesSubtitle") }}
            </p>
          </div>
          <span class="shrink-0 text-xs font-bold uppercase tracking-[0.2em] text-charcoal-300 dark:text-charcoal-500">
            {{ String(totalCerts).padStart(2, "0") }}
          </span>
        </div>

        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="cert in professionalCertificates"
            :key="cert.id"
            data-reveal
            class="group flex flex-col overflow-hidden border border-charcoal-100 bg-white dark:border-charcoal-700 dark:bg-charcoal-800"
          >
            <button
              class="relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-inset focus:ring-vermillion"
              :aria-label="t('courses.viewCertificate')"
              @click="viewCert(cert.certificateImage, $event)"
            >
              <img
                :src="cert.certificateImage"
                :alt="t(`courses.items.${cert.id}.title`)"
                class="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </button>
            <div class="flex flex-1 flex-col p-6">
              <div class="flex items-center justify-between gap-3">
                <p class="text-xs font-bold uppercase tracking-widest text-charcoal-300 dark:text-charcoal-400">
                  {{ t(`courses.items.${cert.id}.provider`) }}
                </p>
                <span
                  v-if="countByCertId[cert.id]"
                  class="badge text-[10px] border-vermillion/40 text-vermillion"
                >
                  {{ countByCertId[cert.id] }} {{ t("courses.coursesLabel") }}
                </span>
              </div>
              <h3 class="mt-2 font-serif text-xl text-charcoal dark:text-cream-100">
                {{ t(`courses.items.${cert.id}.title`) }}
              </h3>
              <div class="mt-auto pt-6">
                <a
                  :href="cert.certificateUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-vermillion transition-colors hover:text-vermillion-700"
                >
                  {{ t("courses.viewCertificate") }}
                  <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- ───────── Courses by program (collapsible) ───────── -->
      <section>
        <div data-reveal class="mb-2">
          <h2 class="font-serif text-display-sm text-charcoal dark:text-cream-100">
            {{ t("courses.byProgramTitle") }}
          </h2>
          <p class="mt-2 text-sm text-charcoal-400 dark:text-charcoal-300">
            {{ t("courses.byProgramSubtitle") }}
          </p>
        </div>

        <div class="mt-8 border-t border-charcoal-100 dark:border-charcoal-700">
          <div
            v-for="track in courseTracks"
            :key="track.id"
            data-reveal
            class="border-b border-charcoal-100 dark:border-charcoal-700"
          >
            <button
              class="flex w-full items-center justify-between gap-4 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-vermillion"
              :aria-expanded="open[track.id]"
              @click="toggle(track.id)"
            >
              <span class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span class="font-serif text-xl text-charcoal dark:text-cream-100">
                  {{ t(`courses.tracks.${track.id}`) }}
                </span>
                <span class="text-xs font-bold uppercase tracking-[0.2em] text-charcoal-300 dark:text-charcoal-500">
                  {{ track.courseIds.length }} {{ t("courses.coursesLabel") }}
                </span>
              </span>
              <svg
                class="h-5 w-5 shrink-0 text-charcoal-400 transition-transform duration-300 dark:text-charcoal-300"
                :class="open[track.id] ? 'rotate-180' : ''"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            <!-- Pure-CSS height expand (instant under reduced-motion) -->
            <div
              class="grid transition-[grid-template-rows] duration-300 ease-out"
              :class="open[track.id] ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
            >
              <div class="overflow-hidden">
                <ul class="divide-y divide-charcoal-50 pb-2 dark:divide-charcoal-800">
                  <li
                    v-for="cid in track.courseIds"
                    :key="cid"
                    class="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div class="min-w-0">
                      <p class="font-medium text-charcoal dark:text-cream-100">
                        {{ t(`courses.items.${cid}.title`) }}
                      </p>
                      <p class="mt-0.5 text-xs font-bold uppercase tracking-widest text-charcoal-300 dark:text-charcoal-400">
                        {{ t(`courses.items.${cid}.provider`) }}
                      </p>
                    </div>
                    <a
                      :href="urlById[cid]"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-vermillion transition-colors hover:text-vermillion-700"
                    >
                      {{ t("courses.viewCertificate") }}
                      <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
