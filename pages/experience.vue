<script setup>
import { experience } from '~/data/site.js'
useHead({ link: [{ rel: 'canonical', href: 'https://justeastra.com/experience' }] })
</script>

<template>
  <div>
    <PageTitle title="EXPERIENCE" />
    <section class="container-site mt-[60px] md:mt-[130px]">
      <EntryGrid :items="experience" />
      <div class="mt-[100px]"><StatsRow /></div>
    </section>
    <div class="mt-[100px]">
      <ContactSection />
    </div>
  </div>
</template>
