import { LuSun, LuMoon } from 'react-icons/lu'
import { useTheme } from '../context/ThemeContext'

function ThemeToggleButton() {
  const { isDark, toggleTheme } = useTheme()
  return (
    <button
      onClick={toggleTheme}
      className='rounded bg-gray-200 px-3 py-2 text-black duration-75 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
    >
      {isDark ? <LuSun className='size-5' /> : <LuMoon className='size-5' />}
    </button>
  )
}

export default ThemeToggleButton
