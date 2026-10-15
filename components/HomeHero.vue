<script setup>
import { hero } from "~/data/site.js";

const root = ref(null);
const { $gsap } = useNuxtApp();

onMounted(() => {
  if (!$gsap || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    return;
  const q = (s) => root.value.querySelectorAll(s);
  const tl = $gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.fromTo(
    q(".hero-eyebrow span"),
    { opacity: 0, y: 12 },
    { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
  )
    .fromTo(
      q(".hero-letter"),
      { opacity: 0, yPercent: 30 },
      { opacity: 1, yPercent: 0, duration: 0.8, stagger: 0.07 },
      "-=0.3",
    )
    .fromTo(
      q(".hero-last"),
      { opacity: 0, yPercent: 30 },
      { opacity: 1, yPercent: 0, duration: 0.8 },
      "-=0.5",
    )
    .fromTo(
      q(".hero-image"),
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.9 },
      "-=0.6",
    )
    .fromTo(
      q(".hero-fade"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.12 },
      "-=0.4",
    );
});
</script>

<template>
  <section
    ref="root"
    class="container-site flex flex-col items-center pt-[50px] text-center lg:pt-9"
  >
    <p
      class="hero-eyebrow flex flex-wrap justify-center gap-x-1 text-[10px] font-medium leading-[1.1] tracking-[0.08em] text-muted lg:text-[14px]"
    >
      <span v-for="word in hero.eyebrow.split(' ')" :key="word" data-intro>{{
        word
      }}</span>
    </p>

    <h1
      class="relative mt-[10px] font-display font-black uppercase text-accent"
    >
      <span class="sr-only">{{ hero.first }} {{ hero.last }}</span>
      <span
        aria-hidden="true"
        class="flex justify-center text-[120px] leading-[1.1] tracking-[-0.02em] md:text-[200px] lg:text-[260px]"
      >
        <span
          v-for="(l, i) in hero.first.split('')"
          :key="i"
          data-intro
          class="hero-letter inline-block"
          >{{ l }}</span
        >
      </span>
      <span
        aria-hidden="true"
        data-intro
        class="hero-last -mt-[22px] block text-[120px] leading-[1.1] tracking-[-0.02em] md:-mt-[38px] md:text-[200px] lg:-mt-[38px] lg:text-[260px]"
      >
        {{ hero.last }}
      </span>
      <!-- Pill photo sits over the middle of the name -->
      <span
        data-intro
        class="hero-image absolute left-1/2 top-[55px] h-[140px] w-[88px] -translate-x-1/2 overflow-hidden rounded-[85px] md:top-[100px] md:h-[220px] md:w-[136px] lg:top-[128px] lg:h-[280px] lg:w-[176px]"
      >
        <img
          :src="hero.image"
          alt=""
          class="h-full w-full object-cover"
          width="176"
          height="280"
          fetchpriority="high"
        />
      </span>
    </h1>

    <div
      data-intro
      class="hero-fade mt-[60px] h-6 w-6 text-accent lg:mt-[86px] lg:h-12 lg:w-12"
    >
      <StarIcon />
    </div>

    <p
      data-intro
      class="hero-fade mt-6 max-w-[550px] text-[16px] leading-[1.8] lg:mt-10 lg:text-[22px]"
    >
      {{ hero.intro }}
    </p>

    <a
      href="#about"
      data-intro
      class="hero-fade mt-6 flex flex-col items-center gap-[11px] lg:mt-[190px]"
      aria-label="Scroll to About"
    >
      <span class="relative block h-[33px] w-[3px] overflow-hidden bg-track">
        <span
          class="scroll-dot absolute left-0 top-0 h-[14px] w-[3px] bg-accent"
        />
      </span>
      <span
        class="text-[10px] font-medium leading-[1.1] tracking-[0.08em] text-muted lg:text-[14px]"
        >SCROLL</span
      >
    </a>
  </section>
</template>

<style scoped>
.scroll-dot {
  animation: scroll-dot 1.6s ease-in-out infinite alternate;
}
@keyframes scroll-dot {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(19px);
  }
}
</style>
