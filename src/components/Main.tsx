import type { ReactNode } from 'react'

function Main({ children }: { children: ReactNode }) {
  return (
    <div>
      <header className='bg-gray-800 px-5 py-4 text-white'>
        <nav>Header</nav>
      </header>

      <main className='h-dvh'>{children}</main>

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
