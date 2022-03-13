import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BsCheck2Circle } from 'react-icons/bs'
import { showHint, checkAnswer } from '../../store/entities/game'

const GamePad = () => {
  const dispatch = useDispatch()
  const {
    attempt,
    totalAttempt,

    useHint,
    startNumber,
    endNumber,
  } = useSelector(store => store.game)

  const [guess, setGuess] = useState('')
  const [invalidMessage, setInvalidMessage] = useState('')

  const handleChange = e => {
    const input = Number(e.target.value.trim())

    if (input < endNumber) {
      setGuess(input)
      setInvalidMessage('')
    }
    if (input >= endNumber) {
      setInvalidMessage(`Guess should be below ${endNumber}`)
    }
    if (input <= startNumber) {
      setInvalidMessage(`Guess should be above ${startNumber}`)
    }
    if (input <= 0) {
      setGuess('')
      setInvalidMessage('')
    }
  }

  const handleUseHint = e => {
    e.preventDefault()
    dispatch(showHint())
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (guess > startNumber && guess < endNumber) {
      dispatch(checkAnswer({ answer: guess }))
    } else if (guess === '') {
      setInvalidMessage('Please enter something')
    } else {
      setInvalidMessage(
        `The number should between ${startNumber} - ${endNumber}`
      )
    }
  }

  return (
    <section className="container mx-auto">
      <div className="px-5">
        <article className="mx-auto mb-5 max-w-sm">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <p>
                Attempt : <span>{attempt}</span> / <span>{totalAttempt}</span>
              </p>
              <input
                type="number"
                name="number"
                value={guess}
                onChange={handleChange}
                placeholder="Type number"
                className="rounded-md border-2 px-3 py-1 focus:border-2 focus:border-highlight focus:outline-none"
              />
              <p className="text-sm text-red-600 sm:text-lg">
                {invalidMessage}
              </p>
            </div>
            <div className="mt-2 flex justify-center gap-2">
              <button
                type="submit"
                className="flex items-center rounded-md border-2 border-highlight bg-skin-highlight px-3 py-1 text-skin-base hover:opacity-80"
              >
                <BsCheck2Circle className="mr-2" />
                Check
              </button>
              <button
                onClick={handleUseHint}
                disabled={useHint}
                className="flex items-center rounded-md border-2 border-gray-400 px-3 py-1 text-skin-headline hover:border-highlight disabled:border-gray-300 disabled:text-skin-paragraph"
              >
                Use Hint
              </button>
            </div>
          </form>
        </article>
      </div>
    </section>
  )
}

export default GamePad
