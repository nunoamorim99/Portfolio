<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import { experience } from "@/data/experience";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/composables/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const { t, te } = useI18n();
const reduced = useReducedMotion();
const sectionRef = ref(null);
const headerRef = ref(null);
const fcWrapRef = ref(null);
const fcTrackRef = ref(null);
let ctx;

// Only the professional experience is shown in this section.
const focoCriativo = experience.find((c) => c.id === "foco-criativo");

const startYear = focoCriativo?.positions
  .at(-1)
  ?.period.split("–")[0]
  .trim();

onMounted(() => {
  ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    // Header animation
    const headerChildren = headerRef.value?.children;
    if (headerChildren?.length) {
      gsap.from(headerChildren, {
        scrollTrigger: {
          trigger: headerRef.value,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
      });
    }

    // Desktop: pinned horizontal scroll through the Foco Criativo roles.
    // x maps exactly to the pin range, so the last panel lands flush — no dead zone.
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const track = fcTrackRef.value;
      const wrap = fcWrapRef.value;
      if (!track || !wrap) return;

      const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
      if (distance() <= 0) return;

      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: () => `+=${distance() * 1.2}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    });

    // Mobile: career timeline draws itself, dots pop in, card rises in.
    mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
      const card = sectionRef.value?.querySelector(".company-card-mobile");
      if (card) {
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
      }

      sectionRef.value?.querySelectorAll(".exp-timeline").forEach((line) => {
        gsap.from(line, {
          scaleY: 0,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: line,
            start: "top 80%",
            end: "bottom 65%",
            scrub: true,
          },
        });
      });

      sectionRef.value?.querySelectorAll(".exp-dot").forEach((dot) => {
        gsap.from(dot, {
          scale: 0,
          duration: 0.3,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: dot,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        });
      });
    });
  }, sectionRef.value);
});

onUnmounted(() => {
  ctx?.revert();
});
</script>

<template>
  <section ref="sectionRef" id="experience" class="relative">
    <!-- Section header -->
    <div class="bg-cream-200 dark:bg-charcoal-800 py-24 lg:py-16">
      <div
        ref="headerRef"
        class="section-container flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
      >
        <div>
          <h2 class="section-title">{{ t("experience.title") }}</h2>
          <p class="section-subtitle">{{ t("experience.subtitle") }}</p>
        </div>
        <div class="accent-line flex-shrink-0" />
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════ -->
    <!-- DESKTOP: pinned horizontal scroll (Foco Criativo) -->
    <!-- ═══════════════════════════════════════════════ -->
    <div
      ref="fcWrapRef"
      class="hidden lg:block bg-cream-50 dark:bg-charcoal-900"
      :class="reduced ? 'overflow-x-auto' : 'overflow-hidden'"
    >
      <div
        ref="fcTrackRef"
        class="flex items-center h-screen w-max will-change-transform"
      >
        <!-- Company intro panel -->
        <div class="shrink-0 w-[38vw] h-full flex items-center px-12 xl:px-20">
          <div>
            <img
              :src="focoCriativo.logo"
              :alt="t(`experience.companies.${focoCriativo.id}.name`)"
              class="h-20 w-20 object-cover grayscale mb-8"
            />
            <h3 class="font-serif text-display-sm text-charcoal dark:text-cream-100">
              {{ t(`experience.companies.${focoCriativo.id}.name`) }}
            </h3>
            <p
              class="mt-2 text-xs font-bold uppercase tracking-widest text-charcoal-300 dark:text-charcoal-400"
            >
              {{ t(`experience.companies.${focoCriativo.id}.location`) }}
            </p>
            <div class="accent-line mt-8" />
            <p
              class="mt-6 text-sm leading-relaxed text-charcoal-400 dark:text-charcoal-300 max-w-sm"
            >
              {{ focoCriativo.positions.length }} roles · {{ startYear }} – Present
            </p>
          </div>
        </div>

        <!-- Position panels -->
        <div
          v-for="(pos, i) in focoCriativo.positions"
          :key="pos.id"
          class="shrink-0 w-[34vw] min-w-[420px] max-w-[560px] h-[80vh] flex flex-col justify-center p-10 xl:p-12 border-l border-charcoal-100 dark:border-charcoal-700"
        >
          <span
            class="text-[4.5rem] font-serif text-vermillion/15 leading-none mb-2 select-none"
            >0{{ i + 1 }}</span
          >
          <h4 class="font-serif text-xl text-charcoal dark:text-cream-100">
            {{ t(`experience.positions.${pos.id}.title`) }}
          </h4>
          <div class="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
            <span class="font-bold uppercase tracking-widest text-vermillion">
              {{ t(`experience.positions.${pos.id}.type`) }}
            </span>
            <span class="text-charcoal-200 dark:text-charcoal-600">/</span>
            <span
              class="font-bold uppercase tracking-widest text-charcoal-300 dark:text-charcoal-400"
              >{{ pos.period }}</span
            >
          </div>
          <p
            v-if="te(`experience.positions.${pos.id}.description`)"
            class="mt-4 text-sm leading-relaxed text-charcoal-400 dark:text-charcoal-300"
          >
            {{ t(`experience.positions.${pos.id}.description`) }}
          </p>
          <div
            v-if="pos.skills?.length"
            class="mt-5 flex flex-wrap gap-1.5 items-center"
          >
            <span
              v-for="skill in pos.skills.slice(0, 5)"
              :key="skill"
              class="badge text-[10px]"
            >
              {{ skill }}
            </span>
            <span
              v-if="pos.skills.length > 5"
              class="skills-more relative badge text-[10px] text-vermillion border-vermillion/30 cursor-default"
            >
              +{{ pos.skills.length - 5 }}
              <span class="skills-tooltip">
                <span
                  v-for="skill in pos.skills.slice(5)"
                  :key="skill"
                  class="badge text-[10px] bg-white/10 border-white/20 text-white"
                >
                  {{ skill }}
                </span>
              </span>
            </span>
          </div>
        </div>

        <!-- Trailing breathing room so the last panel isn't flush to the edge -->
        <div class="shrink-0 w-[8vw]" aria-hidden="true" />
      </div>
    </div>

    <!-- ═══════════════════════════════════════ -->
    <!-- MOBILE: Foco Criativo card + timeline    -->
    <!-- ═══════════════════════════════════════ -->
    <div class="lg:hidden bg-cream-200 dark:bg-charcoal-800">
      <div class="section-container py-8 pb-24">
        <div class="company-card-mobile">
          <!-- Company header -->
          <div class="flex items-center gap-5 py-6">
            <img
              :src="focoCriativo.logo"
              :alt="t(`experience.companies.${focoCriativo.id}.name`)"
              class="h-14 w-14 flex-shrink-0 object-cover grayscale"
            />
            <div>
              <h3 class="font-serif text-2xl text-charcoal dark:text-cream-100">
                {{ t(`experience.companies.${focoCriativo.id}.name`) }}
              </h3>
              <p
                class="text-xs font-bold uppercase tracking-widest text-charcoal-300 dark:text-charcoal-400"
              >
                {{ t(`experience.companies.${focoCriativo.id}.location`) }}
              </p>
            </div>
          </div>

          <!-- Positions -->
          <div class="pb-8 pl-4 sm:pl-20">
            <div
              class="relative"
              :class="focoCriativo.positions.length > 1 ? 'pl-8' : ''"
            >
              <span
                v-if="focoCriativo.positions.length > 1"
                class="exp-timeline absolute left-0 top-0 h-full w-0.5 origin-top bg-vermillion/30"
                aria-hidden="true"
              />
              <div
                v-for="(pos, pi) in focoCriativo.positions"
                :key="pos.id"
                class="relative"
                :class="
                  pi < focoCriativo.positions.length - 1
                    ? 'mb-8 pb-8 border-b border-charcoal-50 dark:border-charcoal-700/50'
                    : ''
                "
              >
                <div
                  v-if="focoCriativo.positions.length > 1"
                  class="exp-dot absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 bg-vermillion"
                />
                <h4 class="font-serif text-lg text-charcoal dark:text-cream-100">
                  {{ t(`experience.positions.${pos.id}.title`) }}
                </h4>
                <div
                  class="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs"
                >
                  <span
                    class="font-bold uppercase tracking-widest text-vermillion"
                  >
                    {{ t(`experience.positions.${pos.id}.type`) }}
                  </span>
                  <span class="text-charcoal-200 dark:text-charcoal-600">/</span>
                  <span
                    class="font-bold uppercase tracking-widest text-charcoal-300 dark:text-charcoal-400"
                    >{{ pos.period }}</span
                  >
                </div>
                <p
                  v-if="te(`experience.positions.${pos.id}.description`)"
                  class="mt-3 text-sm leading-relaxed text-charcoal-400 dark:text-charcoal-300"
                >
                  {{ t(`experience.positions.${pos.id}.description`) }}
                </p>
                <div
                  v-if="pos.skills?.length"
                  class="mt-4 flex flex-wrap gap-2"
                >
                  <span v-for="skill in pos.skills" :key="skill" class="badge">
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-more .skills-tooltip {
  display: none;
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  min-width: 220px;
  max-width: 320px;
  padding: 12px;
  background: #1a1a1a;
  border: 1px solid #333;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  z-index: 50;
  flex-wrap: wrap;
  gap: 6px;
}

.skills-more .skills-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: #1a1a1a;
}

.skills-more:hover .skills-tooltip {
  display: flex;
}
</style>
