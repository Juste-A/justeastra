<script setup>
import { projects, relatedFor, site } from '~/data/site.js'

const route = useRoute()
const project = computed(() => projects.find((p) => p.slug === route.params.slug))
if (!project.value) throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })

const related = computed(() => relatedFor(project.value.slug))
const meta = computed(() => [
  { label: 'Industry', value: project.value.industry },
  { label: 'Client', value: project.value.client },
  { label: 'Service', value: project.value.service },
  { label: 'Date', value: project.value.date },
])

useHead(() => ({
  link: [{ rel: 'canonical', href: `${site.url}/projects/${project.value.slug}` }],
}))
</script>

<template>
  <article v-if="project" class="container-site pt-[50px] lg:pt-20">
    <h1 class="text-center text-[28px] font-semibold leading-[1.4] tracking-[-0.02em] lg:text-[36px]" data-reveal>
      {{ project.title }}
    </h1>

    <div class="mt-10 grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-[68px]">
      <dl class="grid h-max grid-cols-2 gap-x-[35px] gap-y-[35px] text-[14px] font-medium leading-[1.7] lg:text-[16px]" data-reveal>
        <div v-for="m in meta" :key="m.label">
          <dt class="text-muted">{{ m.label }}</dt>
          <dd>{{ m.value }}</dd>
        </div>
      </dl>
      <p class="text-[14px] leading-[1.7] lg:text-[18px]" data-reveal>{{ project.text }}</p>
    </div>

    <div class="mt-[60px] flex flex-col gap-16">
      <img
        v-for="img in project.images"
        :key="img.src"
        :src="img.src"
        :alt="img.alt"
        loading="lazy"
        class="h-[240px] w-full rounded-lg object-cover md:h-[480px]"
        data-reveal
      />
    </div>

    <section class="mt-[140px]">
      <div class="flex items-center justify-between text-[14px] font-medium leading-[1.7] lg:text-[16px]">
        <h2>RELATED PROJECTS</h2>
        <NuxtLink to="/projects" class="transition-colors hover:text-accent">VIEW ALL PROJECTS</NuxtLink>
      </div>
      <div class="mt-6 h-px bg-soft" />
      <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
        <ProjectCard v-for="p in related" :key="p.slug" :project="p" short data-reveal />
      </div>
    </section>
  </article>
</template>
