<template>
  <div class="flex items-center gap-1.5" :aria-label="`${name}: ${rating} out of ${max}`">
    <span
      v-for="i in max"
      :key="i"
      class="w-3 h-3 rounded-full transition-colors duration-300"
      :class="i <= rating ? 'bg-primary-600' : 'bg-dark-200'"
    />
  </div>
</template>

<script setup>
defineProps({
  name: { type: String, default: '' },
  rating: { type: Number, required: true },
  max: { type: Number, default: 5 },
})
</script>
