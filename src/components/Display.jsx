import React from 'react'

const Display = ({ value, prev }) => {
  return (
    <div className='flex justify-end items-end text-[100px] font-extralight pr-5 h-[200px]'>{value}</div>
  )
}

export default Display