'use client'

import { BsGripVertical, BsHexagon } from 'react-icons/bs'

import { useAppSelector } from '@/lib/hook'

const HiddenNumber = () => {
  const {
    hint,
    startNumber,
    endNumber,
    gameMessage,
    isGameOver,
    correctNumber,
  } = useAppSelector(store => store.game)

  return (
    <section className='bg-primary text-primary-content'>
      <div className='container relative mx-auto py-8'>
        {/* Background */}
        <div className='absolute inset-0 overflow-hidden opacity-40'>
          <div className='absolute left-0 top-0'>
            <BsGripVertical className='text-6xl' />
          </div>
          <div className='absolute -bottom-8 -right-2'>
            <BsHexagon className='text-[10rem]' />
          </div>
        </div>

        {/* Content */}
        <div>
          <div className='mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-base-100 text-primary'>
            <h2 className='text-center text-4xl font-semibold uppercase'>
              {isGameOver ? correctNumber : hint}
            </h2>
          </div>
          <h5 className='my-4 text-center'>{gameMessage}</h5>

          <div className='flex items-center justify-center gap-2'>
            <div className='flex h-12 w-12 items-center justify-center bg-base-100 text-primary'>
              <h5>{startNumber}</h5>
            </div>
            <span>to</span>
            <div className='flex h-12 w-12 items-center justify-center bg-base-100 text-primary'>
              <h5>{endNumber}</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HiddenNumber
