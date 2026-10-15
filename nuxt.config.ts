import { site, projects } from './data/site.js'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],

  css: [
    '@fontsource-variable/dm-sans/opsz.css',
    '@fontsource/big-shoulders/700.css',
    '@fontsource/big-shoulders/900.css',
    '~/assets/css/main.css',
  ],

  runtimeConfig: {
    public: {
      email: '',
      linkedin: '',
      linkedinLabel: '',
      location: '',
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: site.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: site.description },
        { name: 'robots', content: 'max-image-preview:large' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: site.title },
        { property: 'og:description', content: site.description },
        { property: 'og:image', content: site.url + site.ogImage },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: site.title },
        { name: 'twitter:description', content: site.description },
        { name: 'twitter:image', content: site.url + site.ogImage },
      ],
      link: [
        { rel: 'icon', href: '/favicon-light.svg', media: '(prefers-color-scheme: light)' },
        { rel: 'icon', href: '/favicon-dark.svg', media: '(prefers-color-scheme: dark)' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      script: [
        { innerHTML: "document.documentElement.setAttribute('data-js','')", tagPosition: 'head' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  // Fully static output for Netlify: every page is prerendered to HTML.
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', ...projects.map((p) => `/projects/${p.slug}`)],
    },
  },

  tailwindcss: { viewer: false },
})
