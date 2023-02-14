import React from "react";
import content from "./content";
import { Markup } from "interweave";

const vision = () => {
  return (
    <div>
      <h1 className={` text-slate-300 font-poppins font-extrabold text-2xl `}>
        Vision
      </h1>
      <p className=" font-sans text-slate-300 py-10">
        <Markup content={content.vision} />
      </p>
    </div>
  );
};

export default vision;
