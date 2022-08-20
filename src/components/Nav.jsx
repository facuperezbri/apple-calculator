import React from 'react'

import signal from '../assets/signal.svg'
import wifi from '../assets/wifi.svg'
import battery from '../assets/battery.svg'

const Nav = () => {
  const today = new Date();
  const hour = today.getHours();
  const minutes = today.getMinutes();

  return (
    <nav className='flex items-center justify-between px-10 h-[30px] text-white '>
      <div className='font-semibold'>{hour}:{minutes < 10 ? `0${minutes}` : minutes}</div>
      <div className='flex items-center gap-3'>
        <img src={signal} className='text-white h-[13px] -scale-x-100 invert' alt="signal" />
        <img src={wifi} className='text-white h-[15px] invert' alt="wifi" />
        <img src={battery} className='text-white h-[30px] invert' alt="battery" />
      </div>
    </nav>
  )
}

export default Nav
