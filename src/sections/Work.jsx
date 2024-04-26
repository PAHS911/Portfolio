import React from "react";
import wingie from "../project/wingie.webp";
import pepehousing from "../project/pepehousing.webp";
import fiskil from "../project/fiskil.webp";
import { CiShare1 } from "react-icons/ci";

const Work = () => {
  return (
    <section id="work">
      <div className="">
        {" "}
        <div className="flex flex-col items-center">
          <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-28 text-center bg-gray-200 py-2  rounded-full font-semibold text-gray-500">
            Work
          </p>
          <p className="mb-8 text-gray-600 text-xl dark:text-gray-300 ">
            {" "}
            Some of the noteworthy projects I have built:
          </p>
        </div>
        <div className="px-36 max-lg:p-8 flex flex-col  items-center gap-12 max-ml:px-0 ">
          <div className=" flex ring-offset-white dark:bg-gray-800 bg-white rounded-3xl shadow-xl max-lg:flex max-lg:flex-col ">
            <div className="w-1/2 col-span-1 dark:bg-gray-500 bg-gray-200 p-12 border-none  flex justify-center items-center lg:rounded-s-3xl max-lg:rounded-t-3xl max-ml:p-4 max-lg:w-full max-ml:w-full">
              <a href="https://www.wingie.com/" target="_blank">
                <img
                  className="w-full  rounded-3xl shadow-2xl lg:hover:relative lg:transition-transform lg:duration-500 lg:hover:scale-105 "
                  src={wingie}
                  alt=""
                />
              </a>
            </div>
            <div className="w-1/2 p-4 text-gray-600 flex flex-col justify-center max-lg:mt-9 max-ml:w-full max-lg:w-full ">
              <p className=" dark:text-white text-black text-xl font-bold mb-4 ">Wingie</p>
              <div className="w-full">
                <p className="dark:text-gray-300">
                  A platform for comparing and finding affordable flights, as
                  well as booking and purchasing tickets safely and easily in a
                  few simple clicks.
                </p>
                <div className="flex flex-wrap gap-2 mt-6 ">
                  <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-auto text-center bg-gray-200 py-2 px-4 rounded-full font-semibold text-gray-500">
                    React
                  </p>
                  <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-auto text-center bg-gray-200 py-2  px-4 rounded-full font-semibold text-gray-500">
                    Typescript
                  </p>
                  <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-auto text-center bg-gray-200 py-2 px-4 rounded-full font-semibold text-gray-500">
                    React Bootstrap
                  </p>
                  <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-auto text-center bg-gray-200 py-2 px-4 rounded-full font-semibold text-gray-500">
                    Firebase
                  </p>
                  <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-auto text-center bg-gray-200 py-2 px-4 rounded-full font-semibold text-gray-500">
                    Express.js
                  </p>
                  <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-auto text-center bg-gray-200 py-2 px-4 rounded-full font-semibold text-gray-500">
                    PostgreSQL
                  </p>
                  <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-auto text-center bg-gray-200 py-2 px-4 rounded-full font-semibold text-gray-500">
                    Styled Components
                  </p>
                  <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-auto text-center bg-gray-200 py-2 px-4 rounded-full font-semibold text-gray-500">
                    Redux
                  </p>
                </div>
                <div className="mt-3 w-5">
                  <a href="https://www.wingie.com/" target="_blank">
                    <CiShare1 className="dark:text-gray-300 dark:hover:text-white text-2xl mb-6 hover:text-black" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex ring-offset-white dark:bg-gray-800 bg-white rounded-3xl shadow-xl max-lg:flex max-lg:flex-col ">
            <div className="w-1/2 order-2  max-lg:order-1  col-span-1 bg-gray-200 dark:bg-gray-500 p-12 border-none  flex justify-center items-center lg:rounded-e-3xl max-lg:rounded-t-3xl max-ml:p-4 max-ml:w-full max-lg:w-full ">
              <a href="https://fiskil.com.au/" target="_blank">
                <img
                  className="w-full  rounded-3xl shadow-2xl  lg:transition-transform lg:duration-500 lg:hover:scale-105"
                  src={fiskil}
                  alt=""
                />
              </a>
            </div>
            <div className="w-1/2 order-1 max-lg:order-2 p-4 text-gray-600 flex flex-col justify-center max-lg:mt-9  max-ml:w-full max-lg:w-full ">
              <p className=" dark:text-white text-black text-xl font-bold mb-4 ">Fiskil</p>
              <div className="w-full">
                <p className="dark:text-gray-300">
                  A platform for accessing real-time open banking and energy
                  data to help you grow your business, backed with scalable
                  back-end infrastructure.
                </p>
                <div className="flex flex-wrap gap-2 mt-6 ">
                  <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-auto text-center bg-gray-200 py-2 px-4 rounded-full font-semibold text-gray-500">
                    React
                  </p>
                  <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-auto text-center bg-gray-200 py-2  px-4 rounded-full font-semibold text-gray-500">
                    Typescript
                  </p>
                  <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-auto text-center bg-gray-200 py-2 px-4 rounded-full font-semibold text-gray-500">
                    React Bootstrap
                  </p>
                  <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-auto text-center bg-gray-200 py-2 px-4 rounded-full font-semibold text-gray-500">
                    Firebase
                  </p>
                  <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-auto text-center bg-gray-200 py-2 px-4 rounded-full font-semibold text-gray-500">
                    Express.js
                  </p>
                  <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-auto text-center bg-gray-200 py-2 px-4 rounded-full font-semibold text-gray-500">
                    PostgreSQL
                  </p>
                  <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-auto text-center bg-gray-200 py-2 px-4 rounded-full font-semibold text-gray-500">
                    Styled Components
                  </p>
                  <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-auto text-center bg-gray-200 py-2 px-4 rounded-full font-semibold text-gray-500">
                    Redux
                  </p>
                  <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-auto text-center bg-gray-200 py-2 px-4 rounded-full font-semibold text-gray-500">
                    AWS Amplify
                  </p>
                  <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-auto text-center bg-gray-200 py-2 px-4 rounded-full font-semibold text-gray-500">
                    Redux Toolkit
                  </p>
                  <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-auto text-center bg-gray-200 py-2 px-4 rounded-full font-semibold text-gray-500">
                    Material UI
                  </p>
                  <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-auto text-center bg-gray-200 py-2 px-4 rounded-full font-semibold text-gray-500">
                    Firebase
                  </p>
                  <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-auto text-center bg-gray-200 py-2 px-4 rounded-full font-semibold text-gray-500">
                    React Qurey
                  </p>
                </div>
                <div className="mt-3 w-5">
                  <a href="https://fiskil.com.au/" target="_blank">
                    <CiShare1 className="dark:text-gray-300 dark:hover:text-white text-2xl mb-6 hover:text-black" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="dark:bg-gray-800  flex ring-offset-white bg-white rounded-3xl shadow-xl max-lg:flex max-lg:flex-col ">
            <div className="w-1/2 col-span-1 dark:bg-gray-500 bg-gray-200 p-12 border-none  flex justify-center items-center lg:rounded-s-3xl max-lg:rounded-t-3xl max-ml:p-4 max-lg:w-full max-ml:w-full">
              <a href="https://pepehousing.com/" target="_blank">
                <img
                  className="w-full rounded-3xl shadow-2xl  lg:transition-transform lg:duration-500 lg:hover:scale-105 "
                  src={pepehousing}
                  alt=""
                />
              </a>
            </div>
            <div className="w-1/2 p-4 text-gray-600 flex flex-col justify-center max-lg:mt-9 max-ml:w-full max-lg:w-full">
              <p className="dark:text-white  text-black text-xl font-bold mb-4 ">
                Pepehousing
              </p>
              <div className="w-full dark:text-gray-300">
                <p>
                  A platform for renting a flat or room in Poland. You may
                  browse hundreds of verified deals, contact the vendor, and pay
                  online in a simple and secure manner.
                </p>
                <div className="flex flex-wrap gap-2 mt-6 ">
                  <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-auto text-center bg-gray-200 py-2 px-4 rounded-full font-semibold text-gray-500">
                    React
                  </p>
                  <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-auto text-center bg-gray-200 py-2  px-4 rounded-full font-semibold text-gray-500">
                    Typescript
                  </p>
                  <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-auto text-center bg-gray-200 py-2 px-4 rounded-full font-semibold text-gray-500">
                    React Toolkit
                  </p>
                  <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-auto text-center bg-gray-200 py-2 px-4 rounded-full font-semibold text-gray-500">
                    React Query
                  </p>
                  <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-auto text-center bg-gray-200 py-2 px-4 rounded-full font-semibold text-gray-500">
                    Story book
                  </p>
                  <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-auto text-center bg-gray-200 py-2 px-4 rounded-full font-semibold text-gray-500">
                    Next.js
                  </p>
                  <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-auto text-center bg-gray-200 py-2 px-4 rounded-full font-semibold text-gray-500">
                    Tailwindcss
                  </p>
                </div>
                <div className="mt-3 w-5 ">
                  <a
                    href="https://pepehousing.com/"
                    target="_blank"
                    className="">
                    <CiShare1 className="text-2xl mb-6 hover:text-black dark:text-gray-300 dark:hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
