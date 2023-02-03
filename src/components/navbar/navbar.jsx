import React, { useEffect } from "react";
import { logo } from "../../../constants";
import styles from "../../../constants/styles";
import { navcon } from "../../../constants/navbar";
import "./navbar.css";

const navbar = () => {
  useEffect(() => {
    document.title = "CSI - Kancheepuram Chapter";
  });
  return (
    <navbar className="w-full flex justify-between items-center">
      <a href="/" className="p-6">
        <img src={`/images/logo.png`}></img>
      </a>

      <ul className="list-none flex justify-end items-center">
        {navcon.map((item, key) => (
          <li
            className=" opacity-0 mr-12 text-[22px] text-sky-200 font-bold font-poppins animatee"
            key={key}
          >
            <a href={`/${item}`}> {item}</a>
          </li>
        ))}
      </ul>
    </navbar>
  );
};

export default navbar;
