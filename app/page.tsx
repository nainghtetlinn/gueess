'use client'

import Hero from './components/Hero'
import Setting from './components/Setting'
import { useAppDispatch } from '@/lib/hook'
import { checkAnswer } from '@/lib/features/game'

export default function Home() {
  const dispatch = useAppDispatch()

  return (
    <>
      <Hero />
      <Setting />
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
