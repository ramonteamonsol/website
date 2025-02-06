import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Backicon, DasedSpan } from '../helper/Icon'
import { SidebarLinkData, SidebarSocialIconData } from '../helper/Helper'
import { useSidebar } from '@/context/SidebarContext'

export default function Sidebar() {
  const { isSidebarOpen } = useSidebar();
  const { toggleSidebar } = useSidebar();
  const stopPropagation = (e) => {
    e.stopPropagation()
  }
  const copyCA = () => {
    const textToCopy = "Your Text to Copy";
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        alert("Copied to clipboard: " + textToCopy);
      }
    )
  }
  return (
    <div
      onClick={toggleSidebar}
      className={`fixed top-0 bottom-0 ${isSidebarOpen ? "left-0" : "left-full"} transition-all duration-300 ease-in-out w-screen min-h-screen bg-white/20 backdrop-blur-sm -my-[10px] select-none z-[999]`}
    >
      <div
        onClick={stopPropagation}
        className='bg-[#B4FFA3] min-h-[500px] h-full w-[95%] md:w-1/2 ml-auto relative border-black border-[3px] lg:border-4 !border-r-0 rounded-s-[81px] py-20'
      >
        <div className='absolute left-0 top-0 -translate-x-[42%] w-full max-w-10 lg:max-w-12 xl:max-w-[100px] h-full flex flex-col justify-between py-28'>
          <div>
            <Image src={'/assets/png/hand2.png'} alt='hand 1 img' width={200} height={100} className='w-full h-auto' />
          </div>
          <div>
            <Image src={'/assets/png/hand1.png'} alt='hand 1 img' width={200} height={100} className='w-full h-auto' />
          </div>
        </div>
        <div className='flex justify-between gap-4 mb-4 sm:mb-6 md:mb-8 lg:mb-10 px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-28'>
          {SidebarSocialIconData.map((data, index) => {
            return (
              <Link key={index} href={data.href} className='flex items-center justify-center max-w-10 xl:max-w-14 2xl:max-w-[70px]'>
                <Image src={data.img} alt='social media icon' width={76} height={76} className='w-full h-auto' />
              </Link>
            )
          })}
          <button onClick={copyCA} className={`text-[#1B1B1B] max-w-8 md:max-w-12 lg:max-w-16`}>
            <Image src={'/assets/png/ca.png'} alt='ca button' width={100} height={100} />
          </button>
          <button onClick={toggleSidebar} className={`text-[#1B1B1B] max-w-8 md:max-w-12 lg:max-w-16`}>
            <Backicon />
          </button>
        </div>
        <div className='overflow-y-auto h-full px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-28 pb-16'>
          {SidebarLinkData.map((data, index) => {
            return (
              <Link onClick={toggleSidebar} key={index} href={data.href} className='capitalize text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[64px] !leading-[164%] text-black flex items-center gap-4 md:gap-6 lg:gap-8 xl:gap-10 text-nowrap truncate'>
                {data.label} <DasedSpan className={'!text-black !opacity-100'} />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
