import React from 'react'
import honair_svg from '../assets/image/svg/honair_svg.svg'
import Adventures_Img from '../assets/image/svg/Adventures_Img.svg'
import Lawa_Land from '../assets/image/svg/Lawa_Land_img.svg'
import Dino_Img from '../assets/image/svg/Dino_Img.svg'
import Cat_Img from '../assets/image/svg/Cat_Img.svg'
import Phone_Factory from '../assets/image/svg/Phone_Factory.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
// import Slider_Ellpise from '../assets/image/svg/Slider_Ellpise.svg'

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
        <img src={Slider_Ellpise} alt="Slider_Ellpise"  className='w-full'/>

      </div> */}
        <div className=' bg-light_black py-2 sm:py-3 md:py-5 lg:py-[35px] logo_S lider -my-[2px] z-20 relative'>
          <Slider {...settings}>
            <img className=' max-w-[120px] md:max-w-[151.97px]' src={honair_svg} alt="honair_svg" />
            <img className=' max-w-[150px] md:max-w-[159.94px]' src={Adventures_Img} alt="Adventures_Img" />
            <img className=' max-w-[150px] md:max-w-[234.38px]' src={Lawa_Land} alt="Lawa_Land" />
            <img className=' max-w-[150px] md:max-w-[234.38px]' src={Dino_Img} alt="Dino_Img" />
            <img className=' max-w-[150px] md:max-w-[225.11px]' src={Cat_Img} alt="lCat_Img" />
            <img className=' max-w-[150px] md:max-w-[234.38px]' src={Phone_Factory} alt="Phone_Factory" />
          </Slider>
        </div>
    </div>
  )
}

export default Slidr_Section
