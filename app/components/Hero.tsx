import { GiGears } from 'react-icons/gi'
import { PiDotsNine, PiDotsSix } from 'react-icons/pi'

import Link from 'next/link'

const Hero = () => {
  return (
    <section className='bg-primary text-primary-content'>
      <div className='container relative mx-auto py-8'>
        <div className='absolute inset-0 overflow-hidden opacity-40'>
          <div className='absolute left-0 top-0'>
            <PiDotsNine className='text-6xl' />
            <PiDotsSix className='text-6xl' />
          </div>
          <div className='absolute -bottom-2 -right-2'>
            <GiGears className='text-[10rem]' />
          </div>
        </div>

        <div className='relative'>
          <h2 className='text-center text-4xl font-semibold uppercase'>
            Gueess
          </h2>
          <h5 className='my-4 text-center'>Guess the hidden number game</h5>

          <div className='flex justify-center'>
            <Link
              href='/playground'
              className='btn'
            >
              Start Game
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
