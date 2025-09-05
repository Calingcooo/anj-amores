import React from "react";

const About = () => {
  return (
    <section className="flex flex-col justify-between lg:justify-around bg-[#AEAEAE] w-full gap-10 lg:h-svh py-10 lg:py-0 px-6 md:px-20 lg:px-40">
      <div className="flex items-center justify-center">
        <h1 className="uppercase underline underline-offset-8 italic">why me?</h1>
      </div>

      <div className="flex items-center justify-center">
        <h2 className="text-2xl text-center lg:text-7xl font-black uppercase text-[#5c5c5c] drop-shadow-lg tracking-widest">
          I&apos;m very qualified to help.
        </h2>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center items-center md:justify-start">
        <p className="font-poppins text-md text-justify md:text-2xl">
          A freelance virtual assistant who is proficient in handling
          administrative projects, including but not limited to: document
          creation, data entry, and social media management. Can work one-on-one
          with small businesses to provide flexible and affordable
          administrative support.
        </p>
      </div>
    </section>
  );
};

export default About;
