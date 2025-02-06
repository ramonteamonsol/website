"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import Image from "next/image";

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

export default function SwiperSlider({ data }) {
  const rows = chunkArray(data, 10);

  const handleDownload = (url, filename) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 py-6 md:py-8 lg:py-10 xl:py-14 2xl:py-20">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            direction: rowIndex % 2 === 0 ? "ltr" : "rtl", // Alternate row direction
          }}
        >
          <Swiper
            spaceBetween={12}
            slidesPerView="auto"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop={true}
            className="w-full"
          >
            {row.map((item, i) => (
              <SwiperSlide
                key={i}
                className="h-[165px] flex items-center justify-center"
                style={{ width: "auto" }}
              >
                <div
                  onClick={() => handleDownload(item.url, item.filename)}
                  className="cursor-pointer w-full h-full"
                >
                  <Image
                    src={item.url}
                    alt={`meme img ${i + 1}`}
                    width={400}
                    height={165}
                    className="h-[120px] sm:h-[165px] w-full"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
}
