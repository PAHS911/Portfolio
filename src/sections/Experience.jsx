import React from "react";
import upwork from "../icons/upwork.svg";
import greenapex from "../icons/greenapex.svg";
import Lgreenapex from "../icons/Lgreenapex.svg";
import dot from "../icons/dot.svg";
import Ldot from "../icons/Ldot.svg";

const Experience = () => {
  return (
    <section>
      <div className="">
        <div className="flex flex-col items-center">
          <p className=" mb-4 w-28 text-center dark:text-gray-300 dark:bg-gray-500  bg-gray-300 py-2  rounded-full font-semibold text-gray-500">
            Experience
          </p>
          <p className="mb-8 text-gray-600 dark:text-gray-300 text-xl">
            {" "}
            Here is a quick summary of my most recent experiences:
          </p>
        </div>


        <div className="px-36 max-ml:px-0 max-lg:p-8 flex flex-col  items-center gap-8">
          <div className=" p-8 grid grid-cols-4  gap-8 max-lg:gap-2 ring-offset-white dark:bg-gray-800 bg-white rounded-3xl max-lg:flex  max-lg:flex-col max-lg:items-start max-lg:p-4 shadow-lg">
            <div className="w-auto col-span-1 max-lg:order-1 ">
              <img className="w-full" src={upwork} alt="" />
            </div>
            <div className="col-span-2 text-gray-600 flex flex-col items-center max-lg:order-3 max-lg:items-start max-lg:w-full ">
              <p className=" text-black text-xl font-bold mb-4 max-lg:mb-2 max-lg:mt-6 dark:text-white">Independent Freelancer</p>
              <div className="w-full">
                <ul className="text-center flex flex-col max-lg:text-left gap-2 dark:text-gray-300">
                  <li className="">
                    Worked for various clients like Fiskil, Shosho, Crowe MacKay
                    LLP.
                  </li>
                  <li>
                    Worked with a variety of technologies, including React,
                    Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui,
                    Firebase, Storybook, Cypress, and others.
                  </li>
                </ul>
              </div>
            </div>
            <div className="max-lg:order-2 col-span-1 text-right text-gray-600 font-semibold max-ml:text-left dark:text-gray-300">
              <p> Nov 2021 - Present</p>
            </div>
          </div>

          <div className="w-full p-8 grid grid-cols-4  gap-8 max-lg:gap-2 ring-offset-white dark:bg-gray-800 bg-white rounded-3xl max-lg:flex  max-lg:flex-col max-lg:items-start max-lg:p-4 shadow-lg">
            <div className="w-auto col-span-1 max-lg:order-1 ">
              <img className="w-full hidden dark:block " src={Lgreenapex} alt="" />
              <img className="w-full dark:hidden " src={greenapex} alt="" />
            </div>
            <div className="col-span-2 text-gray-600 flex flex-col items-center max-lg:order-3 max-lg:items-start max-lg:w-full ">
              <p className=" text-black text-xl font-bold mb-4 max-lg:mb-2 max-lg:mt-6 dark:text-white">Team Lead</p>
              <div className="w-full">
                <ul className="text-center  flex flex-col max-lg:text-left gap-2 dark:text-gray-300">
                  <li >
                  Acted as team lead in different projects.
                  </li>
                  <li>
                  Brainstormed new ideas & gathered requirements for internal projects.
                  </li>
                  <li>Designed architecture of different projects (frontend + backend).</li>
                  <li>Worked on enterprise-level projects for a variety of clients.</li>
                  <li>Handled sprint planning & task distribution.</li>
                </ul>
              </div>
            </div>
            <div className="max-lg:order-2 col-span-1 text-right text-gray-600 font-semibold max-ml:text-left dark:text-gray-300">
              <p>Jul 2017 - Oct 2021</p>
            </div>
          </div>

          <div className="w-full p-8 grid grid-cols-4  gap-8 max-lg:gap-2 ring-offset-white dark:bg-gray-800 bg-white rounded-3xl max-lg:flex  max-lg:flex-col max-lg:items-start max-lg:p-4 shadow-lg">
            <div className="w-auto col-span-1 max-lg:order-1 ">
              <img className="hidden dark:block w-full" src={Ldot} alt="" />
              <img className="dark:hidden w-full" src={dot} alt="" />
            </div>
            <div className="col-span-2 text-gray-600 flex flex-col items-center max-lg:order-3 max-lg:items-start max-lg:w-full ">
              <p className=" text-black text-xl font-bold mb-4 max-lg:mb-2 max-lg:mt-6 dark:text-white">Full Stack Developer</p>
              <div className="w-full">
                <ul className="text-center  flex flex-col max-lg:text-left gap-2 dark:text-gray-300">
                  <li >
                  Worked as a full stack developer (React / Laravel).
                  </li>
                
                </ul>
              </div>
            </div>
            <div className="max-lg:order-2 col-span-1 text-right text-gray-600 font-semibold max-ml:text-left dark:text-gray-300">
              <p>Dec 2015 - May 2017</p>
            </div>
          </div>



        </div>
      </div>
    </section>
  );
};

export default Experience;
