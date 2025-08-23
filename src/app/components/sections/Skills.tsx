import React from "react";
import { services, expertise } from "@/app/data/services.json";

const Skills = () => {
  const mappedItems = (items: Array<{ id: number; name: string }>) => {
    const mappedArray = items.map((item: { id: number; name: string }) => {
      return (
        <li
          className="text-[#aaa] text-lg sm:text-xl md:text-2xl"
          key={item.id}
        >
          {item.name}
        </li>
      );
    });

    return mappedArray;
  };

  return (
    <section className="flex flex-col md:flex-row lg:items-center justify-between lg:justify-around bg-[#f9f9ea] w-full h-full gap-10 lg:h-svh py-10 lg:py-0 px-6 md:px-20 lg:px-40">
      <div className="flex justify-center items-center lg:w-[30%]">
        <h1 className="text-2xl text-center lg:text-7xl font-black uppercase text-[#5c5c5c] drop-shadow-lg tracking-widest">
          what can i do for you?
        </h1>
      </div>

      {/* Line - hidden on mobile */}
      <div className="hidden md:block w-[2px] h-full lg:h-[80%] bg-[#5c5c5c]" />

      <div className="flex flex-col justify-evenly lg:w-[30%] gap-8 border-l-2 md:border-l-0 h-full border-[#5c5c5c] pl-8 md:pl-0 lg:py-20">
        {/* Services */}
        <div className="w-full">
          <h1 className="text-2xl lg:text-4xl font-bold uppercase text-[#5c5c5c] drop-shadow-lg tracking-wide">
            services
          </h1>
          <ul className="mt-2 lg:mt-5">{mappedItems(services)}</ul>
        </div>

        {/* Expertise */}
        <div>
          <h1 className="text-2xl lg:text-4xl font-bold uppercase text-[#5c5c5c] drop-shadow-lg tracking-wide">
            expertise
          </h1>
          <ul className="mt-2 lg:mt-5">{mappedItems(expertise)}</ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
