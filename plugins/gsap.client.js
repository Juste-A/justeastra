import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
 
// Scroll reveal: any element with `data-reveal` fades up when it enters the viewport.
// Optional `data-reveal-delay="0.1"` staggers siblings.
export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(ScrollTrigger)
 
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
 
  const reveal = () => {
    // Drop triggers left behind by the previous page.
    ScrollTrigger.getAll().forEach((st) => {
      if (st.trigger && !st.trigger.isConnected) st.kill()
    })
 
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
 
  const next = () => requestAnimationFrame(reveal)
 
  // First load
  nuxtApp.hook('app:mounted', next)
  // Client-side navigation: the new page is only in the DOM once the page
  // transition has finished, so set up its reveals then (page:finish fires too early).
  nuxtApp.hook('page:transition:finish', next)
  nuxtApp.hook('page:finish', next)
 
  return { provide: { gsap, ScrollTrigger } }
})
