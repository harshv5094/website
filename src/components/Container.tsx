import type { ReactNode } from 'react'

function Container({ children }: { children: ReactNode }) {
  return (
    <section className='mt-5 flex w-full flex-col justify-center px-2 md:px-32 lg:px-56'>
      {children}
    </section>
  )
}

export default Container
