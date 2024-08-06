import React from 'react'
import honairImg from '../assets/image/svg/honairimg.svg'
import adventuresImg from '../assets/image/svg/adventuresImg.svg'
import lawaImg from '../assets/image/svg/lawaImg.svg'
import dinoImg from '../assets/image/svg/dinoImg.svg'
import phoneFactory from '../assets/image/svg/phoneFactory.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import sliderEllpise from '../assets/image/svg/sliderEllpise.svg'

const Slidr_Section = () => {
  var settings = {
    dots: false,
    autoplay: true,
    variableWidth: true,
    arrows: false,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    cssEase: "linear",
  };
  return (
    <div className='bg-[#141414] relative '>
      {/* <div className='absolute right-0 bottom-0 z-30'>
        <img src={sliderEllpise} alt="sliderEllpise"  className='w-full'/>

      </div> */}
        <div className=' bg-light_black py-2 sm:py-3 md:py-5 lg:py-[35px] logo_S lider -my-[2px] z-20 relative'>
          <Slider {...settings}>
            <img className=' max-w-[120px] md:max-w-[151.97px]' src={honairImg} alt="honairImg" />
            <img className=' max-w-[150px] md:max-w-[159.94px]' src={adventuresImg} alt="adventuresImg" />
            <img className=' max-w-[150px] md:max-w-[234.38px]' src={lawaImg} alt="lawaImg" />
            <img className=' max-w-[150px] md:max-w-[234.38px]' src={dinoImg} alt="Dino_Img" />
            {/* <img className=' max-w-[150px] md:max-w-[225.11px]' src={Cat_Img} alt="lCat_Img" /> */}
            <img className=' max-w-[150px] md:max-w-[234.38px]' src={phoneFactory} alt="phoneFactory" />
          </Slider>
        </div>
    </div>
  )
}

export default Slidr_Section
