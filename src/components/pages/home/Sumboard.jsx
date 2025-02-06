import { useAnimation } from '@/context/AnimationContext';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Sumboard() {
  const { isAnimating } = useAnimation();
  return (

    <div className='relative w-fit overflow-hidden p-4'>
      <Link href={'/roadmap'} className="absolute left-0 right-0 top-0 bottom-0 rounded-3xl cursor-pointer z-30  hover:border-[6px] hover:border-[#B4FFA3]"></Link>
      <Image src={'/assets/png/home/white-board.png'} alt="white board img" width={280} height={280} className={`relative ${isAnimating ? 'swing' : ''} origin-top`} />
    </div>
  )
}
