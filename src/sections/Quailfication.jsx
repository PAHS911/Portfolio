import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOnlinePrediction } from "react-icons/md";
import pfp from "../img/pfp.jpg";
import { PiHandWavingBold } from "react-icons/pi";
import { FaGithub, FaTwitterSquare, FaFigma } from "react-icons/fa";

const Quailfication = () => {
  return (
    <section className="mt-12 font-sans">
      <div className="flex justify-between  max-ml:flex-col-reverse max-ml:gap-9 text-gray-500 ">
        <div className="flex flex-col justify-center ">
          <div className="">
            <h1 className="max-ml:flex-col dark:text-white text-black flex font-bold text-5xl pb-4">
              Hi, I'm PAHS{" "}
              <span className=" mr-3">
                <PiHandWavingBold className="" />
              </span>
            </h1>
          </div>
          <div className="w-4/5 mt-4 pb-4 dark:text-white text-gray-500 text-base max-ml:w-auto">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </div>
          <div className="flex mt-4 pb-4 dark:text-white">
            <span className="flex mr-1 justify-center items-center ">
              <FaLocationDot className="text-xl" />
            </span>
            Bahria Town, Pakistan
          </div>
          <div className="flex mt-4 pb-4 dark:text-white">
            <span className="flex justify-center items-center mr-1">
              <MdOnlinePrediction className="text-2xl" />
            </span>
            Available for new projects
          </div>
          <div className="mt-4 pb-4 flex gap-5 text-3xl cursor-pointer   ">
            <a href="https://github.com/PAHS911/" target="_blank">
              <FaGithub className="hover:text-black dark:text-gray-300 dark:hover:text-white" />
            </a>
            <a href="https://twitter.com/?lang=en" target="_blank">
              <FaTwitterSquare className="hover:text-black dark:text-gray-300 dark:hover:text-white" />
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
