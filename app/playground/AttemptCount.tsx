'use client'

import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { useAppSelector } from '@/lib/hook'

const AttemptCount = () => {
  const { maxAttempts } = useAppSelector(store => store.setting)
  const { attemptCount } = useAppSelector(store => store.game)

  const leftAttempts = maxAttempts - attemptCount

  return (
    <div>
      <h5 className='mb-2'>Attempts</h5>
      <div className='flex items-center gap-2 text-primary'>
        {[...Array(leftAttempts)].map((_, i) => (
          <span key={i}>
            <BsHeartFill />
          </span>
        ))}
        {[...Array(attemptCount)].map((_, i) => (
          <span key={i}>
            <BsHeart />
          </span>
        ))}
      </div>
    </div>
  )
}

export default AttemptCount
