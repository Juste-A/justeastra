<script setup>
defineProps({
  project: { type: Object, required: true },
  short: Boolean, // 280px tall (related projects) instead of 320px
})
</script>

<template>
  <NuxtLink
    :to="`/projects/${project.slug}`"
    class="group relative block overflow-hidden rounded"
    :class="short ? 'h-[240px] md:h-[280px]' : 'h-[240px] md:h-[320px]'"
  >
    <img
      :src="project.thumb"
      :alt="project.title"
      loading="lazy"
      class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
    />
    <!-- Dark veil + green title tab slide in on hover / keyboard focus -->
    <span class="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
    <span
      class="absolute bottom-0 left-0 flex h-[60px] items-center rounded-tr-lg bg-accent pl-8 pr-8 text-[14px] font-bold leading-[1.4] tracking-[-0.02em] text-on-accent transition-transform duration-500 ease-out md:h-[65px] md:text-[18px] -translate-x-full group-hover:translate-x-0 group-focus-visible:translate-x-0"
    >
      {{ project.title }}
    </span>
  </NuxtLink>
</template>
