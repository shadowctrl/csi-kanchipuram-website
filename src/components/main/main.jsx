import { React, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import content from "./content";
import Typewriter from "typewriter-effect";
import { observe } from "react-intersection-observer";

const main = () => {
  const ref = useRef(null);

  const [isIntersecting, SetIsIntersecting] = useState(false);
  const callBackFunction = (entries) => {
    const entry = entries[0];
    SetIsIntersecting(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callBackFunction);
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  });
  return (
    <motion.div className={`py-28 px-24`}>
      <div>
        <h1 className={` text-slate-300 font-poppins font-extrabold text-2xl`}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Welcome To CSI - Kancheepuram Chapter")
                .start();
            }}
          />
        </h1>
        <p
          ref={ref}
          className=" font-extralight font-poppins text-slate-300 py-10"
        >
          {`${content.welcome}`}
        </p>
      </div>
    </motion.div>
  );
};

export default main;
