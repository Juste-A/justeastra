<script setup>
import { marquee } from '~/data/site.js'
// Two rows scrolling in opposite directions, star separators between words.
const rows = [
  { dir: 'left', speed: 40 },
  { dir: 'right', speed: 40 },
]
</script>

<template>
  <div class="overflow-hidden py-2" aria-label="Vue.js, Nuxt, Tailwind CSS, GraphQL">
    <div v-for="(row, r) in rows" :key="r" class="flex w-max" :class="r ? '-mt-[14px] lg:-mt-[26px]' : ''" aria-hidden="true">
      <div
        v-for="copy in 2"
        :key="copy"
        class="marquee-track flex shrink-0 items-center"
        :class="row.dir === 'right' ? 'reverse' : ''"
        :style="{ animationDuration: row.speed + 's' }"
      >
        <template v-for="word in marquee" :key="word + copy">
          <span class="whitespace-nowrap font-display text-[80px] font-black leading-[1.3] text-accent lg:text-[128px]">{{ word }}</span>
          <span class="mx-[38px] h-5 w-5 shrink-0 text-accent lg:h-8 lg:w-8"><StarIcon /></span>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee-track {
  animation: marquee linear infinite;
}
.marquee-track.reverse {
  animation-name: marquee-reverse;
}
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
@keyframes marquee-reverse {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
