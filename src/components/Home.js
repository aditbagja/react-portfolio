import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";

const Home = () => {
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
    gsap.to("#button", {
      y: 0,
      delay: 0.4,
      duration: 0.9,
      opacity: 1,
    });
  });

  return (
    <section className="pt-20 lg:pt-28">
      <div className="container">
        <div className="w-full px-4 sm:px-8 leading-none tracking-tighter mb-3">
          <h1
            id="title"
            className="text-4xl md:text-5xl lg:text-7xl uppercase font-extrabold translate-y-full opacity-0"
          >
            adit bagja septiana
          </h1>
          <h1
            id="title2"
            className="text-4xl md:text-5xl lg:text-7xl uppercase font-extrabold translate-y-full opacity-0"
          >
            front end developer
          </h1>
        </div>
        <div className="w-9/12 md:w-2/3 px-4 sm:px-8">
          <p className="text-lg font-medium leading-none mb-10 animate-fade animate-once">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            minima laborum vero quis velit reiciendis ipsum sapiente nobis
            pariatur! Accusamus!
          </p>
          <a
            id="button"
            href="mailto:aditbagja44@gmail.com"
            target="_blank"
            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium transition duration-500 ease-out border-2 border-black rounded-full shadow-md group translate-y-full opacity-0"
            rel="noreferrer"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-500 translate-y-full bg-black group-hover:translate-y-0 ease">
              Contact Me
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-500 transform group-hover:translate-y-full ease">
              hello@aditbagja
            </span>
            <span className="relative invisible">hello@aditbagja</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
