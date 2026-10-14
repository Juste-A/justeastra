// Light / dark toggle. Like the Framer original, it starts in light mode on each visit.
export const useTheme = () => {
  const dark = useState('theme-dark', () => false)

  const toggle = () => {
    dark.value = !dark.value
    if (import.meta.client) document.documentElement.classList.toggle('dark', dark.value)
  }

  return { dark, toggle }
}
