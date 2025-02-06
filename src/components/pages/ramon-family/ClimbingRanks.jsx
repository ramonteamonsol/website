import { ClimbingRankData } from '@/components/helper/Helper'
import { RightTick } from '@/components/helper/Icon'
import Image from 'next/image'
import React from 'react'

export default function ClimbingRanks() {
  return (
    <div className='mt-8 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-20 2xl:mt-24'>
      <h3 className='text-white text-3xl lg:text-4xl 2xl:text-5xl mb-2 md:mb-5 !leading-[163%] pl-4 md:pl-6 lg:pl-8 xl:pl-12 2xl:pl-14'>Climbing the Ranks</h3>
      {ClimbingRankData.map((data, index) => (
        <div data-aos={index % 2 ? "flip-right" : "flip-left"} key={index} className='border-2 lg:border-4 border-[#E04B77] rounded-3xl lg:rounded-[45px] xl:rounded-[69px] pl-4 md:pl-6 pr-4 sm:pr-8 lg:px-8 xl:px-12 2xl:px-14 py-4 md:py-7 lg:py-9 mb-10 relative'>
          <Image src={'/assets/png/hand2.png'} alt='hand img' width={100} height={150} className='w-10 sm:w-14 md:w-16 lg:w-20 xl:w-[100px] rotate-180 absolute right-0 top-1/2 -translate-y-1/2 translate-x-[45%]' />
          <h3 className='text-white text-3xl xl:text-[32px] font-helvetica-neue-condensed font-black !leading-[163%]'>{data.role}</h3>
          <p className='text-[#959595] text-lg md:text-xl xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed mt-2'>{data.tagline}</p>


          <div className='flex flex-col md:flex-row mt-4 md:mt-6 gap-4 lg:gap-5 xl:gap-10'>
            <ul className='flex flex-wrap gap-4 md:gap-6'>
              {data.tasks.map((task, taskIndex) => (
                <li key={taskIndex} className='flex items-start gap-3 md:gap-5 w-full md:w-[48%]'>
                  <Image src={task.img} alt={'point img'} width={24} height={24} />
                  <div >
                    <p className='text-[#E04B77] text-lg lg:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed'>{task.heading}</p>
                    <p className='text-[#959595] text-base lg:text-lg 2xl:text-xl font-bold !leading-[163%] font-helvetica-neue-condensed'>{task.pera}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
