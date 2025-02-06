"use client"
import { AnimationsData, SocialMediaData } from '@/components/helper/Helper'
import { WhiteCircleFillIcon, WhiteCircleIcon } from '@/components/helper/Icon'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import VideoPlayer from './VideoPlayer'

function Animations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handleDotClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
      setActiveIndex(index);
    }
  };

  const handleVideoClick = (index) => {
    setActiveIndex(index);
  };

  const currentVideo = AnimationsData[activeIndex];

  return (
    <div className="bg-[#1B1B1B] min-h-screen overflow-hidden">
      <div className='pt-14 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 2xl:pt-[134px]'>
        <h2 className="text-white uppercase text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center !leading-[163%] mb-4 sm:mb-6 md:mb-6 lg:mb-8 xl:mb-14 2xl:mb-20">ANIMATIONS</h2>
      </div>
      <div className='max-w-[1728px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-20 2xl:px-24'>
        <div className='flex flex-col-reverse xl:flex-row justify-between gap-6'>
          <div data-aos="fade-right" className="w-full xl:max-w-[640px]">
            <h2 className='text-white text-3xl sm:text-4xl md:text-5xl !leading-[133%] mb-2 md:mb-3 lg:mb-4 xl:mb-6 '>{currentVideo.videoTitle}</h2>
            <p className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[22px] !leading-[152.5%] text-white line-clamp-[14] font-helvetica-neue font-bold'>{currentVideo.videoDescription}</p>
            <div className='w-full sm:w-fit flex flex-wrap items-center justify-center gap-8 rounded-3xl lg:rounded-[45px] xl:rounded-[69px] border-white border-2  md:border-4 px-4 lg:px-7 py-2.5 lg:py-5 mt-4 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-14 2xl:mt-16'>
              {SocialMediaData.map((item, i) => (
                <Link data-aos="fade-up" key={i} href={item.href} target='_blank' className='max-w-7 md:max-w-9 lg:max-w-11 group'>
                  <Image src={item.img} width={61} height={61} alt='social media icon' className='transition-all duration-300 ease-in-out group-hover:-translate-y-2' />
                </Link>
              ))}
            </div>
          </div>
          <VideoPlayer videoSrc={currentVideo.videoSrc} />
        </div>
      </div>
      <div className="mt-20 pl-4 sm:pl-6 md:pl-10 lg:pl-12 xl:pl-20 2xl:pl-24" data-aos="fade-up-left">
        <Swiper
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1.2}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
            1280: { slidesPerView: 4.8 },
          }}
          className="mySwiper"
        >
          {AnimationsData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() => handleVideoClick(index)}
                className={`relative w-full lg:max-w-[308px] h-full max-h-[240px]  rounded-3xl lg:rounded-[45px] xl:rounded-[69px] overflow-hidden border-2 md:border-4 ${activeIndex === index ? "border-[#E04B77]" : "border-[#B4FFA3]"
                  } bg-[#B4FFA3] cursor-pointer`}
              >
                <video
                  src={slide.videoSrc}
                  className="w-full h-full object-cover"
                />
                <div className="flex justify-center items-center absolute top-0 left-0 w-full h-full bg-black/20 overflow-hidden">
                  <span className=" text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl w-full h-full text-center flex items-center justify-center p-4">
                    Episode {index + 1}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center mt-8 space-x-4 pb-4 sm:pb-7 md:pb-10 lg:pb-14 xl:pb-24 2xl:pb-28">
          {AnimationsData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className="focus:outline-none"
            >
              {activeIndex === index ? (
                <span className='inline-block max-w-3 sm:max-w-4 md:max-w-5'><WhiteCircleFillIcon /></span>
              ) : (
                <span className='inline-block max-w-3 sm:max-w-4 md:max-w-5'><WhiteCircleIcon /></span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Animations;
