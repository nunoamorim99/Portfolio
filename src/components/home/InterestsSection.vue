<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import { profile } from "@/data/profile";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const { t } = useI18n();
const sectionRef = ref(null);
const trackRef = ref(null);
let ctx;

const iconMap = {
  productInnovation: `<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />`,
  uxAndDesign: `<path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />`,
  agileDelivery: `<path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />`,
  aiAndEmergingTech: `<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />`,
};

onMounted(() => {
  ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    // Desktop: horizontal scroll
    mm.add("(min-width: 1024px)", () => {
      const track = trackRef.value;
      const scrollAmount = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.value,
          start: "top top",
          end: () => `+=${scrollAmount * 2.5}`,
          pin: true,
          scrub: 1.5,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      // Stagger cards in from below as they enter view
      const cards = track.querySelectorAll(".interest-card");
      cards.forEach((card) => {
        gsap.from(card, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "left 85%",
            toggleActions: "play none none none",
            containerAnimation: gsap.getById?.("hScroll") || undefined,
          },
        });
      });
    });

    // Mobile: each card animates individually as it enters viewport
    mm.add("(max-width: 1023px)", () => {
      const cards = sectionRef.value.querySelectorAll(".interest-card");
      cards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          y: 40,
          opacity: 0,
          duration: 0.7,
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
  <section
    ref="sectionRef"
    id="interests"
    class="bg-cream-100 dark:bg-charcoal-800 lg:overflow-hidden"
  >
    <div ref="trackRef" class="lg:flex lg:items-center lg:h-screen">
      <!-- Intro panel -->
      <div
        class="shrink-0 py-24 lg:py-0 lg:w-[40vw] lg:min-w-[480px] lg:flex lg:items-center px-6 sm:px-8 lg:px-16 xl:px-24"
      >
        <div>
          <p
            class="text-xs font-bold uppercase tracking-[0.3em] text-vermillion mb-4"
          >
            {{ String(profile.interestIds.length).padStart(2, "0") }} Areas
          </p>
          <h2
            class="font-serif text-display-md text-charcoal dark:text-cream-100"
          >
            {{ t("interests.title") }}
          </h2>
          <p
            class="mt-4 text-charcoal-400 dark:text-charcoal-300 max-w-md leading-relaxed"
          >
            {{ t("interests.subtitle") }}
          </p>
          <div class="accent-line mt-8" />
        </div>
      </div>

      <!-- Cards -->
      <div
        class="grid gap-4 sm:grid-cols-2 lg:flex lg:gap-6 lg:pr-24 px-6 sm:px-8 lg:px-0 pb-24 lg:pb-0"
      >
        <div
          v-for="(id, index) in profile.interestIds"
          :key="id"
          class="interest-card group p-8 lg:p-10 transition-all duration-500 bg-white dark:bg-charcoal-700 hover:bg-vermillion/5 dark:hover:bg-vermillion/10 lg:shrink-0 lg:w-[28vw] lg:min-w-[340px] lg:min-h-[55vh] lg:flex lg:flex-col lg:justify-center border border-charcoal-100 dark:border-charcoal-600"
        >
          <span
            class="text-[5rem] font-serif text-vermillion/15 leading-none mb-2 hidden lg:block select-none"
            >0{{ index + 1 }}</span
          >
          <svg
            class="h-8 w-8 text-vermillion mb-6 transition-transform duration-500 group-hover:scale-110"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            v-html="iconMap[id]"
          />
          <h3
            class="font-serif text-xl lg:text-2xl text-charcoal dark:text-cream-100"
          >
            {{ t(`interests.items.${id}.title`) }}
          </h3>
          <p
            class="mt-3 text-sm lg:text-base leading-relaxed text-charcoal-400 dark:text-charcoal-300"
          >
            {{ t(`interests.items.${id}.description`) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
