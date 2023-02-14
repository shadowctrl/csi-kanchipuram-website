import { React, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Welcome, Vision, Mission } from "./index";
import "./main.css";

const main = () => {
  const myref = useRef(null);
  const myref2 = useRef(null);
  const myref3 = useRef(null);

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isIntersecting2, setIsIntersecting2] = useState(false);
  const [isIntersecting3, setIsIntersecting3] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      const [entry] = entries;
      setIsIntersecting((e) => (e = e = entry.isIntersecting));

      return isIntersecting;
    });

    if (myref.current) observer.observe(myref.current);
  });

  return (
    <motion.div className={`py-16 px-24 mr-[150px] ml-[120px]`}>
      <div ref={myref} className={`${isIntersecting ? "welcome" : ""}`}>
        <Welcome />
      </div>
      <div className={`${isIntersecting ? "welcome" : ""}`}>
        <Vision />
      </div>
      <div>
        <Mission />
      </div>
    </motion.div>
  );
};

export default main;
