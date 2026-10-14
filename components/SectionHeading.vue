<script setup>
defineProps({ title: { type: String, required: true }, to: { type: String, default: '' } })
</script>

<template>
  <div class="flex items-center gap-10" data-reveal>
    <h2 class="font-display text-[30px] font-bold uppercase leading-[1.4] tracking-[0.04em] text-accent lg:text-[32px]">
      <NuxtLink v-if="to" :to="to" class="transition-opacity hover:opacity-80">{{ title }}</NuxtLink>
      <template v-else>{{ title }}</template>
    </h2>
    <!-- Progress-style rule: grey track with an accent segment that slides in from the left. -->
    <div class="relative h-1 flex-1 overflow-hidden bg-soft" aria-hidden="true">
      <span class="heading-bar absolute right-0 top-0 h-full w-10 bg-accent" />
    </div>
  </div>
</template>

<style scoped>
.heading-bar {
  animation: bar-in 1.4s cubic-bezier(0.22, 1, 0.36, 1) both;
}
@supports (animation-timeline: view()) {
  .heading-bar {
    animation-timeline: view();
    animation-range: entry 0% cover 35%;
  }
}
@keyframes bar-in {
  from {
    transform: translateX(-2000%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
