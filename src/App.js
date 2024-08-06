
import './App.css';
import React, {useState,useEffect} from 'react'
import AboutStudio from './components/AboutStudio';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Impact from './components/Impact';
import NewsLetter from './components/NewsLetter';
import Slider_Section from './components/Slider_Section';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Faq from './components/Faq';


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
    <Slider_Section/>
    <AboutStudio/>
    <Featured/>
    <Impact/>
    {/* <Clients/> */}
    <Faq/>
    <NewsLetter/>
    <Footer/>
    </div>
  );
}

export default App;
