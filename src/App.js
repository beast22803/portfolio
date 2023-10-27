import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbared from './Components/Navbaar/Navbared';
import { useEffect, useState } from 'react';
import Home from './Components/Home/Home';

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
      <Navbared Width={screenWidth} />
      <Home />
    </>
  );
}

export default App;