import Buttons from './components/Buttons';
import Display from './components/Display';
import Nav from './components/Nav';



function App () {
  return (
    <div className='flex flex-col justify-between w-[100vw] max-w-[400px] h-[100vh] text-white bg-black rounded-[30px]'>
      <Nav />
      <Display />
      <Buttons />
    </div>
  );
}

export default App;
