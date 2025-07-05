import { type ReactNode } from 'react'
import Wave from 'react-wavify'
import Header from './Header'
import { useTheme } from '../context/ThemeContext'

function Layout({ children }: { children: ReactNode }) {
  const { isDark } = useTheme()
  return (
    <>
      <Header />

      <main className='container mx-auto px-4 pt-14 sm:px-6 md:px-10 lg:px-12'>
        {children}
      </main>

      <Wave
        fill='url(#gradient)'
        options={{
          height: 20,
          amplitude: 40,
          speed: 0.15,
          points: 3
        }}
        className='fixed bottom-0 -z-10'
      >
        <defs>
          <linearGradient id='gradient' gradientTransform='rotate(90)'>
            <stop offset='10%' stopColor={isDark ? '#0ea5e9' : '#93c5fd'} />
            <stop offset='90%' stopColor={isDark ? '#0369a1' : '#99f6e4'} />
          </linearGradient>
        </defs>
      </Wave>

      <footer className='flex justify-center text-slate-600 dark:text-white/80'>
        <section className='pt-4'>
          &copy; {new Date().getFullYear()} Harsh Vyapari. All Rights Reserved
        </section>
      </footer>
    </>
  )
}

export default Layout
