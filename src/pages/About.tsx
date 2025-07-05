import { useEffect, type ReactNode } from 'react'

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <section className='font-heading text-2xl font-bold underline decoration-teal-500 decoration-2 dark:decoration-teal-400'>
      {children}
    </section>
  )
}

function About() {
  useEffect(() => {
    document.title = 'Harsh Vyapari - About'
  }, [])
  return (
    <article
      className={`mx-auto my-4 grid place-content-center gap-2 px-4 sm:px-6 md:px-16 lg:px-20 xl:px-52`}
    >
      {/* About Me Section */}
      <div className='mb-2 max-w-prose text-justify'>
        <Title>About Me</Title>
        <section>
          <p>
            Hi!, I'm <b>Harsh Vyapari</b>- a Software Developer currently based
            in <b>Maharashtra, India.</b> I'm passionate about learning new
            technologies and constantly improving my skills. Whenever I get some
            free time from my day job, you’ll find me experimenting, tinkering,
            or diving deep into something new in tech. In short, I’m a curious
            geek who loves to explore and build.
          </p>
        </section>
      </div>

      {/* Bio */}
      <div className='mb-2 text-justify'>
        <Title>Bio</Title>
        <section className='grid gap-y-1'>
          <div className='grid grid-cols-[auto_1fr] gap-x-4'>
            <span className='font-bold'>2001</span>
            <span>Born in Nagpur, Maharashtra, India</span>
          </div>
          <div className='grid grid-cols-[auto_1fr] gap-x-4'>
            <span className='font-bold'>2024</span>
            <span >
              Completed UG Program in Computer Engineering from{' '}
              <a
                href='https://www.stvincentngp.edu.in/'
                className='hover:underline hover:decoration-1'
                target='_blank'
              >
                SVPCET
              </a>
              {', '}Nagpur
            </span>
          </div>
          <div className='grid grid-cols-[auto_1fr] gap-x-4'>
            <span className='font-bold'>2025 to now</span>
            <span >
              Working as a Junior Software Developer in Veyron Technologies
            </span>
          </div>
        </section>
      </div>

      {/* Hobbies and Interests Section */}
      <div className='mb-2'>
        <Title>I ♥</Title>
        <section className='text-justify'>
          Books, Riding Bikes, Tinkering with Linux (Arch btw), Computers, Music
        </section>
      </div>
    </article>
  )
}

export default About
