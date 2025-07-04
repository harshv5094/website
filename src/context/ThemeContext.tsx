import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode
} from 'react'

type ThemeContextType = {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false) // SSR-safe default
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    const initialTheme = stored ? stored === 'dark' : systemPrefersDark

    setIsDark(initialTheme)
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (!hasMounted) return
    const root = document.documentElement
    root.setAttribute('data-theme', isDark ? 'dark' : 'light')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark, hasMounted])

  const toggleTheme = () => setIsDark(prev => !prev)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
