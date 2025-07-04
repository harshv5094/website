import type React from 'react'
import { useSoundToggle } from '../context/SoundContext'
import useSound from 'use-sound'
import MouseClick from '../sounds/click_general.mp3'

type Props = {
  text: string
  type: 'primary' | 'secondary'
  wiggle?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

function Button({
  text,
  type,
  wiggle = false,
  onClick,
  leftIcon,
  rightIcon
}: Props) {
  const { isSound } = useSoundToggle()
  const [play] = useSound(MouseClick, {
    soundEnabled: isSound,
    volume: 0.5
  })

  const wiggleClass = wiggle ? 'hover:animate-wiggle' : 'hover:animate-none'
  const baseClass =
    'rounded px-4 py-2 font-medium transition duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center gap-2'

  const variants: Record<typeof type, string> = {
    primary: `
      bg-teal-500 text-white hover:bg-teal-600
      dark:bg-teal-400 dark:hover:bg-teal-300
      focus:ring-teal-300 dark:focus:ring-teal-500
    `,
    secondary: `
      border border-slate-300 text-slate-800 hover:bg-slate-100
      dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700
      focus:ring-slate-400 dark:focus:ring-slate-500
    `
  }

  return (
    <button
      onClick={event => {
        play()
        if (onClick) onClick(event)
      }}
      className={`${wiggleClass} ${baseClass} ${variants[type]}`}
    >
      {leftIcon && <span className='size-4'>{leftIcon}</span>}
      <span>{text}</span>
      {rightIcon && <span className='size-4'>{rightIcon}</span>}
    </button>
  )
}

export default Button
