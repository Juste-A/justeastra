<script setup>
import { aboutPage } from '~/data/site.js'
useHead({ link: [{ rel: 'canonical', href: 'https://justeastra.com/about' }] })
</script>

<template>
  <div>
    <PageTitle title="ABOUT" />

    <section class="container-site mt-[60px] grid grid-cols-1 gap-y-[60px] md:mt-[130px] md:grid-cols-2 md:items-center md:gap-x-[160px]">
      <!-- Portrait with offset accent block behind it -->
      <div class="relative mx-auto w-full max-w-[336px] pb-[65px] pr-[9px] md:mx-0" data-reveal>
        <span class="absolute bottom-0 right-0 h-[83%] w-[95%] rounded-lg bg-accent" aria-hidden="true" />
        <img :src="aboutPage.image" alt="Juste" class="relative aspect-[336/480] w-full rounded-lg object-cover" loading="lazy" />
      </div>
      <div>
        <p class="text-[18px] leading-[1.7] text-muted lg:text-[22px]" data-reveal>{{ aboutPage.lead }}</p>
        <p v-for="(para, i) in aboutPage.body" :key="i" class="mt-6 text-[14px] leading-[1.7] lg:text-[18px]" data-reveal>
          {{ para }}
        </p>
      </div>
    </section>

    <section class="container-site mt-[100px] grid grid-cols-1 gap-8 md:mt-[150px] md:grid-cols-2 md:gap-x-16">
      <FeatureCard v-for="(s, i) in aboutPage.skills" :key="s.title" v-bind="s" data-reveal :data-reveal-delay="(i % 2) * 0.1" />
    </section>

    <div class="mt-[100px] md:mt-[140px]">
      <ContactSection />
    </div>
  </div>
</template>
