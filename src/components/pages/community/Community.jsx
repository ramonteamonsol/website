"use client";
import SwiperSlider from "@/components/common/SwiperSlider";
import { CommunityImagesData, CommunitySocialMediaData } from "@/components/helper/Helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Community() {

  return (
    <div className="bg-[#1B1B1B] min-h-screen">
      <div className="max-w-[1728px] mx-auto px-4 md:px-6 lg:px-10 xl:px-14 2xl:px-16 overflow-hidden">
        <div className="pt-14 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 2xl:pt-[134px]">
          <h2 className="text-white uppercase text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center !leading-[125%] md:!leading-[163%]">
            COMMUNITY BOARD
          </h2>
        </div>

        <div className='w-full sm:w-fit flex flex-wrap items-center justify-center gap-8 px-4 lg:px-7 py-2.5 lg:py-5 lg:-mt-5 mx-auto'>
          {CommunitySocialMediaData.map((item, i) => (
            <Link key={i} href={item.href} target="_blank" className='max-w-7 md:max-w-9 lg:max-w-11'>
              <Image src={item.img} width={31} height={31} alt='social media icon' />
            </Link>
          ))}
        </div>

        <SwiperSlider data={CommunityImagesData} />
      </div>
    </div>
  );
}
