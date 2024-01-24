'use client'

import { useAppDispatch } from '@/lib/hook'
import { checkAnswer } from '@/lib/features/game'

export default function Home() {
  const dispatch = useAppDispatch()

  return (
    <div>
      <button
        onClick={() => {
          dispatch(checkAnswer({ answer: 3 }))
        }}
      >
        Click
      </button>
    </div>
  )
}
