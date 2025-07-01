import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react'
import { useState, type ReactNode } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link, useLocation } from 'react-router'
import ThemeToggleButton from './ThemeToggle'
import Wave from 'react-wavify'
import { FaPause, FaPlay } from 'react-icons/fa'

type URLType = {
  link: string
  name: string
}

function Main({ children }: { children: ReactNode }) {
  const [isPaused, setIsPaused] = useState(false)

  const URL = ({ link, name }: URLType) => {
    const location = useLocation()
    const isActiveLink = location.pathname === link
    return (
      <div
        className={`${isActiveLink ? 'animate-wiggle underline decoration-blue-600 decoration-2 dark:hover:decoration-blue-500' : 'no-underline decoration-0'} duration-75 hover:scale-110 hover:underline hover:decoration-blue-600 hover:decoration-2 dark:hover:decoration-blue-500`}
      >
        <Link to={link}>{name}</Link>
      </div>
    )
  }

  const DropDownUrl = ({
    link,
    name,
    onClick
  }: URLType & { onClick?: () => void }) => {
    return (
      <Link
        onClick={onClick}
        className={`group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-white/10`}
        to={link}
      >
        {name}
      </Link>
    )
  }

  return (
    <>
      <header className='bg-opacity-60 fixed z-auto w-full px-4 pt-2 pb-1.5 backdrop-blur sm:px-8 md:px-20 lg:px-32'>
        <nav className='flex items-center justify-between'>
          <section
            className={`hover:animate-wiggle scale-100 font-mono text-xl transition duration-75 hover:scale-110`}
          >
            <Link to='/'>Harsh Vyapari</Link>
          </section>
          <section className='flex'>
            <div className='hidden md:flex md:items-center md:justify-between md:gap-4'>
              <URL link={'/about'} name={'About'} />
              <URL link={'/projects'} name={'Projects'} />
              <URL link={'/legal'} name={'Legal'} />
            </div>

            <section className='flex'>
              <div className='md:ml-5'>
                <ThemeToggleButton />
              </div>
              {/* Dropdown Menu */}
              <div className='pl-2 md:hidden'>
                <Menu>
                  <MenuButton className='inline-flex items-center gap-2 rounded bg-gray-800 px-3 py-2 text-sm/6 font-semibold text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-700 data-open:bg-gray-700'>
                    <GiHamburgerMenu className='size-5' />
                  </MenuButton>
                  <MenuItems
                    className={
                      'w-52 origin-top-right rounded-xl bg-gray-700 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0'
                    }
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
                          link='/projects'
                          name='Projects'
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
      </header>

      <main className='min-h-[calc(100vh-9rem)] px-4 pt-16 sm:px-8 md:px-20 lg:px-32'>
        {children}
      </main>

      <Wave
        fill='url(#gradient)'
        paused={isPaused}
        options={{
          height: 30,
          amplitude: 40,
          speed: 0.15,
          points: 3
        }}
        className='fixed bottom-0 z-[-1] flex w-full'
      >
        <defs>
          <linearGradient id='gradient' gradientTransform='rotate(90)'>
            <stop offset='10%' stopColor='#22d3ee' /> {/* Tailwind: cyan-400 */}
            <stop offset='90%' stopColor='#0ea5e9' /> {/* Tailwind: sky-500 */}
          </linearGradient>
        </defs>
      </Wave>

      <button
        onClick={() => setIsPaused(!isPaused)}
        className='absolute right-4 bottom-20 rounded-full bg-cyan-400 p-3 text-white shadow-md transition hover:bg-sky-500 sm:right-8 md:right-20 lg:right-32 dark:bg-sky-500 dark:hover:bg-cyan-400'
        aria-label={isPaused ? 'Play wave' : 'Pause wave'}
      >
        {isPaused ? (
          <FaPlay className='h-4 w-4' />
        ) : (
          <FaPause className='h-4 w-4' />
        )}
      </button>

      <footer className='fixed bottom-1 flex h-20 w-full justify-center text-white'>
        <section className='pt-4'>
          &copy; {new Date().getFullYear()} Harsh Vyapari. All Rights Reserved
        </section>
      </footer>
    </>
  )
}

export default Main
