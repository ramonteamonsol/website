"use client";
import { FaqData } from '@/components/helper/Helper';
import { RightArrowIcon } from '@/components/helper/Icon';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleQuestion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-[#1B1B1B] min-h-screen">
      <div className='pt-14 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 2xl:pt-[134px]'>
        <h2 className="text-white uppercase text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center !leading-[163%] mb-4 sm:mb-6 md:mb-8 lg:mb-12 xl:mb-16">FAQ</h2>
      </div>
      <div className="max-w-[1728px] mx-auto me-0 pb-8 sm:pb-14 md:pb-24 lg:pb-32 xl:pb-40 2xl:pb-52">
        <div className="space-y-5 lg:space-y-7 2xl:space-y-9 select-none pl-5 sm:pl-7 md:pl-10 lg:pl-14 xl:pl-20 2xl:pl-28 overflow-hidden">
          {FaqData.map((faq, i) => (
            <div
              key={i}
              data-aos="fade-left"
              data-aos-delay={`${i * 250}`}

              className="border-2 xl:border-4 border-white !border-e-0 rounded-s-3xl lg:rounded-s-[45px] xl:rounded-s-[69px] px-5 md:px-7 lg:px-10 xl:px-14 py-2 xl:py-0"
            >
              <div
                onClick={() => toggleQuestion(i)}
                className="flex items-center gap-4 lg:gap-6 xl:gap-9 cursor-pointer"
              >
                <span
                  className={`${activeIndex === i ? 'rotate-90' : ''
                    } w-full max-w-4 sm:max-w-5 md:max-w-6 lg:max-w-8 xl:max-w-10 2xl:max-w-[50px] transition-transform duration-300 ease-in-out`}
                >
                  <RightArrowIcon />
                </span>
                <h3 className="uppercase text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px] !leading-[145%]">
                  {faq.question.map((q, index) => (
                    <span
                      key={index}
                      className={q.highlight ? 'text-[#E04B77]' : ''}
                    >
                      {q.text}
                    </span>
                  ))}
                </h3>
              </div>
              <p
                className={`${activeIndex === i ? 'block' : 'hidden'
                  } font-semibold sm:font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl !leading-[129%] text-white font-helvetica-neue pb-1 md:pb-2 xl:pb-6 max-w-[1359px]`}
              >
                {faq.answer.map((ans, index) =>
                  ans.href ? (
                    <Link
                      key={index}
                      href={ans.href}
                      className={`inline-block text-[#E04B77] font-helvetica-neue`}
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
          ))}
        </div>
      </div>
    </div>
  );
}
