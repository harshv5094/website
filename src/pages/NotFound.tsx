import { useEffect } from 'react'
import NotFoundImage from '../assets/not-found.svg'
import Button from '../components/Button'
import { Link } from 'react-router'
import { HiHome } from 'react-icons/hi2'

function NotFound() {
  useEffect(() => {
    document.title = 'Harsh Vyapari - 404'
  })
  return (
    <>
      <section className='flex w-full flex-col items-center justify-center gap-4 py-12'>
        <div className='grow'>
          <img
            loading='lazy'
            src={NotFoundImage}
            className='size-64'
            alt='Page Not Found Image'
          />
        </div>
        <div className='text-gray-700 dark:text-gray-400'>
          <p>The page you&apos;re looking for does not exist</p>
        </div>
        <div>
          <Link to='/'>
            <Button
              type={'primary'}
              wiggle={true}
              leftIcon={<HiHome />}
              text={'Return To home'}
            />
          </Link>
        </div>
      </section>
    </>
  )
}

export default NotFound
