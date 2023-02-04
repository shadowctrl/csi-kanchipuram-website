import { useState } from "react";
import reactLogo from "./assets/react.svg";
//import "./App.css";
import { Navbar, Main, Imageslide } from "./components";
import { styles } from "../constants/";
import { motion } from "framer-motion";
import styled from "styled-components";

function App() {
  return (
    <motion.div
      className="w-full overflow-hidden"
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className={`${styles.paddingX} bg-slate-700 overflow-hidden `}>
        <div className="">
          <div className="w-full">
            <Navbar />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className={`w-full`}>
            <Imageslide />
          </div>
        </div>
        <div className={`w-full ${styles.flexCenter}`}>
          <Main />
        </div>
      </div>
    </motion.div>
  );
}

export default App;
