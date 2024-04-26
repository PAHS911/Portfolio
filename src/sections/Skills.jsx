import React from "react";
import javascript from "../icons/javascript.svg";
import typescript from "../icons/typescript.svg";
import cypress from "../icons/cypress.svg";
import Lcypress from "../icons/Lcypress.svg";
import express from "../icons/express.svg";
import Lexpress from "../icons/Lexpress.svg";
import figma from "../icons/figma.svg";
import git from "../icons/git.svg";
import Mongo from "../icons/Mongo.svg";
import nest from "../icons/nest.svg";
import next from "../icons/next.svg";
import node from "../icons/node.svg";
import postgreSql from "../icons/postgreSql.svg";
import react from "../icons/react.svg";
import sass from "../icons/sass.svg";
import socket from "../icons/socket.svg";
import Lsocket from "../icons/Lsocket.svg";
import storybook from "../icons/storybook.svg";
import tailwindcss from "../icons/tailwindcss.svg";

const Skills = () => {
  return (
    <section className="text-gray-600 text-xl">
      <div className="">
        <div className="flex flex-col items-center justify-center">
          <p className="dark:text-gray-300 dark:bg-gray-500 mb-9 w-28 text-center bg-gray-300 py-2  rounded-full font-semibold text-gray-500">
            Skills
          </p>
          <p className="dark:text-white text-2xl text-gray-500 max-ml:text-center">
            The skills, tools and technologies I am really good at:
          </p>

          <div className="mt-6 grid grid-cols-8 grid-rows-2 gap-12 text-center max-mx:grid max-mx:grid-cols-4 max-mx:grid-rows-4 max-ml:grid max-ml:grid-cols-2 max-ml:grid-rows-8   ">
            <div className="flex flex-col justify-center items-center dark:text-white ">
              <a href="https://www.javascript.com/" target="_blank">
                <img
                  className="w-16 h-16  transition-transform duration-500 md:hover:scale-105"
                  src={javascript}
                  alt=""
                />
              </a>
              Javascript{" "}
            </div>
            <div className="flex flex-col justify-center items-center dark:text-white">
              <a href="https://www.typescriptlang.org/" target="_blank">
                <img
                  className=" w-16 h-16 transition-transform duration-500 md:hover:scale-105"
                  src={typescript}
                  alt=""
                />
              </a>
              Typescript
            </div>
            <div className="flex flex-col justify-center items-center dark:text-white">
              <a href="https://www.cypress.io/" target="_blank">
              <img
                  className="hidden w-16 h-16 transition-transform duration-500 md:hover:scale-105 dark:block"
                  src={Lcypress}
                  alt=""
                />

                <img
                  className=" w-16 h-16 transition-transform duration-500 md:hover:scale-105 dark:hidden"
                  src={cypress}
                  alt=""
                />
                Cypress
              </a>
            </div>
            <div className="flex flex-col justify-center items-center dark:text-white">
              <a href="https://expressjs.com/" target="_blank">
              <img
                  className="hidden w-16 h-16 transition-transform duration-500 md:hover:scale-105 dark:block"
                  src={Lexpress}
                  alt=""
                />
               
                <img
                  className=" w-16 h-16 transition-transform duration-500 md:hover:scale-105 dark:hidden"
                  src={express}
                  alt=""
                />
                Express
              </a>
            </div>
            <div className="flex flex-col justify-center items-center dark:text-white">
              <a href="https://www.figma.com/" target="_blank">
                <img
                  className=" w-16 h-16 transition-transform duration-500 md:hover:scale-105"
                  src={figma}
                  alt=""
                />
                Figma
              </a>
            </div>
            <div className="flex flex-col justify-center items-center dark:text-white">
              <a href="https://git-scm.com/" target="_blank">
                <img
                  className=" w-16 h-16 transition-transform duration-500 md:hover:scale-105"
                  src={git}
                  alt=""
                />
                Git
              </a>
            </div>
            <div className="flex flex-col justify-center items-center dark:text-white">
              <a href="https://www.mongodb.com/" target="_blank">
                <img
                  className=" w-16 h-16 transition-transform duration-500 md:hover:scale-105"
                  src={Mongo}
                  alt=""
                />
                Mongo
              </a>
            </div>
            <div className="flex flex-col justify-center items-center dark:text-white">
              <a href="https://nestjs.com/" target="_blank">
                <img
                  className=" w-16 h-16 transition-transform duration-500 md:hover:scale-105"
                  src={nest}
                  alt=""
                />
                Nest
              </a>
            </div>
            <div className="flex flex-col justify-center items-center dark:text-white">
              <a href="https://nextjs.org/" target="_blank">
                <img
                  className=" w-16 h-16 transition-transform duration-500 md:hover:scale-105"
                  src={next}
                  alt=""
                />
                Next
              </a>
            </div>
            <div className="flex flex-col justify-center items-center dark:text-white">
              <a href="https://nodejs.org/en" target="_blank">
                <img
                  className=" w-16 h-16 transition-transform duration-500 md:hover:scale-105"
                  src={node}
                  alt=""
                />
                Node
              </a>
            </div>
            <div className="flex flex-col justify-center items-center dark:text-white">
              <a href="https://www.postgresql.org/" target="_blank">
                <img
                  className=" w-16 h-16 transition-transform duration-500 md:hover:scale-105"
                  src={postgreSql}
                  alt=""
                />
                PostgreSql
              </a>
            </div>
            <div className="flex flex-col justify-center items-center dark:text-white">
              <a href="https://react.dev/" target="_blank">
                <img
                  className=" w-16 h-16 transition-transform duration-500 md:hover:scale-105"
                  src={react}
                  alt=""
                />
                React
              </a>
            </div>
            <div className="flex flex-col justify-center items-center dark:text-white">
              <a href="https://sass-lang.com/" target="_blank">
                <img
                  className=" w-16 h-16 transition-transform duration-500 md:hover:scale-105"
                  src={sass}
                  alt=""
                />
                Sass
              </a>
            </div>
            <div className="flex flex-col justify-center items-center dark:text-white">
              <a href="https://socket.io/" target="_blank">
              <img
                  className="hidden w-16 h-16 transition-transform duration-500 md:hover:scale-105 dark:block"
                  src={Lsocket}
                  alt=""
                />
                
                <img
                  className="w-16 h-16 transition-transform duration-500 md:hover:scale-105 dark:hidden"
                  src={socket}
                  alt=""
                />
                Socket
              </a>
            </div>
            <div className="flex flex-col justify-center items-center dark:text-white">
              <a href="https://storybook.js.org/" target="_blank">
                <img
                  className=" w-16 h-16 transition-transform duration-500 md:hover:scale-105"
                  src={storybook}
                  alt=""
                />
                Storybook
              </a>
            </div>
            <div className="flex flex-col justify-center items-center dark:text-white">
              <a
                href="https://tailwindcss.com/docs/installation"
                target="_blank">
                <img
                  className=" w-16 h-16 transition-transform duration-500 md:hover:scale-105"
                  src={tailwindcss}
                  alt=""
                />
                Tailwindcss
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
