import React from 'react'
import gaming_Pic from '../assets/image/png/gaming_Pic.png'
import studioEllipse from '../assets/image/svg/studioEllipse.svg'
import Redline from '../assets/image/svg/Redline.svg'
import Botmredline from '../assets/image/svg/Botmredline.svg'
import faqImg from '../assets/image/png/faqImg.png'
import AboutEllipse from '../assets/image/svg/AboutEllipse.svg'
const AboutStudio = () => {
    return (
        <div id='about' className='bg-black relative sm:pt-[65px] md:pt-[85px] lg:pt-[125px] py-[48px] sm:pb-[68px] md:pb-[80px] lg:pb-[99px] mt-[-2px]'>
            <div className='absolute z-50 left-0 bottom-0 max-md:hidden hidden xl:flex  pointer-events-none '>
                <img src={AboutEllipse} alt="AboutEllipse"/>
            </div>
            <div className='flex justify-center relative pt-[101px] max-lg:pt-[80px] max-md:pt-[70px] max-sm:pt-12'>
                <h2 className='font-Orbitron font-bold text-[42px] max-md:text-[38px] max-sm:text-[32px] max-sm:leading-[35px] leading-[54.6px] text-white'>About 1v2 Studio</h2>
                <img src={faqImg} alt="about_Line_Bottom"className='absolute xl:block hidden h-[57px] w-full bottom-[-17px] left-0'/>
            </div>
            <div className='absolute z-0 top-[470px]  max-md:hidden hidden xl:flex right-[40px]'>
                <img src={studioEllipse} alt="studioEllipse" className='z-50' />
            </div>
            <div className='max-w-[1164px] px-3 mx-auto relative z-10 '>
                <div className="flex flex-wrap flex-row mx-[-12px] pt-[30px] sm:pt-[55px] md:pt-[70px] lg:pt-[97px]">
                    <div className=' w-full flex justify-center lg:justify-start lg:items-center lg:w-6/12 max-xl:px-[12px] relative'>
                        <img src={gaming_Pic} alt="gaming_Pic" className='w-full max-w-[517px] z-30 pointer-events-none' />
                        <div className=' pointer-events-none bg-red max-w-[239px] w-full min-h-[239px] blur-[80px] -z-10 left-[30%] lg:left-[10%] top-[10%] absolute'>
                        </div>
                    </div>
                    <div className='w-full lg:w-6/12 max-xl:px-[12px] flex justify-center lg:justify-end mt-[30px] md:mt-12'>
                        <div className='flex flex-col'>
                            <div className='relative inline-block max-lg:flex max-lg:justify-center'>
                                <h3 className=' capitalize font-orbitron font-bold md:text-[32px] text-[24px] leading-[37px] md:leading-[48px] lg:text-[38px] lg:leading-[57px] text-white text-center lg:text-start'>Pushing Boundaries in <span className=' block lg:ps-6'>Gaming Innovation</span></h3>
                                <img src={Redline} alt="Redline" className='max-sm:max-w-[270px] max-md:max-w-[280px] max-lg:w-[350px] absolute top-[50%] lg:left-0' />
                                <img src={Botmredline} alt="Botmredline" className='max-sm:max-w-[270px] max-md:max-w-[280px] max-lg:w-[350px] absolute bottom-[-6px] lg:left-1' />
                            </div>
                            <p className='font-Poppins font-normal pb-[42px] text-[18px] max-w-[700px] md:pt-[18px] text-center lg:text-start  lg:max-w-[535px] lg:text-[18px] lg:leading-6 leading-[28.8px] opacity-[70%] text-white pt-[12px] '>We are an indie game development studio dedicated to crafting innovative experiences on the Roblox platform. Our passion for creativity and excellence drives us to push the boundaries of what’s possible in gaming.</p>
                            <div className='bg-btnBody bg-cover bg-no-repeat bg-center backgroundSize  w-fit min-h-[24px] px-[32px] py-[12px] md:items-center cursor-pointer duration-300 ease-linear hover:drop-shadow-[0px_0px_5px_red]'>
                                <a className='text-white font-Poppins font-normal text-[16px] leading-[24px]'>Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutStudio
