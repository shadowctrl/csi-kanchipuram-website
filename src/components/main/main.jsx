import { React, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Welcome, Vision, Mission, Events } from "./index";
import "./main.css";

const main = () => {
  const welcome = useRef(null);
  const vision = useRef(null);
  const mission = useRef(null);

  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.7,
      rootMargin: "0px",
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("fadeLR");
        if (!entry.isIntersecting) {
          entry.target.classList.remove("fadeLR");
          // entry.target.classList.add("fadeRL");
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);

    const divs = document.querySelectorAll(
      "div.welcome, div.vision, div.mission"
    );

    divs.forEach((div) => {
      observer.observe(div);
    });
  });

  return (
    <motion.div>
      <div className={`py-16 px-24 mr-[150px] ml-[120px] `}>
        <div className={`welcome opacity-0`}>
          <Welcome />
        </div>
        <div className={`vision opacity-0`}>
          <Vision />
        </div>
        <div className={`mission opacity-0`}>
          <Mission />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="ml-[200px]">
          <Events />
        </div>
      </div>
    </motion.div>
  );
};

export default main;
