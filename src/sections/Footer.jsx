import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaRegCopy, FaRegCopyright } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { FaGithub, FaTwitterSquare, FaFigma } from "react-icons/fa";

const Footer = () => {
  const [copiedTextEmail, setCopiedTextEmail] = useState("");
  const [showTooltipEmail, setShowTooltipEmail] = useState(false);
  const [copiedTextPhone, setCopiedTextPhone] = useState("");
  const [showTooltipPhone, setShowTooltipPhone] = useState(false);

  const copyToClipboardEmail = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedTextEmail(text);
    setShowTooltipEmail(true);
    setTimeout(() => {
      setShowTooltipEmail(false);
    }, 2000);
  };

  const copyToClipboardPhone = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedTextPhone(text);
    setShowTooltipPhone(true);
    setTimeout(() => {
      setShowTooltipPhone(false);
    }, 2000);
  };
  return (
    <section id="contact">
      <div className="p-9 flex flex-col justify-center items-center text-center ">
        <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-28  bg-gray-300 py-2  rounded-full font-semibold text-gray-500">
          Get in touch
        </p>
        <p className="text-xl text-gray-500 dark:text-gray-300">
          What’s next? Feel free to reach out to me if you are looking for a
          developer, have a query, or simply want to connect.
        </p>

        <p className="mt-9 flex justify-center items-center gap-4 text-gray-500 ">
          <CiMail className="dark:hover:text-white text-3xl max-ml:text-xl cursor-pointer hover:text-black dark:text-gray-300" />
          <p className="text-black text-3xl max-ml:text-xl font-bold dark:text-white">
            csgo560@gmail.com{" "}
          </p>
          <div className="relative">
            <FaRegCopy
              onClick={() => copyToClipboardEmail("csgo560@gmail.com")}
              className="dark:text-gray-300 text-3xl max-ml:text-xl cursor-pointer hover:text-black dark:hover:text-white"
            />
            {showTooltipEmail && (
              <span className="absolute bottom-9 left-1/2 -translate-x-1/2 bg-gray-200 text-gray-500 px-2 py-1 rounded-3xl text-sm dark:text-gray-300 dark:bg-gray-500">
                Copied
              </span>
            )}
          </div>
        </p>

        <p
          className=" mt-3 text-gray-500
         flex justify-center items-center gap-4 "
        >
          <span>
            <IoCallOutline className="text-3xl max-ml:text-xl cursor-pointer hover:text-black dark:text-gray-300 dark:hover:text-white" />
          </span>
          <p className="text-black text-3xl max-ml:text-xl font-bold dark:text-white">
            +92 3120991779{" "}
          </p>
          <div className="relative">
            <span>
              <FaRegCopy
                onClick={() => copyToClipboardPhone("+923120991779")}
                className="text-3xl max-ml:text-xl  cursor-pointer hover:text-black dark:text-gray-300  dark:hover:text-white"
              />
            </span>
            {showTooltipPhone && (
              <span className="absolute bottom-9 left-1/2 -translate-x-1/2  mt-2 bg-gray-200 text-gray-500 px-2 py-1 rounded-3xl text-sm dark:text-gray-300 dark:bg-gray-500">
                Copied
              </span>
            )}
          </div>
        </p>

        <p className="mt-9 text-xl text-gray-500 dark:text-gray-300">
          You may also find me on these platforms!
        </p>
        <div className="mt-2 pb-4 flex gap-5 text-3xl cursor-pointer text-gray-500 ">
          <a href="https://github.com/PAHS911/" target="_blank">
            <FaGithub className="hover:text-black dark:text-gray-300  dark:hover:text-white" />
          </a>
          <a href="https://twitter.com/?lang=en" target="_blank">
            <FaTwitterSquare className="hover:text-black dark:text-gray-300  dark:hover:text-white" />
          </a>
          <a href="https://www.figma.com/login" target="_blank">
            <FaFigma className="hover:text-black dark:text-gray-300  dark:hover:text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
