<template>
  <div>
    <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent">
      Skip to content
    </a>
    <div class="relative z-10 bg-bg">
      <SiteHeader />
      <main id="main" class="pb-[100px] lg:pb-[150px]">
        <slot />
      </main>
    </div>
    <SiteFooter />
  </div>
</template>
