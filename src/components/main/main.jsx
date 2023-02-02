import React from "react";
import styles from "../../style.js";
import { discount, robot } from "../../assets/index.js";
import { motion } from "framer-motion";
const main = () => {
  return (
    <motion.section
      id="main"
      className={`${styles.paddingY} flex flex-col md:flex-row `}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col px-6 xl:px-0 sm:px-16 `}
      >
        <div className="flex-row justify-between items-center w-full">
          <h1 className="text-white sm:text-[90px] text-[52px] font-poppins font-semibold sm:leading-[90px] leading-[75px]">
            Explore The <br className="sm:block hidden" />
            <span className="text-gradient">CyberWorld</span>
          </h1>
        </div>
        <p className={`${styles.paragraph} mt-3`}>
          Connect and engage with like-minded individuals
          <br className="sm:block md:hidden hidden" /> around the world. Let's
          connect the gap between <br className="sm:block md:hidden hidden" />
          Cyber Security practioners and curious beginers.
        </p>
      </div>

      <div className="justify-end flex items-end">
        <img
          src={robot}
          className="w-[75%] mt-10 sm:w-[50%] sm:mt-10 md:w-[100%] md:mt-0"
        ></img>
      </div>
    </motion.section>
  );
};

export default main;
