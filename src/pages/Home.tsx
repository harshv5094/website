import { useEffect } from 'react'
import ProfilePic from '../assets/profile-pic.webp'
import SocialMediaButton from '../components/SocialMediaButton'
import { FaBluesky, FaGithub, FaLinkedin } from 'react-icons/fa6'
import { SiGmail, SiProtonmail } from 'react-icons/si'

function Home() {
  useEffect(() => {
    document.title = 'Harsh Vyapari - Home'
  }, [])
  return (
    <>
      <article className='flex flex-col content-center items-center gap-2'>
        {/* Image */}
        <section className='pt-12 md:pt-14'>
          <img
            loading='lazy'
            src={ProfilePic}
            className='size-60 rounded-full ring-4 ring-teal-500 drop-shadow-[0_0_12px_rgba(20,184,166,0.7)] dark:ring-teal-400 dark:drop-shadow-[0_0_12px_rgba(45,212,191,0.7)]'
            aria-label='Profile Picture'
            alt='Profile Pic'
          />
        </section>

        {/* Text */}
        <section className='mt-2 flex flex-col items-center gap-1 font-sans'>
          <span className='font-heading text-3xl font-bold'>Harsh Vyapari</span>
          <span className='text-lg'>Software Developer / Linux Enthusiast</span>
        </section>

        {/* Social Links */}
        <div className='flex flex-row gap-2'>
          <SocialMediaButton
            label={'Github Profile Link'}
            icon={<FaGithub size={22} />}
            to={'https://github.com/harshv5094'}
          />
          <SocialMediaButton
            label={'Bluesky Profile Link'}
            icon={<FaBluesky size={18} />}
            to={'https://bsky.app/profile/harshv5094.bsky.social'}
          />
          <SocialMediaButton
            label={'Bluesky Profile Link'}
            icon={<FaLinkedin size={20} />}
            to={'https://linkedin.com/in/harshv5094'}
          />
          <SocialMediaButton
            label={'Protom Mail Link'}
            icon={<SiProtonmail size={18} />}
            to={'mailto:harshvy5094.proton.me'}
          />
          <SocialMediaButton
            label={'Protom Mail Link'}
            icon={<SiGmail size={18} />}
            to={'mailto:harshv5094@gmail.com'}
          />
        </div>
      </article>
    </>
  )
}

export default Home
