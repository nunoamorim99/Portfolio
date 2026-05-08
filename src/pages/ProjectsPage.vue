<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import { projects } from "@/data/projects";
import { useUiStore } from "@/stores/ui";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const { t } = useI18n();
const ui = useUiStore();
const pageRef = ref(null);
const headerRef = ref(null);
let ctx;

const cardBgs = [
  "bg-cream-50 dark:bg-charcoal-900",
  "bg-cream-100 dark:bg-charcoal-800",
  "bg-cream-200 dark:bg-charcoal-700",
  "bg-cream-50 dark:bg-charcoal-900",
  "bg-cream-100 dark:bg-charcoal-800",
];

function openGallery(images, index) {
  ui.openLightbox(images, index);
}

onMounted(() => {
  ctx = gsap.context(() => {
    // Header: staggered reveal with delay for page transition
    const headerChildren = headerRef.value?.children;
    if (headerChildren?.length) {
      gsap.from(headerChildren, {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      });
    }

    // Mobile cards: scroll-triggered reveal
    const mm = gsap.matchMedia();
    mm.add("(max-width: 1023px)", () => {
      const cards = pageRef.value?.querySelectorAll(".project-card-mobile");
      cards?.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });
    });
  }, pageRef.value);
});

onUnmounted(() => {
  ctx?.revert();
});
</script>

<template>
  <div ref="pageRef">
    <!-- Header -->
    <div class="pt-28 pb-16 lg:pb-12">
      <div ref="headerRef" class="section-container">
        <h1 class="section-title">{{ t("projects.title") }}</h1>
        <p class="section-subtitle">{{ t("projects.subtitle") }}</p>
        <div class="accent-line mt-6" />
      </div>
    </div>

    <!-- ═══════════════════════════════════════ -->
    <!-- DESKTOP: Sticky stacking cards         -->
    <!-- ═══════════════════════════════════════ -->
    <div class="hidden lg:block relative">
      <template v-for="(project, i) in projects" :key="project.id">
        <div
          class="sticky top-20 h-[calc(100vh-5rem)] overflow-hidden"
          :style="{ zIndex: i + 1 }"
          :class="[
            cardBgs[i % cardBgs.length],
            i > 0
              ? 'shadow-[0_-6px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_-6px_30px_rgba(0,0,0,0.3)]'
              : '',
          ]"
        >
          <div class="relative flex items-center justify-center h-full">
            <div class="section-container">
              <div class="grid grid-cols-12 gap-6 xl:gap-12 items-center">
                <!-- Image Grid -->
                <div class="col-span-6" :class="i % 2 !== 0 ? 'order-2' : ''">
                  <div
                    class="grid grid-cols-2 gap-px bg-charcoal-100 dark:bg-charcoal-700 overflow-hidden border border-charcoal-100 dark:border-charcoal-700"
                  >
                    <button
                      v-for="(img, imgIdx) in project.images.slice(0, 4)"
                      :key="imgIdx"
                      class="group relative overflow-hidden bg-white dark:bg-charcoal-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-vermillion"
                      :class="
                        project.images.length === 1
                          ? 'col-span-2'
                          : imgIdx === 0 && project.images.length === 3
                            ? 'col-span-2'
                            : ''
                      "
                      @click="openGallery(project.images, imgIdx)"
                    >
                      <img
                        :src="img"
                        :alt="`${t(`projects.items.${project.id}.title`)} ${imgIdx + 1}`"
                        class="aspect-video w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 grayscale"
                        loading="lazy"
                      />
                      <div
                        class="absolute inset-0 bg-vermillion/0 transition-colors group-hover:bg-vermillion/10"
                      />
                    </button>
                  </div>
                </div>

                <!-- Content -->
                <div :class="i % 2 !== 0 ? 'col-span-6 order-1' : 'col-span-6'">
                  <div class="badge mb-5">
                    {{ t(`projects.items.${project.id}.role`) }}
                  </div>
                  <h3
                    class="font-serif text-display-sm text-charcoal dark:text-cream-100"
                  >
                    {{ t(`projects.items.${project.id}.title`) }}
                  </h3>
                  <p
                    class="mt-4 text-sm xl:text-base leading-relaxed text-charcoal-400 dark:text-charcoal-300 max-w-2xl"
                  >
                    {{ t(`projects.items.${project.id}.description`) }}
                  </p>
                  <div v-if="project.platforms?.length" class="mt-8">
                    <p
                      class="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-charcoal-300 dark:text-charcoal-400"
                    >
                      {{ t("projects.platformsLabel") }}
                    </p>
                    <div class="flex flex-wrap gap-2">
                      <span
                        v-for="platform in project.platforms"
                        :key="platform"
                        class="badge"
                        >{{ t(`projects.platforms.${platform}`) }}</span
                      >
                    </div>
                  </div>
                  <a
                    v-if="project.url"
                    :href="project.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-vermillion transition-colors hover:text-vermillion-700"
                  >
                    {{ t("projects.visitSite") }}
                    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Spacer between cards -->
        <div
          v-if="i < projects.length - 1"
          class="h-[15vh] pointer-events-none"
          aria-hidden="true"
        />
      </template>

      <!-- Final spacer so last card un-sticks naturally -->
      <div class="h-[20vh] pointer-events-none" aria-hidden="true" />
    </div>

    <!-- ═══════════════════════════════════════ -->
    <!-- MOBILE: Vertical card list             -->
    <!-- ═══════════════════════════════════════ -->
    <div class="lg:hidden pb-24">
      <div class="section-container space-y-8">
        <article
          v-for="(project, i) in projects"
          :key="project.id"
          class="project-card-mobile relative border border-charcoal-100 bg-white overflow-hidden dark:border-charcoal-700 dark:bg-charcoal-800"
        >
          <!-- Background number -->
          <span
            class="absolute top-3 right-4 text-[5rem] sm:text-[6rem] font-serif leading-none select-none text-vermillion/[0.08] dark:text-vermillion-500/20 pointer-events-none"
          >
            0{{ i + 1 }}
          </span>

          <!-- Image Grid -->
          <div
            class="relative grid grid-cols-2 gap-px bg-charcoal-100 dark:bg-charcoal-700"
          >
            <button
              v-for="(img, imgIdx) in project.images.slice(0, 4)"
              :key="imgIdx"
              class="group relative overflow-hidden bg-white dark:bg-charcoal-800 focus:outline-none"
              :class="
                project.images.length === 1
                  ? 'col-span-2'
                  : imgIdx === 0 && project.images.length === 3
                    ? 'col-span-2'
                    : ''
              "
              @click="openGallery(project.images, imgIdx)"
            >
              <img
                :src="img"
                :alt="`${t(`projects.items.${project.id}.title`)} ${imgIdx + 1}`"
                class="aspect-video w-full object-cover grayscale"
                loading="lazy"
              />
            </button>
          </div>

          <!-- Content -->
          <div class="relative p-5 sm:p-8">
            <div class="badge mb-4">
              {{ t(`projects.items.${project.id}.role`) }}
            </div>
            <h3
              class="font-serif text-2xl sm:text-display-sm text-charcoal dark:text-cream-100"
            >
              {{ t(`projects.items.${project.id}.title`) }}
            </h3>
            <p
              class="mt-3 text-sm leading-relaxed text-charcoal-400 dark:text-charcoal-300"
            >
              {{ t(`projects.items.${project.id}.description`) }}
            </p>
            <div v-if="project.platforms?.length" class="mt-5 sm:mt-6">
              <p
                class="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-charcoal-300 dark:text-charcoal-400"
              >
                {{ t("projects.platformsLabel") }}
              </p>
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="platform in project.platforms"
                  :key="platform"
                  class="badge text-[10px]"
                  >{{ t(`projects.platforms.${platform}`) }}</span
                >
              </div>
            </div>
            <a
              v-if="project.url"
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-5 sm:mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-vermillion transition-colors hover:text-vermillion-700"
            >
              {{ t("projects.visitSite") }}
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
