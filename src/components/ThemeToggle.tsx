'use client'
import { LuSun, LuMoon } from 'react-icons/lu'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'

function ThemeToggleButton() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label='Toggle theme'
      className='relative h-10 w-10 overflow-hidden rounded bg-slate-200 text-slate-800 transition hover:bg-slate-300 focus:ring-2 focus:ring-teal-400 focus:outline-none dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:focus:ring-teal-500'
    >
      <AnimatePresence mode='wait' initial={false}>
        <motion.span
          key={isDark ? 'sun' : 'moon'}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className='absolute inset-0 flex items-center justify-center'
        >
          {isDark ? (
            <LuSun className='size-5' />
          ) : (
            <LuMoon className='size-5' />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

export default ThemeToggleButton
