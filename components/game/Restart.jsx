import React from 'react'
import { BsArrowCounterclockwise } from 'react-icons/bs'

const Restart = ({ string, restart }) => {
  return (
    <div className="container mx-auto flex justify-center px-5 pt-2">
      <button
        onClick={restart}
        className="hover:ring-highlight/50 flex items-center justify-between rounded border-2 border-highlight p-1 text-skin-headline shadow-md hover:border-transparent hover:ring-4"
      >
        <BsArrowCounterclockwise className="m-1 text-xl" />
        {string}
      </button>
    </div>
  )
}

export default Restart
