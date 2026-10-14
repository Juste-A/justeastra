<script setup>
import { site } from "~/data/site.js";
const me = useRuntimeConfig().public;
</script>

<template>
  <!-- Sits underneath the page and is revealed as the main content scrolls away. -->
  <footer
    class="sticky bottom-0 z-0 flex h-[320px] items-center overflow-hidden bg-bg lg:h-[300px]"
  >
    <a
      :href="site.linkedin"
      target="_blank"
      rel="noopener"
      class="sr-only focus:not-sr-only"
      >LinkedIn</a
    >
    <div class="flex w-max" aria-hidden="true">
      <div
        v-for="copy in 2"
        :key="copy"
        class="footer-track flex shrink-0 items-center gap-[60px] pr-[60px]"
      >
        <template v-for="n in 4" :key="n">
          <a
            :href="me.linkedin"
            target="_blank"
            rel="noopener"
            tabindex="-1"
            class="font-display text-[240px] font-black leading-[1.1] text-accent transition-opacity hover:opacity-80 lg:text-[320px] lg:leading-[1.2]"
            >LINKEDIN</a
          >
          <span class="h-14 w-14 shrink-0" style="color: var(--soft)"
            ><StarIcon
          /></span>
        </template>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-track {
  animation: footer-marquee 40s linear infinite;
}
@keyframes footer-marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
