
import React, { useState } from 'react'
import heroSectionImg from '../assets/image/webp/heroSectionImg.webp'
// import EllipseHeroSection from '../assets/image/svg/EllipseHeroSection.svg'
import Navlogo from '../assets/image/svg/Navlogo.svg'
import Textline from '../assets/image/svg/Textline.svg'
import Textdownline from '../assets/image/svg/Textdownline.svg'
const Header = () => {

    const [data,setdata] = useState(false);
    function view (){setdata(!data)
    if(data === false){
        document.body.classList.add("overflow-hidden");
    }
    else{
        document.body.classList.remove("overflow-hidden")
    }
    }
    return (
        <div className='headerBgpic min-vh-100 w-100 positio n-relative '>
            {/* <div className='absolute top-[330px] left-[40px] lg:hidden z-0 max-md:hidden'>
                <img src={EllipseHeroSection} alt="EllipseHeroSection" />
            </div> */}
            <nav className='bg-white bg-opacity-[10%] flex  '>
                <div className="container mx-auto px-3 max-w-[1140px]">
                    <div className='flex py-[24px] justify-between '>
                    <img src={Navlogo} alt="Navlogo" className='pointer-events-none' />
                        <ul className= {`${data ? "right-0":"right-[-100%]"} flex items-center  justify -between z-[50] gap-[20px] max-lg:fixed top-0  max-lg:bg-[#0E0C0C]  max-lg:w-full max-lg:h-full max-xl:top-0  max-lg:flex-col max-lg:justify-center duration-500`}>
                        <li className='relative group'>
                                <div className='absolute top-[-3px] left-[-15px] hidden group-hover:block duration-300'>
                                    <img src={Textline} alt="Textline " />
                                </div>
                                <div className=" absolute bottom-[-3px] right-[-15px] hidden group-hover:block duration-300">
                                    <img src={Textdownline} alt="Textdownline" />
                                </div>
                                <a href="#1"  className='text-white  opacity-70 hover:opacity-[100%] font-normal text-[16px]  duration-300  capitalize font-poppins'>home</a>

                            </li>
                            <li className='relative group'>
                                <div className='absolute top-[-3px] left-[-15px] hidden group-hover:block duration-300'>
                                    <img src={Textline} alt="Textline " />
                                </div>
                                <div className=" absolute bottom-[-3px] right-[-15px] hidden group-hover:block duration-300">

                                    <img src={Textdownline} alt="Textdownline" />
                                </div>
                                <a href="#1"  className='text-white  opacity-70 hover:opacity-[100%] font-normal text-[16px]  duration-300  capitalize font-poppins'>About Us</a>

                            </li>
                            <li className='relative group'>
                                <div className='absolute top-[-3px] left-[-15px] hidden group-hover:block duration-300'>
                                    <img src={Textline} alt="Textline " />
                                </div>
                                <div className=" absolute bottom-[-3px] right-[-15px] hidden group-hover:block duration-300">

                                    <img src={Textdownline} alt="Textdownline" />
                                </div>
                                <a href="#1"  className='text-white  opacity-70 hover:opacity-[100%] font-normal text-[16px]  duration-300  capitalize font-poppins'>Portfolio</a>

                            </li>
                            <li className='relative group'>
                                <div className='absolute top-[-3px] left-[-15px] hidden group-hover:block duration-300'>

                                    <img src={Textline} alt="Textline " />
                                </div>
                                <div className=" absolute bottom-[-3px] right-[-15px] hidden group-hover:block duration-300">

                                    <img src={Textdownline} alt="Textdownline" />
                                </div>
                                <a href="#1"  className='text-white  opacity-70 hover:opacity-[100%] font-normal text-[16px]  duration-300  capitalize font-poppins'>Services</a>

                            </li>
                            <li className='relative group'>
                                <div className='absolute top-[-3px] left-[-15px] hidden group-hover:block duration-300'>

                                    <img src={Textline} alt="Textline " />
                                </div>
                                <div className=" absolute bottom-[-3px] right-[-15px] hidden group-hover:block duration-300">

                                    <img src={Textdownline} alt="Textdownline" />
                                </div>
                                <a href="#1"  className='text-white  opacity-[70%] hover:opacity-[100%] font-normal text-[16px]  duration-300  capitalize font-poppins'>Testimonial</a>

                            </li>
                            <li className='relative group'>
                                <div className='absolute top-[-3px] left-[-15px] hidden group-hover:block duration-300'>
                                    <img src={Textline} alt="Textline " />
                                </div>
                                <div className=" absolute bottom-[-3px] right-[-15px] hidden group-hover:block duration-300">
                                    <img src={Textdownline} alt="Textdownline" />
                                </div>
                                <a href="#1"  className='text-white  opacity-70 hover:opacity-[100%] font-normal text-[16px]  duration-300  capitalize font-poppins'>Contact Us</a>
                            </li>
                        </ul>
                        <div className='flex items-center gap-[30px]'>
                        <button className=' onClick={() => setShow(!show)} text-white font-poppins font-medium text-[16px] leading-[24px] hover:shadow-btnshadow w-[151px] h-[47px] cursor-pointer duration-300 ease-linear hover:drop-shadow-[0px_0px_5px_red] btnBody'>Get Started</button>
                            <div onClick={view} className="menuicon lg:hidden block z-50 ">
                                <span className="bar h-[3px] block bg-white w-[25px] duration-300"></span>
                                <span className="bar h-[3px] block  bg-white w-[25px] my-[6px]"></span>
                                <span className="bar h-[3px] block  bg-white w-[25px]  duration-300"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='max-w-[1164px] px-3 mx-auto relative' id='1'>
                <div className="row">
                    <div className=' w-full md:w-6/12 px-3 pt-[144px]'>
                        <h2 className='max-w-[490px] text-white font-Orbitron font-bold text-[72px] md:max-w-[490px] md:text-start max-md:leading-[70px] max-md:text-6xl max-sm:text-4xl  pb-[16px] '>Welcome to 1v2 Studio</h2>
                        <p className='max-w-[450px] opacity-[70%] font-Poppins font-normal text-[20px] leading-[32px] text-white md:max-w-[465px] max-sm:text-sm md:text-start max-sm:leading-[21px]'>Leading the Way in Creating Unique and Innovative Experiences on Roblox.</p>
                        <div className='btnBody w-fit min-h-[24px] px-[32px] py-[12px] mt-[42px] cursor-pointer duration-300 ease-linear hover:drop-shadow-[0px_0px_5px_red]'>
                            <h2 className='text-white font-Poppins font-normal text-[16px] leading-[24px] '>Contact Us</h2>
                        </div>
                    </div>
                    <div className=' w-full md:w-6/12  px-3 pt-[77px] pb-[113px] pointer-events-none'>
                        <img src={heroSectionImg} alt="heroSectionImg" className='w-full max-w-[513px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
