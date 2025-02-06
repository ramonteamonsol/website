import { useAnimation } from '@/context/AnimationContext';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Tvsection() {
  const { isAnimating } = useAnimation();
  return (
    <div className='w-full max-w-[320px] xl:max-w-[450px]'>
      <div className='flex justify-center -mb-3'>
        <div className='relative'>
          <Link href={'/animations'} className="z-40 absolute left-0 right-0 top-0 bottom-0 rounded-xl cursor-pointer hover:drop-shadow-[0px_0px_8px_#B4FFA3] hover:border-[6px] hover:border-[#B4FFA3]"></Link>
          <div className='max-w-[250px] xl:max-w-[320px] relative overflow-hidden'>
            <video
              preload="auto"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg w-full absolute h-[calc(107%)] top-2 left-0 bottom-0 right-0 -z-10">
              {/* WebM video format */}
              <source src="assets/videos/home.mp4" />
              {/* Optional: Text message for unsupported browsers  */}
              Your browser does not support the video tag.
            </video>
            <Image src={'/assets/png/home/tv.png'} alt="white board img" width={320} height={300} className='w-full h-full relative z-20' />
          </div>
        </div>
      </div>
      <div className={`bg-[url('/assets/webp/sidetable.webp')] [background-size:100%_100%] h-[230px] xl:h-[300px] relative`}>
        <Image src={'/assets/png/home/drone-controler.png'} alt="white board img" width={320} height={100} className={`w-full max-w-[100px] absolute -top-16 right-9 z-40 ${isAnimating ? 'vibrateXY' : ''}`} />
        <ul className='relative flex flex-col items-center'>
          <li className='pt-11 pr-2 relative max-w-[250px] xl:max-w-[335px] max-h-[150px]'>
            <Link href={'/ramonomics'} className='z-40 cursor-pointer absolute bottom-1 top-12 left-0 right-2 rounded-xl hover:drop-shadow-[0px_0px_8px_#B4FFA3] hover:border-[6px] hover:border-[#B4FFA3]'></Link>
            <Image src={'/assets/png/home/toknomics.png'} alt="white board img" width={330} height={100} className='w-full h-full' />
          </li>
          <li className='flex items-end gap-2 w-full max-w-[220px] xl:max-w-[330px] xl:pt-3'>
            <div className="w-full pb-3 pl-5">
              <Image className={`${isAnimating ? 'vibrate' : ''}`} src={'/assets/png/home/dildo.png'} alt="white board img" width={140} height={100} />
            </div>
            <div className={`w-full group relative flex justify-end pr-3 ${isAnimating ? 'shake' : ''}`}>
              <Link href={'/how-to-buy'} className='z-40 cursor-pointer absolute bottom-1 top-1 left-0 right-2 rounded-xl'></Link>
              <Image src={'/assets/png/home/tapes.png'} alt="white board img" width={120} height={100} className='group-hover:drop-shadow-[0px_0px_8px_#B4FFA3] group-hover:border-[#B4FFA3]' />
            </div>
          </li>
        </ul>
      </div>
    </div >
  )
}
