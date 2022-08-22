import React from 'react'

const Button = ({ content, type }) => {
  return (
    <button className={`bg-[#333] h-[75px] w-[75px] rounded-full font-medium text-[34px]  ${content === '0' && 'flex justify-start items-center pl-7 w-[180px] col-start-1 col-span-2'} ${type === 'operator' && 'bg-[#ff9f0c] active:bg-[#fdc68d]'} ${type === 'function' && 'bg-[#a5a5a5] text-black active:bg-[#d9d9d9]'} ${type === 'clear' && 'bg-[#a5a5a5] text-black active:bg-[#d9d9d9]'} ${type === 'number' && 'active:bg-[#737373]'} `}> {content}</button >
  )
}

export default Button
