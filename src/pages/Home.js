import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useLayoutEffect(() => {
    gsap.to("#title", {
      y: 0,
      delay: 0.2,
      duration: 0.5,
    });
    gsap.to("#title2", {
      y: 0,
      delay: 0.4,
      duration: 0.5,
    });
    gsap.to("#button", {
      y: 0,
      delay: 0.4,
      duration: 0.5,
    });
  });

  const portfolioSelected = [
    {
      name: "DigiLine",
      description: "Web Apps",
      tech: "Laravel 10",
      img: "digiline/web/digiline 1.png",
      href: "/web/digiline",
    },
    {
      name: "Bandung Creative Hub",
      description: "Landing Page",
      tech: "HTML, CSS, Javascript",
      img: "bandung-creative-hub/home.jpg",
      href: "/web/bandung-creative-hub",
    },
    {
      name: "Newsletter",
      description: "Landing Page",
      tech: "Tailwind CSS",
      img: "newsletter/home.png",
      href: "/web/newsletter",
    },
  ];

  useEffect(() => {
    document.title = "Adit Bagja Septiana";
  });

  return (
    <>
      <Navigation />
      <section id="hero" className="pt-5 sm:pt-10">
        <div className="h-[100vh] px-4 sm:px-8 lg:px-16">
          <div className="w-full mb-6">
            <div className="overflow-hidden">
              <h1
                id="title"
                className="text-5xl md:text-6xl lg:text-8xl uppercase font-extrabold leading-none tracking-tighter translate-y-full">
                Adit Bagja Septiana
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1
                id="title2"
                className="text-5xl md:text-6xl lg:text-8xl uppercase font-extrabold leading-none tracking-tighter translate-y-full">
                Web Developer
              </h1>
            </div>
          </div>
          <div className="w-11/12 md:w-2/3">
            <p className="text-xl lg:text-4xl font-medium leading-none mb-10 animate-fade animate-once animate-delay-500">
              Welcome! This is the place to showcase my passion for web
              development and demonstrate my expertise in creating visually
              stunning, user-friendly, and interactive digital experiences.
            </p>
          </div>
          <div className="overflow-hidden">
            <a
              id="button"
              href="mailto:aditbagja44@gmail.com"
              target="_blank"
              className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium transition duration-500 ease-out border border-black rounded-full shadow-md group translate-y-full"
              rel="noreferrer">
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
        <div className="w-full flex flex-wrap justify-between px-4 sm:px-8 lg:px-16 mb-6">
          <p className="font-medium text-lg">Selected Portfolio</p>
          <p className="font-medium text-lg">
            Discover <FontAwesomeIcon icon={faArrowDown} />
          </p>
        </div>
        <div className="px-4 sm:px-8 lg:px-16">
          <div className="relative overflow-hidden bg-cover bg-no-repeat w-11/12 sm:w-full mx-auto">
            {portfolioSelected.map((selected) => (
              <Link key={selected.name} to={selected.href} className="group">
                <div
                  data-aos="fade-up"
                  data-aos-once="true"
                  className="h-72 md:h-96 lg:h-[30rem] overflow-hidden rounded-2xl">
                  <img
                    src={require("../assets/img/portfolio/" + selected.img)}
                    alt={selected.name}
                    className="rounded-2xl max-w-lg sm:max-w-full object-cover transition duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between flex-col sm:flex-row mt-3 mb-10">
                  <p className="font-semibold text-center">{selected.name}</p>
                  <p className="font-semibold text-center">
                    {selected.description}
                  </p>
                  <p className="font-semibold text-center">{selected.tech}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
