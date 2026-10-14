<script setup>
import { nav } from '~/data/site.js'

const { dark, toggle } = useTheme()
const open = ref(false)
const route = useRoute()

watch(() => route.fullPath, () => (open.value = false))

const isActive = (to) => (to === '/' ? route.path === '/' : route.path.startsWith(to))

const onKey = (e) => {
  if (e.key === 'Escape') open.value = false
}
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <header class="sticky top-0 z-40 bg-bg pt-5 lg:pt-[30px]">
    <div class="container-site relative flex h-[70px] items-center justify-between">
      <!-- Menu -->
      <div class="relative z-10 h-[50px] w-10">
        <button
          type="button"
          class="relative block h-[50px] w-10"
          :aria-expanded="open"
          aria-controls="site-menu"
          :aria-label="open ? 'Close menu' : 'Open menu'"
          @click="open = !open"
        >
          <span
            class="absolute left-[3px] h-[2px] rounded-[10px] bg-ink transition-all duration-300 ease-out"
            :class="open ? 'top-6 w-[22px] translate-x-[6px] rotate-45' : 'top-[14px] w-[34px]'"
          />
          <span
            class="absolute left-[3px] top-6 h-[2px] rounded-[10px] bg-ink transition-all duration-300 ease-out"
            :class="open ? 'w-0 opacity-0' : 'w-[19px]'"
          />
          <span
            class="absolute left-[3px] h-[2px] rounded-[10px] bg-ink transition-all duration-300 ease-out"
            :class="open ? 'top-6 w-[22px] translate-x-[6px] -rotate-45' : 'top-[34px] w-[26px]'"
          />
        </button>

        <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          leave-active-class="transition duration-200 ease-in"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <nav
            v-show="open"
            id="site-menu"
            class="absolute left-0 top-0 -z-10 w-max rounded-lg bg-bg px-[10px] pb-[10px] pt-[70px]"
            aria-label="Main"
          >
            <ul class="pl-[10px]">
              <li v-for="item in nav" :key="item.to">
                <NuxtLink
                  :to="item.to"
                  class="block font-display text-[34px] font-bold uppercase leading-[1.5] tracking-[0.04em] transition-colors duration-200 hover:text-accent"
                  :class="isActive(item.to) ? 'text-accent' : 'text-ink'"
                >
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </Transition>
      </div>

      <!-- Signature logo -->
      <NuxtLink to="/" aria-label="Juste, home" class="absolute left-1/2 top-[1px] z-20 h-[69px] w-[87px] -translate-x-1/2 text-ink">
        <LogoSignature />
      </NuxtLink>

      <!-- Theme switch -->
      <button
        type="button"
        role="switch"
        :aria-checked="dark"
        aria-label="Dark mode"
        class="relative h-[34px] w-[65px] rounded-[43px] bg-soft"
        @click="toggle"
      >
        <span
          class="absolute left-[3px] top-[3px] h-[28px] w-[28px] rounded-full bg-bg transition-transform duration-300 ease-out"
          :class="dark ? 'translate-x-[31px]' : ''"
        />
      </button>
    </div>
  </header>
</template>
