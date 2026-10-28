<script setup>
// The Workshop: the projects shown as objects in a 3D room. The canvas sits in
// a sticky stage; one full-height section per stop scrolls over it, and the
// scroll progress through those sections drives the camera (see Experience.ts).
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Experience } from "@/workshop/Experience";
import { STOPS } from "@/workshop/config";
import { sideProjects } from "@/data/sideProjects";
import { claudeSkills } from "@/data/claudeSkills";
import { profile } from "@/data/profile";
import { getLenis } from "@/lib/scroll";
import { prefersReducedMotion } from "@/composables/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const { t } = useI18n();
const reduced = prefersReducedMotion();

const tourRef = ref(null);
const canvasRef = ref(null);
const supported = Experience.isSupported();
const loading = ref(supported);
const loaded = ref(0);
const failed = ref(false);
const activeIndex = ref(0);
const hover = ref(null);

const movizeProducts = ["mobile-app", "web-app", "movize-website", "web-platform"];
const movizeProduct = ref(movizeProducts[0]);

const side = Object.fromEntries(sideProjects.map((p) => [p.id, p]));
const show3d = computed(() => supported && !failed.value);

let experience = null;
let trigger = null;

function stopTitle(id, product) {
  if (id === "movize") return product ? t(`projects.items.${product}.title`) : t("caseStudy.movize.title");
  if (id === "pm" || id === "dev" || id === "ai" || id === "future") return t(`workshop.${id}.title`);
  if (id === "claude-skills") return t("projects.skillsTitle");
  return t(`projects.items.${id}.title`);
}

const hoverLabel = computed(() => (hover.value ? stopTitle(hover.value.stop, hover.value.product) : ""));

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
    assetsUrl: `${import.meta.env.BASE_URL}3d/`,
    reducedMotion: reduced,
    onProgress: (v) => (loaded.value = v),
    onHover: (h) => (hover.value = h),
    onPick: (stop, product) => {
      if (product) selectProduct(product);
      goToStop(stop);
    },
  });
  try {
    await experience.load();
    experience.setProgress(trigger.progress * (STOPS.length - 1));
    experience.setMovizeProduct(movizeProduct.value);
  } catch (err) {
    console.error("[workshop] failed to load the 3D scene", err);
    failed.value = true;
  } finally {
    loading.value = false;
  }
});

onUnmounted(() => {
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
        <canvas v-if="show3d" ref="canvasRef" class="block h-full w-full" aria-hidden="true" />

        <div
          v-if="loading"
          class="absolute inset-0 grid place-items-center bg-charcoal-900"
          role="status"
          aria-live="polite"
        >
          <div class="w-56 text-center">
            <p class="text-xs font-bold uppercase tracking-[0.25em] text-charcoal-300">
              {{ t("workshop.loading") }}
            </p>
            <div class="mt-4 h-px w-full bg-charcoal-700">
              <div class="h-px bg-turquoise transition-[width] duration-300" :style="{ width: `${loaded * 100}%` }" />
            </div>
          </div>
        </div>

        <div v-if="!show3d" class="absolute inset-x-0 top-28 section-container">
          <p class="max-w-md text-sm text-charcoal-300">
            {{ t("workshop.unavailable") }}
            <router-link to="/projects" class="text-turquoise underline-offset-4 hover:underline">
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

            <!-- Every other stop: a card -->
            <article
              v-else
              class="workshop-card pointer-events-auto w-full max-w-md border border-charcoal-700 bg-charcoal-900/85 p-6 backdrop-blur-md transition-opacity duration-500 lg:p-8"
              :class="activeIndex === i ? 'opacity-100' : 'opacity-0 lg:opacity-25'"
            >
              <!-- Movize: the orrery -->
              <template v-if="stop.id === 'movize'">
                <p class="kicker">{{ t("workshop.deskKicker") }}</p>
                <h2 class="card-title">{{ t("caseStudy.movize.title") }}</h2>
                <p class="card-body">{{ t("caseStudy.movize.tagline") }}</p>
                <p class="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-charcoal-400">{{ t("workshop.products") }}</p>
                <div class="mt-2 flex flex-wrap gap-2" role="tablist">
                  <button
                    v-for="id in movizeProducts"
                    :key="id"
                    type="button"
                    role="tab"
                    :aria-selected="movizeProduct === id"
                    class="border px-3 py-1 text-xs font-bold transition-colors"
                    :class="movizeProduct === id ? 'border-turquoise text-turquoise' : 'border-charcoal-600 text-charcoal-300 hover:border-charcoal-400'"
                    @click="selectProduct(id)"
                  >
                    {{ t(`projects.items.${id}.title`).replace("Movize ", "") }}
                  </button>
                </div>
                <p class="mt-4 line-clamp-3 text-sm text-charcoal-300">{{ t(`projects.items.${movizeProduct}.description`) }}</p>
                <div class="card-links">
                  <router-link to="/projects/movize" class="card-link">{{ t("projects.viewCaseStudy") }} →</router-link>
                </div>
              </template>

              <!-- Roles: PM screen, dev screen, AI laptop -->
              <template v-else-if="stop.id === 'pm' || stop.id === 'dev' || stop.id === 'ai'">
                <p class="kicker">{{ t(`workshop.${stop.id}.kicker`) }}</p>
                <h2 class="card-title">{{ t(`workshop.${stop.id}.title`) }}</h2>
                <p class="card-body">{{ t(`workshop.${stop.id}.body`) }}</p>
                <div class="card-links">
                  <router-link v-if="stop.id === 'pm'" to="/#experience" class="card-link">{{ t("workshop.pm.cta") }} →</router-link>
                  <a v-else-if="stop.id === 'dev'" :href="profile.github" target="_blank" rel="noopener" class="card-link">{{ t("workshop.dev.cta") }} ↗</a>
                  <router-link v-else to="/projects/claude-skills" class="card-link">{{ t("workshop.ai.cta") }} →</router-link>
                </div>
              </template>

              <!-- Side projects on the shelves -->
              <template v-else-if="side[stop.id]">
                <p class="kicker">{{ stop.id === "beagle-chomp" ? t("workshop.gameKicker") : t("workshop.experimentKicker") }}</p>
                <h2 class="card-title">{{ t(`projects.items.${stop.id}.title`) }}</h2>
                <p class="card-body">{{ t(`projects.items.${stop.id}.tagline`) }}</p>
                <ul class="mt-4 flex flex-wrap gap-1.5">
                  <li v-for="tech in side[stop.id].tech.slice(0, 4)" :key="tech" class="badge !px-2 !py-0.5 !text-[10px]">{{ tech }}</li>
                </ul>
                <div class="card-links">
                  <router-link :to="`/projects/${stop.id}`" class="card-link">{{ t("projects.viewCaseStudy") }} →</router-link>
                  <a v-if="side[stop.id].liveUrl" :href="side[stop.id].liveUrl" target="_blank" rel="noopener" class="card-link">{{ t("projects.playLive") }} ↗</a>
                </div>
              </template>

              <!-- Claude Code skills: the books -->
              <template v-else-if="stop.id === 'claude-skills'">
                <p class="kicker">{{ t("workshop.toolsKicker") }}</p>
                <h2 class="card-title">{{ t("projects.skillsTitle") }}</h2>
                <ul class="mt-4 space-y-2">
                  <li v-for="skill in claudeSkills" :key="skill.id" class="text-sm">
                    <span class="font-bold text-cream-100">{{ t(`projects.items.${skill.id}.title`) }}</span>
                    <span class="text-charcoal-400"> · {{ t(`projects.items.${skill.id}.tagline`) }}</span>
                  </li>
                </ul>
                <div class="card-links">
                  <router-link to="/projects/claude-skills" class="card-link">{{ t("projects.viewCaseStudy") }} →</router-link>
                </div>
              </template>

              <!-- Future box -->
              <template v-else-if="stop.id === 'future'">
                <p class="kicker">{{ t("workshop.future.kicker") }}</p>
                <h2 class="card-title">{{ t("workshop.future.title") }}</h2>
                <p class="card-body">{{ t("workshop.future.body") }}</p>
              </template>

              <!-- Outro -->
              <template v-else-if="stop.id === 'outro'">
                <h2 class="card-title !mt-0">{{ t("workshop.outro.title") }}</h2>
                <p class="card-body">{{ t("workshop.outro.body") }}</p>
                <div class="card-links">
                  <router-link to="/#contact" class="card-link">{{ t("workshop.outro.contact") }} →</router-link>
                  <router-link to="/projects" class="card-link">{{ t("workshop.listLink") }} →</router-link>
                </div>
              </template>
            </article>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.kicker {
  @apply text-[11px] font-bold uppercase tracking-[0.25em] text-turquoise;
}
.card-title {
  @apply mt-3 font-serif text-3xl text-cream-100 lg:text-4xl;
}
.card-body {
  @apply mt-3 text-base text-charcoal-300;
}
.card-links {
  @apply mt-6 flex flex-wrap gap-x-6 gap-y-2;
}
.card-link {
  @apply text-xs font-bold uppercase tracking-[0.2em] text-turquoise transition-colors hover:text-turquoise-300;
}
</style>
