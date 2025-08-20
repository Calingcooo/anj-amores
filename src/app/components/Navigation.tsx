import React from "react";

const Navigation = () => {
  const navItems = [
    {
      id: 1,
      name: "home",
    },
    {
      id: 2,
      name: "about me",
    },
    {
      id: 3,
      name: "services",
    },
    {
      id: 4,
      name: "testimonials",
    },
    {
      id: 5,
      name: "contact",
    },
  ];

  return (
    <nav className="flex items-center justify-end w-full h-15 px-10 py-3 bg-[#f9f9ea] border-[1px] border-b-[#aeaeae] fixed top-0 left-0 z-50">
      <ul className="hidden md:flex flex-row gap-8">
        {navItems.map((item) => (
          <li className="capitalize text-[#304254] hover:text-[#181816] font-bold transition-colors duration-300" key={item.id}>
            <a href="#">{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
