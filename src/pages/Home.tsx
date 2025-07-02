import { useEffect } from 'react'
import ProfilePic from '../assets/profile-pic.webp'

function Home() {
  useEffect(() => {
    document.title = 'Harsh Vyapari - Home'
  }, [])
  return (
    <>
      <section className='flex flex-col items-center gap-6'>
        {/* Image */}
        <div className='pt-14 md:pt-14'>
          <img
            loading='lazy'
            src={ProfilePic}
            className='rigng-offset-white size-60 rounded-full ring-4 ring-teal-500 ring-offset-4 drop-shadow-[0_0_12px_rgba(20,184,166,0.7)] dark:ring-teal-400 dark:ring-offset-slate-800 dark:drop-shadow-[0_0_12px_rgba(45,212,191,0.7)]'
            aria-label='Profile Picture'
            alt='Profile Pic'
          />
        </div>

        {/* Text */}
        <div className='flex flex-col items-center gap-0 font-sans md:gap-1'>
          <span className='text-2xl font-bold md:text-3xl'>Harsh Vyapari</span>
          <span className='text-md md:text-lg'>
            A Software Developer who loves to code.
          </span>
        </div>

        {/* Social Links */}
        <div></div>
      </section>
    </>
  )
}

export default Home
