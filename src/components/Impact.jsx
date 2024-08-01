import React from 'react'
import horse_img from '../assets/image/webp/horse_img.webp'
import Elpsefrst from '../assets/image/svg/Elpsefrst.svg'
import faqimg from '../assets/image/png/faqimg.png'

const Impact = () => {
  return (
    <div className='impact_Bgimg 2xl:bg-100% bg-no-repeat pb-[48px] sm:pb-[68px] md:pb-[90px] lg:pb-[121px] -mt-[2px] relative'>
      <div className='flex justify-center relative pt-[101px] max-lg:pt-[80px] max-md:pt-[70px] max-sm:pt-12'>
      <h2 className='font-Orbitron font-bold z-20 text-[42px] max-md:text-[40px] max-sm:text-[38px] max-sm:leading-[39px] max-md:leading-[45px] leading-[54.6px] text-white about_Line_Bottom'>Our Impact</h2>
        <img src={faqimg} alt="about_Line_Bottom"className='absolute xl:block hidden h-[57px] w-full bottom-[-17px] left-0'/>
      </div>
      <div className='absolute z-0 top-[320px] left-[45px]'>
        <img src={Elpsefrst} alt="Elpsefrst" />
      </div>
      <div className='max-w-[1164px] px-3 mx-auto'>
        <div className='flex flex-row flex-wrap  mx-3 pt-[15px] sm:pt-[60px] md:pt-[80px] lg:pt-[102px]'>
          <div className=' lg:w-3/12 px-3 w-full flex justify-center lg:justify-start lg:items-center 2xl:p-0'>
            <h2 className=' font-Orbitron font-bold text-[64px] leading-[83px] text-white'>What 1v2 Studio</h2>
          </div>
          <div className=' md:w-8/12 lg:w-6/12 px-3 w-full pointer-events-none flex justify-center lg:justify-center max-md:mt-[25px] max-lg:mt-[48px] 2xl:p-0'>
            <img src={horse_img} alt="horse_img" className='w-full max-w-[360px]' />
          </div>
          <div className=' md:w-4/12 lg:w-3/12 px-3 w-full  flex max-md:justify-center max-sm:mt-[20px] max-md:mt-[30px] items-center 2xl:p-0'>
            <div className='flex flex-col gap-0 lg:gap-[14px]'>
              <h2 className='bg-complex-gradient bg-clip-text text-transparent text-[22px] sm:text-[26px] md:text-[30px] lg::text-[32px] xl:text-[36px] leading-[40px] lg:leading-[45px] xl:leading-[57px]'> <span className='bg-complex-gradient bg-clip-text text-transparent text-[22px] sm:text-[26px] md:text-[30px] lg::text-[32px] xl:text-[36px] leading-[40px] lg:leading-[45px] xl:leading-[57px]'>13 </span><span className='max-w-[203px] font-Poppins font-semibold text-[36px] leading-[57px] text-white'>experiences</span></h2>
              <h2 className='bg-complex-gradient bg-clip-text text-transparent text-[22px] sm:text-[26px] md:text-[30px] lg::text-[32px] xl:text-[36px] leading-[40px] lg:leading-[45px] xl:leading-[57px]'> <span className='bg-complex-gradient bg-clip-text text-transparent text-[22px] sm:text-[26px] md:text-[30px] lg::text-[32px] xl:text-[36px] leading-[40px] lg:leading-[45px] xl:leading-[57px]'>10.8K </span><span className='max-w-[203px] font-Poppins font-semibold text-[36px] leading-[57px] text-white'>active now</span></h2>
              <h2 className='bg-complex-gradient bg-clip-text text-transparent text-[22px] sm:text-[26px] md:text-[30px] lg::text-[32px] xl:text-[36px] leading-[40px] lg:leading-[45px] xl:leading-[57px]'> <span className='bg-complex-gradient bg-clip-text text-transparent text-[22px] sm:text-[26px] md:text-[30px] lg::text-[32px] xl:text-[36px] leading-[40px] lg:leading-[45px] xl:leading-[57px]'>1.086</span><span className='max-w-[203px] font-Poppins font-semibold text-[36px] leading-[57px] text-white'>billion visits</span></h2>
              <p className=' font-Poppins font-semibold text-[36px] leading-[57px] text-white'> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Impact
