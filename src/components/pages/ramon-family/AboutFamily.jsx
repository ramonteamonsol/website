import { FamilyRolesData } from '@/components/helper/Helper';
import { RightTick } from '@/components/helper/Icon';
import Image from 'next/image';
import React from 'react';

export default function AboutFamily() {
  return (
    <div className='mt-8 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-20 2xl:mt-24'>
      <h3 className='text-white text-3xl lg:text-4xl 2xl:text-5xl mb-2 md:mb-5 !leading-[163%] pl-4 md:pl-6 lg:pl-8 xl:pl-12 2xl:pl-14'>Family Roles</h3>
      {FamilyRolesData.map((data, index) => (
        <div data-aos={index % 2 ? "flip-right" : "flip-left"} key={index} className='border-2 lg:border-4 border-white/75 rounded-3xl lg:rounded-[45px] xl:rounded-[69px] px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-14 py-4 md:py-7 lg:py-9 mb-10'>
          <div className='flex justify-between items-center gap-4'>
            <h3 className='text-white text-3xl xl:text-[32px] font-helvetica-neue-condensed font-black !leading-[163%]'>{data.role}</h3>
            <span className='px-3.5 md:px-5 py-1.5 md:py-2.5 rounded-xl lg:rounded-2xl bg-[#3E3E3E] text-white text-lg md:text-xl xl:text-2xl font-helvetica-neue-condensed font-bold !leading-[163%] flex items-center justify-center'>
              {data.member} members
            </span>
          </div>
          <p className='text-[#959595] text-lg md:text-xl xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed mt-2'>{data.tagline}</p>

          {/* Tasks & Benefits Section */}
          <div className='flex flex-col md:flex-row mt-5 lg:mt-10 gap-4 lg:gap-5 xl:gap-10'>
            {/* Tasks Section */}
            <div className='md:w-1/2'>
              <div className='flex items-center gap-3 md:gap-5'>
                <Image src={'/assets/png/targetgreen.png'} alt='target img' width={24} height={24} />
                <h4 className='text-[#B4FFA3] text-3xl xl:text-[32px] !leading-[163%] font-black font-helvetica-neue-condensed'>Tasks</h4>
              </div>
              <ul className='mt-2.5 md:mt-4 lg:mt-6 space-y-1.5 md:space-y-3'>
                {data.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className='flex items-center gap-3 md:gap-5'>
                    <RightTick />
                    <p className='text-white/75 text-base lg:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed'>{task.task}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits Section */}
            <div className='md:w-1/2'>
              <div className='flex items-center gap-3 md:gap-5'>
                <Image src={'/assets/png/gift.png'} alt='gift img' width={24} height={24} />
                <h4 className='text-[#B4FFA3] text-3xl xl:text-[32px] !leading-[163%] font-black font-helvetica-neue-condensed'>Benefits</h4>
              </div>
              <ul className='mt-2.5 md:mt-4 lg:mt-6 space-y-1.5 md:space-y-3'>
                {data.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className='flex items-center gap-3 md:gap-5'>
                    <RightTick />
                    <p className='text-white/75 text-base lg:text-xl 2xl:text-2xl font-bold !leading-[163%] font-helvetica-neue-condensed'>{benefit.benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))
      }
    </div >
  );
}
