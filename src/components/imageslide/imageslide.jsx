import React, { useState } from "react";
import { styles, images } from "../../../constants";
import { motion } from "framer-motion";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const imageslide = () => {
  const [CurrentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = CurrentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : CurrentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="group flex justify-center items-center py-6 ">
      <div className="snap-start">
        <img
          className={` rounded-2xl w-[1060px] max-h-[100vh]`}
          src={images[CurrentIndex].url}
        />
      </div>

      <div className="hidden group-hover:block absolute top-[82%]  translate-x-60 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
        <BsChevronCompactLeft size={30} onClick={prevSlide} />
      </div>

      <div className=" hidden group-hover:block absolute top-[82%] -translate-x-60 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight size={30} />
      </div>
    </div>
  );
};

export default imageslide;
