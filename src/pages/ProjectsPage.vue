<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useI18n } from "vue-i18n";
import { projects, projectGroups } from "@/data/projects";
import { movizeCase } from "@/data/caseStudyMovize";
import { sideProjects } from "@/data/sideProjects";
import { useUiStore } from "@/stores/ui";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/composables/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const { t } = useI18n();
const ui = useUiStore();
const pageRef = ref(null);
let ctx;

const byId = Object.fromEntries(projects.map((p) => [p.id, p]));
const riderApps = computed(() =>
  projectGroups.riderApps.map((id) => byId[id]).filter(Boolean),
);
const connect = computed(() => byId[projectGroups.connectId]);

// Modules come from the same source as the case study, so both pages
// always show the exact same set (incl. in-development ones).
const modules = movizeCase.modules;

// Standalone projects (e.g. Astro Hop), kept out of the Movize data.
const astroHop = sideProjects.find((p) => p.id === "astro-hop");

function openGallery(images, index, e) {
  ui.openLightbox(images, index, e?.currentTarget?.querySelector("img"));
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
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    });
  }, pageRef.value);
});

onUnmounted(() => ctx?.revert());
</script>

<template>
  <div ref="pageRef" class="bg-cream-50 dark:bg-charcoal-900">
    <!-- ───────── MASTHEAD ───────── -->
    <header class="section-container pb-12 pt-28 lg:pb-16">
      <p data-reveal class="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-turquoise">
        {{ t("projects.title") }}
      </p>
      <h1 data-reveal class="section-title">{{ t("projects.selectedWork") }}</h1>
      <p data-reveal class="mt-4 max-w-2xl text-lg text-charcoal-500 dark:text-charcoal-300">
        {{ t("projects.selectedWorkSubtitle") }}
      </p>
      <div data-reveal class="accent-line mt-6" />
    </header>

    <!-- ───────── MOVIZE — flagship ───────── -->
    <section class="section-container pb-10 lg:pb-14">
      <p data-reveal class="text-xs font-bold uppercase tracking-[0.2em] text-turquoise">
        {{ t("projects.movizeKicker") }}
      </p>
      <h2 data-reveal class="mt-3 font-serif text-display-md text-charcoal dark:text-cream-100">
        {{ t("caseStudy.movize.title") }}
      </h2>
      <p data-reveal class="mt-4 max-w-2xl font-serif text-lg text-charcoal-500 dark:text-charcoal-300 lg:text-xl">
        {{ t("caseStudy.movize.tagline") }}
      </p>
      <div data-reveal class="mt-6 flex flex-wrap items-center gap-3">
        <span class="badge">{{ t("caseStudy.movize.role") }}</span>
        <span class="badge">{{ t("caseStudy.movize.period") }}</span>
        <router-link
          to="/projects/movize"
          class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-turquoise transition-colors hover:text-turquoise-700"
        >
          {{ t("projects.readCaseStudy") }}
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </router-link>
      </div>
    </section>

    <!-- ───────── RIDER APPS ───────── -->
    <section class="section-container pb-20 lg:pb-28">
      <div
        data-reveal
        class="mb-10 flex items-end justify-between gap-4 border-b border-charcoal-100 pb-5 dark:border-charcoal-700"
      >
        <h2 class="font-serif text-display-sm text-charcoal dark:text-cream-100">
          {{ t("projects.riderApps") }}
        </h2>
        <span class="text-xs font-bold uppercase tracking-[0.2em] text-charcoal-300 dark:text-charcoal-500">
          {{ String(riderApps.length).padStart(2, "0") }}
        </span>
      </div>

      <div class="grid gap-8 lg:grid-cols-2">
        <article
          v-for="proj in riderApps"
          :key="proj.id"
          data-reveal
          class="group flex flex-col overflow-hidden border border-charcoal-100 bg-white dark:border-charcoal-700 dark:bg-charcoal-800"
        >
          <button
            class="group/img block w-full overflow-hidden bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-turquoise dark:bg-charcoal-800"
            @click="openGallery(proj.images, 0, $event)"
          >
            <img
              :src="proj.images[0]"
              :alt="t(`projects.items.${proj.id}.title`)"
              class="aspect-video w-full object-cover grayscale transition-all duration-500 group-hover/img:scale-105 group-hover/img:grayscale-0"
              loading="lazy"
            />
          </button>
          <div class="flex flex-1 flex-col p-6 lg:p-8">
            <h3 class="font-serif text-2xl text-charcoal dark:text-cream-100">
              {{ t(`projects.items.${proj.id}.title`) }}
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-charcoal-500 line-clamp-4 dark:text-charcoal-300">
              {{ t(`projects.items.${proj.id}.description`) }}
            </p>
            <div class="mt-auto pt-6">
              <div v-if="proj.platforms?.length" class="flex flex-wrap gap-1.5">
                <span v-for="p in proj.platforms" :key="p" class="badge text-[10px]">
                  {{ t(`projects.platforms.${p}`) }}
                </span>
              </div>
              <a
                v-if="proj.url"
                :href="proj.url"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-turquoise transition-colors hover:text-turquoise-700"
              >
                {{ t("projects.visitSite") }}
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- ───────── MOVIZE CONNECT ───────── -->
    <section class="bg-cream-100 py-20 dark:bg-charcoal-800 lg:py-28">
      <div class="section-container">
        <div class="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div class="lg:col-span-5">
            <p data-reveal class="text-xs font-bold uppercase tracking-[0.2em] text-turquoise">
              {{ t("projects.operatorPlatform") }}
            </p>
            <h2 data-reveal class="mt-4 font-serif text-display-sm text-charcoal dark:text-cream-100">
              {{ t(`projects.items.${connect.id}.title`) }}
            </h2>
            <div data-reveal class="accent-line mt-6" />
            <p data-reveal class="mt-6 text-base leading-relaxed text-charcoal-500 line-clamp-6 dark:text-charcoal-300">
              {{ t(`projects.items.${connect.id}.description`) }}
            </p>
            <router-link
              data-reveal
              to="/projects/movize"
              class="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-turquoise transition-colors hover:text-turquoise-700"
            >
              {{ t("projects.readCaseStudy") }}
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </router-link>
          </div>
          <div data-reveal class="lg:col-span-7">
            <button
              class="group block w-full overflow-hidden border border-charcoal-100 focus:outline-none focus:ring-2 focus:ring-turquoise dark:border-charcoal-700"
              @click="openGallery(connect.images, 0, $event)"
            >
              <img
                :src="connect.images[0]"
                :alt="t(`projects.items.${connect.id}.title`)"
                class="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </button>
          </div>
        </div>

        <!-- Modules -->
        <div
          data-reveal
          class="mb-10 mt-16 flex items-end justify-between gap-4 border-b border-charcoal-200/70 pb-5 dark:border-charcoal-600 lg:mt-20"
        >
          <h3 class="font-serif text-2xl text-charcoal dark:text-cream-100">
            {{ t("projects.modules") }}
          </h3>
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-charcoal-300 dark:text-charcoal-500">
            {{ String(modules.length).padStart(2, "0") }}
          </span>
        </div>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="mod in modules"
            :key="mod.id"
            data-reveal
            class="group flex flex-col overflow-hidden border border-charcoal-100 bg-cream-50 dark:border-charcoal-700 dark:bg-charcoal-900"
          >
            <button
              v-if="mod.image"
              class="block overflow-hidden focus:outline-none focus:ring-2 focus:ring-inset focus:ring-turquoise"
              @click="openGallery([mod.image], 0, $event)"
            >
              <img
                :src="mod.image"
                :alt="t(`caseStudy.movize.modules.${mod.id}.name`)"
                class="aspect-video w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                loading="lazy"
              />
            </button>
            <div
              v-else
              class="flex aspect-video items-center justify-center border-b border-dashed border-charcoal-200 dark:border-charcoal-600"
            >
              <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal-300 dark:text-charcoal-500">
                {{ t("caseStudy.movize.ecosystem.inDev") }}
              </span>
            </div>
            <div class="flex flex-1 flex-col p-6">
              <div class="flex flex-wrap items-center gap-2">
                <h4 class="font-serif text-lg text-charcoal dark:text-cream-100">
                  {{ t(`caseStudy.movize.modules.${mod.id}.name`) }}
                </h4>
                <span
                  v-if="mod.inDev"
                  class="badge text-[10px] border-turquoise/40 text-turquoise"
                >
                  {{ t("caseStudy.movize.ecosystem.inDev") }}
                </span>
              </div>
              <p class="mt-2 text-sm leading-relaxed text-charcoal-500 line-clamp-3 dark:text-charcoal-300">
                {{ t(`caseStudy.movize.modules.${mod.id}.body`) }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ───────── ASTRO HOP (standalone project) ───────── -->
    <section class="section-container py-20 lg:py-28">
      <div data-reveal class="mb-10">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-turquoise">
          {{ t("projects.astroHopKicker") }}
        </p>
        <h2 class="mt-3 font-serif text-display-md text-charcoal dark:text-cream-100">
          {{ t(`projects.items.${astroHop.id}.title`) }}
        </h2>
        <div class="accent-line mt-6" />
      </div>

      <div class="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div class="lg:col-span-7">
          <p data-reveal class="font-serif text-lg text-charcoal-600 dark:text-charcoal-200 lg:text-xl">
            {{ t(`projects.items.${astroHop.id}.tagline`) }}
          </p>
          <p data-reveal class="mt-5 text-base leading-relaxed text-charcoal-500 dark:text-charcoal-300">
            {{ t(`projects.items.${astroHop.id}.description`) }}
          </p>
          <div data-reveal class="mt-6">
            <p class="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-charcoal-300 dark:text-charcoal-400">
              {{ t("projects.builtWith") }}
            </p>
            <div class="flex flex-wrap gap-1.5">
              <span v-for="tech in astroHop.tech" :key="tech" class="badge text-[10px]">{{ tech }}</span>
            </div>
          </div>
          <div data-reveal class="mt-8 flex flex-wrap items-center gap-4">
            <a :href="astroHop.liveUrl" target="_blank" rel="noopener noreferrer" class="btn-primary">
              {{ t("projects.playLive") }}
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <router-link
              to="/projects/astro-hop"
              class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-turquoise transition-colors hover:text-turquoise-700"
            >
              {{ t("projects.viewCaseStudy") }}
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </router-link>
          </div>
        </div>
        <div data-reveal class="lg:col-span-5">
          <button
            class="group mx-auto block w-full max-w-sm overflow-hidden border border-charcoal-100 focus:outline-none focus:ring-2 focus:ring-turquoise dark:border-charcoal-700"
            @click="openGallery([astroHop.image], 0, $event)"
          >
            <img
              :src="astroHop.image"
              :alt="t(`projects.items.${astroHop.id}.title`)"
              class="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
