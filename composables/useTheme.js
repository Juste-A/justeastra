// Light / dark toggle. Starts in dark mode on each visit.
export const useTheme = () => {
  const dark = useState('theme-dark', () => true)
  const toggle = () => (dark.value = !dark.value)
  return { dark, toggle }
}