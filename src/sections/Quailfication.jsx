import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOnlinePrediction } from "react-icons/md";
import pfp from "../img/pfp.jpg";
import { PiHandWavingBold } from "react-icons/pi";
import { FaFigma } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Quailfication = () => {
  return (
    <section className="mt-12 font-sans">
      <div className="flex justify-between  max-ml:flex-col-reverse max-ml:gap-9 text-gray-500 ">
        <div className="flex flex-col justify-center ">
          <div className="">
            <h1 className="max-ml:flex-col  dark:text-white text-black flex font-bold text-5xl pb-4">
              Hi!{" "}
              <span className=" ml-4">
                <PiHandWavingBold className="" />
              </span>
            </h1>
          </div>
          <div className="w-4/5 mt-2 pb-4 dark:text-white text-gray-500 text-base max-ml:w-auto">
            I'm a junior front-end developer specializing in React.js with one
            year of hands-on experience in web development. I focus on building
            dynamic and engaging digital experiences that are both user-friendly
            and responsive. Even though I've been developing for a relatively
            short time, I approach every project with the same enthusiasm and
            passion as if it were my first.
          </div>
          <div className="flex mt-4 pb-4 dark:text-white">
            <span className="flex mr-1 justify-center items-center ">
              <FaLocationDot className="text-xl" />
            </span>
            Islamabad, Pakistan
          </div>
          <div className="flex mt-4 pb-4 dark:text-white">
            <span className="flex justify-center items-center mr-1">
              <MdOnlinePrediction className="text-2xl" />
            </span>
            Available for new projects
          </div>
          <div className="mt-4 pb-4 flex gap-5 text-3xl cursor-pointer   ">
            <a href="" target="_blank">
              <FaSquareUpwork className="hover:text-black dark:text-gray-300 dark:hover:text-white" />
            </a>
            <a href="" target="_blank">
              <FaLinkedin className="hover:text-black dark:text-gray-300 dark:hover:text-white" />
            </a>
            <a href="https://www.figma.com/login" target="_blank">
              <FaFigma className="hover:text-black dark:text-gray-300 dark:hover:text-white" />
            </a>
          </div>
        </div>
        <div className="  text-center justify-center flex items-center">
          <img
            className="max-ml:max-w-[75%] max-ml:max-h-[75%] border-8 border-gray dark:border-gray-300 "
            src={pfp}
            alt="pfp"
          />
        </div>
      </div>
    </section>
  );
};

export default Quailfication;
