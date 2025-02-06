"use client";
import { useAnimation } from '@/context/AnimationContext';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function StudioSection() {
  const { isAnimating } = useAnimation();
  return (
    <div className='w-full relative overflow-hidden'>
      <div className="flex w-full justify-center items-end gap-2 max-h-[500px] -mb-5 relative ">
        <div>
          <div className='h-[350px] xl:h-[380px] 2xl:h-[430px] min-w-fit max-w-[250px] relative overflow-hidden group'>
            <Link href={'/animations'} className='absolute w-full h-full  rounded-md z-40 bg-transparent  hover:border-[6px] hover:border-[#B4FFA3]'></Link>
            <Image
              src={'/assets/png/home/sidemoniter.png'}
              alt="white board img"
              width={300}
              height={300}
              className="w-full h-full relative z-20 group-hover:drop-shadow-[0px_0px_8px_#B4FFA3]"
            />
            <video
              preload="auto"
              autoPlay
              loop
              muted
              playsInline
              className="absolute m-1 h-[calc(100%-30px)] xl:h-[calc(100%-40px)] top-0 bottom-3 left-0 right-3.5 pr-1.5 w-full object-cover z-10">
              {/* WebM video format */}
              <source src="assets/videos/home.mp4" />
              {/* Optional: Text message for unsupported browsers  */}
              Your browser does not support the video tag.
            </video>
            {/* <div className='-mb-8 absolute bottom-6  min-[1440px]-left-14 2xl:-left-20'>
              <div className={`relative ${isAnimating ? 'jitter' : ''}`}>
                <Link href={'/'} className='absolute w-full h-full  rounded-lg z-40'></Link>
                <Image src={'/assets/png/home/fleshlite.png'} alt="white board img" width={130} height={100} />
              </div>
            </div> */}
          </div>
        </div>
        <div>
          <div className='h-[210px] min-w-fit relative'>
            <div>
              <Link href={'/animations'} className='absolute w-full h-full  z-30 rounded-lg hover:drop-shadow-[0px_0px_8px_#B4FFA3] hover:border-[6px] hover:border-[#B4FFA3]'></Link>
            </div>
            <Image
              src={'/assets/png/home/mainmoniter.png'}
              alt="white board img"
              width={300}
              height={300}
              className="w-full h-full relative z-20"
            />
            <video
              preload="auto"
              autoPlay
              loop
              muted
              playsInline
              className="absolute m-1 h-[calc(100%-30px)] top-0 bottom-0 -left-1 right-3 pr-0.5 w-full object-cover  z-10">
              {/* WebM video format */}
              <source src="assets/videos/home.mp4" />
              {/* Optional: Text message for unsupported browsers  */}
              Your browser does not support the video tag.
            </video>
            <Link href={'https://x.com/RamonTheMeme'} className='absolute bottom-0 left-0 z-40 hover:drop-shadow-[0px_0px_8px_#B4FFA3] hover:scale-105 flex gap-2 items-end'>
              <Image
                src={'/assets/png/home/redbull2.png'}
                alt="white board img"
                width={30}
                height={30}
                className={`object-contain ${isAnimating ? 'vibrate' : ''}`}
              />
              <Image
                src={'/assets/png/home/redbull.png'}
                alt="white board img"
                width={80}
                height={30}
                className={`object-contain ${isAnimating ? 'vibrate' : ''}`}
              />
            </Link>
            <Image
              src={'/assets/png/home/coin.png'}
              alt="white board img"
              width={130}
              height={30}
              className=" absolute -bottom-3 -right-7 z-40"
            />
          </div>
        </div>
        <div>
          <div className='h-[90px] xl:h-[120px] min-w-fit -ml-14 -mb-2 xl:-mb-4 relative overflow-hidden z-30 group'>
            <Link href={'/animations'} className='absolute w-full h-full rounded-lg z-30 group-hover:drop-shadow-[0px_0px_8px_#B4FFA3]'></Link>
            <Image
              src={'/assets/png/home/tablet.png'}
              alt="white board img"
              width={300}
              height={300}
              className="w-full h-full max-w-[118px] lg:max-w-[105px] xl:max-w-[145px] relative z-20 "
            />
            <video
              preload="auto"
              autoPlay
              loop
              muted
              playsInline
              className="absolute m-1 h-[calc(100%-12px)] lg:h-[calc(100%-8px)] xl:h-[calc(100%-10px)] w-[92%] top-0 bottom-0 left-0 lg: xl:-left-1 -right-1 xl:-right-3 lg:pb-2 -skew-x-[18deg] xl:-skew-x-[21deg] z-10 rotate-[4.3deg] lg:rotate-2">
              {/* WebM video format */}
              <source src="assets/videos/home.mp4" />
              {/* Optional: Text message for unsupported browsers  */}
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className='w-full h-[230px] xl:h-[300px] relative -z-10'>
        <Image src={'/assets/png/home/studiodesk.png'} alt={'studiodesk img'} width={1500} height={600} className='w-full h-full' />
        <Image
          src={'/assets/png/home/skting-board.png'}
          alt="white board img"
          width={130}
          height={30}
          className={`absolute bottom-1/2 right-10 -z-10 ${isAnimating ? 'vibrate' : ''}`}
        />
      </div>
    </div>
  )
}
