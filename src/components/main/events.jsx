import React from "react";
import { motion } from "framer-motion";
import { SlCalender } from "react-icons/sl";

const events = () => {
  return (
    <motion.div className="">
      <div
        className={`relative scroll-lock text-white p-5 font-poppins font-light rounded-2xl  `}
      >
        {/* <div className="absolute inset-0 bg-gray-900 bg-opacity-70 "></div> */}
        <div className=" relative snap-start ">
          <div className="flex py-3">
            <div>
              <SlCalender size={20} />{" "}
            </div>
            <div className="ml-2 font-extralight">8 March 2022</div>
          </div>
          <a href="" className="cursor-pointer text-blue-400 underline">
            {" "}
            CIRCULAR: Call for Nominations for CSI Kancheepuram Chapter Best
            Service Awards
          </a>
          <ul className="py-4 font-sans font-light text-blue-200 italic">
            <li>
              {" "}
              <a href=""> 1. Active Participation Award – SBC </a>
            </li>
            <li>
              {" "}
              <a href=""> 2. Active Participation Award – Student </a>{" "}
            </li>
            <li>
              <a href="">3. Best Supporting College Award - Institution </a>{" "}
            </li>
            <li>
              <a href="">4. Innovative Project Award - Students </a>
            </li>
            <li>
              <a href="">5. Significant Contribution Award - Faculty </a>{" "}
            </li>
            <li>
              <a href="">6. Young IT Expert Award – Industry Person</a>{" "}
            </li>
            <li>
              <a href="">7. Young Researcher Award - Faculty </a>
            </li>
            <li>
              <a href="">8. Women Leadership Award - Faculty </a>
            </li>
          </ul>
          Last date to apply : 17/03/2022
        </div>
        <div className="snap-start border-dashed border-2 mt-3 mb-3"> </div>
        <div>
          <div className="flex py-3 ">
            <div>
              <SlCalender size={20} />{" "}
            </div>
            <div className="ml-2 font-extralight">6 october 2022</div>
          </div>
          <a href="" className="cursor-pointer text-blue-400 underline">
            Call for Nominations of Chapter Elections 2021-22/23
          </a>
        </div>
        <div className="snap-start border-dashed border-2 mt-3 mb-3"> </div>
        <div>
          <div className="flex py-3 ">
            <div>
              <SlCalender size={20} />{" "}
            </div>
            <div className="ml-2 font-extralight">June 2020</div>
          </div>
          <a href="" className="cursor-pointer text-blue-400 underline">
            CSI Newsletter Jan-June 2020
          </a>
        </div>
        <div className="snap-start border-dashed border-2 mt-3 mb-3"> </div>
        <div>
          <div className="flex py-3 ">
            <div>
              <SlCalender size={20} />{" "}
            </div>
            <div className="ml-2 font-extralight">Dec 2019</div>
          </div>
          <a href="" className="cursor-pointer text-blue-400 underline">
            CSI Newsletter July-Dec 2019
          </a>
        </div>
        <div className="snap-start border-dashed border-1 mt-3 mb-3"> </div>

        <div>
          <div className="flex py-3 ">
            <div>
              <SlCalender size={20} />{" "}
            </div>
            <div className="ml-2 font-extralight">6 July 2020</div>
          </div>
          <a href="" className="cursor-pointer text-blue-400 underline">
            STTP on "Cyber Security – Threats and Vulnerabilities in Real Time
            Applications" <br /> @ St. Joseph's College of Engineering, Chennai
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default events;
