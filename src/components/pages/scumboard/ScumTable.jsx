import Image from 'next/image'
import React from 'react'

export default function ScumTable({ ScumTableData }) {
  const formatNumber = (number) => {
    if (number >= 1e12) {
      return (number / 1e12).toFixed(1) + 't';
    } else if (number >= 1e9) {
      return (number / 1e9).toFixed(1) + 'b';
    } else if (number >= 1e6) {
      return (number / 1e6).toFixed(1) + 'm';
    } else if (number >= 1e3) {
      return (number / 1e3).toFixed(1) + 'k';
    } else {
      return number.toString();
    }
  }
  const calculatePercentage = (part, total) => {
    const percentage = (part / total) * 100;
    if (percentage % 1 === 0) {
      return percentage.toFixed(0);
    } else {
      return percentage.toFixed(1);
    }
  }
  // text-lg md:!text-xl lg:!text-2xl xl:!text-[28px] 2xl:!text-lg 2xl:!text-[32px]
  return (
    <div data-aos="fade-up" className='mt-6 xl:px-4 w-full overflow-x-auto'>
      <table className='w-full'>
        <thead className='border-b-2 xl:border-b-[3px] border-[#555555]'>
          <tr className='text-[#FFFFFF80] text-nowrap text-lg md:text-xl lg:text-2xl xl:text-[28px] 2xl:text-[32px]'>
            <th className='font-helvetica-neue text-start !leading-[162%] font-bold px-2'>Entity</th>
            <th className='font-helvetica-neue text-start !leading-[162%] font-bold px-2'>Scum Score</th>
            <th className='font-helvetica-neue text-start !leading-[162%] font-bold px-2'>24h Change</th>
            <th className='font-helvetica-neue text-start !leading-[162%] font-bold px-2'>Price Impact</th>
            <th className='font-helvetica-neue text-start !leading-[162%] font-bold px-2'>Volume</th>
            <th className='font-helvetica-neue text-start !leading-[162%] font-bold px-2'>Top FUDers</th>
            <th className='font-helvetica-neue text-start !leading-[162%] font-bold px-2'>Sentiment</th>
          </tr>
        </thead>
        <tbody>
          {ScumTableData.map((row, index) => (
            <tr key={index} className={index === ScumTableData.length - 1 ? "" : 'border-b-2 xl:border-b-[3px] border-[#555555]'}>
              <td>
                <div className="flex items-center gap-4 lg:gap-6 xl:gap-8 px-2 py-5">
                  <div className='rounded-full overflow-hidden bg-[#D9D9D9] max-w-10 md:max-w-12 lg:max-w-14 xl:max-w-16 2xl:max-w-[72px] max-h-10 md:max-h-12 lg:max-h-14 xl:max-h-16 2xl:h-[66px]'>
                    <Image src={row.image} alt="entity img" width={72} height={66} className='w-full h-full' />
                  </div>
                  <p className='text-[#FFFFFF] truncate w-28 sm:w-44 max-w-52 text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-[28px] 2xl:text-[32px] !leading-[162%] font-bold font-helvetica-neue'>{row.entity}</p>
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center text-center gap-4 lg:gap-6 xl:gap-8 px-2 py-5">
                  <p className='text-[#B4FFA3] truncate w-28 sm:w-44 max-w-52 text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-[28px] 2xl:text-[32px] !leading-[162%] font-bold font-helvetica-neue'>{calculatePercentage(row.scumScore, row.volume)}%</p>
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center text-center gap-4 lg:gap-6 xl:gap-8 px-2 py-5">
                  <p className='text-[#B4FFA3] truncate w-28 sm:w-44 max-w-52 text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-[28px] 2xl:text-[32px] !leading-[162%] font-bold font-helvetica-neue'>{calculatePercentage(row.change, row.volume)}%</p>
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center text-center gap-4 lg:gap-6 xl:gap-8 px-2 py-5">
                  <p className='text-[#B4FFA3] truncate w-28 sm:w-44 max-w-52 text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-[28px] 2xl:text-[32px] !leading-[162%] font-bold font-helvetica-neue'>{calculatePercentage(row.priceImpact, row.volume)}%</p>
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center text-center gap-4 lg:gap-6 xl:gap-8 px-2 py-5">
                  <p className='text-[#FFFFFF] truncate w-28 sm:w-44 max-w-52 text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-[28px] 2xl:text-[32px] !leading-[162%] font-bold font-helvetica-neue'>{formatNumber(row.volume)}</p>
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center px-2 py-5">
                  {row.fuders.map((img, index2) => (
                    <div
                      key={index2}
                      className={`rounded-full overflow-hidden bg-[#555555] max-w-10 md:max-w-12 lg:max-w-14 xl:max-w-16 2xl:max-w-[72px] max-h-10 md:max-h-12 lg:max-h-14 xl:max-h-16 2xl:h-[66px] border-2 lg:border-[3px] border-[#1B1B1B] ${index2 === 1 ? "-translate-x-1/2" : index2 === 2 ? "-translate-x-full" : ""
                        }`}
                    >
                      <Image
                        src={img.img}
                        alt={`Entity image ${index2 + 1}`}
                        width={72}
                        height={66}
                        className="w-full h-full"
                      />
                    </div>
                  ))}
                </div>


              </td>
              <td>
                <div className="w-40 flex items-center gap-4 lg:gap-6 xl:gap-8 px-2 py-5">
                  <div className='w-full bg-[#555555] rounded-full overflow-hidden h-3 md:h-4 lg:h-5 xl:h-6 2xl:h-7'>
                    <div style={{ width: `${calculatePercentage(row.sentiment, row.volume)}%` }} className="bg-[#B4FFA3] rounded-full overflow-hidden h-full"></div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  )
}
