import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link, useLocation } from 'react-router'
import ThemeToggleButton from './ThemeToggle'
import SoundToggleButton from './SoundToggle'
import MouseClick from '../sounds/click_general.mp3'
import useSound from 'use-sound'
import { useSoundToggle } from '../context/SoundContext'

type URLType = {
  link: string
  name: string
}

function Header() {
  const location = useLocation()
  const { isSound } = useSoundToggle()

  const [play] = useSound(MouseClick, {
    soundEnabled: isSound,
    volume: 0.5
  })

  const URL = ({ link, name }: URLType) => {
    const isActiveLink = location.pathname === link
    return (
      <Link to={link}>
        <div
          onClick={() => {
            play()
          }}
          className={`${isActiveLink ? 'animate-wiggle underline decoration-teal-500 decoration-2 dark:hover:decoration-teal-400' : 'no-underline decoration-0'} duration-75 hover:scale-110 hover:underline hover:decoration-teal-500 hover:decoration-2 dark:hover:decoration-teal-400`}
        >
          {name}
        </div>
      </Link>
    )
  }

  const DropDownUrl = ({
    link,
    name,
    onClick
  }: URLType & { onClick?: () => void }) => {
    const handleClick = () => {
      play()
      onClick?.()
    }

    return (
      <Link
        className={`group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-slate-200 dark:hover:bg-slate-700`}
        onClick={handleClick}
        to={link}
      >
        {name}
      </Link>
    )
  }

  return (
    <header className='fixed z-10 w-full bg-slate-100/60 pt-2 pb-1.5 backdrop-blur dark:bg-slate-800/60'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-20'>
        <nav className='flex items-center justify-between text-slate-800 dark:text-slate-100'>
          <Link to='/'>
            <section
              onClick={() => {
                play()
              }}
              className='font-heading text-xl transition duration-75 hover:scale-110'
            >
              <h1>Harsh Vyapari</h1>
            </section>
          </Link>
          <section className='flex'>
            <div className='hidden md:flex md:items-center md:justify-between md:gap-4'>
              <URL link={'/about'} name={'About'} />
              <URL link={'/works'} name={'Works'} />
              <URL link={'/legal'} name={'Legal'} />
            </div>

            <section className='flex'>
              <div className='md:ml-5'>
                <ThemeToggleButton data-skip-sound />
              </div>
              <div className='pl-2'>
                <SoundToggleButton data-skip-sound />
              </div>
              <div className='pl-2 md:hidden'>
                <Menu>
                  <MenuButton className='inline-flex items-center gap-2 rounded bg-slate-200 px-3 py-2.5 text-sm/6 font-semibold text-slate-800 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700'>
                    <GiHamburgerMenu className='size-5' />
                  </MenuButton>
                  <MenuItems
                    className='w-52 origin-top-right rounded-xl bg-white p-1 text-sm/6 text-slate-800 shadow-md transition duration-100 ease-out [--anchor-gap:--spacing(3)] focus:outline-none data-closed:scale-95 data-closed:opacity-0 dark:bg-slate-800 dark:text-slate-100'
                    transition
                    anchor='bottom end'
                  >
                    <MenuItem>
                      {({ close }) => (
                        <DropDownUrl link='/' name='Home' onClick={close} />
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ close }) => (
                        <DropDownUrl
                          link='/about'
                          name='About'
                          onClick={close}
                        />
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ close }) => (
                        <DropDownUrl
                          link='/works'
                          name='Works'
                          onClick={close}
                        />
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ close }) => (
                        <DropDownUrl
                          link='/legal'
                          name='Legal'
                          onClick={close}
                        />
                      )}
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </section>
          </section>
        </nav>
      </div>
    </header>
  )
}

export default Header
