import { LuSun, LuMoon } from 'react-icons/lu'
import { useTheme } from '../context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'
import DayMode from '../sounds/lightmode.mp3'
import NightMode from '../sounds/darkmode.mp3'
import useSound from 'use-sound'
import { useSoundToggle } from '../context/SoundContext'

function ThemeToggleButton() {
  const { isDark, toggleTheme } = useTheme()
  const { isSound } = useSoundToggle()
  const [play] = useSound(isDark ? NightMode : DayMode, {
    soundEnabled: isSound,
    volume: 0.5
  })

  return (
    <button
      onClick={() => {
        toggleTheme()
        play()
      }}
      aria-label='Toggle theme'
      className='relative h-10 w-10 overflow-hidden rounded bg-slate-200 text-slate-800 transition not-focus:outline-none hover:bg-slate-300 hover:ring-2 hover:ring-teal-400 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:focus:ring-teal-500'
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
