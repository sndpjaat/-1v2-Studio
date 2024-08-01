import React from 'react'
import Nav_logo from '../assets/image/svg/Nav_logo.svg'
import Twiter from '../assets/image/svg/Twiter.svg'
import Discord from '../assets/image/svg/Discord.svg'
const Footer = () => {
    return (
        <div className='bg-black footer_Bg_img mt-[-2px]'>
            <div className='max-w-[1164px] px-3 mx-auto relative z-10'>
                <div className='max-w-[503px] mx-auto flex justify-center items-center flex-col'>
                    <img src={Nav_logo} alt="Nav_logo" />
                    <p className='pt-[20px] max-w-[538px] opacity-[70%] font-Poppins font-normal text-[18px] leading-[28.8px] text-center text-white pb-[16px]'>Nulla sollicitudin nullam in scelerisque. Dolor neque pulvinar porttitor id eget volutpat faucibus sed. Tellus libero.</p>
                    <div className='flex justify-center items-center gap-[10px] '>
                        <a href="https://x.com/?lang=en" target='_blank'><img src={Twiter} alt="Twiter" /></a>
                        <a href="https://discord.com/" target='_blank'><img src={Discord} alt="Discord" /></a>
                    </div>
                </div>
            </div>
            <div className='border-[1px] border-[#fff] opacity-[20%] mt-[44px]'></div>
            <div className='flex justify-center items-center'>
                <p className='py-[20px] max-w-[277px] opacity-[50%] font-Poppins font-medium text-[16px] leading-[24px] text-center text-[#ffffff]'>copyright@2024 all right reserved</p>
            </div>
        </div>
    )
}

export default Footer