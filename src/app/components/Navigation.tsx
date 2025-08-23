"use client";
import React, { useState } from "react";
import { items } from "@/app/data/navigation.json";
import ResumeButton from "./buttons/ResumeButton";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navItems = items.map((item: { id: number; name: string }) => {
    return (
      <li
        className="capitalize text-[#304254] hover:text-[#181816] font-bold transition-colors duration-300"
        key={item.id}
      >
        <a href="#">{item.name}</a>
      </li>
    );
  });

  const menuLine = [
    { transform: "rotate-45 translate-y-1.5", opacity: "opacity-100" },
    { transform: "", opacity: "opacity-0" },
    { transform: "-rotate-45 -translate-y-1.5", opacity: "opacity-100" },
  ];

  return (
    <nav className="flex items-center justify-end w-full h-15 lg:px-10 py-3 bg-[#f9f9ea] border-[1px] border-b-[#aeaeae] fixed top-0 left-0 z-50">
      {/* Mobile menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 flex md:hidden flex-col justify-center items-center space-y-1 rounded-lg transition-shadow duration-200 cursor-pointer z-51"
        aria-label="Toggle menu"
      >
        {menuLine.map((line, index) => (
          <div
            key={index}
            className={`w-6 h-0.5 bg-[#112240] transition-all duration-300 ${
              isOpen ? `${line.transform} ${line.opacity} ` : "opacity-100"
            }`}
          />
        ))}
      </button>

      {/* Backdrop - Fixed position covering entire viewport */}
      {isOpen && (
        <div
          className="fixed min-h-svh min-w-svw inset-0 z-40 bg-black/80"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <aside
        aria-hidden={!isOpen}
        tabIndex={isOpen ? 0 : -1}
        className={`md:hidden fixed min-h-svh inset-y-0 right-0 z-50 w-80 bg-[#f9f9ea] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Menu"
      >
        <ul className="flex flex-col items-center justify-center w-full h-full gap-8">
          {navItems}
          <ResumeButton />
        </ul>
      </aside>

      {/* Desktop view */}
      <ul className="hidden md:flex flex-row items-center gap-8">
        {navItems} <ResumeButton />
      </ul>
    </nav>
  );
};

export default Navigation;
