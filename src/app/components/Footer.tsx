import React from "react";
import HeroImage from "../../../public/assets/hero.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  const contacts = [
    {
      id: 1,
      title: "phone",
      text: "( 123 ) 456 789 0",
    },
    {
      id: 2,
      title: "email",
      text: "message.me@email.com",
    },
    {
      id: 3,
      title: "socials",
      text: [
        {
          id: "facebook",
          name: "facebook",
          icon: <FaFacebook />,
        },
        {
          id: "instagram",
          name: "instagram",
          icon: <FaInstagram />,
        },
        {
          id: "twitter",
          name: "twitter",
          icon: <FaTwitter />,
        },
      ],
    },
  ];
  return (
    <footer className="flex flex-col md:flex-row items-center justify-center bg-[#f9f9ea] w-full gap-10 lg:h-svh py-10 px-6 md:px-20 lg:px-40">
      {/* IMAGE */}
      <div className="flex justify-center items-center w-full lg:w-1/2">
        <div
          className="overflow-hidden w-[min(80svw,20rem)] h-[min(80svw,20rem)] md:w-[min(40svw,28rem)] md:h-[min(40svw,28rem)]"
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
      </div>

      <div className="flex justify-center items-center w-full lg:w-1/2">
        <div className="flex flex-col items-center justify-center gap-8 w-full">
          <h1 className="text-2xl text-center lg:text-7xl font-black uppercase text-[#5c5c5c] drop-shadow-lg tracking-widest">
            lets work together!
          </h1>
          <h2 className="text-[#aaa] text-center text-lg sm:text-xl md:text-2xl uppercase">
            contact me and let&apos;s schedule a chat.
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="flex flex-col items-center gap-2"
              >
                <h1 className="uppercase font-semibold text-[#5c5c5c]">
                  {contact.title}
                </h1>

                {/* Check if it's socials */}
                {Array.isArray(contact.text) ? (
                  <div className="flex flex-row gap-4 text-xl text-[#5c5c5c]">
                    {contact.text.map((social) => (
                      <a
                        key={social.id}
                        href="#"
                        aria-label={social.name}
                        className="hover:text-[#181816] transition-colors"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                ) : (
                  <span className="text-[#5c5c5c]">{contact.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
