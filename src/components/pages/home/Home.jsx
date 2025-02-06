'use client';
import Image from 'next/image';
import Tvsection from './Tvsection';
import StudioSection from './StudioSection';
import BuyRamon from './BuyRamon';
import Sumboard from './Sumboard';
import RoofLight from './RoofLight';
import { useEffect, useRef, useState } from 'react';
import { LeftArrowIcon } from '@/components/helper/Icon';

const Home = () => {
  const containerRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [imageSrc, setImageSrc] = useState('/assets/png/home/ramononchair.png');
  // Function to update scroll state
  const updateScrollState = () => {
    const container = containerRef.current;
    if (container) {
      setIsAtStart(container.scrollLeft === 0);
      setIsAtEnd(container.scrollLeft + container.clientWidth >= container.scrollWidth);
    }
  };

  // Scroll left by a fixed amount
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 100;
      updateScrollState();
    }
  };

  // Scroll right by a fixed amount
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 100;
      updateScrollState();
    }
  };

  // Hook to update scroll state on component mount and add scroll event listener
  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      updateScrollState(); // Initial update
      container.addEventListener('scroll', updateScrollState); // Listen for manual scrolling
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', updateScrollState); // Cleanup event listener
      }
    };
  }, []);

  // Track mouse position and calculate object offset
  const [objectPos, setObjectPos] = useState(0);
  const maxMovement = 40;

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (window.innerWidth < 768) return; // Stop movement on small screens

      const { clientX, clientY } = event;
      setMousePos({
        x: clientX,
        y: clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) return; // Prevent updates on small screens

    const screenWidth = window.innerWidth;
    const screenCenter = screenWidth / 2;
    const offset = -((mousePos.x - screenCenter) / screenCenter) * maxMovement;
    setObjectPos(offset);
  }, [mousePos.x]);
  const sayHello = () => {
    const newImageSrc = '/assets/png/home/ramononchair2.png';
    setImageSrc(newImageSrc);
    setTimeout(() => {
      setImageSrc('/assets/png/home/ramononchair.png');
    }, 1000);
  };
  return (
    <div ref={containerRef} className="bg-[url('/assets/webp/wall.webp')] bg-no-repeat [background-size:200%_100%] sm:[background-size:150%_100%] md:[background-size:100%_100%]  w-full max-w-full overflow-auto lg:overflow-hidden h-screen">
      {!isAtStart && (
        <button
          onClick={scrollLeft}
          type="button"
          aria-label="Scroll left"
          className="w-12 h-12 bg-black text-[#B4FFA3] rounded-full p-2 fixed left-1 top-1/2 -translate-y-1/2 z-[80] min-[1020px]:hidden 
               hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#B4FFA3] rotate-180"
        >
          <LeftArrowIcon />
        </button>
      )}

      {!isAtEnd && (
        <button
          onClick={scrollRight}
          type="button"
          aria-label="Scroll right"
          className="w-12 h-12 bg-black text-[#B4FFA3] rounded-full p-2 fixed right-1 top-1/2 -translate-y-1/2 z-[80] min-[1020px]:hidden 
               hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#B4FFA3]"
        >
          <LeftArrowIcon />
        </button>
      )}

      <audio
        className="hidden"
        src="/assets/audio/r1ramon.mp3"
        autoPlay
        loop
        playsInline
      />
      <div className='h-full flex justify-end items-end min-w-[1024px] relative overflow-hidden'>
        <Image onClick={sayHello} style={{
          transform: `translateX(-${mousePos.x / 10}px)`,
        }} src={imageSrc} alt={'studiodesk img'} width={1500} height={600} className={`w-full  absolute -bottom-20 left-[67%]  max-w-[250px] xl:max-w-[300px] z-50 transition-all ease-out duration-100 cursor-pointer`} />
        <div style={{
          transform: `translateX(${objectPos}px)`
        }} className="flex flex-col justify-between 2xl:justify-end gap-10 w-full h-full  min-w-[1024px] max-w-[1728px] mx-auto transition-all duration-200 ease-in-out">
          <RoofLight />

          <div className='flex justify-between items-center gap-4 -mb-44'>
            <BuyRamon />
            <Sumboard />
          </div>
          <div className='w-full flex gap-2 items-end justify-center relative'>
            <div className='absolute -top-36  w-full flex justify-center -z-10 overflow-hidden'>
              <div className='xl:pl-48 2xl:pl-96 xl:ml-14 2xl:ml-48'>
                <Image src={'/assets/webp/poster.webp'} alt="poster img" width={500} height={400} />
              </div>
            </div>
            <Tvsection />
            <StudioSection />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;