/* eslint-disable no-unused-vars */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbared from './Components/Navbaar/Navbared';
import { useEffect, useState } from 'react';
import Home from './Components/Home/Home';
import Expertise from './Components/Expertise/Expertise';

function App() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  })

  return (
    <>
      <div className='mainDiv'>
        <div className='position-relative'>
          <Navbared Width={screenWidth} />
          <Home />
        </div>
        {/* <Expertise /> */}
      </div>
    </>
  );
}

export default App;