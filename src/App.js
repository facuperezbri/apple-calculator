import React, { useState } from 'react';
import Buttons from './components/Buttons';
import Display from './components/Display';
import Nav from './components/Nav';



function App () {
  const [value, setValue] = useState('0')

  return (
    <div className='flex flex-col m-auto bg-black text-white justify-between w-[100vw] max-w-[400px] h-[100vh] rounded-[30px]'>
      <Nav />
      <div>
        <Display value={value} />
        <Buttons value={value} />
      </div>
    </div>
  );
}

export default App;
