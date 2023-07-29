import React, { useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import notflixImg from "../../assets/img/portfolio/notflix.png";
import AOS from "aos";
import "aos/dist/aos.css";

const WebNotflix = () => {
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
    AOS.init();
    document.title = "Notflix";
  }, []);

  return (
    <>
      <Navigation />
      <section className="pt-10">
        <div className="h-[85vh] px-4 sm:px-8 lg:px-16 flex flex-col justify-between">
          <div className="w-full">
            <div className="overflow-hidden">
              <h1
                id="title"
                className="text-5xl md:text-6xl lg:text-8xl uppercase font-extrabold leading-none tracking-tighter translate-y-full">
                Notflix
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1
                id="title2"
                className="text-5xl md:text-6xl lg:text-8xl uppercase font-extrabold leading-none tracking-tighter translate-y-full">
                Landing Pages
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap justify-between animate-fade animate-once animate-delay-500">
            <p className="w-11/12 md:w-2/3 text-xl lg:text-3xl font-medium leading-none mb-10">
              Notflix Landing Pages Concept
            </p>
            <p className="font-medium text-lg">
              Discover <FontAwesomeIcon icon={faArrowDown} />
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="true"
          className="mt-3 w-11/12 mx-auto">
          <img
            src={notflixImg}
            alt="Notflix"
            className="rounded-2xl object-cover h-[50vh] md:h-full w-full"
          />
        </div>
        <div className="container mx-auto py-32 px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3">
              <p className="text-lg font-medium mb-3">(001)</p>
            </div>
            <div className="w-full lg:w-2/3">
              <p className="text-xl md:text-3xl font-medium mb-20">
                During my exploration of React JS and API integration, I took on
                the exciting challenge of creating the Notflix landing pages.
                Embracing a continuous learning mindset, I leveraged my newfound
                knowledge to develop an immersive user interface that seamlessly
                interacts with the The Movie Database (TMDB) API.
              </p>
              <a
                href="https://aditbagja.github.io/tv-series-api-with-react/"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-medium py-2 border-b border-black">
                View Demo
              </a>
              <div className="mt-16 flex justify-between border-t border-slate-300 py-4">
                <p className="text-lg font-medium">Project Name </p>
                <p className="text-lg font-medium text-right">Notflix</p>
              </div>
              <div className="flex justify-between border-t border-slate-300 py-4">
                <p className="text-lg font-medium">Type </p>
                <p className="text-lg font-medium text-right">Landing Pages</p>
              </div>
              <div className="flex justify-between border-y border-slate-300 py-4">
                <p className="text-lg font-medium">Tech </p>
                <p className="text-lg font-medium text-right">React JS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-32 mx-auto w-11/12">
          <div
            data-aos="fade-up"
            data-aos-once="true"
            className="bg-slate-100 p-2 lg:p-6 mb-10 rounded-2xl">
            <a href={notflixImg} target="blank" rel="noreferrer">
              <img src={notflixImg} alt="Noflix" className="rounded-lg" />
            </a>
          </div>
        </div>
        <div className="py-32 mx-auto w-11/12">
          <p className="text-4xl md:text-6xl uppercase font-extrabold mb-5">
            Next Portfolio
          </p>
          <a href="/mockup/ffstarterkits" className="group">
            <div
              data-aos="fade-up"
              data-aos-once="true"
              className="md:h-96 lg:h-[30rem] overflow-hidden rounded-2xl">
              <img
                src={require(`../../assets/img/portfolio/ffstarterkits/Mockup Backup.png`)}
                alt="Fathforce Starter Kits Web Mockup"
                className="rounded-2xl max-w-lg sm:max-w-full object-cover transition duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between flex-col sm:flex-row mt-3 mb-10">
              <p className="font-semibold text-center">
                Fathforce Starter Kits Mockup
              </p>
              <p className="font-semibold text-center">Web Mockup</p>
              <p className="font-semibold text-center">Figma</p>
            </div>
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WebNotflix;
