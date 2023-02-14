import React from "react";
import content from "./content";
import { Markup } from "interweave";

const mission = () => {
  return (
    <div>
      <h1 className={` text-slate-300 font-poppins font-extrabold text-2xl `}>
        Mission
      </h1>
      <p className=" font-sans text-slate-300 py-10">
        <Markup content={content.mission} />
      </p>
    </div>
  );
};

export default mission;
