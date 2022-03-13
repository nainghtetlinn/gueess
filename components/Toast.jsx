import { useEffect } from 'react'

import { BsCheck2Circle } from 'react-icons/bs'

const Toast = ({ type, msg, handleHide }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleHide()
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <article
      className={`absolute left-1/2 bottom-8 flex min-w-[250px] -translate-x-1/2 animate-toast items-center justify-between rounded-md border-2 bg-slate-100 px-5 py-2 text-lg font-medium ${
        type === 'success' ? 'border-[#00ebc7] text-[#00ebc7]' : ''
      }`}
    >
      <div className="shrink-0">
        <BsCheck2Circle />
      </div>
      <div>
        <h5>{msg}</h5>
      </div>
    </article>
  )
}

export default Toast
