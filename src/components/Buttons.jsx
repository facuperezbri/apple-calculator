import React from 'react'

import Button from './Button'
import buttons from '../constants'

const Buttons = ({ value }) => {
  return (
    <div className='grid grid-rows-5 place-content-center place-items-center grid-cols-4 px-[16px] pb-10 gap-[10px]'>
      <Button content={value !== '0' ? 'C' : 'AC'} type='clear' />
      {buttons.map((b) => (
        <Button content={b.content} type={b.type} />
      ))}</div>
  )
}

export default Buttons