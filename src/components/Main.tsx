import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react'
import { type ReactNode } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link, useLocation } from 'react-router'
import ThemeToggleButton from './ThemeToggle'
import Wave from 'react-wavify'
import { useTheme } from '../context/ThemeContext'

type URLType = {
  link: string
  name: string
}

function Main({ children }: { children: ReactNode }) {
  const { isDark } = useTheme()
  const location = useLocation()

  const URL = ({ link, name }: URLType) => {
    const isActiveLink = location.pathname === link
    return (
      <div
        className={`${isActiveLink ? 'animate-wiggle underline decoration-teal-500 decoration-2 dark:hover:decoration-teal-400' : 'no-underline decoration-0'} duration-75 hover:scale-110 hover:underline hover:decoration-teal-500 hover:decoration-2 dark:hover:decoration-teal-400`}
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
        className={`group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-slate-200 dark:hover:bg-slate-700`}
        to={link}
      >
        {name}
      </Link>
    )
  }

  return (
    <>
      <header className='fixed z-10 w-full bg-slate-100/60 px-4 pt-2 pb-1.5 backdrop-blur sm:px-8 md:px-20 lg:px-32 dark:bg-slate-800/60'>
        <nav className='flex items-center justify-between text-slate-800 dark:text-slate-100'>
          <section className='hover:animate-wiggle font-mono text-xl transition duration-75 hover:scale-110'>
            <Link to='/'>Harsh Vyapari</Link>
          </section>
          <section className='flex'>
            <div className='hidden md:flex md:items-center md:justify-between md:gap-4'>
              <URL link={'/about'} name={'About'} />
              <URL link={'/works'} name={'Works'} />
              <URL link={'/legal'} name={'Legal'} />
            </div>

            <section className='flex'>
              <div className='md:ml-5'>
                <ThemeToggleButton />
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
      </header>

      <main className='bg-white px-4 pt-13.5 text-slate-800 sm:h-[32rem] sm:px-8 md:px-20 lg:px-32 dark:bg-slate-900 dark:text-slate-100'>
        {children}
      </main>

      <Wave
        fill='url(#gradient)'
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.15,
          points: 3
        }}
        className='fixed bottom-0 z-10'
      >
        <defs>
          <linearGradient id='gradient' gradientTransform='rotate(90)'>
            <stop offset='10%' stopColor={isDark ? '#22d3ee' : '#93c5fd'} />
            <stop offset='90%' stopColor={isDark ? '#0ea5e9' : '#99f6e4'} />
          </linearGradient>
        </defs>
      </Wave>

      <footer className='fixed bottom-1 z-20 flex h-20 w-full justify-center text-slate-800 dark:text-white'>
        <section className='pt-4'>
          &copy; {new Date().getFullYear()} Harsh Vyapari. All Rights Reserved
        </section>
      </footer>
    </>
  )
}

export default Main
