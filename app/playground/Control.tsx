'use client'
import { FaPlay } from 'react-icons/fa'
import AttemptCount from './AttemptCount'

import { guessNumber, showHint } from '@/lib/features/game'
import { useAppDispatch, useAppSelector } from '@/lib/hook'
import { useState } from 'react'

const Control = ({ start }: { start: () => void }) => {
  const [num, setNum] = useState<string>('')
  const dispatch = useAppDispatch()
  const {
    isGameOver,
    isHintUsed,
    attemptCount,
    maxAttempts,
    startNumber,
    endNumber,
  } = useAppSelector(store => store.game)

  const handleTryAgain = () => {
    if (!isGameOver) return console.log("Game haven't started")

    start()
  }

  const handleShowHint = () => {
    if (isHintUsed) return console.log('Hint used')
    if (isGameOver) return console.log('Game over')

    dispatch(showHint())
  }

  const handleGuess = () => {
    const guess = Number(num)
    if (!guess) return console.log('Error')
    if (guess < startNumber || guess > endNumber) return console.log('Invalid')
    if (isGameOver) return console.log('Game over')
    if (attemptCount === maxAttempts) return console.log('Lose')

    dispatch(guessNumber({ guess }))
    setNum('')
  }

  return (
    <section>
      <div className='card mx-auto max-w-96'>
        <main className='card-body'>
          {/* Attempts */}
          <AttemptCount />

          {/* Control */}
          <label className='form-control w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'>What is your guess?</span>
            </div>
            <input
              type='number'
              placeholder='Type here'
              value={num}
              onChange={e => setNum(e.target.value)}
              className='remove-arrow input input-bordered input-primary w-full max-w-xs'
            />
          </label>

          {/* Action buttons */}
          {isGameOver ? (
            <div className='card-actions mt-8 justify-start'>
              <button
                onClick={handleTryAgain}
                className='btn btn-primary'
                disabled={!isGameOver}
              >
                Try again
              </button>
            </div>
          ) : (
            <div className='card-actions mt-8 justify-between'>
              <button
                onClick={handleShowHint}
                className='btn btn-outline btn-primary'
                disabled={isHintUsed || isGameOver}
              >
                Use Hint
              </button>
              <button
                onClick={handleGuess}
                className='btn btn-primary'
                disabled={isGameOver}
              >
                <FaPlay /> Guess
              </button>
            </div>
          )}
        </main>
      </div>
    </section>
  )
}

export default Control
