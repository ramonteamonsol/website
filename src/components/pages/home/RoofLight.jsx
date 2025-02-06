import { useAnimation } from '@/context/AnimationContext';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function RoofLight() {
  const [lightTwo, setLightTwo] = useState(false);
  const { isAnimating } = useAnimation();

  function getRandomBoolean() {
    setLightTwo(Math.random() < 0.9);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      getRandomBoolean();
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className='absolute w-full top-0 left-0 right-0 flex gap-4 justify-center z-[30] overflow-hidden lg:overflow-visible'>
      <div>
        {lightTwo ? <Image src={'/assets/png/home/rooflight-on.png'} alt="light section" width={1000} height={1000} className={`w-full max-w-[1000px] mx-auto origin-top ${isAnimating ? 'swing-right2' : ''}`} /> :
          <Image src={'/assets/png/home/rooflight-off.png'} alt="light section" width={1000} height={1000} className={`w-full max-w-[1000px] mx-auto origin-top ${isAnimating ? 'swing-right2' : ''}`} />}
      </div>
      <div>
        {lightTwo ? <Image src={'/assets/png/home/rooflight-on.png'} alt="light section" width={1000} height={1000} className={`w-full max-w-[1000px] mx-auto origin-top ${isAnimating ? 'swing-right' : ''}`} /> :
          <Image src={'/assets/png/home/rooflight-off.png'} alt="light section" width={1000} height={1000} className={`w-full max-w-[1000px] mx-auto origin-top ${isAnimating ? 'swing-right' : ''}`} />}
      </div>
    </div>
  )
}
