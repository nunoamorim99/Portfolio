<script setup>
import { useI18n } from "vue-i18n";
import { sports, achievements } from "@/data/sports";
import { computed, ref, onMounted, onUnmounted } from "vue";
import PhotoGallery from "@/components/shared/PhotoGallery.vue";

const { t } = useI18n();

const sportIcons = {
  football: `<circle cx="12" cy="12" r="10" stroke-width="1.5" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 2l3 7h-6l3-7zm-10 10l7-3v6l-7-3zm20 0l-7-3v6l7-3zm-10 10l-3-7h6l-3 7zm-5.5-14.5l5.5 2.5 5.5-2.5M6.5 16.5l5.5-2.5 5.5 2.5" />`,
  gym: `<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h-1.5a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h1.5m10.5-10.5h1.5a1.5 1.5 0 011.5 1.5v7.5a1.5 1.5 0 01-1.5 1.5h-1.5M9 12h6M6.75 6.75v10.5M17.25 6.75v10.5M3.75 10.5v3M20.25 10.5v3" />`,
};

const groupedAchievements = computed(() => {
  const groups = {};
  achievements.forEach((a) => {
    if (!groups[a.year]) groups[a.year] = [];
    groups[a.year].push(a);
  });
  return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
});

// Drag-to-scroll
const scrollContainer = ref(null);
const isDragging = ref(false);
let dragStartX = 0;
let scrollStartLeft = 0;
let dragVelocity = 0;
let lastDragX = 0;
let momentumRaf = 0;

function onPointerDown(e) {
  const el = scrollContainer.value;
  if (!el) return;
  isDragging.value = true;
  dragStartX = e.clientX;
  scrollStartLeft = el.scrollLeft;
  dragVelocity = 0;
  lastDragX = e.clientX;
  cancelAnimationFrame(momentumRaf);
  el.style.cursor = "grabbing";
  el.style.userSelect = "none";
}

function onPointerMove(e) {
  if (!isDragging.value) return;
  const el = scrollContainer.value;
  if (!el) return;
  const dx = e.clientX - dragStartX;
  el.scrollLeft = scrollStartLeft - dx;
  dragVelocity = e.clientX - lastDragX;
  lastDragX = e.clientX;
}

function onPointerUp() {
  if (!isDragging.value) return;
  isDragging.value = false;
  const el = scrollContainer.value;
  if (!el) return;
  el.style.cursor = "";
  el.style.userSelect = "";

  // Momentum scroll
  let v = -dragVelocity * 2;
  function tick() {
    if (Math.abs(v) < 0.5) return;
    el.scrollLeft += v;
    v *= 0.92;
    momentumRaf = requestAnimationFrame(tick);
  }
  tick();
}

// Scroll-driven reveal via IntersectionObserver
const yearRefs = ref([]);
const visibleYears = ref(new Set());
let observer = null;

function setYearRef(el, index) {
  if (el) yearRefs.value[index] = el;
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const idx = entry.target.dataset.yearIdx;
        if (entry.isIntersecting) {
          visibleYears.value.add(idx);
          visibleYears.value = new Set(visibleYears.value);
        }
      });
    },
    { root: scrollContainer.value, threshold: 0.3 },
  );
  yearRefs.value.forEach((el) => {
    if (el) observer.observe(el);
  });
});

onUnmounted(() => {
  if (observer) observer.disconnect();
  cancelAnimationFrame(momentumRaf);
});

// Timeline line fill progress
const lineFill = ref(0);
function onScroll() {
  const el = scrollContainer.value;
  if (!el) return;
  const maxScroll = el.scrollWidth - el.clientWidth;
  lineFill.value = maxScroll > 0 ? el.scrollLeft / maxScroll : 1;
}
</script>

<template>
  <div class="pt-28 pb-24">
    <div class="section-container">
      <router-link to="/personal" class="back-link">
        <svg
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        {{ t("personal.backToPersonal") }}
      </router-link>

      <div class="mb-16">
        <h1 class="section-title">{{ t("sports.title") }}</h1>
        <p class="section-subtitle">{{ t("sports.subtitle") }}</p>
        <div class="accent-line mt-6" />
      </div>

      <div class="grid gap-8 sm:grid-cols-2">
        <div v-for="sport in sports" :key="sport.id" class="card">
          <div class="flex items-center gap-4 mb-4">
            <svg
              class="h-6 w-6 text-turquoise flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              v-html="sportIcons[sport.icon] || sportIcons.football"
            />
            <h3 class="font-serif text-2xl text-charcoal dark:text-cream-100">
              {{ t(`sports.items.${sport.id}.name`) }}
            </h3>
          </div>
          <p
            class="text-sm leading-relaxed text-charcoal-400 dark:text-charcoal-300"
          >
            {{ t(`sports.items.${sport.id}.description`) }}
          </p>
          <div class="mt-6">
            <PhotoGallery :images="sport.photos" :columns="2" />
          </div>
        </div>
      </div>

      <div class="mt-24">
        <h2
          class="font-serif text-display-sm text-charcoal dark:text-cream-100 text-center"
        >
          {{ t("sports.achievementsTitle") }}
        </h2>
        <div class="accent-line mt-6 mx-auto" />

        <div
          ref="scrollContainer"
          class="timeline-scroll mt-12 overflow-x-auto pb-8 -mx-6 px-6 cursor-grab"
          @pointerdown="onPointerDown"
          @pointermove="onPointerMove"
          @pointerup="onPointerUp"
          @pointerleave="onPointerUp"
          @scroll="onScroll"
        >
          <div class="relative min-w-max py-4">
            <!-- Background track -->
            <div class="absolute top-[22px] left-0 right-0 h-[2px] bg-turquoise/15" />
            <!-- Animated fill line -->
            <div
              class="absolute top-[22px] left-0 h-[2px] bg-turquoise/60 transition-[width] duration-300 ease-out"
              :style="{ width: (lineFill * 100) + '%' }"
            />

            <div class="flex gap-16 px-8">
              <div
                v-for="([year, items], index) in groupedAchievements"
                :key="year"
                :ref="(el) => setYearRef(el, index)"
                :data-year-idx="index"
                class="timeline-year relative flex flex-col items-center"
                :class="{ 'is-visible': visibleYears.has(String(index)) }"
                :style="{ transitionDelay: (index * 120) + 'ms' }"
              >
                <!-- Year dot with pulse -->
                <div class="relative z-10 flex items-start justify-center">
                  <div class="year-dot relative h-3.5 w-3.5 rounded-full bg-turquoise border-[3px] border-cream-50 dark:border-charcoal-900 shadow-sm shadow-turquoise/30">
                    <div
                      class="absolute inset-0 rounded-full bg-turquoise animate-ping opacity-0"
                      :class="{ 'opacity-20': visibleYears.has(String(index)) }"
                      :style="{ animationDelay: (index * 120 + 400) + 'ms', animationIterationCount: '2' }"
                    />
                  </div>
                </div>

                <!-- Year label -->
                <span class="mt-3 text-xs font-bold uppercase tracking-[0.25em] text-turquoise select-none">
                  {{ year }}
                </span>

                <!-- Achievement cards -->
                <div class="mt-5 flex flex-col gap-3 w-64">
                  <div
                    v-for="(achievement, aIdx) in items"
                    :key="achievement.id"
                    class="achievement-card rounded-lg border border-charcoal-100 dark:border-charcoal-700 bg-white dark:bg-charcoal-800 p-4 shadow-sm hover:shadow-md hover:border-turquoise/30 hover:-translate-y-0.5 transition-all duration-300"
                    :style="{ transitionDelay: visibleYears.has(String(index)) ? (aIdx * 80 + 200) + 'ms' : '0ms' }"
                  >
                    <h3 class="font-serif text-sm leading-snug text-charcoal dark:text-cream-100">
                      {{ t(`sports.achievements.${achievement.id}.title`) }}
                    </h3>
                    <p class="mt-2 text-xs text-charcoal-400 dark:text-charcoal-300">
                      {{ achievement.club }}
                    </p>
                    <span class="mt-1 inline-block text-[10px] font-bold uppercase tracking-widest text-turquoise/70">
                      {{ t(`sports.categories.${achievement.category}`) }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Hide scrollbar but keep scrollable */
.timeline-scroll {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.timeline-scroll::-webkit-scrollbar {
  display: none;
}

/* Year column: starts hidden, slides up + fades in */
.timeline-year {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.timeline-year.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Cards: staggered fade-in from below */
.timeline-year .achievement-card {
  opacity: 0;
  transform: translateY(16px);
  transition:
    opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}
.timeline-year.is-visible .achievement-card {
  opacity: 1;
  transform: translateY(0);
}

/* Dot scale-in */
.timeline-year .year-dot {
  transform: scale(0);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.timeline-year.is-visible .year-dot {
  transform: scale(1);
}
</style>
