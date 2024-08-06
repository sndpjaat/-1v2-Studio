import React from 'react'
import fiveStars from '../assets/image/svg/fiveStars.svg'
import girlImg from '../assets/image/png/girlImg.png'
import Red_line_d from '../assets/image/svg/Red_line_d.svg'
import Red_Line_E from '../assets/image/svg/Red_Line_E.svg'
import Slider from 'react-slick'
import faqImg from '../assets/image/png/faqImg.png'
const Clients = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div style={{
                    position: "absolute",
                    bottom: "-48px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }} >
                <ul style={{ margin: "0px" }} className="custom-dots"> {dots} </ul>
            </div>
        ),
    };
    return (
        <div className='bg-[#080404] mt-[-2px] relative '>
            <div className='max-w-[1164px] px-3 mx-auto'>
                <div className='flex justify-center relative pt-[101px] max-lg:pt-[80px] max-md:pt-[70px] max-sm:pt-12'>
                <h2 className='font-Orbitron font-bold text-center md:text-start text-[42px] max-md:text-[38px] max-sm:text-[30px] max-sm:leading-[39px] max-md:leading-[45px] leading-[54.6px] text-white about_Line_Bottom'>Clients Testimonials</h2>
                    <img src={faqImg} alt="about_Line_Bottom" className='absolute xl:block hidden h-[57px] w-full bottom-[-17px] left-0'/>
                </div>
                <div className='slider_clients'>
                    <Slider {...settings}>
                        <div className='pt-[113px] max-sm:pt-12 max-md:pt-[80px] max-lg:pt-[90px]'>
                            <div className='mx-auto bg-hagenes_Bg bg-no-repeat bg-100% max-lg:max-w-[700px] max-w-[1041px] max-xl:pr-[30px] max-sm:pr-[15px] max-sm:pl-[15px] max-xl:pl-[30px] pt-[42px] pr-[60px] pb-[41px] pl-[59px]'>
                                <div className=' flex lg:flex-row flex-wrap -mx-3 flex-col-reverse '>
                                    <div className='lg:w-8/12 w-12/12 px-3 flex justify-center max-lg:pt-9 max-sm:pt-4 max-md:pt-8'>
                                        <div className=' flex flex-col text-center max-lg:text-start items-center lg:items-start'>
                                            <h3 className='font-orbitron font-bold text-42 text-center lg:text-start max-sm:text-3xl leading-[54px] text-white max-w-[400px] gaming_After gaming_Before_2 lg:pl-5 max-md:text-[34px] max-md:leading-[42px] max-sm:text-[27px] max-sm:leading-[32px]'>Debbie Hagenes</h3>
                                            <p className=' max-w-[621px] opacity-[0.7] font-poppins text-center lg:text-start font-normal text-2xl max-md:text-xl max-sm:text-sm leading-[36px] text-white pt-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Velit officia consequat duis enim velit mollit.</p>
                                            <div className=' pt-6 text-center lg:text-start'>
                                                <fiveStars />
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' lg:w-4/12 w-12/12 px-3 flex justify-center lg:justify-start'>
                                        <img src={girlImg} alt="girlImg" className='w-full max-w-[240px] sm:max-w-[289px] border-[2px] border-white xl:w-[289px] xl:h-[328px] rounded-[20px]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pt-[113px] max-sm:pt-12 max-md:pt-[80px] max-lg:pt-[90px]'>
                            <div className='mx-auto bg-hagenes_Bg bg-no-repeat bg-100% max-w-[1041px] max-lg:max-w-[700px]  max-xl:pr-[30px] max-sm:pr-[15px] max-sm:pl-[15px] max-xl:pl-[30px] pt-[42px] pr-[60px] pb-[41px] pl-[59px]'>
                                <div className=' flex lg:flex-row flex-wrap -mx-3 flex-col-reverse '>
                                    <div className='lg:w-8/12 w-12/12 px-3 flex justify-center max-lg:pt-9 max-sm:pt-4 max-md:pt-8'>
                                        <div className=' flex flex-col text-center max-lg:text-start items-center lg:items-start'>
                                            <h3 className='font-orbitron font-bold text-42 text-center lg:text-start max-sm:text-3xl leading-[54px] text-white max-w-[400px] gaming_After gaming_Before_2 lg:pl-5 max-md:text-[34px] max-md:leading-[42px] max-sm:text-[27px] max-sm:leading-[32px]'>Debbie Hagenes</h3>
                                            <p className=' max-w-[621px] opacity-[0.7] font-poppins text-center lg:text-start font-normal text-2xl max-md:text-xl max-sm:text-sm leading-[36px] text-white pt-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Velit officia consequat duis enim velit mollit.</p>
                                            <div className=' pt-6 text-center lg:text-start'>
                                                <fiveStars />
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' lg:w-4/12 w-12/12 px-3 flex justify-center lg:justify-start'>
                                        <img src={girlImg} alt="girlImg" className='w-full max-w-[240px] sm:max-w-[289px] border-[2px] border-white xl:w-[289px] xl:h-[328px] rounded-[20px]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pt-[113px] max-sm:pt-12 max-md:pt-[80px] max-lg:pt-[90px]'>
                            <div className='mx-auto bg-hagenes_Bg bg-no-repeat bg-100% max-w-[1041px] max-lg:max-w-[700px]  max-xl:pr-[30px] max-xl:pl-[30px] pt-[42px] pr-[60px] pb-[41px] pl-[59px]'>
                                <div className=' flex lg:flex-row flex-wrap -mx-3 flex-col-reverse '>
                                    <div className='lg:w-8/12 w-12/12 px-3 flex justify-center max-lg:pt-9 max-sm:pt-4 max-md:pt-8'>
                                        <div className=' flex z-30 relative flex-col text-center max-lg:text-start items-center lg:items-start'>
                                            <h3 className='font-orbitron z-30 relative font-bold text-42 text-center lg:text-start max-sm:text-3xl leading-[54px] text-white max-w-[400px] gaming_After gaming_Before_2 lg:pl-5  max-md:text-[34px] max-md:leading-[42px] max-sm:text-[27px] max-sm:leading-[32px]'>Debbie Hagenes</h3>
                                            <p className=' max-w-[621px] z-30 relative opacity-[0.7] font-poppins text-center lg:text-start font-normal text-2xl max-md:text-xl max-sm:text-sm leading-[36px] text-white pt-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Velit officia consequat duis enim velit mollit.</p>
                                            <div className=' pt-6 text-center z-30 relative lg:text-start'>
                                                <fiveStars />
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' lg:w-4/12 w-12/12 px-3 flex justify-center z-30 lg:justify-start'>
                                        <img src={girlImg} alt="girlImg" className='w-full max-w-[240px] sm:max-w-[289px] border-[2px] border-white xl:w-[289px] xl:h-[328px] rounded-[20px]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pt-[113px] max-sm:pt-12 max-md:pt-[80px] max-lg:pt-[90px]'>
                            <div className='mx-auto bg-hagenes_Bg bg-no-repeat bg-100% max-w-[1041px] max-lg:max-w-[700px]  max-xl:pr-[30px] max-xl:pl-[30px] pt-[42px] pr-[60px] pb-[41px] pl-[59px]'>
                                <div className=' flex lg:flex-row flex-wrap -mx-3 flex-col-reverse '>
                                    <div className='lg:w-8/12 w-12/12 px-3 flex justify-center max-lg:pt-9 max-sm:pt-4 max-md:pt-8'>
                                        <div className=' flex flex-col z-30 relative text-center max-lg:text-start items-center lg:items-start'>
                                            <h3 className='font-orbitron z-30 relative font-bold text-42 text-center lg:text-start max-sm:text-3xl leading-[54px] text-white max-w-[400px] gaming_After gaming_Before_2 lg:pl-5  max-md:text-[34px] max-md:leading-[42px] max-sm:text-[27px] max-sm:leading-[32px]'>Debbie Hagenes</h3>
                                            <p className=' max-w-[621px] z-30 relative opacity-[0.7] font-poppins text-center lg:text-start font-normal text-2xl max-md:text-xl max-sm:text-sm leading-[36px] text-white pt-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Velit officia consequat duis enim velit mollit.</p>
                                            <div className=' pt-6 text-center z-30 relative lg:text-start'>
                                                <fiveStars />
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' lg:w-4/12 w-12/12 px-3 flex justify-center lg:justify-start'>
                                        <img src={girlImg} alt="girlImg" className='w-full max-w-[240px] sm:max-w-[289px] border-[2px] border-white xl:w-[289px] xl:h-[328px] rounded-[20px]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                {/* <div className='max-w-[570px] w-full debbi_img mt-[30px] sm:mt-[60px] md:mt-[80px] lg:mt-[113px] p-[35px_20px_20px_20px] md:p-[40px_25px_25px_25px] lg:p-[42px_56px_41px_55px] xl:max-w-[1041px] md:max-w-[768px] lg:max-w-[992px]'>
                    <div className='flex max-lg:flex-col max-lg:items-center max-lg gap-4 md:gap-7 lg:gap-10'>
                        <div className='flex flex-col pt-2 '>
                            <div className='relative inline-block max-lg:flex max-lg:justify-center'>
                                <h2 className='max-w-[621px] font-Orbitron text-[42px] font-bold leading-[54px] text-white pb-[16px] sm:text-[30px] md:text-[34px] sm:leading-[45px] lg:text-[42px] lg:leading-[54px]'>Debbie Hagenes
                                </h2>
                                <img src={Red_line_d} alt="Red_line_d" className=' max-sm:max-w-[250px] max-md:max-w-[300px] max-lg:w-[350px] absolute top-[-6px] lg:left-[-22px]' />
                                <img src={Red_Line_E} alt="Red_line_d" className='max-sm:max-w-[250px] max-md:max-w-[300px] max-lg:w-[350px] absolute bottom-[-6px] lg:left-[-4%]' />
                            </div>
                            <p className='lg:max-w-[621px] max-w-[700px] md:text-[18px] md:leading-[25px] lg:text-[24px] lg:leading-[36px] first:pt-5 lg:pt-[16px] max-lg:text-center opacity-[70%] font-Poppins font-normal text-[24px] leading-[36px] text-white'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Velit officia consequat duis enim velit mollit.</p>
                            <div className='flex items-center max-lg:justify-center gap-[6px] pt-3 md:pt-6'>
                                <img src={Stars} alt="Stars" />
                            </div>


                        </div>
                        <img src={girl_img} alt="girl_img" className='w-full max-w-[240px] sm:max-w-[289px] border-[2px] border-white xl:w-[289px] xl:h-[328px] rounded-[20px]' />

                    </div>

                </div> */}
            </div>
        </div>
    )
}

export default Clients