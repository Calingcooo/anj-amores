import React from "react";
import Image from "next/image";
import HeroImage from "../../../../public/assets/hero.png";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center bg-[#f9f9ea] w-full min-h-screen px-6 md:px-20 lg:px-40 gap-10 md:gap-20">
      {/* TEXT */}
      <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left md:w-1/2">
        <h1 className="text-[#888] text-3xl sm:text-4xl md:text-6xl font-bold uppercase leading-tight">
          i'm angelica amores, at your service!
        </h1>
        <h2 className="text-[#aaa] text-lg sm:text-xl md:text-2xl capitalize mt-4">
          i can be your virtual assistant
        </h2>

        <button className="mt-6 px-6 py-2 text-[#888] border-2 border-[#aaa] uppercase rounded-lg hover:bg-[#aaa] hover:text-white transition">
          email me
        </button>
      </div>

      {/* IMAGE */}
      <div
        className="overflow-hidden w-[min(80vw,20rem)] h-[min(80vw,20rem)] md:w-[min(40vw,28rem)] md:h-[min(40vw,28rem)]"
        style={{
          clipPath:
            "polygon(100% 17%, 100% 55%, 59% 100%, 0 100%, 0 39%, 37% 0, 73% 0)",
        }}
      >
        <Image
          src={HeroImage}
          alt="My Image"
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
