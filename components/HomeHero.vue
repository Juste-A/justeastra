<script setup>
import { hero } from '~/data/site.js'

const root = ref(null)
const { $gsap } = useNuxtApp()
let cleanup = () => {}

onMounted(() => {
  if (!$gsap || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const q = (s) => root.value.querySelectorAll(s)

  // Intro: elements start hidden in CSS (data-intro), so animate them *to* visible.
  const tl = $gsap.timeline({ defaults: { ease: 'power3.out' } })
  tl.fromTo(q('.hero-eyebrow span'), { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 })
    .fromTo(q('.hero-letter'), { opacity: 0, yPercent: 30 }, { opacity: 1, yPercent: 0, duration: 0.8, stagger: 0.07 }, '-=0.3')
    .fromTo(q('.hero-last'), { opacity: 0, yPercent: 30 }, { opacity: 1, yPercent: 0, duration: 0.8 }, '-=0.5')
    .fromTo(q('.hero-image'), { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.9 }, '-=0.6')
    .fromTo(q('.hero-fade'), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.12 }, '-=0.4')

  // Mouse parallax on the pill photo: the pill drifts towards the cursor and the
  // photo inside drifts the other way, so it feels like a window. Mouse/trackpad only.
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
  const pill = root.value.querySelector('.hero-float')
  const photo = root.value.querySelector('.hero-photo')
  const pillX = $gsap.quickTo(pill, 'x', { duration: 0.8, ease: 'power3.out' })
  const pillY = $gsap.quickTo(pill, 'y', { duration: 0.8, ease: 'power3.out' })
  const photoX = $gsap.quickTo(photo, 'x', { duration: 0.8, ease: 'power3.out' })
  const photoY = $gsap.quickTo(photo, 'y', { duration: 0.8, ease: 'power3.out' })
  $gsap.set(photo, { scale: 1.2 }) // a little larger than the pill, so its edges never show

  const onMove = (e) => {
    // -1 … 1 from the centre of the window
    const nx = (e.clientX / window.innerWidth) * 2 - 1
    const ny = (e.clientY / window.innerHeight) * 2 - 1
    pillX(nx * 24)
    pillY(ny * 16)
    photoX(nx * -14)
    photoY(ny * -10)
  }
  const onLeave = () => {
    pillX(0); pillY(0); photoX(0); photoY(0)
  }
  window.addEventListener('mousemove', onMove)
  document.documentElement.addEventListener('mouseleave', onLeave)
  cleanup = () => {
    window.removeEventListener('mousemove', onMove)
    document.documentElement.removeEventListener('mouseleave', onLeave)
  }
})

onBeforeUnmount(() => cleanup())
</script>

<template>
  <!-- Fills the first screen (minus the sticky header) so the scroll cue is always visible on load -->
  <section ref="root" class="hero container-site flex flex-col items-center text-center">
    <!-- Everything except the scroll cue, centred in the space above it -->
    <div class="flex flex-1 flex-col items-center justify-center">
      <p class="hero-eyebrow flex flex-wrap justify-center gap-x-1 text-[10px] font-medium leading-[1.1] tracking-[0.08em] text-muted lg:text-[14px]">
        <span v-for="word in hero.eyebrow.split(' ')" :key="word" data-intro>{{ word }}</span>
      </p>

      <h1 class="hero-name relative mt-[10px] font-display font-black uppercase text-accent">
        <span class="sr-only">{{ hero.first }} {{ hero.last }}</span>
        <span aria-hidden="true" class="flex justify-center leading-[1.1] tracking-[-0.02em]">
          <span v-for="(l, i) in hero.first.split('')" :key="i" class="hero-letter inline-block" data-intro>{{ l }}</span>
        </span>
        <span aria-hidden="true" class="hero-last -mt-[0.15em] block leading-[1.1] tracking-[-0.02em]" data-intro>
          {{ hero.last }}
        </span>
        <!-- Pill photo over the middle of the name.
             .hero-image  = position + intro animation
             .hero-float  = follows the mouse
             .hero-photo  = moves the opposite way inside the pill -->
        <span
          class="hero-image absolute inset-x-0 top-[0.49em] mx-auto h-[1.08em] w-[0.68em]"
          data-intro
        >
          <span class="hero-float block h-full w-full overflow-hidden rounded-full">
            <img :src="hero.image" alt="" class="hero-photo h-full w-full object-cover" width="176" height="280" fetchpriority="high" />
          </span>
        </span>
      </h1>

      <div class="hero-fade hero-gap h-6 w-6 text-accent lg:h-10 lg:w-10" data-intro>
        <StarIcon />
      </div>

      <p class="hero-fade hero-gap-sm max-w-[550px] text-[16px] leading-[1.8] lg:text-[20px]" data-intro>
        {{ hero.intro }}
      </p>
    </div>

    <a href="#about" class="hero-fade flex flex-col items-center gap-[11px] pb-6 pt-6" aria-label="Scroll to About" data-intro>
      <span class="relative block h-[33px] w-[3px] overflow-hidden bg-track">
        <span class="scroll-dot absolute left-0 top-0 h-[14px] w-[3px] bg-accent" />
      </span>
      <span class="text-[10px] font-medium leading-[1.1] tracking-[0.08em] text-muted lg:text-[14px]">SCROLL</span>
    </a>
  </section>
</template>

<style scoped>
/* Header is 90px tall on phones/tablets and 100px on desktop */
.hero {
  min-height: calc(100svh - 90px);
  padding-top: clamp(12px, 2.5svh, 36px);
}
@media (min-width: 1200px) {
  .hero {
    min-height: calc(100svh - 100px);
  }
}
/* The name scales with both width and height, so it never pushes the scroll cue off screen.
   The pill photo is sized in em, so it scales with the name. */
.hero-name {
  font-size: clamp(80px, min(24vw, 20svh), 260px);
}
.hero-gap {
  margin-top: clamp(20px, 4svh, 60px);
}
.hero-gap-sm {
  margin-top: clamp(12px, 2.5svh, 32px);
}
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
