import React from "react";
import { useState } from "react";
import { close, logo, menu } from "../../assets";
import { navLinks } from "../../constants";
import { motion } from "framer-motion";
const navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.nav
      className="w-full flex py-6 justify-between items-center navbar"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <a href="/" className="sm:flex hidden ml-7 ">
        <img
          src="https://cdn.discordapp.com/attachments/1007304593924964392/1053693323568758854/Logo.png"
          alt="WhiteHatians"
          className="w-[100px] cursor-pointer"
        />
      </a>

      <a href="/" className="sm:hidden">
        <img
          src="https://cdn.discordapp.com/attachments/1007304593924964392/1053693323568758854/Logo.png"
          alt="WhiteHatians"
          className="w-[60px] cursor-pointer"
        />
      </a>

      <ul className="list-none md:flex hidden justify-end items-center flex-1 bg-black-gradient p-2 absolute right-10 rounded-full">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins text-white text-xl ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }
          }`}
          >
            <a href={`/${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-10"
                }
          }`}
              >
                <a href={`/${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default navbar;
