import Image from 'next/image'
import React from 'react'
import AboutFamily from './AboutFamily'
import ClimbingRanks from './ClimbingRanks'
import FamilyBenefits from './FamilyBenefits'
import Readytojoin from './Readytojoin'
import { RightArrowBlackIcon, RoundCircleIcon } from '@/components/helper/Icon'
import { AboutFamilyData } from '@/components/helper/Helper'
import Link from 'next/link'

function RamonFamily() {
  return (
    <div className="bg-[#1B1B1B] min-h-screen">
      <div className="max-w-[1728px] mx-auto px-4 md:px-6 lg:px-10 xl:px-14 2xl:px-16 overflow-hidden">
        <div className='pt-14 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 2xl:pt-[134px]'>
          <h2 className="text-white uppercase text-[44px] md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center !leading-[163%] ">RAMON’S FAMILY</h2>
        </div>
        <div data-aos="flip-left" className='flex flex-wrap lg:flex-nowrap justify-between gap-4 md:gap-8 lg:gap-10 xl:gap-16 2xl:gap-24 border-2 lg:border-4 border-white/75 rounded-3xl lg:rounded-[45px] xl:rounded-[69px] relative mt-10 sm:mt-16 md:mt-28 lg:mt-48 xl:mt-60 2xl:mt-72'>
          <div className='absolute -translate-y-[45%] top-0 left-1/2 -translate-x-1/2 w-3/4 h-full max-h-14 md:max-h-20 lg:max-h-[100px] 2xl:max-h-[150px] flex justify-between gap-16 z-20'>
            <div className='w-full max-w-[100px] lg:max-w-[150px] xl:max-w-[200px] 2xl:max-w-[300px] flex justify-start'>
              <Image src={'/assets/png/handmenu1.png'} alt='hand 1 img' width={150} height={150} className=' w-full h-auto' />
            </div>
            <div className='w-full max-w-[100px] lg:max-w-[150px] xl:max-w-[200px] 2xl:max-w-[300px] flex justify-start'>
              <Image src={'/assets/png/hand_menu2.png'} alt='hand 2 img' width={150} height={150} className=' w-full h-auto' />
            </div>
          </div>
          <div className='w-full lg:w-[48%]'>
            <div className='pt-8 sm:pt-10 md:pt-12 lg:pt-14 xl:pt-16 2xl:pt-24 px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-14'>
              <h3 className='text-white text-3xl lg:text-4xl 2xl:text-5xl mb-2 !leading-[163%]'>About the Family</h3>
              <p className='text-[#959595] text-lg md:text-xl xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed mt-2'>A powerful community structure based on loyalty, honor and mutual benefit.</p>
              <h3 className='text-white text-2xl xl:text-[32px] font-helvetica-neue-condensed font-black !leading-[163%]'>Our Values</h3>
              <ul className='mb-3 md:mb-4 lg:mb-6'>
                {AboutFamilyData.map((data, index) => {
                  return (
                    <li key={index} className='text-white/75 flex items-center gap-2 md:gap-4 lg:gap-6 xl:gap-[26px] text-base md:text-lg xl:text-xl 2xl:text-2xl !leading-[163%]'>
                      <RoundCircleIcon />
                      <span className='font-helvetica-neue-condensed'>{data}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
            <Link href={''} className='group flex justify-center items-center gap-2 bg-[#B4FFA3] text-[#1B1B1B] text-lg lg:text-xl xl:text-2xl 2xl:text-[32px] rounded-2xl md:rounded-3xl lg:rounded-[40px] xl:rounded-[51px] font-helvetica-neue-condensed font-black !leading-[163%] transition-all duration-300 ease-in-out hover:shadow-[0px_0px_40px_#B4FFA3] text-nowrap mb-3 md:mb-4 lg:mb-6 py-2 md:py-3 lg:py-4 xl:py-5 2xl:py-7 mx-4 xl:mx-5'>
              Join the Family <RightArrowBlackIcon />
            </Link>
          </div>
          <div className="w-full lg:w-[48%] relative scale-[101%] px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-14 mb-4 lg:mb-0">
            <div className='lg:border-4 border-green-300 rounded-3xl lg:rounded-[45px] xl:rounded-[69px]  lg:absolute md:-top-0.5 md:left-[1] md:-right-0.5 md:-bottom-0.5 w-full lg:px-4 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 2xl:py-24 space-y-10 2xl:space-y-16 max-w-[700px] mx-auto'>
              <div className='flex justify-center gap-3 relative'>
                <span className='text-[#1B1B1B] text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[32px] font-black !leading-[163%] font-helvetica-neue-condensed bg-[#B4FFA3] rounded-2xl py-3.5 w-full max-w-28 md:max-w-36 lg:max-w-40 xl:max-w-[198px] text-center'>Boss</span>
                <span className='inline-block absolute top-full h-10 2xl:h-16 w-0.5 md:w-1 py-2 2xl:py-4'>
                  <span className='bg-[#555] block w-full h-full'></span>
                </span>
              </div>
              <div className='flex justify-center gap-3 relative'>
                <span className='text-white text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-2xl py-3.5 w-full max-w-28 md:max-w-36 lg:max-w-40 xl:max-w-[198px] text-center'>Underboss</span>
                <span className='inline-block absolute top-full h-10 2xl:h-16 w-0.5 md:w-1 py-2 2xl:py-4'>
                  <span className='bg-[#555] block w-full h-full'></span>
                </span>
                <span className='absolute top-full h-10 2xl:h-16 w-full px-10 min-[400px]:px-20 min-[500px]:px-28 sm:px-44 min-[700px]:px-52 md:px-44 lg:px-20 xl:px-28 flex justify-center items-center'>
                  <span className='bg-[#555] block w-full h-0.5 md:h-1 relative after:absolute after:bg-[#555] after:w-0.5 md:after:w-1 after:h-4 after:left-0 before:absolute before:bg-[#555] before:w-0.5 md:before:w-1 before:h-4 before:right-0'></span>
                </span>
              </div>
              <div className='flex justify-center gap-3 relative'>
                <span className='text-white text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 md:py-3.5 w-full max-w-28 md:max-w-36 lg:max-w-40 xl:max-w-[198px] text-center'>Consigliere</span>
                <span className='text-white text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 md:py-3.5 w-full max-w-28 md:max-w-36 lg:max-w-40 xl:max-w-[198px] text-center'>Consigliere</span>
                <span className='text-white text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 md:py-3.5 w-full max-w-28 md:max-w-36 lg:max-w-40 xl:max-w-[198px] text-center'>Consigliere</span>
                <span className='inline-block absolute top-full h-10 2xl:h-16 w-0.5 md:w-1 py-2 2xl:py-4'>
                  <span className='bg-[#555] block w-full h-full'></span>
                </span>
                <span className='absolute top-full h-10 2xl:h-16 w-full px-6 sm:px-16 md:px-24 lg:px-14 xl:px-16 2xl:px-20 flex justify-center items-center'>
                  <span className='bg-[#555] block w-full h-0.5 md:h-1 relative after:absolute after:bg-[#555] after:w-0.5 md:after:w-1 after:h-4 after:left-0 before:absolute before:bg-[#555] before:w-0.5 md:before:w-1 before:h-4 before:right-0'></span>
                </span>
              </div>
              <div className='flex justify-center gap-2 md:gap-3'>
                <span className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center'>Soldier</span>
                <span className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center relative'>
                  Soldier
                  <span className='inline-block absolute bottom-full left-1/2 -translate-x-1/2 h-6 2xl:h-12 w-0.5 md:w-1 py-2 2xl:py-4'>
                    <span className='bg-[#555] block w-full h-full'></span>
                  </span>
                </span>
                <span className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center'>Soldier</span>
                <span className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center relative'>
                  Soldier
                  <span className='inline-block absolute bottom-full left-1/2 -translate-x-1/2 h-6 2xl:h-12 w-0.5 md:w-1 py-2 2xl:py-4'>
                    <span className='bg-[#555] block w-full h-full'></span>
                  </span>
                </span>
                <span className='text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed bg-[#3E3E3E] rounded-xl md:rounded-2xl py-2 w-full max-w-[114px] text-center'>Soldier</span>
              </div>
            </div>
          </div>
        </div>
        <AboutFamily />
        <ClimbingRanks />
        <FamilyBenefits />
        <Readytojoin />
      </div>
    </div>
  )
}

export default RamonFamily