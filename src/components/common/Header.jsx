import Link from 'next/link'
import React from 'react'
import { Backicon, MenuIcon } from '../helper/Icon'
import { useSidebar } from '@/context/SidebarContext';
import { usePathname } from 'next/navigation';

export default function Header() {
  const { toggleSidebar } = useSidebar();
  const pathname = usePathname();
  return (
    <header className='fixed lg:top-6 xl:top-8 2xl:top-10 z-30 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[72px] bg-white/30 backdrop-blur-sm py-2 md:py-3 lg:py-5'>
      <nav className='flex items-center justify-between gap-4'>
        {pathname !== '/' ? <Link
          href="/"
          className="max-w-10 text-[#B4FFA3]"
        >
          <Backicon />
        </Link > : <span></span>}
        <button onClick={toggleSidebar} className='max-w-10 text-[#B4FFA3]'>
          <MenuIcon />
        </button>
      </nav >
    </header >
  )
}
