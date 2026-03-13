<template>
  <div class="space-y-1">
    <div class="flex items-center justify-between">
      <span class="text-sm font-medium text-dark-800">{{ name }}</span>
      <span class="text-xs text-dark-500">{{ level }}</span>
    </div>
    <div class="h-2 bg-dark-100 rounded-full overflow-hidden">
      <div
        class="h-full bg-primary-500 rounded-full transition-all duration-700 ease-out"
        :style="{ width: `${(rating / max) * 100}%` }"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
  level: { type: String, required: true },
  rating: { type: Number, required: true },
  max: { type: Number, default: 5 },
})
</script>
