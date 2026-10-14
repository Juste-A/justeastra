<script setup>
import { stats } from '~/data/site.js'
</script>

<template>
  <div class="grid grid-cols-1 gap-y-6 md:grid-cols-3 md:gap-x-[70px]">
    <div v-for="(s, i) in stats" :key="s.label" data-reveal :data-reveal-delay="i * 0.1" class="text-accent">
      <p class="text-[42px] font-semibold leading-[1.2] lg:text-[60px]">{{ s.value }}</p>
      <p class="mt-4 max-w-[118px] text-[14px] leading-[1.2] lg:text-[18px]">{{ s.label }}</p>
    </div>
  </div>
</template>
