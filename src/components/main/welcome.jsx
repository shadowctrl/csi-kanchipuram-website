import React from "react";
import Typewriter from "typewriter-effect";
import content from "./content";
import { Markup } from "interweave";
const welcome = () => {
  return (
    <div>
      <h1 className={` text-slate-300 font-poppins font-extrabold text-2xl `}>
        {/* {isIntersecting ? <Tw /> : ""} */}
        Welcome to CSI - Kancheepuram Chapter
        {/* <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString("Welcome To CSI - Kancheepuram Chapter");
          typewriter.start();
        }}
      /> */}
      </h1>
      <p className=" font-sans text-slate-300 py-10">
        <Markup content={content.welcome} />
      </p>
    </div>
  );
};

export default welcome;
