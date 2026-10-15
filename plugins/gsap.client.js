import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Scroll reveal: any element with `data-reveal` fades up when it enters the viewport.
// Optional `data-reveal-delay="0.1"` staggers siblings.
export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(ScrollTrigger)

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const reveal = () => {
    document.querySelectorAll('[data-reveal]:not([data-revealed])').forEach((el) => {
      el.setAttribute('data-revealed', '')
      if (reduce) return gsap.set(el, { opacity: 1, y: 0 })
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: parseFloat(el.dataset.revealDelay || 0),
        scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      })
    })
    ScrollTrigger.refresh()
  }

  nuxtApp.hook('page:finish', () => requestAnimationFrame(reveal))
  nuxtApp.hook('app:mounted', () => requestAnimationFrame(reveal))

  return { provide: { gsap, ScrollTrigger } }
})
