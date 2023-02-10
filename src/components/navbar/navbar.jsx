import React, { useEffect } from "react";
import navcon from "../../../constants/navbar";
import "./navbar.css";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const navbar = () => {
  useEffect(() => {
    document.title = "CSI - Kancheepuram Chapter";
  });
  return (
    <motion.div className="w-full  justify-between items-center">
      <a href="/" className="flex">
        <img
          src={`/images/logo.png`}
          className="p-10 w-[15%] rounded-full"
        ></img>

        <h1 className="py-20 text-2xl font-poppins font-extrabold text-white">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(`COMPUTER SOCEITY OF INDIA`);
              typewriter.start();
            }}
          />
        </h1>
      </a>

      <ul className="list-none flex justify-end items-center rounded-2xl">
        {navcon.items.map((item, key) => (
          <li
            className=" opacity-0 mr-12 text-[22px] text-sky-200 font-bold font-poppins animatee"
            key={key}
          >
            <a href={`/${item}`}> {item}</a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default navbar;
