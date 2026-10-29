<script setup>
// The Workshop: the projects shown as objects in a 3D room. The canvas sits in
// a sticky stage; one full-height section per stop scrolls over it, and the
// scroll progress through those sections drives the camera (see Experience.ts).
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Experience } from "@/workshop/Experience";
import { STOPS, SKILL_COLORS } from "@/workshop/config";
import { projects } from "@/data/projects";
import { sideProjects } from "@/data/sideProjects";
import { claudeSkills } from "@/data/claudeSkills";
import { profile } from "@/data/profile";
import { getLenis } from "@/lib/scroll";
import CardAction from "@/components/workshop/CardAction.vue";
import { prefersReducedMotion } from "@/composables/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const { t } = useI18n();

// Where each card "lives" in the room, shown in its title bar like a file path.
const CARD_PATHS = {
  pm: "desk/left-screen",
  dev: "desk/right-screen",
  ai: "desk/laptop",
  movize: "work-shelf/orrery",
  "astro-hop": "shelf/rocket",
  nibble: "shelf/brick-phone",
  "beagle-chomp": "shelf/beagle",
  "claude-skills": "ai-shelf/books",
  future: "bookcase/box",
  outro: "door",
};
const pad = (n) => String(n).padStart(2, "0");

// Isometric room for the loader: floor, the two walls, a desk and two shelves.
const ROOM_OUTLINE = [
  "M20 110 L100 150 L180 110 L180 40 L100 0 L20 40 Z", // floor + walls
  "M100 0 L100 70 M20 110 L100 70 L180 110", // back corner + floor edges
  "M124 66 L164 86 L150 93 L110 73 Z M110 73 L110 89 M150 93 L150 109", // desk
  "M118 52 L150 68 M44 58 L76 42 M44 72 L76 56", // shelves
].join(" ");
const reduced = prefersReducedMotion();

const tourRef = ref(null);
const canvasRef = ref(null);
const supported = Experience.isSupported();
const assetsUrl = `${import.meta.env.BASE_URL}3d/`;
const ready = ref(false); // scene loaded, compiled and drawn once
const loaded = ref(0); // real progress, 0..1
const shown = ref(0); // eased progress the loader displays
const failed = ref(false);
const activeIndex = ref(0);
const hover = ref(null);

const movizeProducts = ["mobile-app", "web-app", "movize-website", "web-platform"];
const movizeProduct = ref(movizeProducts[0]);
const productById = Object.fromEntries(projects.map((p) => [p.id, p]));
const skillById = Object.fromEntries(claudeSkills.map((s) => [s.id, s]));
const selectedSkill = ref(claudeSkills[0].id);

const side = Object.fromEntries(sideProjects.map((p) => [p.id, p]));
const show3d = computed(() => supported && !failed.value);

let experience = null;
let trigger = null;
let loaderFrame = 0;
let cardObserver = null;

// Below lg the intro text sits at the top of the screen and the cards at the
// bottom; tell the camera how much of the view each covers so it frames the
// room or the object in the space that's left.
function measureText() {
  if (!experience) return;
  const narrow = window.innerWidth < 1024;
  experience.setTextInsets(
    STOPS.map((stop) => {
      const section = document.getElementById(`stop-${stop.id}`);
      if (!narrow || !section) return { top: 0, bottom: 0 };
      if (stop.id === "intro") {
        const text = section.querySelector(".section-container > div");
        return { top: text ? text.getBoundingClientRect().bottom - section.getBoundingClientRect().top + 16 : 0, bottom: 0 };
      }
      const card = section.querySelector("article");
      return { top: 0, bottom: card ? card.offsetHeight + 40 : 0 }; // + the section's bottom padding and a gap
    }),
  );
}

// The loader eases towards the real progress so it never jumps, and only
// hands over to the scene once it has visibly reached 100%.
function runLoader() {
  return new Promise((resolve) => {
    const step = () => {
      const target = loaded.value;
      shown.value = reduced ? target : shown.value + (target - shown.value) * 0.12;
      if (target >= 1 && shown.value > 0.995) {
        shown.value = 1;
        resolve();
        return;
      }
      loaderFrame = requestAnimationFrame(step);
    };
    step();
  });
}

function stopTitle(id, item) {
  if (id === "movize") return item ? t(`projects.items.${item}.title`) : t("caseStudy.movize.title");
  if (id === "pm" || id === "dev" || id === "ai" || id === "future") return t(`workshop.${id}.title`);
  if (id === "claude-skills") return item ? t(`projects.items.${item}.title`) : t("projects.skillsTitle");
  return t(`projects.items.${id}.title`);
}

const hoverLabel = computed(() => (hover.value ? stopTitle(hover.value.stop, hover.value.item) : ""));

function goToStop(id) {
  const el = document.getElementById(`stop-${id}`);
  if (!el) return;
  const lenis = getLenis();
  if (lenis) lenis.scrollTo(el, { duration: 1.4 });
  else el.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
}

function selectProduct(id) {
  movizeProduct.value = id;
  experience?.setMovizeProduct(id);
}

function selectSkill(id) {
  selectedSkill.value = id;
  experience?.setSkill(id);
}

onMounted(async () => {
  trigger = ScrollTrigger.create({
    trigger: tourRef.value,
    start: "top top",
    end: "bottom bottom",
    onUpdate: (self) => {
      const p = self.progress * (STOPS.length - 1);
      experience?.setProgress(p);
      activeIndex.value = Math.round(p);
    },
  });

  if (!supported) return;
  experience = new Experience({
    canvas: canvasRef.value,
    assetsUrl,
    reducedMotion: reduced,
    // Files are ~90% of the wait; compiling the shaders is the rest.
    onProgress: (v) => (loaded.value = Math.max(loaded.value, v * 0.92)),
    onHover: (h) => (hover.value = h),
    onPick: (stop, item) => {
      if (item && stop === "movize") selectProduct(item);
      if (item && stop === "claude-skills") selectSkill(item);
      goToStop(stop);
    },
  });
  const loader = runLoader();
  try {
    await experience.load();
    experience.setProgress(trigger.progress * (STOPS.length - 1));
    experience.setMovizeProduct(movizeProduct.value);
    experience.setSkill(selectedSkill.value);
    measureText();
    cardObserver = new ResizeObserver(measureText);
    document.querySelectorAll("section[id^=stop-] .section-container > *").forEach((el) => cardObserver.observe(el));
    window.addEventListener("resize", measureText);
    loaded.value = 1;
    await loader;
    ready.value = true;
  } catch (err) {
    console.error("[workshop] failed to load the 3D scene", err);
    cancelAnimationFrame(loaderFrame);
    failed.value = true;
  }
});

onUnmounted(() => {
  cancelAnimationFrame(loaderFrame);
  cardObserver?.disconnect();
  window.removeEventListener("resize", measureText);
  trigger?.kill();
  experience?.dispose();
  experience = null;
});
</script>

<template>
  <div class="bg-charcoal-900 text-cream-100">
    <div ref="tourRef" class="relative">
      <!-- ───────── Sticky stage: the 3D room ───────── -->
      <div class="sticky top-0 h-[100svh] w-full overflow-hidden">
        <canvas
          v-if="show3d"
          ref="canvasRef"
          class="block h-full w-full transition-opacity duration-1000 motion-reduce:transition-none"
          :class="ready ? 'opacity-100' : 'opacity-0'"
          aria-hidden="true"
        />

        <!-- Loader: the room's outline draws itself in where the room will appear -->
        <Transition name="loader">
          <div
            v-if="show3d && !ready"
            class="absolute inset-0 flex items-end justify-center pb-[14svh] lg:items-center lg:justify-end lg:pb-0 lg:pr-[16%]"
          >
            <div
              class="w-72"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              :aria-valuenow="Math.round(shown * 100)"
              :aria-label="t('workshop.loading')"
            >
              <svg viewBox="-4 -4 208 168" class="w-full" fill="none" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">
                <path :d="ROOM_OUTLINE" class="stroke-charcoal-700" stroke-width="1" />
                <path
                  :d="ROOM_OUTLINE"
                  class="stroke-turquoise"
                  stroke-width="1.5"
                  pathLength="1"
                  stroke-dasharray="1"
                  :stroke-dashoffset="1 - shown"
                />
              </svg>
              <div class="mt-5 flex items-baseline justify-between gap-4">
                <p class="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.25em] text-charcoal-300">{{ t("workshop.loading") }}</p>
                <p class="font-serif text-2xl tabular-nums text-cream-100">{{ Math.round(shown * 100) }}%</p>
              </div>
            </div>
          </div>
        </Transition>

        <!-- No WebGL (or the scene failed): a still of the room in its place -->
        <img
          v-if="!show3d"
          :src="`${assetsUrl}poster.webp`"
          :alt="t('workshop.posterAlt')"
          width="1600"
          height="1000"
          class="absolute inset-x-0 top-[38%] h-[52%] w-full object-contain lg:inset-y-0 lg:left-auto lg:right-0 lg:h-full lg:w-[64%] lg:pr-10"
        />
        <div v-if="!show3d" class="absolute inset-x-0 top-28 section-container">
          <p class="max-w-md text-sm text-charcoal-300">
            {{ t("workshop.unavailable") }}
            <router-link to="/projects/all" class="text-turquoise underline-offset-4 hover:underline">
              {{ t("workshop.listLink") }}
            </router-link>
          </p>
        </div>

        <!-- Hover label follows the pointer -->
        <div
          v-if="hover"
          class="pointer-events-none absolute z-20 border border-turquoise/60 bg-charcoal-900/90 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-cream-100"
          :style="{ left: `${hover.x + 16}px`, top: `${hover.y + 16}px` }"
        >
          {{ hoverLabel }}
        </div>

        <!-- Stop dots -->
        <nav
          class="absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-3 md:flex"
          :aria-label="t('workshop.stopsNav')"
        >
          <button
            v-for="(stop, i) in STOPS"
            :key="stop.id"
            type="button"
            class="group flex items-center justify-end gap-3"
            :aria-label="stop.id === 'intro' || stop.id === 'outro' ? t('workshop.kicker') : stopTitle(stop.id)"
            :aria-current="activeIndex === i ? 'step' : undefined"
            @click="goToStop(stop.id)"
          >
            <span
              class="block h-2 w-2 rounded-full transition-all duration-300"
              :class="activeIndex === i ? 'scale-150 bg-turquoise' : 'bg-charcoal-500 group-hover:bg-cream-300'"
            />
          </button>
        </nav>
      </div>

      <!-- ───────── One section per stop, scrolling over the stage ───────── -->
      <div class="pointer-events-none relative -mt-[100svh]">
        <section
          v-for="(stop, i) in STOPS"
          :id="`stop-${stop.id}`"
          :key="stop.id"
          class="flex min-h-[100svh] lg:items-center"
          :class="stop.id === 'intro' ? 'items-start pt-28 lg:pt-0' : 'items-end pb-6 lg:pb-0'"
        >
          <div class="section-container w-full">
            <!-- Intro -->
            <div v-if="stop.id === 'intro'" class="pointer-events-auto max-w-lg">
              <p class="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-turquoise">{{ t("workshop.kicker") }}</p>
              <h1 class="font-serif text-display-md text-cream-100">{{ t("workshop.title") }}</h1>
              <p class="mt-4 text-lg text-charcoal-300">{{ t("workshop.intro") }}</p>
              <div class="accent-line mt-6" />
              <p class="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-charcoal-400">{{ t("workshop.scrollHint") }}</p>
            </div>

            <!-- Every other stop: a card styled like one of the room's screens -->
            <article
              v-else
              class="screen pointer-events-auto w-full max-w-md"
              :class="{ 'is-active': activeIndex === i }"
            >
              <header class="screen-bar" aria-hidden="true">
                <span class="screen-lights"><i /><i /><i /></span>
                <span class="truncate">~/workshop/{{ CARD_PATHS[stop.id] }}</span>
                <span class="ml-auto tabular-nums">{{ pad(i) }} / {{ pad(STOPS.length - 1) }}</span>
              </header>

              <div class="screen-body">
                <!-- Movize: the orrery -->
                <template v-if="stop.id === 'movize'">
                  <p class="kicker">{{ t("workshop.deskKicker") }}</p>
                  <h2 class="card-title">{{ t("caseStudy.movize.title") }}</h2>
                  <p class="card-body">{{ t("caseStudy.movize.tagline") }}</p>
                  <p class="card-extra card-label">{{ t("workshop.products") }}</p>
                  <div class="segmented" role="tablist">
                    <button
                      v-for="id in movizeProducts"
                      :key="id"
                      type="button"
                      role="tab"
                      class="segment"
                      :aria-selected="movizeProduct === id"
                      @click="selectProduct(id)"
                    >
                      <span class="led" aria-hidden="true" />
                      {{ t(`projects.items.${id}.title`).replace("Movize ", "") }}
                    </button>
                  </div>
                  <p class="card-extra mt-4 line-clamp-3 text-sm text-charcoal-300">{{ t(`projects.items.${movizeProduct}.description`) }}</p>
                  <ul class="card-extra chips">
                    <li v-for="tech in productById[movizeProduct].tech.slice(0, 4)" :key="tech" class="chip">{{ tech }}</li>
                  </ul>
                  <div class="card-actions">
                    <CardAction to="/projects/movize" primary>{{ t("projects.viewCaseStudy") }}</CardAction>
                  </div>
                </template>

                <!-- Roles: PM screen, dev screen, AI laptop -->
                <template v-else-if="stop.id === 'pm' || stop.id === 'dev' || stop.id === 'ai'">
                  <p class="kicker">{{ t(`workshop.${stop.id}.kicker`) }}</p>
                  <h2 class="card-title">{{ t(`workshop.${stop.id}.title`) }}</h2>
                  <p class="card-body">{{ t(`workshop.${stop.id}.body`) }}</p>
                  <div class="card-actions">
                    <CardAction v-if="stop.id === 'pm'" to="/#experience" primary>{{ t("workshop.pm.cta") }}</CardAction>
                    <CardAction v-else-if="stop.id === 'dev'" :href="profile.github" icon="external" primary>{{ t("workshop.dev.cta") }}</CardAction>
                    <CardAction v-else to="/projects/claude-skills" primary>{{ t("workshop.ai.cta") }}</CardAction>
                  </div>
                </template>

                <!-- Side projects on the shelves: playing is the main action -->
                <template v-else-if="side[stop.id]">
                  <p class="kicker">{{ stop.id === "beagle-chomp" ? t("workshop.gameKicker") : t("workshop.experimentKicker") }}</p>
                  <h2 class="card-title">{{ t(`projects.items.${stop.id}.title`) }}</h2>
                  <p class="card-body">{{ t(`projects.items.${stop.id}.tagline`) }}</p>
                  <ul class="card-extra chips">
                    <li v-for="tech in side[stop.id].tech.slice(0, 4)" :key="tech" class="chip">{{ tech }}</li>
                  </ul>
                  <div class="card-actions">
                    <CardAction v-if="side[stop.id].liveUrl" :href="side[stop.id].liveUrl" icon="play" primary>{{ t("projects.playLive") }}</CardAction>
                    <CardAction :to="`/projects/${stop.id}`" :primary="!side[stop.id].liveUrl">{{ t("projects.viewCaseStudy") }}</CardAction>
                  </div>
                </template>

                <!-- Claude Code skills: one book per skill, like the orrery's planets -->
                <template v-else-if="stop.id === 'claude-skills'">
                  <p class="kicker">{{ t("workshop.toolsKicker") }}</p>
                  <h2 class="card-title">{{ t("projects.skillsTitle") }}</h2>
                  <div class="segmented mt-4" role="tablist">
                    <button
                      v-for="skill in claudeSkills"
                      :key="skill.id"
                      type="button"
                      role="tab"
                      class="segment"
                      :aria-selected="selectedSkill === skill.id"
                      @click="selectSkill(skill.id)"
                    >
                      <span class="spine" :style="{ background: SKILL_COLORS[skill.id] }" aria-hidden="true" />
                      {{ t(`projects.items.${skill.id}.title`) }}
                    </button>
                  </div>
                  <p class="mt-4 text-sm font-bold text-cream-100">{{ t(`projects.items.${selectedSkill}.tagline`) }}</p>
                  <p class="card-extra mt-2 line-clamp-3 text-sm text-charcoal-300">{{ t(`projects.items.${selectedSkill}.description`) }}</p>
                  <ul class="card-extra chips">
                    <li v-for="tech in skillById[selectedSkill].tech.slice(0, 4)" :key="tech" class="chip">{{ tech }}</li>
                  </ul>
                  <div class="card-actions">
                    <CardAction to="/projects/claude-skills" primary>{{ t("projects.viewCaseStudy") }}</CardAction>
                    <CardAction :href="skillById[selectedSkill].repoUrl" icon="source">{{ t("projects.viewSource") }}</CardAction>
                  </div>
                </template>

                <!-- Future box -->
                <template v-else-if="stop.id === 'future'">
                  <p class="kicker">{{ t("workshop.future.kicker") }}</p>
                  <h2 class="card-title">{{ t("workshop.future.title") }}</h2>
                  <p class="card-body">{{ t("workshop.future.body") }}</p>
                  <p class="mt-5 font-mono text-[11px] text-charcoal-400">
                    <span class="text-turquoise">$</span> git checkout -b next-project<span class="caret" aria-hidden="true" />
                  </p>
                </template>

                <!-- Outro -->
                <template v-else-if="stop.id === 'outro'">
                  <h2 class="card-title !mt-0">{{ t("workshop.outro.title") }}</h2>
                  <p class="card-body">{{ t("workshop.outro.body") }}</p>
                  <div class="card-actions">
                    <CardAction to="/#contact" primary>{{ t("workshop.outro.contact") }}</CardAction>
                    <CardAction to="/projects/all">{{ t("workshop.listLink") }}</CardAction>
                  </div>
                </template>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loader-leave-active {
  transition: opacity 0.6s ease;
}
.loader-leave-to {
  opacity: 0;
}
@media (prefers-reduced-motion: reduce) {
  .loader-leave-active {
    transition: none;
  }
}
/* ── Cards: each one is a small screen, like the monitors in the room ── */
.screen {
  @apply relative overflow-hidden rounded-md border border-white/[0.08];
  background: linear-gradient(180deg, rgba(22, 26, 30, 0.9), rgba(12, 13, 14, 0.92));
  backdrop-filter: blur(14px);
  box-shadow:
    0 30px 80px -30px rgba(0, 0, 0, 0.85),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  opacity: 0;
  transform: translateY(14px);
  transition:
    opacity 0.5s ease,
    transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}
.screen.is-active {
  opacity: 1;
  transform: none;
}
@media (min-width: 1024px) {
  .screen:not(.is-active) {
    opacity: 0.22;
  }
}
@media (prefers-reduced-motion: reduce) {
  .screen {
    transition: none;
    transform: none;
  }
}

.screen-bar {
  @apply flex h-8 items-center gap-3 border-b border-white/[0.06] px-4 font-mono text-[10px] text-charcoal-400;
}
.screen-lights {
  @apply flex shrink-0 gap-1.5;
}
.screen-lights i {
  @apply block h-1.5 w-1.5 rounded-full bg-charcoal-600 transition-colors duration-500;
}
.is-active .screen-lights i:first-child {
  @apply bg-turquoise;
  box-shadow: 0 0 6px rgba(20, 184, 166, 0.9);
}
.screen-body {
  @apply p-6 lg:p-7;
}

.kicker {
  @apply text-[11px] font-bold uppercase tracking-[0.25em] text-turquoise;
}
.card-title {
  @apply mt-3 font-serif text-3xl text-cream-100 lg:text-4xl;
}
.card-body {
  @apply mt-3 text-base text-charcoal-300;
}
.card-label {
  @apply mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-charcoal-400;
}
.card-actions {
  @apply mt-6 flex flex-wrap gap-2.5;
}

/* Tabs: a segmented control with a status light on the selected one. */
.segmented {
  @apply mt-2 flex flex-wrap gap-1 rounded-[5px] border border-white/[0.06] bg-black/30 p-1;
}
.segment {
  @apply inline-flex items-center gap-2 rounded-[3px] px-2.5 py-1.5 text-xs font-medium text-charcoal-300 transition-colors hover:text-cream-100;
}
.segment[aria-selected="true"] {
  @apply bg-white/[0.07] text-cream-100;
}
.segment:focus-visible {
  @apply outline outline-2 outline-offset-1 outline-turquoise;
}
.led {
  @apply block h-1.5 w-1.5 rounded-full bg-charcoal-600 transition-colors;
}
.segment[aria-selected="true"] .led {
  @apply bg-turquoise;
  box-shadow: 0 0 6px rgba(20, 184, 166, 0.9);
}
.spine {
  @apply block h-3 w-1.5 rounded-[1px] opacity-60 transition-opacity;
}
.segment[aria-selected="true"] .spine {
  @apply opacity-100;
}

.chips {
  @apply mt-4 flex flex-wrap gap-1.5;
}
.chip {
  @apply rounded-[3px] border border-white/10 bg-white/[0.02] px-1.5 py-0.5 font-mono text-[10px] text-charcoal-300;
}

.caret {
  @apply ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 bg-turquoise;
  animation: caret 1.1s steps(1) infinite;
}
@keyframes caret {
  50% {
    opacity: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  .caret {
    animation: none;
  }
}

/* Short phone screens: the card sits over the bottom of the room, so keep it
   to the essentials and leave the object room above it. */
@media (max-width: 1023px) and (max-height: 760px) {
  .card-extra {
    display: none;
  }
  .screen-body {
    @apply p-5;
  }
  .screen-bar {
    @apply h-7;
  }
  .card-title {
    @apply mt-2 text-2xl;
  }
  .card-body {
    @apply mt-2 text-sm;
  }
  .card-actions {
    @apply mt-4;
  }
}
</style>
