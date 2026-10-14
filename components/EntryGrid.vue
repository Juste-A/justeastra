<script setup>
// Two-column list of experience / education entries.
const props = defineProps({ items: { type: Array, required: true } })

// Static class names so Tailwind keeps them in the build.
const orderClass = { 1: 'md:order-1', 2: 'md:order-2', 3: 'md:order-3', 4: 'md:order-4' }
const firstRow = (i, item) => {
  const pos = item.mdOrder ?? i + 1
  return pos <= 2
}
</script>

<template>
  <div class="grid grid-cols-1 gap-x-[68px] md:grid-cols-2">
    <article
      v-for="(item, i) in props.items"
      :key="item.title"
      data-reveal
      class="flex flex-col"
      :class="[
        orderClass[item.mdOrder],
        i < props.items.length - 1 ? 'mb-10 border-b border-soft pb-10' : '',
        firstRow(i, item) ? 'md:mb-10 md:border-b md:pb-10' : 'md:mb-0 md:border-b-0 md:pb-0',
      ]"
    >
      <h3 class="text-[16px] font-semibold leading-[1.4] lg:text-[20px]">{{ item.title }}</h3>
      <p class="mt-[18px] text-[14px] font-medium leading-[1.7] text-muted lg:text-[16px]">
        {{ item.place }}<br />{{ item.dates }}
      </p>
      <p class="mt-6 text-[14px] leading-[1.7] lg:text-[18px]">{{ item.text }}</p>
    </article>
  </div>
</template>
