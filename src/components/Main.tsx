import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react'
import type { ReactNode } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router'
import ThemeToggleButton from './ThemeToggle'

type URLType = {
  link: string
  name: string
}

function Main({ children }: { children: ReactNode }) {
  const URL = ({ link, name }: URLType) => {
    return (
      <div
        className={`${window.location.pathname === link ? 'animate-wiggle underline decoration-blue-600 decoration-2 dark:hover:decoration-blue-500' : 'no-underline decoration-0'} duration-75 hover:scale-110 hover:underline hover:decoration-blue-600 hover:decoration-2 dark:hover:decoration-blue-500`}
      >
        <Link to={link}>{name}</Link>
      </div>
    )
  }

  const DropDownUrl = ({ link, name }: URLType) => {
    return (
      <Link
        className={`group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-white/10`}
        to={link}
      >
        {name}
      </Link>
    )
  }

  return (
    <div>
      <header className='bg-opacity-60 fixed z-auto w-full px-4 pt-2 pb-1.5 backdrop-blur sm:px-8 md:px-20 lg:px-32'>
        <nav className='flex items-center justify-between font-mono'>
          <section
            className={`hover:animate-wiggle text-xl transition duration-75 hover:scale-110`}
          >
            <Link to='/'>Harsh Vyapari</Link>
          </section>
          <section className='flex'>
            <div className='hidden md:flex md:items-center md:justify-between md:gap-4'>
              <URL link={'/projects'} name={'Projects'} />
              <URL link={'/contact'} name={'Contacts'} />
              <URL link={'/legal'} name={'Legal'} />
            </div>

            <section className='flex'>
              <div className='md:pl-5'>
                <ThemeToggleButton />
              </div>
              {/* Dropdown Menu */}
              <div className='flex pl-2 md:hidden'>
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
                      <DropDownUrl link='/' name='Home' />
                    </MenuItem>
                    <MenuItem>
                      <DropDownUrl link='/projects' name='Projects' />
                    </MenuItem>
                    <MenuItem>
                      <DropDownUrl link='/contact' name='Contact' />
                    </MenuItem>
                    <MenuItem>
                      <DropDownUrl link='/legal' name='Legal' />
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </section>
          </section>
        </nav>
      </header>

      <main className='px-4 pt-16 sm:px-8 md:px-20 lg:px-32'>{children}</main>

      <footer className='flex h-20 w-full justify-center text-gray-800 dark:text-gray-400'>
        <section className='pt-4'>
          &copy; {new Date().getFullYear()} Harsh Vyapari. All Rights Reserved
          <div className='gap-2'></div>
        </section>
      </footer>
    </div>
  )
}

export default Main
