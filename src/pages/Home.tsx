import { useEffect } from 'react'
import ProfilePic from '../assets/profile-pic.webp'

function Home() {
  useEffect(() => {
    document.title = 'Harsh Vyapari - Home'
  }, [])
  return (
    <>
      <section className='flex flex-col items-center gap-4'>
        {/* Image */}
        <div className='pt-14 md:pt-14'>
          <img
            loading='lazy'
            src={ProfilePic}
            className='size-60 rounded-full ring-4 ring-teal-500 drop-shadow-[0_0_12px_rgba(20,184,166,0.7)] dark:ring-teal-400 dark:drop-shadow-[0_0_12px_rgba(45,212,191,0.7)]'
            aria-label='Profile Picture'
            alt='Profile Pic'
          />
        </div>

        {/* Text */}
        <div className='mt-2 flex flex-col items-center gap-1 font-sans'>
          <span className='text-3xl font-bold'>Harsh Vyapari</span>
          <span className='text-md'>
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
