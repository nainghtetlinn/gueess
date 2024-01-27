'use client'

import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/lib/hook'
import { updateSetting } from '@/lib/features/setting'

const Setting = () => {
  const { attemptOptions, maxNumberOptions, maxNumber, maxAttempt } =
    useAppSelector(s => s.setting)

  const dispatch = useAppDispatch()

  return (
    <section>
      <div className='container card mx-auto'>
        <main className='card-body'>
          <h2 className='card-title'>Settings</h2>

          <label className='form-control w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'>Attempts</span>
            </div>
            <select
              className='select select-bordered select-primary'
              defaultValue={maxAttempt}
              onChange={e => {
                dispatch(updateSetting({ maxAttempt: +e.target.value }))
              }}
            >
              {attemptOptions.map(a => (
                <option
                  key={a}
                  value={a}
                >
                  {a}
                </option>
              ))}
            </select>
          </label>
          <label className='form-control w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'>Max Number</span>
            </div>
            <select
              className='select select-bordered select-primary'
              defaultValue={maxNumber}
              onChange={e => {
                dispatch(updateSetting({ maxNumber: +e.target.value }))
              }}
            >
              {maxNumberOptions.map(n => (
                <option
                  key={n}
                  value={n}
                >
                  {n}
                </option>
              ))}
            </select>
          </label>

          <div className='card-actions justify-start'>
            <Link
              href='/playground'
              className='btn btn-primary'
            >
              Start Game
            </Link>
          </div>
        </main>
      </div>
    </section>
  )
}

export default Setting
