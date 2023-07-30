import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const NotFound = () => {
  useLayoutEffect(() => {
    gsap.to("#title", {
      y: 0,
      delay: 0.2,
      duration: 0.5,
    });
    gsap.to("#title2", {
      y: 0,
      delay: 0.4,
      duration: 0.7,
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
            <div className="w-full mb-6">
              <div className="overflow-hidden">
                <h1
                  id="title"
                  className="text-5xl md:text-6xl lg:text-8xl uppercase font-extrabold leading-none tracking-tighter translate-y-full">
                  Page
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1
                  id="title2"
                  className="text-5xl md:text-6xl lg:text-8xl uppercase font-extrabold leading-none tracking-tighter translate-y-full">
                  Not Found
                </h1>
              </div>
            </div>
            <div className="w-11/12 md:w-2/3">
              <p className="text-xl lg:text-4xl font-medium leading-none mb-10 animate-fade animate-once animate-delay-500">
                The page you are looking for doesnt exist. You can go back use
                the button below to navigate back to the homepage
              </p>
              <Link to="/" className="text-xl border-b border-black">
                Bring me to the homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
