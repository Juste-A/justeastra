/** @type {import('tailwindcss').Config} */
export default {
  content: ['./components/**/*.vue', './layouts/**/*.vue', './pages/**/*.vue', './app.vue', './data/**/*.js'],
  theme: {
    // Same breakpoints as the Framer site: phone < 810, tablet 810-1199, desktop >= 1200.
    screens: { md: '810px', lg: '1200px' },
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'var(--muted)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        soft: 'var(--soft)',
        track: 'var(--track)',
        footer: 'rgb(var(--footer) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['"DM Sans Variable"', '"DM Sans"', 'Arial', 'sans-serif'],
        display: ['"Big Shoulders"', 'sans-serif'],
      },
      maxWidth: { content: '928px' },
    },
  },
  plugins: [],
}
