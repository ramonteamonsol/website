"use client"

import Image from "next/image"
import { useState } from "react"
export default function Roadmap() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [popupImage, setPopupImage] = useState("/assets/png/phase1.png")

  const handleButtonClick = (imageSrc) => {
    setPopupImage(imageSrc)
    setIsPopupOpen(true)
  }

  // const images = [
  //   pop: "/assets/png/phaseopen1.png"
  //   pop: "/assets/png/phaseopen2.png" 
  //   pop: "/assets/png/phaseopen3.png"
  //   pop: "/assets/png/phaseopen4.png"
  // ]
  const images = [
    { src: "/assets/png/phase1.png", position: "left-[4%] md:left-[2%] top-[55%] md:top-[50%]", pop: "/assets/png/phaseopen1.png" },
    { src: "/assets/png/phase2.png", position: "left-[25%] top-[45%] md:top-[40%]", pop: "/assets/png/phaseopen2.png" },
    { src: "/assets/png/phase3.png", position: "left-[50%] top-[35%] md:top-[30%]", pop: "/assets/png/phaseopen3.png" },
    { src: "/assets/png/phase4.png", position: "left-[70%] top-[22%] md:top-[15%] ", pop: "/assets/png/phaseopen4.png" },
  ]

  return (
    <div className="bg-[#1B1B1B] h-screen overflow-y-auto flex justify-center items-center bg-[url('/assets/webp/wall.webp')] bg-no-repeat [background-size:200%_100%] sm:[background-size:150%_100%] md:[background-size:100%_100%]">
      <div className="max-w-[1728px] mx-auto w-full min-h-[500px] h-full max-h-[1000px] relative flex flex-col justify-center items-center px-4">
        <div className='pt-14 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 2xl:pt-32'>
          <h2 className="text-white uppercase text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center !leading-[163%] "> Ramon’s Map</h2>
        </div>
        <div className='bg-[url("/assets/png/home/pinboard2.png")] [background-size:100%_100%] bg-no-repeat bg-center relative w-full h-[350px] min-[425px]:h-[450px] sm:h-[500px] md:h-full max-w-[1000px]'>
          <div className="flex items-center justify-center h-full w-full">
            {images.map((image, index) => (
              <div key={index} className={`absolute ${image.position} w-[25%] lg:w-[50%] max-w-[300px] aspect-square`}>
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={`Phase ${index + 1}`}
                  fill
                  className="object-contain w-full h-full cursor-pointer transition-all duration-300 ease-in-out hover:drop-shadow-[0px_0px_8px_#B4FFA3] hover:border-4 hover:border-[#B4FFA3] hover:z-10"
                  onClick={() => handleButtonClick(image.pop)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Popup */}
        {isPopupOpen && (
          <div className="fixed inset-0 bg-black/15 backdrop-blur-[2px] flex justify-center items-center z-40 p-4">
            <div className="w-full h-full overflow-y-auto">
              <div className="relative w-full max-w-[1728px] mx-auto h-full min-h-[600px]">
                <Image src={popupImage || "/placeholder.svg"} alt="Popup Image" fill className="w-full max-w-[1000px] mx-auto h-full" />
                <button
                  onClick={() => setIsPopupOpen(false)}
                  className="absolute top-2 right-2 bg-white text-black text-xl lg:text-2xl 2xl:text-3xl rounded-full border-2 border-black w-8 lg:w-12 xl:w-16 2xl:w-20 h-8 lg:h-12 xl:h-16 2xl:h-20 flex items-center justify-center cursor-pointer"
                >
                  X
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
