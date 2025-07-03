import React from 'react'

const TimerDisplay = ({timeFormatted}) => {
  return (
    <div className=" text-5xl font-mono bg-white px-8 py-4 rounded shadow mb-6">
        {timeFormatted}
      </div>
  )
}
export default TimerDisplay