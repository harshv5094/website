import { useEffect } from 'react'
import Main from '../components/Main'
import NotFoundImage from '../assets/not-found.svg'
import NotFoundDarkImage from '../assets/not-found-dark.svg'
import Button from '../components/Button'
import { Link } from 'react-router'
import { useTheme } from '../context/ThemeContext'

function NotFound() {
  const { isDark } = useTheme()
  useEffect(() => {
    document.title = 'Harsh Vyapari - 404'
  })
  return (
    <Main>
      <section className='flex w-full flex-col items-center justify-center gap-5 py-12'>
        <div className='grow'>
          <img
            loading='lazy'
            src={isDark ? NotFoundDarkImage : NotFoundImage}
            className='h-md md:h-lg w-md md:w-lg'
            alt='Page Not Found Image'
          />
        </div>
        <div className='text-gray-700 dark:text-gray-400'>
          <p>The page you&apos;re looking for does not exist</p>
        </div>
        <div>
          <Link to='/'>
            <Button type={'primary'} wiggle={true} text={'Return To home'} />
          </Link>
        </div>
      </section>
    </Main>
  )
}

export default NotFound
