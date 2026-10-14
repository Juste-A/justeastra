<script setup>
import { projects } from '~/data/site.js'
useHead({ link: [{ rel: 'canonical', href: 'https://justeastra.com/projects' }] })
</script>

<template>
  <div>
    <PageTitle title="PROJECTS" />
    <section class="container-site mt-[60px] grid grid-cols-1 gap-6 md:mt-[190px] md:grid-cols-2 md:gap-10">
      <ProjectCard v-for="(p, i) in projects" :key="p.slug" :project="p" data-reveal :data-reveal-delay="(i % 2) * 0.1" />
    </section>
    <div class="mt-[100px]">
      <ContactSection />
    </div>
  </div>
</template>
