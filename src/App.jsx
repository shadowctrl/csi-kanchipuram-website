import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Navbar, Main } from "./components";
import { styles } from "../constants/";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      className="bg-primary w-full overflow-hidden"
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div></div>
    </motion.div>
  );
}

export default App;
