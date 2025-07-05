import type { ReactNode } from 'react'
import { Link } from 'react-router'
import useSound from 'use-sound'
import MouseClick from '../sounds/click_general.mp3'
import { useSoundToggle } from '../context/SoundContext'

type Props = {
  icon: ReactNode
  to: string
  label?: string
  target?: string
}

function SocialMediaButton({
  icon,
  to,
  label = 'Social link',
  target = '_blank'
}: Props) {
  const { isSound } = useSoundToggle()
  const [play] = useSound(MouseClick, {
    soundEnabled: isSound,
    volume: 0.5
  })

  return (
    <Link
      onClick={() => {
        play()
      }}
      to={to}
      target={target}
      rel='noopener noreferrer'
      aria-label={label}
      className='flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-800 transition duration-150 hover:bg-slate-300 hover:ring-2 hover:ring-teal-400 focus:outline-none dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:focus:ring-teal-500'
    >
      {icon}
    </Link>
  )
}

export default SocialMediaButton
