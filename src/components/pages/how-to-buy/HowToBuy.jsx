"use client";
import { HowToBuyData } from '@/components/helper/Helper';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function HowToBuy() {
  return (
    <div className="bg-[#1B1B1B] min-h-screen">
      <div className='pt-14 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 2xl:pt-[134px]'>
        <h2 className="text-white uppercase text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center !leading-[163%] mb-4 sm:mb-6 md:mb-8 lg:mb-12 xl:mb-16">HOW TO BUY</h2>
      </div>
      <div className="max-w-[1728px] mx-auto ml-0 pb-8 sm:pb-14 md:pb-24 lg:pb-32 xl:pb-40 2xl:pb-52">
        <div className="space-y-5 lg:space-y-7 2xl:space-y-9 select-none pr-5 sm:pr-7 md:pr-10 lg:pr-14 xl:pr-20 2xl:pr-28 overflow-hidden">
          {HowToBuyData.map((que, i) => (
            <div
              key={i}
              data-aos="fade-right"
              data-aos-delay={`${i * 250}`}
              onClick={() => toggleQuestion(i)}
              className={`flex gap-4 border-2 xl:border-4 border-white !border-s-0 rounded-e-3xl lg:rounded-e-[45px] xl:rounded-e-[69px] ${que.className}`}
            >
              <div
                className={`flex flex-col sm:flex-row md:items-center sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 rounded-e-3xl lg:rounded-e-[45px] xl:rounded-e-[69px] px-5 md:px-7 lg:px-10 xl:px-14 ${que.subclassName || ""
                  }`}
              >
                <span
                  className={`w-full inline-block max-w-4 sm:max-w-5 md:max-w-6 lg:max-w-8 xl:max-w-10 2xl:max-w-[50px] text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl ${que.indexClassName || "text-[#E04B77]"
                    } !leading-[145%]`}
                >
                  {i + 1}
                </span>
                <div className="pt-1 pb-2 xl:py-0">
                  <h3
                    className={`uppercase ${que.indexClassName || "text-white"
                      } text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px] !leading-[145%]`}
                  >
                    {que.question.map((q, index) => (
                      <span key={index} className={q.highlight}>
                        {q.text}
                      </span>
                    ))}
                  </h3>
                  <p
                    className={`font-semibold sm:font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl !leading-[129%] ${que.indexClassName || "text-white"
                      } font-helvetica-neue pb-1 md:pb-2 xl:pb-6 max-w-[1359px]`}
                  >
                    {que.answer.map((ans, index) =>
                      ans.href ? (
                        <Link
                          key={index}
                          href={ans.href}
                          className="inline-block text-[#E04B77] font-helvetica-neue"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {ans.text}
                        </Link>
                      ) : (
                        <span className='font-helvetica-neue' key={index}>{ans.text}</span>
                      )
                    )}
                  </p>
                </div>
              </div>
              {que.img && (
                <div className="hidden sm:flex items-center justify-center me-8">
                  <Image src={que.img} alt="baron money low" width={251} height={251} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
