<script setup>
// Oversized page title used on About, Projects, Experience, Education and Contact.
const props = defineProps({ title: { type: String, required: true } });
const root = ref(null);
const { $gsap } = useNuxtApp();

onMounted(() => {
  if (!$gsap || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    return;
  $gsap.fromTo(
    root.value.querySelectorAll(".pt-letter"),
    { opacity: 0, yPercent: 30 },
    {
      opacity: 1,
      yPercent: 0,
      duration: 0.8,
      stagger: 0.06,
      ease: "power3.out",
    },
  );
});
</script>

<template>
  <h1
    ref="root"
    class="container-site pt-[50px] text-center font-display font-black uppercase text-accent lg:pt-20"
  >
    <span class="sr-only">{{ props.title }}</span>
    <span
      aria-hidden="true"
      class="flex justify-center text-[80px] leading-[1.1] md:text-[140px] lg:text-[180px]"
    >
      <span
        v-for="(l, i) in props.title.split('')"
        :key="i"
        data-intro
        class="pt-letter inline-block whitespace-pre"
        >{{ l }}</span
      >
    </span>
  </h1>
</template>
