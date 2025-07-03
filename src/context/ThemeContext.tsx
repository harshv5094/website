'use client'
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
  const [isDark, setIsDark] = useState<boolean>(false) // default false
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored) {
      setIsDark(stored === 'dark')
    } else {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      setIsDark(prefersDark)
    }
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (!hasMounted) return
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark, hasMounted])

  const toggleTheme = () => setIsDark(prev => !prev)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
