import { LuVolume2, LuVolumeX } from 'react-icons/lu'
import { useSoundToggle } from '../context/SoundContext'
import { motion, AnimatePresence } from 'framer-motion'
import SoundOn from '../sounds/click-sfx.mp3'
import useSound from 'use-sound'

function SoundToggleButton() {
  const { isSound, toggleSound } = useSoundToggle()
  const [playOn] = useSound(SoundOn, { volume: 1 })

  const handleClick = () => {
    const nextSoundState = !isSound
    toggleSound()
    if (nextSoundState) playOn() // Only play when turning ON
  }

  return (
    <button
      onClick={handleClick}
      aria-label='Toggle sound'
      className='relative h-10 w-10 overflow-hidden rounded bg-slate-200 text-slate-800 transition hover:bg-slate-300 focus:ring-2 focus:ring-teal-400 focus:outline-none dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:focus:ring-teal-500'
    >
      <AnimatePresence mode='wait' initial={false}>
        <motion.span
          key={isSound ? 'on' : 'off'}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className='absolute inset-0 flex items-center justify-center'
        >
          {isSound ? (
            <LuVolume2 className='size-5' />
          ) : (
            <LuVolumeX className='size-5' />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

export default SoundToggleButton
