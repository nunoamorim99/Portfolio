<script setup>
// A Workshop card button: a router link (`to`) or an external link (`href`).
// `primary` is the card's main action; the rest are quieter outlines.
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const props = defineProps({
  to: { type: String, default: null },
  href: { type: String, default: null },
  primary: { type: Boolean, default: false },
  /** arrow (internal), external, play, source */
  icon: { type: String, default: "arrow" },
});

const { t } = useI18n();
const external = computed(() => !!props.href);
</script>

<template>
  <component
    :is="external ? 'a' : 'router-link'"
    v-bind="external ? { href, target: '_blank', rel: 'noopener' } : { to }"
    class="card-action group"
    :class="primary ? 'card-action--primary' : 'card-action--ghost'"
  >
    <svg v-if="icon === 'play'" class="h-3 w-3" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M3 1.8v8.4L10 6z" fill="currentColor" />
    </svg>
    <svg v-else-if="icon === 'source'" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
      <path d="M5.5 4.5 2 8l3.5 3.5M10.5 4.5 14 8l-3.5 3.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <span><slot /></span>
    <svg
      v-if="icon === 'arrow'"
      class="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      aria-hidden="true"
    >
      <path d="M1 6h9M6.5 2.5 10 6 6.5 9.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg
      v-else-if="icon === 'external'"
      class="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      aria-hidden="true"
    >
      <path d="M3 9 9 3M4 3h5v5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <span v-if="external" class="sr-only">{{ t("workshop.newTab") }}</span>
  </component>
</template>

<style scoped>
.card-action {
  @apply inline-flex h-10 items-center gap-2.5 rounded-[4px] px-4 text-[11px] font-bold uppercase tracking-[0.16em] transition-all duration-200;
}
.card-action:focus-visible {
  @apply outline outline-2 outline-offset-2 outline-turquoise;
}
.card-action--primary {
  @apply bg-turquoise text-charcoal-900 hover:bg-turquoise-300;
  box-shadow: 0 0 0 1px rgba(84, 230, 213, 0.35) inset, 0 10px 30px -12px rgba(20, 184, 166, 0.75);
}
.card-action--ghost {
  @apply border border-white/15 bg-white/[0.03] text-cream-100 hover:border-turquoise/60 hover:bg-turquoise/[0.06] hover:text-turquoise-300;
}
@media (max-width: 1023px) and (max-height: 760px) {
  .card-action {
    @apply h-9 px-3.5;
  }
}
</style>
