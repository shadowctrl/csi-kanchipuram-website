import React, { useState } from "react";
import { styles, images } from "../../../constants";
import { motion } from "framer-motion";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import "./imageslide.css";

const imageslide = () => {
  const [CurrentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    if (CurrentIndex > 0) {
      const newIndex = CurrentIndex - 1;
      setCurrentIndex(newIndex);
    } else setCurrentIndex(images.length - 1);
  };

  const nextSlide = () => {
    if (CurrentIndex < images.length - 1) {
      const newIndex = CurrentIndex + 1;
      setCurrentIndex(newIndex);
    } else setCurrentIndex(0);
  };

  setInterval(() => {
    if (CurrentIndex > 0) {
      const newIndex = CurrentIndex - 1;
      setCurrentIndex(newIndex);
    } else setCurrentIndex(images.length - 1);
  }, 5000);

  return (
    <div className="group flex justify-center items-center py-6 ">
      <div className="snap-start">
        <img
          className={` rounded-2xl w-[1060px] max-h-[100vh] imagefade`}
          src={images[CurrentIndex].url}
        />
        sniffing-passive-and-active session-hijacking wifi email-spoofing
        dos-ddos malware-creation windows-authentication-bypass
        password-cracking
      </div>

      <div className=" absolute top-[82%]  translate-x-60 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
        <BsChevronCompactLeft size={30} onClick={prevSlide} />
      </div>

      <div className="absolute top-[82%] -translate-x-60 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight size={30} onClick={nextSlide} />
      </div>
    </div>
  );
};

export default imageslide;
