import React, { useEffect, useState } from "react";
import navcon from "../../../constants/navbar";
import "./navbar.css";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { RiMenuLine, RiMenuUnfoldFill } from "react-icons/ri";

const navbar = () => {
  const [menu, setMenu] = useState(0);

  useEffect(() => {
    document.title = "CSI - Kancheepuram Chapter";
  });
  return (
    <motion.div className="w-full flex justify-between items-center">
      <a href="/" className="flex">
        <img
          src={`/images/logo.png`}
          className="p-10 w-[40%] rounded-full"
        ></img>

        <div className="  py-20  font-poppins font-extrabold text-white">
          <h1 className="text-2xl"> COMPUTER SOCEITY OF INDIA </h1>
          <h1 className="text-xl">
            {" "}
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Kancheepuram Chapter").start();
              }}
            />
          </h1>
        </div>
      </a>

      <ul className="list-none flex justify-end items-center rounded-lg ml-28">
        {navcon.items.map((item, key) => (
          <li
            className=" opacity-0 text-[20px] mr-10 text-sky-200 font-bold font-poppins animatee"
            key={key}
          >
            <a href={`/${item}`}> {item}</a>
          </li>
        ))}
      </ul>

      <div className="flex justify-end items-center mr-20">
        {menu ? (
          <RiMenuUnfoldFill
            size={40}
            className="cursor-pointer text-sky-200"
            onClick={() => setMenu((i) => !i)}
          />
        ) : (
          <RiMenuLine
            size={40}
            className="cursor-pointer text-sky-200"
            onClick={() => setMenu((i) => !i)}
          />
        )}

        <div
          className={`${
            menu ? "flex" : "hidden"
          }  absolute bg-slate-600 mt-[13%] rounded-xl bg-slate`}
        >
          <ul className="list-none flex flex-col m-5">
            {navcon.items2.map((item, key) => (
              <li key={key} className="my-1">
                <a
                  href={`/${item}`}
                  className="text-sky-200 font-bold font-poppins text-[20px] "
                >
                  {item}
                </a>{" "}
              </li>
            ))}{" "}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default navbar;
                          