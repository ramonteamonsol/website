import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function BuyRamon() {
  const [lighton, setLightOn] = useState(false);

  function getRandomBoolean() {
    setLightOn(Math.random() < 0.5);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getRandomBoolean();
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <div className="w-full max-w-[300px] md:max-w-[354px] max-h-[254px] relative group -mb-24 group">
      <Link href={'/how-to-buy'} className='cursor-pointer absolute bottom-[72px] top-5 left-6 right-5 rounded-xl z-50 hover:drop-shadow-[0px_0px_8px_#B4FFA3] hover:border-[6px] hover:border-[#B4FFA3]'></Link>
      {lighton ? <Image className='w-full' loading='eager' src={'/assets/png/home/buy-roman-off.png'} alt="buyroman off" width={200} height={200} /> : <Image className='w-full' loading='eager' src={'/assets/png/home/buy-roman-on.png'} alt="buyroman on" width={200} height={200} />}
    </div>
  )
}