import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import "./imageslide.css";

const images = [
  {
    url: "/home-images/img1.jpg",
  },
  {
    url: "/home-images/img2.jpg",
  },
  {
    url: "/home-images/img3.jpg",
  },
];

const imageslide = () => {
  const [CurrentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    if (CurrentIndex > 0) {
      const newIndex = CurrentIndex - 1;
      setCurrentIndex(newIndex);
    } else {
      setCurrentIndex((c) => (c = images.length - 1));
    }
  };

  const nextSlide = () => {
    if (CurrentIndex < images.length - 1) {
      const newIndex = CurrentIndex + 1;
      setCurrentIndex(newIndex);
    } else {
      setCurrentIndex((c) => (c = 0));
    }
  };
  /*{setInterval(() => {
    if (CurrentIndex < images.length - 1) {
      const newIndex = CurrentIndex + 1;
      setCurrentIndex(newIndex);
    } else {
      setCurrentIndex((c) => (c = 0));
    }
  }, 10000);}
*/
  return (
    <motion.div className="group flex justify-center items-center py-6  ">
      <div className="snap-start">
        <img
          className={` rounded max-h-[600px] imagefade `}
          src={images[CurrentIndex].url}
        />
      </div>

      <div className=" hidden group-hover:block absolute top-[73%] translate-x-[350px] translate-y-[-50%] left-5 text-2xl rounded-full bg-black/60 text-white cursor-pointer ">
        <IoIosArrowDropleftCircle size={30} onClick={prevSlide} />
      </div>

      <div className="hidden group-hover:block absolute top-[73%] -translate-x-[350px] translate-y-[-50%] right-5 text-2xl rounded-full bg-black/60 text-white cursor-pointer">
        <IoIosArrowDroprightCircle size={30} onClick={nextSlide} />
      </div>
    </motion.div>
  );
};

export default imageslide;
