import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../../constants";
import content from "./content";
import Typewriter from "typewriter-effect";

const main = () => {
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
        <p className=" font-extralight font-poppins text-slate-300 py-10">
          {`${content.welcome}`}
        </p>
      </div>
    </motion.div>
  );
};

export default main;
