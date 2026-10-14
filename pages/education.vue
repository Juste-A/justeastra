<script setup>
import { education } from '~/data/site.js'
useHead({ link: [{ rel: 'canonical', href: 'https://justeastra.com/education' }] })
</script>

<template>
  <div>
    <PageTitle title="EDUCATION" />
    <section class="container-site mt-[60px] md:mt-[130px]">
      <EntryGrid :items="education" />
    </section>
    <TechMarquee class="mt-[60px]" />
    <div class="mt-[60px]">
      <ContactSection />
    </div>
  </div>
</template>
