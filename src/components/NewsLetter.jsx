import React from 'react'
import Suscribe_btn from '../assets/image/svg/Suscribe_btn.svg'



const NewsLetter = () => {
  return (
    <div className='bg-black my-[-2px] relative pb-[46px] '>
      <div className='max-w-[1164px] px-3 mx-auto z-10'>
        <div className='relative'>
          <div className='suscribeBgImg max-w-[480px] backdrop-blur-md sm:max-w-[576px] md:max-w-[768px] lg:max-w-[900px] mx-auto w-full relative z-20 p-5 sm:p-[25px] md:p-[45px] flex items-center flex-col '>
            <h2 className='max-w-[660px] font-Orbitron font-bold text-[42px]  text-white pb-[12px]  sm:text-[32px] leading-[35px] md:text-[34px] md:leading-[45px] lg:text-[42px] lg:leading-[63px]'>Subscribe to our newsletter</h2>
            <p className='md:max-w-[524px] opacity-[70%] font-Poppins text-[18px]  md:text-[18px] leading-[22px] md:leading-[28px] text-white pb-[36px]'>Nulla sollicitudin nullam in scelerisque. Dolor neque pulvinar porttitor id eget volutpat faucibus sed. Tellus libero.</p>
            <div className='max-w-[489px] z-20 relative max-sm:max-w-[320px] border-[1px] mt-9 max-sm:mt-6 border-[#FFFFFF45] p-[6px] pl-[15px] flex w-full justify-between'>
              <input type="text" placeholder='Enter your email' className=' outline-none w-full mr-3 bg-transparent border-0 opacity-[70%] font-poppins text-lg leading-[28px] text-white ' />
              <div className=' max-w-[151px] z-20 relative w-full max-sm:hidden h-[47.19px] bg-btn_Border flex justify-center items-center  btnBody cursor-pointer duration-300 ease-linear hover:drop-shadow-[0px_0px_5px_red] custom_duration'>
                <a className='font-poppins font-normal text-base leading-[24px] text-white '>Submit Now</a>
              </div>
            </div>
            <div className=' max-w-[151px] z-10 relative w-full sm:hidden mt-[15px] h-[47.19px] bg-btn_Border flex justify-center items-center btnBody cursor-pointer duration-300 ease-linear hover:drop-shadow-[0px_0px_5px_red] custom_duration'>
              <a className='font-poppins z-10 relative font-normal text-base leading-[24px] text-white '>Submit Now</a>
            </div>
          </div>
          {/* <img className=' pointer-events-none max-w-[562px] z-10 w-full absolute bottom-0 left-0 sm:left-[10%] md:left-[20%] xl:left-[25%]' src={white_Man} alt="white-man" /> */}
        </div>
      </div>
    </div>
  )
}

export default NewsLetter