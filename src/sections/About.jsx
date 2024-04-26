import React from "react";
import Batman from "../img/Batman.jpg";


const About = () => {
  return (
    <section id="about" className="font-sans">
      <div className="flex justify-center">
        <p className="dark:text-gray-300 dark:bg-gray-500 mb-9 w-28 text-center bg-gray-300 py-2  rounded-full font-semibold text-gray-500">
          About me
        </p>
      </div>

      <div className=" max-ml:flex-col max-ml:items-center flex justify-around  gap-9">
        <div className=" ">
          <img className="border-8" src={Batman} alt="" />
        </div>

        <div className=" w-[90%] text-gray-500">
          <h1 className=" mb-5 text-3xl font-bold text-black dark:text-white">Curious about me? Here you have it:</h1>
          <p className="mb-5 dark:text-white">
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p className="mb-5 dark:text-white">
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p className="mb-5 dark:text-white">
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p className="mb-5 dark:text-white">
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p >
          <p className="mb-1 dark:text-white">Finally, some quick bits about me.</p>
          <ul className="relative left-5 list-disc mb-5 gap-2 grid grid-cols-2 grid-rows-2 dark:text-white ">
            <li>B.E. in Computer Engineering</li>
            <li>Avid learner</li>
            <li>Full time freelancer</li>
            <li>Aspiring indie hacke</li>
          </ul>
          <div className="">
            <p className="dark:text-white">
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite.{" "}
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
