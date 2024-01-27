'use client'

import Hero from './components/Hero'
import { useAppDispatch } from '@/lib/hook'
import { checkAnswer } from '@/lib/features/game'

export default function Home() {
  const dispatch = useAppDispatch()

  return (
    <>
      <Hero />
      <div>
        <button
          onClick={() => {
            dispatch(checkAnswer({ answer: 3 }))
          }}
        >
          Click
        </button>
      </div>
    </>
  )
}
