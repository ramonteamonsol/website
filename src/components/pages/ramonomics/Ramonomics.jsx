import Image from 'next/image'
import React from 'react'

export default function Ramonomics() {
  return (
    <div className="bg-[#1B1B1B] min-h-screen">
      <div className="max-w-[1728px] mx-auto px-4 md:px-6 lg:px-10 xl:px-14 2xl:px-16 overflow-hidden">
        <div className='pt-14 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 2xl:pt-[134px]'>
          <h2 className="text-white uppercase text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center !leading-[163%] ">RAMONOMICS</h2>
        </div>
        <div className='mx-auto w-fit [filter:drop-shadow(0px_0px_80px_#8bc990)] max-w-[412px] lg:max-w-[512px] xl:max-w-[612px] 2xl:max-w-[712px] max-h-[712px] overflow-hidden'>
          <Image data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" src="/assets/png/token2.png" alt="token img" width={712} height={712} className='w-full h-full' />
        </div>
        <p data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine" className='text-white text-center md:text-start font-helvetica-neue text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold !leading-[162.5%] my-12'>Total Supply: <span className='text-[#B4FFA3] font-helvetica-neue'>1Billion $RAMON Supply</span></p>

        <div className='flex flex-col md:flex-row gap-3 md:gap-6 lg:gap-8 xl:gap-10 pb-16 md:pb-28 lg:pb-44 xl:pb-60 2xl:pb-72'>
          <div data-aos="zoom-in" className='w-full text-center rounded-3xl lg:rounded-[45px] xl:rounded-[px] 59border-white border-2 md:border-4 flex items-center justify-center p-4 lg:p-8'>
            <p className='text-[#B4FFA3] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] !leading-[120%] font-helvetica-neue font-bold'>TAX 0/0</p>
          </div>
          <div data-aos="zoom-in" className='w-full text-center rounded-3xl lg:rounded-[45px] xl:rounded-[px] border-white border-2 md:border-4 flex flex-col items-center justify-center gap-1 lg:gap-2 p-4 lg:p-8'>
            <p className='text-[#B4FFA3] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] !leading-[120%] font-helvetica-neue font-bold'>90% <span className='text-white font-helvetica-neue'> lp / in circulation</span></p>
            <p className='text-[#B4FFA3] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] !leading-[120%] font-helvetica-neue font-bold'>10% <span className='text-white font-helvetica-neue'> cex / partnerships</span></p>
          </div>
          <div data-aos="zoom-in" className='w-full text-center rounded-3xl lg:rounded-[45px] xl:rounded-[px] border-white border-2 md:border-4 flex items-center justify-center p-4 lg:p-8'>
            <p className='text-[#B4FFA3] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] !leading-[120%] font-helvetica-neue font-bold'><span className='text-white font-helvetica-neue'>The ticker is </span>
              $RAMON</p>
          </div>
        </div>
      </div>
    </div>
  )
}
