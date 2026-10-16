<script setup>
import { hero } from '~/data/site.js'

const root = ref(null)
const { $gsap } = useNuxtApp()
let cleanup = () => {}
let cleanupScroll = () => {}

onMounted(() => {
  // Scroll cue (runs for everyone, including reduced motion): fades out once you start
  // scrolling and comes back when you return to the top.
  const cue = root.value.querySelector('.hero-cue')
  const onScroll = () => cue.classList.toggle('is-hidden', window.scrollY > 40)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  cleanupScroll = () => window.removeEventListener('scroll', onScroll)

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

onBeforeUnmount(() => {
  cleanup()
  cleanupScroll()
})
</script>

<template>
  <section ref="root" class="hero-top container-site flex flex-col items-center pt-[50px] text-center lg:pt-9">
    <p class="hero-eyebrow flex flex-wrap justify-center gap-x-1 text-[10px] font-medium leading-[1.1] tracking-[0.08em] text-muted lg:text-[14px]">
      <span v-for="word in hero.eyebrow.split(' ')" :key="word" data-intro>{{ word }}</span>
    </p>

    <h1 class="hero-name-box relative mt-[10px] font-display font-black uppercase text-accent">
      <span class="sr-only">{{ hero.first }} {{ hero.last }}</span>
      <span aria-hidden="true" class="hero-name-size flex justify-center text-[120px] leading-[1.1] tracking-[-0.02em] md:text-[200px] lg:text-[260px]">
        <span v-for="(l, i) in hero.first.split('')" :key="i" class="hero-letter inline-block" data-intro>{{ l }}</span>
      </span>
      <span aria-hidden="true" class="hero-last hero-name-size -mt-[22px] block text-[120px] leading-[1.1] tracking-[-0.02em] md:-mt-[38px] md:text-[200px] lg:-mt-[38px] lg:text-[260px]" data-intro>
        {{ hero.last }}
      </span>
      <!-- Pill photo over the middle of the name.
           .hero-image  = position + intro animation
           .hero-float  = follows the mouse
           .hero-photo  = moves the opposite way inside the pill -->
      <span
        class="hero-image absolute inset-x-0 top-[55px] mx-auto h-[140px] w-[88px] md:top-[100px] md:h-[220px] md:w-[136px] lg:top-[128px] lg:h-[280px] lg:w-[176px]"
        data-intro
      >
        <span class="hero-float block h-full w-full overflow-hidden rounded-[85px]">
          <img :src="hero.image" alt="" class="hero-photo h-full w-full object-cover" width="176" height="280" fetchpriority="high" />
        </span>
      </span>
    </h1>

    <div class="hero-fade hero-star h-6 w-6 text-accent lg:h-12 lg:w-12" data-intro>
      <StarIcon />
    </div>

    <!-- Scroll cue right under the star, so it's visible on the first screen -->
    <div class="hero-cue mt-3 lg:mt-4">
      <a href="#about" class="hero-fade flex flex-col items-center gap-[11px]" aria-label="Scroll to About" data-intro>
        <span class="relative block h-[33px] w-[3px] overflow-hidden bg-track">
          <span class="scroll-dot absolute left-0 top-0 h-[14px] w-[3px] bg-accent" />
        </span>
        <span class="text-[10px] font-medium leading-[1.1] tracking-[0.08em] text-muted lg:text-[14px]">SCROLL</span>
      </a>
    </div>

    <p class="hero-fade mt-10 max-w-[550px] text-[16px] leading-[1.8] lg:mt-[72px] lg:text-[22px]" data-intro>
      {{ hero.intro }}
    </p>
  </section>
</template>

<style scoped>
/* Star sits closer to the name than before */
.hero-star {
  margin-top: 32px;
}
@media (min-width: 1200px) {
  .hero-star {
    margin-top: clamp(16px, 3svh, 40px);
  }
  /* Full 260px name on most screens. On short laptop screens (under ~830px tall) it shrinks
     just enough for the star and scroll cue to fit on the first screen. The pill photo and
     the overlap between the two lines are in em, so they scale with the name. */
  .hero-name-box,
  .hero-name-size {
    font-size: min(260px, calc((100svh - 300px) / 2.05));
  }
  .hero-last {
    margin-top: -0.146em;
  }
  .hero-image {
    top: 0.49em;
    height: 1.077em;
    width: 0.677em;
  }
}
@media (min-width: 1200px) and (max-height: 830px) {
  .hero-top {
    padding-top: 12px;
  }
}
.hero-cue {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.hero-cue.is-hidden {
  opacity: 0;
  transform: translateY(12px);
  pointer-events: none;
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
