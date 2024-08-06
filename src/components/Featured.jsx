import React from 'react'
import threeDimg from '../assets/image/webp/threeDimg.webp'
import dinoImg from '../assets/image/webp/dinoImg.webp'
import lavaImg from '../assets/image/webp/lavaImg.webp'
import catWashing from '../assets/image/webp/catWashing.webp'
import faqImg from '../assets/image/png/faqImg.png'
import Slider from 'react-slick'

const Featured = () => {

    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        variableWidth: true,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    centerMode: false,
                }
            }
        ],

        appendDots: dots => (
            <div
                style={{
                    position: "absolute",
                    bottom: "-48px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <ul style={{ margin: "0px" }} className="custom-dots"> {dots} </ul>
            </div>
        ),
    };
    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     variableWidth: true,
    //     arrows: false,
    //     centerMode: true,

    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 initialSlide: 1
    //             }
    //         },
    //         {
    //             breakpoint: 576,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //             }
    //         }
    //     ],
    //     appendDots: dots => (
    //         <div style={{

    //             position: "absolute",
    //             bottom: "-48px",
    //             width: "100%",
    //             display: "flex",
    //             justifyContent: "center",


    //             // position: "absolute",
    //             // bottom: "-48px",
    //             // display: "flex",
    //             // justifyContent: "center",
    //             // width: "100%",
    //             // display: "flex",
    //             // justifyContent: "center",
    //         }}
    //         >
    //             <ul style={{ margin: "0px" }} className="custom-dots"> {dots} </ul>
    //         </div>
    //     ),
    // };
    return (
        <div className='bg-featuredBgImg bg-cover bg-no-repeat bg-center 2xl:bg-100% flex flex-col pb-[80px] sm:pb-[128px] relative md:pb-[168px] lg:pb-[175px] -mt-[2px]'>
            <div className='flex justify-center relative pt-[101px] max-lg:pt-[80px] max-md:pt-[70px] max-sm:pt-12'>
                <h2 className='font-Orbitron font-bold text-center md:text-start text-[42px] max-md:text-[38px] max-sm:text-[30px] max-sm:leading-[39px] max-md:leading-[45px] leading-[54.6px] text-white about_Line_Bottom'>Featured Projects</h2>
                <img src={faqImg} alt="about_Line_Bottom" className='absolute xl:block hidden h-[57px] w-full bottom-[-17px] left-0' />
            </div>
            <div className=' feature_Slider pt-[89px] pb-[125px] max-sm:pt-12 max-md:pt-[60px] max-lg:pb-[90px] z-40  '>
                <Slider {...settings} className='h-full'>
                    <div className='bg-fireplaceBgimg w-full bg-no-repeat bg-center bg-size max-w-[324px] p-5 flex flex-col max-sm:min-h-[400px] sm:min-h-[421px] md:min-h-[461px]'>
                        <img src={threeDimg} alt="threeDimg" className='w-full max-w-[324px]' />
                        <h2 className='font-Poppins font-bold text-[14px] leading-[18px] text-[#3EBFFF] pt-[16px]'>300+ <span className='opacity-[70%] font-Poppins font-normal text-[14px] leading-[18px] text-white'>Active Players <span className='font-Poppins font-bold text-[14px] leading-[18px] text-[#3EBFFF]'>800+ <span className='opacity-[70%] font-Poppins font-normal text-[14px] leading-[18px] text-white'>Visits</span></span></span></h2>
                        <p className='pt-[16px] max-w-[324px] font-Orbitron font-bold text-[24px] leading-[31px] text-white'>3D Maze</p>
                        <p className='pt-[12px] max-w-[324px] opacity-[70%] font-Poppins font-normal text-[18px] leading-[28px] text-white'>Develop a 3D maze game in Roblox: a fun, challenging project that enhances creativity and problem-solving skills for students.</p>
                    </div>
                    <div className='bg-fireplaceBgimg bg-no-repeat bg-center bg-size  w-full max-w-[324px] p-5 flex flex-col max-sm:min-h-[400px] sm:min-h-[421px] md:min-h-[461px]'>
                        <img src={dinoImg} alt="dinoImg" className='w-full max-w-[324px]' />
                        <h2 className='font-Poppins font-bold text-[14px] leading-[18px] text-[#3EBFFF] pt-[16px]'>400+ <span className='opacity-[70%] font-Poppins font-normal text-[14px] leading-[18px] text-white'>Active Players <span className='font-Poppins font-bold text-[14px] leading-[18px] text-[#3EBFFF]'>700+ <span className='opacity-[70%] font-Poppins font-normal text-[14px] leading-[18px] text-white'>Visits</span></span></span></h2>
                        <p className='pt-[16px] max-w-[324px] font-Orbitron font-bold text-[24px] leading-[31px] text-white'>Dino Island</p>
                        <p className='pt-[12px] max-w-[324px] opacity-[70%] font-Poppins font-normal text-[18px] leading-[28px] text-white'>Embark on an epic adventure in Dino Island, where you can explore a prehistoric world filled with dinosaurs and hidden treasures.</p>
                    </div>
                    <div className='bg-fireplaceBgimg bg-no-repeat bg-center bg-size  w-full max-w-[324px] p-5 flex flex-col max-sm:min-h-[400px] sm:min-h-[421px] md:min-h-[461px]'>
                        <img src={lavaImg} alt="lavaland" className='w-full max-w-[324px]' />
                        <h2 className='font-Poppins font-bold text-[14px] leading-[18px] text-[#3EBFFF] pt-[16px]'>700+ <span className='opacity-[70%] font-Poppins font-normal text-[14px] leading-[18px] text-white'>Active Players <span className='font-Poppins font-bold text-[14px] leading-[18px] text-[#3EBFFF]'>1000+ <span className='opacity-[70%] font-Poppins font-normal text-[14px] leading-[18px] text-white'>Visits</span></span></span></h2>
                        <p className='pt-[16px] max-w-[324px] font-Orbitron font-bold text-[24px] leading-[31px] text-white'>Fireplace</p>
                        <p className='pt-[12px] max-w-[324px] opacity-[70%] font-Poppins font-normal text-[18px] leading-[28px] text-white'>Experience cozy and adventurous gameplay around a virtual hearth, blending relaxation and excitement uniquely on Roblox.</p>
                    </div>
                    <div className='bg-fireplaceBgimg bg-no-repeat bg-center bg-size  w-full max-w-[324px] p-5 flex flex-col max-sm:min-h-[400px] sm:min-h-[421px] md:min-h-[461px]'>
                        <img src={catWashing} alt="catWashing" className='w-full max-w-[324px]' />
                        <h2 className='font-Poppins font-bold text-[14px] leading-[18px] text-[#3EBFFF] pt-[16px]'>800+ <span className='opacity-[70%] font-Poppins font-normal text-[14px] leading-[18px] text-white'>Active Players <span className='font-Poppins font-bold text-[14px] leading-[18px] text-[#3EBFFF]'>1200+ <span className='opacity-[70%] font-Poppins font-normal text-[14px] leading-[18px] text-white'>Visits</span></span></span></h2>
                        <p className='pt-[16px] max-w-[324px] font-Orbitron font-bold text-[24px] leading-[31px] text-white'>Cat Washing Tycoon</p>
                        <p className='pt-[12px] max-w-[324px] opacity-[70%] font-Poppins font-normal text-[18px] leading-[28px] text-white'>Dive into the adorable world of cat care! Build and manage your own cat washing business, upgrade your facilities. </p>
                    </div>
                </Slider>

            </div>
        </div>
    )
}

export default Featured