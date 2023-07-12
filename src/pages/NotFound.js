import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Navigation from "../components/Navigation";

const NotFound = () => {
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

  useEffect(() => {
    document.title = "Not Found";
  }, []);

  return (
    <>
      <Navigation />
      <section className="pt-10">
        <div className="container">
          <div className="h-[100vh] px-4 sm:px-8 lg:px-16">
            <div className="w-full leading-none tracking-tighter mb-6">
              <h1
                id="title"
                className="text-5xl md:text-6xl lg:text-8xl uppercase font-extrabold translate-y-full opacity-0">
                Page
              </h1>
              <h1
                id="title2"
                className="text-5xl md:text-6xl lg:text-8xl uppercase font-extrabold translate-y-full opacity-0">
                Not Found
              </h1>
            </div>
            <div className="w-11/12 md:w-2/3">
              <p className="text-xl lg:text-4xl font-medium leading-none mb-10 animate-fade animate-once animate-delay-500">
                The page you are looking for doesnt exist. You can go back use
                the button below to navigate back to the homepage
              </p>
              <a href="/" className="text-xl border-b border-black">
                Bring me to the homepage
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
