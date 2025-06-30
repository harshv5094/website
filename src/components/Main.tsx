import type { ReactNode } from 'react'

function Main({ children }: { children: ReactNode }) {
  return (
    <div>
      <header className='fixed z-auto w-full bg-white/60 px-4 py-4 backdrop-blur sm:px-10 md:px-14'>
        <nav>Header</nav>
      </header>

      <main className='px-4 pt-16 sm:px-10 md:px-14'>{children}</main>

      <footer className='flex h-20 w-full justify-center text-gray-800'>
        <section className='pt-4'>
          &copy; {new Date().getFullYear()} Harsh Vyapari. All Rights Reserved
          <div className='gap-2'></div>
        </section>
      </footer>
    </div>
  )
}

export default Main
