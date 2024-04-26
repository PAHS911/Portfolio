import React from "react";
import kris from "../people/kris.webp";
import joe from "../people/joe.svg";
import eug from "../people/eug.webp";
const Testimonials = () => {
  return (
    <section id="test">
      <div className="flex flex-col justify-center items-center text-center">
        <p className="dark:text-gray-300 dark:bg-gray-500 mb-4 w-28  bg-gray-300 py-2  rounded-full font-semibold text-gray-500">
          Testimonials
        </p>
        <p className="text-2xl text-gray-500 dark:text-gray-300 ">
          Nice things people have said about me:
        </p>
      </div>
      <div className="flex justify-between gap-12 mt-9  max-lg:flex max-lg:flex-col  max-lg:justify-center  max-lg:items-center  ">
        <div className="p-4 flex flex-col justify-center items-center ring-offset-white dark:bg-gray-800 bg-white rounded-3xl shadow-xl text-gray-500 ">
          <div className="flex flex-col justify-center items-center  ">
            <img src={kris} alt="" />
            <p className="pt-2 text-base dark:text-gray-300">
              "Job well done! I am really impressed. He is very very good at
              what he does:) I would recommend PAHS and will rehire in the
              future for Frontend development."
            </p>
            <p className="pt-2 dark:text-white text-black text-xl font-bold">
              Krisztian Gyuris
            </p>
            <p className="pt-2 text-base dark:text-gray-300">Founder - inboxgenie.io</p>
          </div>
        </div>

        <div className="p-4 ring-offset-white dark:bg-gray-800 bg-white rounded-3xl shadow-xl text-gray-500 ">
          <div className="flex flex-col justify-center items-center  ">
            <img src={eug} alt="" />
            <p className="pt-2 text-base dark:text-gray-300">
              "Great guy, highly recommended for any COMPLEX front-end
              development job! His skills are top-notch and he will be an
              amazing addition to any team."
            </p>
            <p className="pt-2 text-black text-xl font-bold dark:text-white">Eugen Esanu</p>
            <p className="pt-2 text-base dark:text-gray-300">Founder - shosho.design</p>
          </div>
        </div>

        <div className="p-4 ring-offset-white dark:bg-gray-800 bg-white rounded-3xl shadow-xl text-gray-500 ">
          <div className="flex flex-col justify-center items-center  ">
            <img src={joe} alt="" />
            <p className="pt-2 text-base dark:text-gray-300">
              "PAHS was extremely easy and pleasant to work with and he truly
              cares about the project being a success. PASH has a high level of
              knowledge and was able to work on my MERN stack application
              without any issues."
            </p>
            <p className="pt-2 text-black text-xl font-bold dark:text-white">Joe Matkin</p>
            <p className="pt-2 text-base dark:text-gray-300">Freelancer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
