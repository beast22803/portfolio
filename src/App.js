/* eslint-disable no-unused-vars */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import Navbared from './Components/Navbaar/Navbared';
import { useEffect, useState, useRef } from 'react';
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

  const homeRef = useRef(null);
  const expertiseRef = useRef(null);
  const creationsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const refs = {
    home: homeRef,
    expertise: expertiseRef,
    creations: creationsRef,
    experience: experienceRef,
    contact: contactRef
  };

  return (
    <>
      {screenWidth > 900 && <CustomCursor />}
      <div className='mainDiv'>
        <div className='position-relative'>
          <Navbared Width={screenWidth} refs={refs} scrollToSection={scrollToSection} />
          <Home sectionRef={homeRef} refs={refs} scrollToSection={scrollToSection} />
        </div>
        <Expertise Width={screenWidth} sectionRef={expertiseRef} />
        <Creations Width={screenWidth} sectionRef={creationsRef} />
        <Experience Width={screenWidth} sectionRef={experienceRef} />
        <Contact Width={screenWidth} sectionRef={contactRef} />
      </div>
    </>
  );
}

export default App;