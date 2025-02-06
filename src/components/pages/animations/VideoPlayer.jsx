import React, { useState, useRef } from 'react';
import { VideoPlayIcon } from '@/components/helper/Icon';

function VideoPlayer({ videoSrc }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePause = () => {
    if (videoRef.current) {
      setIsPlaying(false);
    }
  };

  const handleOverlayClick = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <div data-aos="fade-left" className="relative w-full 2xl:max-w-[700px] h-[350px] sm:h-[440px] md:h-[550px] lg:h-[600px] 2xl:h-[700px] bg-white [filter:drop-shadow(0px_0px_80px_#fff)] rounded-3xl lg:rounded-[45px] xl:rounded-[69px] overflow-hidden border-[#E04B77] border-2 md:border-4">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        controls
        playsInline
        controlsList="nodownload noremoteplayback" // Prevent download and remote playback
        disablePictureInPicture
        onPlay={() => setIsPlaying(true)} // Sync state when video plays
        onPause={handlePause}
        src={videoSrc}
      />
      {!isPlaying && (
        <div
          className="flex justify-center items-center absolute top-0 left-0 w-full h-full bg-black/20 cursor-pointer"
          onClick={handleOverlayClick} // Handles both play and pause logic
        >
          <span className="max-w-8 sm:max-w-10 md:max-w-14 lg:max-w-20 xl:max-w-24 2xl:max-w-[132px]">
            <VideoPlayIcon />
          </span>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
