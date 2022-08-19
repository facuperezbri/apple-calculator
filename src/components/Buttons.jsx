import React from 'react'

import Button from './Button'
import buttons from '../constants'

const Buttons = () => {
  return (
    <div className='grid grid-rows-5 grid-cols-4 px-[16px] pb-10 gap-[10px]'>
      {buttons.map((b) => (
        <Button content={b.content} />
      ))}</div>
  )
}

export default Buttons