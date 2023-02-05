import React, { useState } from "react";
import { styles, images } from "../../../constants";
import { motion } from "framer-motion";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const imageslide = () => {
  const [CurrentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <div className="">
        <img className={` rounded-3xl  `} src={images[CurrentIndex].url} />
      </div>

      <div className="absolute">
        <BsChevronCompactLeft size={30} />
      </div>
      <div className="absolute">
        <BsChevronCompactRight size={30} />
      </div>
    </div>
  );
};

export default imageslide;
