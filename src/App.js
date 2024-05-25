/* eslint-disable no-unused-vars */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbared from './Components/Navbaar/Navbared';
import { useEffect, useState } from 'react';
import Home from './Components/Home/Home';
import Expertise from './Components/Expertise/Expertise';
import CustomCursor from './Components/CustomCursor/CustomCursor';
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact';
import Creations from './Components/Creations/Creations';

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
      {screenWidth > 900 && <CustomCursor />}
      <div className='mainDiv'>
        <div className='position-relative'>
          <Navbared Width={screenWidth} />
          <Home />
        </div>
        <Expertise Width={screenWidth} />
        <Creations Width={screenWidth} />
        <Experience Width={screenWidth} />
        <Contact Width={screenWidth} />
      </div>
    </>
  );
}

export default App;