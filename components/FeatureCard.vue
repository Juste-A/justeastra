<script setup>
defineProps({ title: String, text: String, glow: Boolean })
</script>

<template>
  <div
    class="rounded-lg bg-accent px-[22px] py-[30px] text-on-accent"
    :style="glow ? 'box-shadow: var(--card-glow) 0 0 30px 10px' : ''"
  >
    <h3 class="text-[18px] font-semibold leading-[1.1] lg:text-[26px]">{{ title }}</h3>
    <p class="mt-[10px] text-[14px] leading-[1.2] lg:mt-[9px] lg:text-[18px]">{{ text }}</p>
  </div>
</template>
