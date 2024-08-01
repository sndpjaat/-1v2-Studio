import React from 'react'
import Three_D_img from '../assets/image/png/Three_D_img.png'
import Dino_Img from '../assets/image/png/Dino_Img.png'
import lava_land from '../assets/image/png/lava_land.png'
import Cat_Washing from '../assets/image/png/Cat_Washing.png'
import Slider from 'react-slick'

const Featured = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        appendDots: dots => (
            <div style={{
                    position: "absolute",
                    bottom: "-48px",
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <ul style={{ margin: "0px , auto" }} className="custom-dots"> {dots} </ul>
            </div>
        ),
    };    
    return (
        <div className='Featured_bgimg 2xl:bg-100% flex flex-col pb-[80px] sm:pb-[128px] relative md:pb-[168px] lg:pb-[175px] -mt-[2px]'>
            <Slider {...settings} className=' mx-auto max-w-[1440px]'>
                <div className='Fireplace_Bgimg w-full max-w-[324px] p-5 flex flex-col max-sm:min-h-[400px] sm:min-h-[421px] md:min-h-[461px]'>
                    <img src={Three_D_img} alt="Three_D_img" className='w-full max-w-[324px]' />
                    <div className='flex items-center gap-[10px] pt-3'>
                        <div className='flex items-center flex-col gap-[6.78px]'>
                            <h2 className='font-Poppins font-bold text-[14px] leading-[18px] text-[#3EBFFF] pt-[16px]'>300+ <span className='opacity-[70%] font-Poppins font-normal text-[14px] leading-[18px] text-white'>Active Players <span className='font-Poppins font-bold text-[14px] leading-[18px] text-[#3EBFFF]'>800+ <span className='opacity-[70%] font-Poppins font-normal text-[14px] leading-[18px] text-white'>Visits</span></span></span></h2>
                            <p className='pt-[16px] max-w-[324px] font-Orbitron font-bold text-[24px] leading-[31px] text-white'>3D Maze</p>
                            <p className='pt-[12px] max-w-[324px] opacity-[70%] font-Poppins font-normal text-[18px] leading-[28px] text-white'>Develop a 3D maze game in Roblox: a fun, challenging project that enhances creativity and problem-solving skills for students.</p>
                        </div>
                    </div>
                </div>
                <div className='Fireplace_Bgimg w-full max-w-[324px] p-5 flex flex-col max-sm:min-h-[400px] sm:min-h-[421px] md:min-h-[461px]'>
                    <img src={Dino_Img} alt="Dino_Img" className='w-full max-w-[324px]' />
                    <div className='flex items-center gap-[10px] pt-3'>
                        <div className='flex items-center flex-col gap-[6.78px]'>
                            <h2 className='font-Poppins font-bold text-[14px] leading-[18px] text-[#3EBFFF] pt-[16px]'>400+ <span className='opacity-[70%] font-Poppins font-normal text-[14px] leading-[18px] text-white'>Active Players <span className='font-Poppins font-bold text-[14px] leading-[18px] text-[#3EBFFF]'>700+ <span className='opacity-[70%] font-Poppins font-normal text-[14px] leading-[18px] text-white'>Visits</span></span></span></h2>
                            <p className='pt-[16px] max-w-[324px] font-Orbitron font-bold text-[24px] leading-[31px] text-white'>Dino Island</p>
                            <p className='pt-[12px] max-w-[324px] opacity-[70%] font-Poppins font-normal text-[18px] leading-[28px] text-white'>Embark on an epic adventure in Dino Island, where you can explore a prehistoric world filled with dinosaurs and hidden treasures.</p>
                        </div>
                    </div>
                </div>
                <div className='Fireplace_Bgimg w-full max-w-[324px] p-5 flex flex-col max-sm:min-h-[400px] sm:min-h-[421px] md:min-h-[461px]'>
                    <img src={lava_land} alt="lava_land" className='w-full max-w-[324px]' />
                    <div className='flex items-center gap-[10px] pt-3'>
                        <div className='flex items-center flex-col gap-[6.78px]'>
                            <h2 className='font-Poppins font-bold text-[14px] leading-[18px] text-[#3EBFFF] pt-[16px]'>700+ <span className='opacity-[70%] font-Poppins font-normal text-[14px] leading-[18px] text-white'>Active Players <span className='font-Poppins font-bold text-[14px] leading-[18px] text-[#3EBFFF]'>1000+ <span className='opacity-[70%] font-Poppins font-normal text-[14px] leading-[18px] text-white'>Visits</span></span></span></h2>
                            <p className='pt-[16px] max-w-[324px] font-Orbitron font-bold text-[24px] leading-[31px] text-white'>Fireplace</p>
                            <p className='pt-[12px] max-w-[324px] opacity-[70%] font-Poppins font-normal text-[18px] leading-[28px] text-white'>Experience cozy and adventurous gameplay around a virtual hearth, blending relaxation and excitement uniquely on Roblox.</p>
                        </div>
                    </div>
                </div>
                <div className='Fireplace_Bgimg w-full max-w-[324px] p-5 flex flex-col max-sm:min-h-[400px] sm:min-h-[421px] md:min-h-[461px]'>
                    <img src={Cat_Washing} alt="Cat_Washing" className='w-full max-w-[324px]' />
                    <div className='flex items-center gap-[10px] pt-3'>
                        <div className='flex items-center flex-col gap-[6.78px]'>
                            <h2 className='font-Poppins font-bold text-[14px] leading-[18px] text-[#3EBFFF] pt-[16px]'>800+ <span className='opacity-[70%] font-Poppins font-normal text-[14px] leading-[18px] text-white'>Active Players <span className='font-Poppins font-bold text-[14px] leading-[18px] text-[#3EBFFF]'>1200+ <span className='opacity-[70%] font-Poppins font-normal text-[14px] leading-[18px] text-white'>Visits</span></span></span></h2>
                            <p className='pt-[16px] max-w-[324px] font-Orbitron font-bold text-[24px] leading-[31px] text-white'>Cat Washing Tycoon</p>
                            <p className='pt-[12px] max-w-[324px] opacity-[70%] font-Poppins font-normal text-[18px] leading-[28px] text-white'>Dive into the adorable world of cat care! Build and manage your own cat washing business, upgrade your facilities. </p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Featured