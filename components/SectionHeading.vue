<script setup>
defineProps({ title: { type: String, required: true }, to: { type: String, default: '' } })
const NuxtLink = resolveComponent('NuxtLink')
</script>

<template>
  <!-- With `to`, the whole row is a link and the dash turns into an arrow on hover / focus. -->
  <component
    :is="to ? NuxtLink : 'div'"
    :to="to || undefined"
    class="group flex items-center gap-10"
    data-reveal
  >
    <h2 class="font-display text-[30px] font-bold uppercase leading-[1.4] tracking-[0.04em] text-accent lg:text-[32px]">
      {{ title }}
    </h2>

    <span class="heading-line relative block h-1 flex-1" aria-hidden="true">
      <!-- grey track: pulls back on hover to leave a gap before the arrow -->
      <span class="heading-track absolute inset-y-0 left-0 bg-soft" />
      <!-- accent dash: slides in on scroll, stretches into the arrow shaft on hover -->
      <span class="heading-bar absolute inset-y-0 bg-accent" />
      <!-- arrow head: one chevron with a sharp mitred point, grows out from the tip -->
      <svg
        class="heading-head absolute right-0 top-[-11px] h-[26px] w-[14px] overflow-visible text-accent"
        viewBox="0 0 14 26"
        fill="none"
      >
        <polyline points="1,1 11,13 1,25" stroke="currentColor" stroke-width="4" stroke-linejoin="miter" />
      </svg>
    </span>
  </component>
</template>

<style scoped>
/* Hide the dash while it slides in from the left, but let the arrow head
   stick out above, below and past the right end of the line */
.heading-line {
  clip-path: inset(-20px -20px -20px 0);
}

.heading-track,
.heading-bar,
.heading-head {
  transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

/* Resting state: grey line with a 40px accent dash at the end */
.heading-track {
  right: 0;
}
.heading-bar {
  right: 0;
  width: 40px;
  animation: bar-in 1.4s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.heading-head {
  transform-origin: right center;
  opacity: 0;
  transform: scale(0.4);
}

/* Hover / keyboard focus: dash becomes an arrow */
.group:hover .heading-track,
.group:focus-visible .heading-track {
  right: 180px;
}
.group:hover .heading-bar,
.group:focus-visible .heading-bar {
  right: 40px;
  width: 100px;
}
.group:hover .heading-head,
.group:focus-visible .heading-head {
  opacity: 1;
  transform: scale(1);
}

/* Dash slides in from the left when the heading scrolls into view */
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
