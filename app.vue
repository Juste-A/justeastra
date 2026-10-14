<script setup>
const { dark } = useTheme();
useHead({ htmlAttrs: { class: computed(() => (dark.value ? "dark" : "")) } });
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
