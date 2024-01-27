import { FaPlay } from 'react-icons/fa'
import AttemptCount from './AttemptCount'

const Control = () => {
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
              className='remove-arrow input input-bordered input-primary w-full max-w-xs'
            />
          </label>

          {/* Action buttons */}
          <div className='card-actions mt-8 justify-between'>
            <button className='btn btn-outline btn-primary'>Use Hint</button>
            <button className='btn btn-primary'>
              <FaPlay /> Guess
            </button>
          </div>
        </main>
      </div>
    </section>
  )
}

export default Control
