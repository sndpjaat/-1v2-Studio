import React from 'react'
import Navlogo from '../assets/image/svg/Navlogo.svg'
import TwitterIcon from '../assets/image/svg/TwitterIcon.svg'
import DiscordIcon from '../assets/image/svg/DiscordIcon.svg'
import footerSection from '../assets/image/svg/footerSection.svg'
import dollor from '../assets/image/svg/dollor.svg'
import redCircle from '../assets/image/svg/redCircle.svg'
const Footer = () => {
    return (
        <div className='bg-black bg-footerBgImg bg-cover bg-no-repeat bg-center mt-[-2px]'>
            <div className='relative'>
                <div className='absolute left-0 top-0 z-0'>
                    <img src={footerSection} alt="footerSection" />
                </div>
                <div className='absolute top-[-40px] right-[10px]'>
                    <img src={dollor} alt="dollor" />
                </div>
                <div className='absolute top-[-370px] right-0 z-0'>
                    <img src={redCircle} alt="redCircle" />
                </div>
            </div>
            <div className='max-w-[1164px] px-3 mx-auto relative z-10'>
                <div className='max-w-[503px] mx-auto flex justify-center items-center flex-col'>
                    <img src={Navlogo} alt="Navlogo" className='pointer-events-none' />
                    <p className='pt-[20px] max-w-[538px] opacity-[70%] font-Poppins font-normal text-[18px] leading-[28.8px] text-center text-white pb-[16px]'>Nulla sollicitudin nullam in scelerisque. Dolor neque pulvinar porttitor id eget volutpat faucibus sed. Tellus libero.</p>
                    <div className='flex justify-center items-center gap-[10px] '>
                        <a href="https://x.com/?lang=en" target='_blank'><img src={TwitterIcon} alt="TwitterIcon" className='cursor-pointer duration-300 ease-linear hover:drop-shadow-[0px_0px_5px_red]' /></a>
                        <a href="https://discord.com/" target='_blank'><img src={DiscordIcon} alt="DiscordIcon" /></a>
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