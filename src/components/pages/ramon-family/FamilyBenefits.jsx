import { FamilyBenefitsData } from '@/components/helper/Helper'
import Image from 'next/image'
import React from 'react'

export default function FamilyBenefits() {
  return (
    <div className='my-8 sm:my-12 md:my-14 lg:my-16 xl:my-20 2xl:my-24'>
      <h3 className='text-white text-3xl lg:text-4xl 2xl:text-5xl mb-2 md:mb-5 !leading-[163%] pl-4 md:pl-6 lg:pl-8 xl:pl-12 2xl:pl-14'>Family Benefits</h3>
      <div className='flex flex-wrap lg:flex-nowrap gap-4 md:gap-6'>
        {FamilyBenefitsData.map((data, index) => (
          <div data-aos={index % 2 ? "flip-right" : "flip-left"} key={index} className='w-full sm:max-w-[48%] lg:max-w-none border-2 lg:border-4 border-white/75 rounded-3xl lg:rounded-[45px] 2xl:rounded-[69px] p-4 xl:p-6 2xl:p-10 flex flex-col justify-center items-center gap-4 md:gap-7'>
            <Image src={data.img} alt='hand img' width={110} height={110} className='w-14 lg:w-16 xl:w-20 2xl:w-28' />
            <div>
              <h3 className='text-[#B4FFA3] text-center text-lg md:text-xl xl:text-2xl font-helvetica-neue-condensed font-black !leading-[163%]'>{data.heading}</h3>
              <p className='text-[#959595] text-center text-base md:text-lg xl:text-xl font-bold !leading-[163%] font-helvetica-neue-condensed'>{data.pera}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
