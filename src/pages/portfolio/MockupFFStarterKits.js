import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import backupImg from "../../assets/img/portfolio/ffstarterkits/Mockup Backup.png";

const MockupFFStarterKits = () => {
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
        <div className="h-[100vh] px-4 sm:px-8 lg:px-16 flex flex-col justify-between">
          <div className="w-full leading-none tracking-tighter">
            <h1
              id="title"
              className="text-5xl md:text-6xl lg:text-8xl uppercase font-extrabold translate-y-full opacity-0">
              Fathforce Starter Kits
            </h1>
            <h1
              id="title2"
              className="text-5xl md:text-6xl lg:text-8xl uppercase font-extrabold translate-y-full opacity-0">
              Web Mockup
            </h1>
          </div>
          <div className="flex flex-wrap justify-between">
            <p className="w-11/12 md:w-2/3 text-xl lg:text-4xl font-medium leading-none mb-10 animate-fade animate-once animate-delay-500">
              Web Mockup for FFStarterKits Web Apps that build and control your
              own website
            </p>
            <p className="font-medium text-lg">
              Discover <FontAwesomeIcon icon={faArrowDown} />
            </p>
          </div>
        </div>
        <div className="mt-3 w-11/12 mx-auto">
          <img
            src={backupImg}
            alt="Mockup Backup FFStarterKits"
            className="rounded-2xl object-cover h-[100vh] w-full"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MockupFFStarterKits;
