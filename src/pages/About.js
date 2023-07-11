import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import Navigation from "../components/Navigation";

const About = () => {
  useLayoutEffect(() => {
    gsap.to("#title", {
      y: 0,
      delay: 0.2,
      duration: 0.5,
      opacity: 1,
    });
    gsap.to("#title2", {
      y: 0,
      delay: 0.4,
      duration: 0.7,
      opacity: 1,
    });
  });
  return (
    <>
      <Navigation />
      <section className="pt-10">
        <div className="h-[100vh] px-4 sm:px-8 lg:px-16">
          <div className="w-full leading-none tracking-tighter mb-6">
            <h1
              id="title"
              className="text-5xl md:text-6xl lg:text-8xl uppercase font-extrabold translate-y-full opacity-0">
              About
            </h1>
            <h1
              id="title2"
              className="text-5xl md:text-6xl lg:text-8xl uppercase font-extrabold translate-y-full opacity-0">
              Adit Bagja Septiana
            </h1>
          </div>
          <div className="w-11/12 md:w-2/3">
            <p className="text-xl lg:text-4xl font-medium leading-none mb-10 animate-fade animate-once animate-delay-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
              minima cupiditate laudantium quod nihil ratione!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
