import Image from 'next/image';

export default function LoadingScreen() {

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-[111] flex flex-col justify-center items-center h-screen w-screen bg-[#1B1B1B] p-4">
      {/* Animated Image */}
      <Image
        src="/assets/png/token2.png"
        alt="Loading animation"
        width={300}
        height={300}
        priority
        className="animate-pulse"
        aria-hidden="true"
      />

      {/* Loading Text Placeholder */}
      <p className="mt-5 w-full max-w-[400px] py-4 px-6 text-3xl text-center text-[#B4FFA3] bg-black rounded-full typing-animation">

      </p>
    </div>
  );
}
