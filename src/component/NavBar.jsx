import React, { useState, useEffect } from "react";
import { IoSunnyOutline, IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { MdDarkMode } from "react-icons/md";

const NavBar = () => {
  const [lightModeVisible, setLightModeVisible] = useState(false);
  const [darkModeVisible, setDarkModeVisible] = useState(true);
  const [menu, setMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  true;

  const toggleDarkMode = () => {
    setDarkModeVisible(!darkModeVisible);
    setLightModeVisible(true);
    let theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const toggleLightMode = () => {
    setLightModeVisible(!lightModeVisible);
    setDarkModeVisible(true);
    let theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <>
      <section
        className={`font-sans p-4 flex text-center justify-between mb-4 ${
          scrollY > 0
            ? "bg-white dark:bg-black dark:bg-opacity-90 bg-opacity-90"
            : ""
        } max-ml:border-b max-ml:border-gray-200 dark:max-ml:border-gray-700 fixed top-0 left-0 right-0 z-10`}>
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold dark:text-white">PORTFOLIO</h1>
        </div>

        {menu ? (
          <div className=" fixed inset-0 bg-opacity-50 backdrop-filter backdrop-blur-sm justify-center items-center h-full max-ml:block hidden text-center flex-col transition-transform duration-900">
            <div className="min-w-60 w-2/5 float-right bg-white dark:bg-black shadow-lg h-full p-4">
              <div className="border-b border-gray-200 pb-4 flex justify-between text-center">
                <div className="text-2xl font-bold dark:text-white ">Menu</div>
                <div className="flex justify-center items-center">
                  <RxCross2
                    className="cursor-pointer  text-2xl font-bold dark:text-white"
                    onClick={closeMenu}
                  />
                </div>
              </div>
              <div className="mt-4 mb-4">
                <ul className="text-left cursor-pointer text-xl text-gray-600 dark:text-gray-300 ">
                  <li className="mx-2 my-3 dark:hover:text-white hover:text-black ">
                    <a href="#about">About</a>
                  </li>
                  <li className="mx-2 my-3 dark:hover:text-white hover:text-black ">
                    <a href="#work">Work</a>
                  </li>
                  <li className="mx-2 my-3 dark:hover:text-white hover:text-black ">
                    <a href="#test">Testimonials</a>
                  </li>
                  <li className="mx-2 my-3 dark:hover:text-white pb-4 border-b hover:text-black border-gray-200">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="mt-9 mb-4 text-center flex justify-between gap-14">
                <span className="text-xl text-gray-600 dark:text-white">
                  Switch Theme
                </span>
                <div className="flex justify-center items-center hover:shadow-2xl dark:text-gray-300 dark:hover:text-white">
                  <IoSunnyOutline
                    onClick={toggleLightMode}
                    className={` dark:text-gray-300 dark:hover:text-whitecursor-pointer text-center justify-center items-center text-xl hover:shadow-2xl ${
                      lightModeVisible ? "" : "hidden"
                    } `}
                  />
                  <MdDarkMode
                    onClick={toggleDarkMode}
                    className={`dark:text-gray-300 dark:hover:text-white cursor-pointer text-center justify-center items-center text-xl hover:shadow-2xl ${
                      darkModeVisible ? "" : "hidden"
                    }`}
                    title="Dark mode"
                  />
                </div>
              </div>
              <div className="text-center mt-9 mb-4">
                <button className="text-center bg-black text-white dark:text-black dark:bg-white px-4 py-1 rounded-full  transition-colors duration-200 hover:bg-gray-600 active:bg-gray-700">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        ) : (
          <IoMenuSharp
            onClick={toggleMenu}
            className="text-center hidden max-ml:block relative top-1 text-3xl text-gray-600 cursor-pointer dark:text-gray-300 dark:hover:text-white"
          />
        )}

        <div className="max-ml:hidden flex items-center gap-5 font-semibold">
          <div className="text-center">
            <ul className="flex cursor-pointer text-center text-gray-600 dark:text-white border-r-2">
              <li className="mx-2  hover:text-black  dark:text-gray-300 dark:hover:text-white">
                <a href="#about">About</a>
              </li>
              <li className="mx-2 hover:text-black dark:text-gray-300 dark:hover:text-white">
                <a href="#work">Work</a>
              </li>
              <li className="mx-2 hover:text-black dark:text-gray-300 dark:hover:text-white">
                {" "}
                <a href="#test">Testimonials</a>
              </li>
              <li className="mx-2 hover:text-black dark:text-gray-300 dark:hover:text-white">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className=" text-center dark:text-white  hover:shadow-black ">
            <IoSunnyOutline
              onClick={toggleLightMode}
              className={` dark:text-gray-300 dark:hover:text-white cursor-pointer text-center justify-center items-center text-xl ${
                lightModeVisible ? "" : "hidden"
              }`}
              title="Light mode"
            />
            <MdDarkMode
              onClick={toggleDarkMode}
              className={`cursor-pointer text-center justify-center items-center text-xl hover:shadow-2xl dark:text-gray-300 dark:hover:text-white ${
                darkModeVisible ? "" : "hidden"
              }`}
              title="Dark mode"
            />
          </div>
          <div className="text-center">
            <button className="text-center dark:bg-white dark:text-black bg-black text-white px-2 rounded-full  transition-colors duration-200 hover:bg-gray-600 active:bg-gray-800">
              Download CV
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavBar;
