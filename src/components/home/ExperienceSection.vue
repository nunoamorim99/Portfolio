<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import { experience } from "@/data/experience";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const { t, te } = useI18n();
const sectionRef = ref(null);
const headerRef = ref(null);
const fcSpacerRef = ref(null);
const fcTrackRef = ref(null);
let ctx;

const focoCriativo = experience.find((c) => c.id === "foco-criativo");
const otherCompanies = experience.filter((c) => c.id !== "foco-criativo");

const cardBgs = [
  "bg-cream-100 dark:bg-charcoal-800",
  "bg-cream-200 dark:bg-charcoal-700",
  "bg-cream-100 dark:bg-charcoal-800",
];

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

    // Desktop: horizontal scroll for Foco Criativo driven by spacer scroll
    mm.add("(min-width: 1024px)", () => {
      const track = fcTrackRef.value;
      const spacer = fcSpacerRef.value;
      if (!track || !spacer) return;

      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: spacer,
          start: "top bottom",
          end: "75% bottom",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    // Mobile: staggered vertical cards
    mm.add("(max-width: 1023px)", () => {
      const mobileCards = sectionRef.value?.querySelectorAll(
        ".company-card-mobile",
      );
      mobileCards?.forEach((card) => {
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
    <!-- DESKTOP: All sticky cards as siblings (stacking) -->
    <!-- ═══════════════════════════════════════════════ -->
    <div class="hidden lg:block relative">
      <!--
        Stacking cards pattern:
        All cards are sticky siblings in the same parent.
        Each card sticks at top:80px. Later cards have higher z-index
        and cover previous ones as you scroll. Spacer divs between
        cards control how long each card stays visible before the
        next one slides up.
      -->

      <!-- ── Card 1: Foco Criativo (horizontal scroll) ── -->
      <div
        class="sticky top-20 z-[1] h-[calc(100vh-5rem)] bg-cream-50 dark:bg-charcoal-900 overflow-hidden"
      >
        <div
          ref="fcTrackRef"
          class="flex items-center h-full will-change-transform"
        >
          <!-- Company intro panel -->
          <div
            class="shrink-0 w-[38vw] h-full flex items-center px-12 xl:px-20"
          >
            <div>
              <img
                :src="focoCriativo.logo"
                :alt="t(`experience.companies.${focoCriativo.id}.name`)"
                class="h-20 w-20 object-cover grayscale mb-8"
              />
              <h3
                class="font-serif text-display-sm text-charcoal dark:text-cream-100"
              >
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
                {{ focoCriativo.positions.length }} roles ·
                {{
                  focoCriativo.positions[
                    focoCriativo.positions.length - 1
                  ].period
                    .split("–")[0]
                    .trim()
                }}
                – Present
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
            <div
              class="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs"
            >
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
        </div>
      </div>

      <!-- Spacer: scroll through this to drive FC horizontal scroll -->
      <div
        ref="fcSpacerRef"
        class="h-[500vh] pointer-events-none"
        aria-hidden="true"
      />

      <!-- ── Cards 2-4: Other companies (stack on top) ── -->
      <template v-for="(company, i) in otherCompanies" :key="company.id">
        <div
          class="sticky top-20 h-[calc(100vh-5rem)] overflow-hidden shadow-[0_-6px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_-6px_30px_rgba(0,0,0,0.35)]"
          :style="{ zIndex: i + 2 }"
          :class="cardBgs[i % cardBgs.length]"
        >
          <div class="h-full flex items-center">
            <div class="section-container">
              <div class="grid grid-cols-12 gap-12 items-center">
                <div class="col-span-4">
                  <img
                    :src="company.logo"
                    :alt="t(`experience.companies.${company.id}.name`)"
                    class="h-16 w-16 object-cover grayscale mb-6"
                  />
                  <h3
                    class="font-serif text-2xl text-charcoal dark:text-cream-100"
                  >
                    {{ t(`experience.companies.${company.id}.name`) }}
                  </h3>
                  <p
                    class="mt-1 text-xs font-bold uppercase tracking-widest text-charcoal-300 dark:text-charcoal-400"
                  >
                    {{ t(`experience.companies.${company.id}.location`) }}
                  </p>
                  <div class="accent-line mt-6" />
                </div>
                <div class="col-span-8">
                  <div v-for="pos in company.positions" :key="pos.id">
                    <h4
                      class="font-serif text-xl text-charcoal dark:text-cream-100"
                    >
                      {{ t(`experience.positions.${pos.id}.title`) }}
                    </h4>
                    <div
                      class="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs"
                    >
                      <span
                        class="font-bold uppercase tracking-widest text-vermillion"
                      >
                        {{ t(`experience.positions.${pos.id}.type`) }}
                      </span>
                      <span class="text-charcoal-200 dark:text-charcoal-600"
                        >/</span
                      >
                      <span
                        class="font-bold uppercase tracking-widest text-charcoal-300 dark:text-charcoal-400"
                        >{{ pos.period }}</span
                      >
                    </div>
                    <p
                      v-if="te(`experience.positions.${pos.id}.description`)"
                      class="mt-4 text-sm leading-relaxed text-charcoal-400 dark:text-charcoal-300 max-w-2xl"
                    >
                      {{ t(`experience.positions.${pos.id}.description`) }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Spacer between stacking cards -->
        <div class="h-[15vh] pointer-events-none" aria-hidden="true" />
      </template>

      <!-- Extra spacer so last card can un-stick naturally -->
      <div class="h-[20vh] pointer-events-none" aria-hidden="true" />
    </div>

    <!-- ═══════════════════════════════════════ -->
    <!-- MOBILE: Vertical card list             -->
    <!-- ═══════════════════════════════════════ -->
    <div class="lg:hidden bg-cream-200 dark:bg-charcoal-800">
      <div class="section-container py-8 pb-24">
        <div
          v-for="company in experience"
          :key="company.id"
          class="company-card-mobile border-b border-charcoal-100 dark:border-charcoal-700 last:border-b-0"
        >
          <!-- Company header -->
          <div class="flex items-center gap-5 py-6">
            <img
              :src="company.logo"
              :alt="t(`experience.companies.${company.id}.name`)"
              class="h-14 w-14 flex-shrink-0 object-cover grayscale"
            />
            <div>
              <h3 class="font-serif text-2xl text-charcoal dark:text-cream-100">
                {{ t(`experience.companies.${company.id}.name`) }}
              </h3>
              <p
                class="text-xs font-bold uppercase tracking-widest text-charcoal-300 dark:text-charcoal-400"
              >
                {{ t(`experience.companies.${company.id}.location`) }}
              </p>
            </div>
          </div>

          <!-- Positions -->
          <div class="pb-8 pl-4 sm:pl-20">
            <div
              class="relative"
              :class="
                company.positions.length > 1
                  ? 'border-l-2 border-vermillion/30 pl-8'
                  : ''
              "
            >
              <div
                v-for="(pos, pi) in company.positions"
                :key="pos.id"
                class="relative"
                :class="
                  pi < company.positions.length - 1
                    ? 'mb-8 pb-8 border-b border-charcoal-50 dark:border-charcoal-700/50'
                    : ''
                "
              >
                <div
                  v-if="company.positions.length > 1"
                  class="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 bg-vermillion"
                />
                <h4
                  class="font-serif text-lg text-charcoal dark:text-cream-100"
                >
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
                  <span class="text-charcoal-200 dark:text-charcoal-600"
                    >/</span
                  >
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
