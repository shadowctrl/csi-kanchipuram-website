import React from "react";
import { styles } from "../../../constants";

const imageslide = () => {
  return (
    <div className={`py-16`}>
      <div className={`${styles.flexCenter}`}>
        <img
          src="/home-images/img1.jpg"
          className="rounded-xl w-[75%] h-[75%] "
        />
      </div>
    </div>
  );
};

export default imageslide;
