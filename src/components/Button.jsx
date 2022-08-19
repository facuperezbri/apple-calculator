import React from 'react'

const Button = ({ content }) => {
  return (
    <button className={`bg-[#333] h-[75px] w-[75px] rounded-full font-normal text-[32px] ${content === '0' && 'w-[170px] col-start-1 col-span-2'}`}> {content}</button >
  )
}

export default Button
