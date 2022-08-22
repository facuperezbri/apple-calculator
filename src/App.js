import React from 'react';
import Buttons from './components/Buttons';
import Display from './components/Display';
import Nav from './components/Nav';



function App () {

  return (
    <div className='flex flex-col m-auto bg-black text-white justify-between w-[100vw] max-w-[400px] h-[100vh] max-h-[800px] rounded-[30px]'>
      <Nav />
      <div>
        <Display value={0} />
        <Buttons value={0} />
      </div>
    </div>
  );
}

export default App;
