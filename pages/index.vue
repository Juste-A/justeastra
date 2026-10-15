<script setup>
import {
  aboutHome,
  featuredProjects,
  experience,
  education,
} from "~/data/site.js";
</script>

<template>
  <div>
    <HomeHero />

    <div
      class="mt-[100px] flex flex-col gap-[80px] lg:mt-[100px] lg:gap-[100px]"
    >
      <!-- About -->
      <section id="about" class="container-site scroll-mt-28">
        <SectionHeading title="ABOUT" to="/about" />
        <div
          class="mt-[50px] grid grid-cols-1 gap-y-6 md:mt-[84px] md:grid-cols-2 md:gap-x-[68px]"
        >
          <p
            class="text-[18px] leading-[1.7] text-muted lg:text-[22px]"
            data-reveal
          >
            {{ aboutHome.lead }}
          </p>
          <div>
            <p class="text-[14px] leading-[1.7] lg:text-[18px]" data-reveal>
              {{ aboutHome.body }}
            </p>
            <!-- Cards stick below the header and slide over each other while scrolling.
                Each one sticks a little lower, so the title of the card underneath stays visible. -->
            <div class="mt-[100px] flex flex-col gap-8 pb-10 lg:mt-[42px]">
              <FeatureCard
                v-for="(c, i) in aboutHome.cards"
                :key="c.title"
                v-bind="c"
                glow
                class="sticky"
                :style="{ top: `calc(var(--stack-top) + ${i * 24}px)` }"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Projects -->
      <section class="container-site">
        <SectionHeading title="PROJECTS" to="/projects" />
        <div class="mt-[61px] grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
          <ProjectCard
            v-for="(p, i) in featuredProjects"
            :key="p.slug"
            :project="p"
            data-reveal
            :data-reveal-delay="(i % 2) * 0.1"
          />
        </div>
      </section>

      <!-- Experience -->
      <section class="container-site">
        <SectionHeading title="EXPERIENCE" to="/experience" />
        <div class="mt-[61px]"><EntryGrid :items="experience" /></div>
        <div class="mt-[100px]"><StatsRow /></div>
      </section>

      <TechMarquee class="-my-10" />

      <!-- Education -->
      <section class="container-site">
        <SectionHeading title="EDUCATION" to="/education" />
        <div class="mt-[61px]"><EntryGrid :items="education" /></div>
      </section>

      <ContactSection heading />
    </div>
  </div>
</template>
