import React, { useEffect } from "react";
import NavBar from "./component/NavBar";
import {
  About,
  Experience,
  Footer,
  Quailfication,
  Skills,
  Testimonials,
  Work,
} from "./sections";
function App() {
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, ["theme"]);
  return (
    <>
      <main className=" font-sans dark:bg-black">
        <NavBar />
        <section className="p-9">
          <Quailfication />
        </section>
        <section className="p-9 bg-slate-100 dark:bg-gray-900">
           <About /> 
        </section>
        <section className="p-9">
        <Skills />
        </section>
        <section className="p-9 bg-slate-100 dark:bg-gray-900">
        <Experience />
        </section>
        <section className="p-9">
           <Work />
        </section>
        <section className="p-9 bg-slate-100 dark:bg-gray-900">
          <Testimonials />
        </section>
        <section className="">
           <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
