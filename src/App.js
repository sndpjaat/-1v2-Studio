
import './App.css';
import React, {useState,useEffect} from 'react'
import AboutStudio from './components/AboutStudio';
import Clients from './components/Clients';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Impact from './components/Impact';
import Acrdn_1 from './components/Acrdn_1';
import NewsLetter from './components/NewsLetter';
import Slidr_Section from './components/Slidr_Section';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const bodyStyle = {
    width: windowWidth > 1920 ? '1920px' : '100%',
    margin: windowWidth > 1920 ? '0 auto' : '0',
  };
  return (
    <div className=' overflow-hidden' style={bodyStyle}> 
    <Hero/>
    <Slidr_Section/>
    <AboutStudio/>
    <Featured/>
    <Impact/>
    {/* <Clients/> */}
    <Acrdn_1/>
    <NewsLetter/>
    <Footer/>
    </div>
  );
}

export default App;
