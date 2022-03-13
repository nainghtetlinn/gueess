import { useSelector, useDispatch } from 'react-redux'
import { updated } from '../../store/entities/setting'
import { showToast } from '../../store/entities/toast'

const Option = () => {
  const setting = useSelector(state => state.setting)
  const dispatch = useDispatch()

  const totalAttempts = [3, 5, 8]
  const totalMaxNumbers = [100, 300, 500, 800, 1000]

  const handleSetSetting = e => {
    e.preventDefault()

    dispatch(
      updated({
        attempt: e.target.attempt.value,
        maxNumber: e.target.maxNumber.value,
      })
    )
    dispatch(showToast({ type: 'success', message: 'New setting applied!' }))
  }

  return (
    <div className="mt-5 px-5">
      <h4 className="mb-5">Setting</h4>
      <form onSubmit={handleSetSetting} className="flex flex-col space-y-6">
        <article className="flex items-center justify-between">
          <h5>Attempts : </h5>
          <div className="flex items-center space-x-4">
            {totalAttempts.map(attempt => {
              return (
                <div key={attempt} className="flex items-center">
                  <label htmlFor={`choice${attempt}`} className="mr-1">
                    {attempt}
                  </label>
                  <input
                    className="cursor-pointer"
                    type="radio"
                    name="attempt"
                    id={`choice${attempt}`}
                    value={attempt}
                    defaultChecked={attempt == setting.attempt ? true : false}
                  />
                </div>
              )
            })}
          </div>
        </article>

        <article className="flex items-center justify-between">
          <h5>Max ramdom number : </h5>
          <select
            name="maxNumber"
            defaultValue={setting.maxNumber}
            className="cursor-pointer rounded-md hover:ring-4 hover:ring-highlight focus:outline-none"
          >
            {totalMaxNumbers.map(num => {
              return (
                <option key={num} value={num}>
                  {num}
                </option>
              )
            })}
          </select>
        </article>

        <button
          type="submit"
          className="mx-auto rounded-md border-2 border-highlight bg-skin-primary px-3 py-1 text-skin-headline transition-colors hover:bg-skin-highlight hover:text-skin-base"
        >
          Set Setting
        </button>
      </form>
    </div>
  )
}

export default Option
