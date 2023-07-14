import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useLayoutEffect(() => {
    gsap.to("#title", {
      y: 0,
      delay: 0.2,
      duration: 0.5,
    });
  });

  const portfolio = [
    {
      name: "Fathforce Starter Kits Mockup",
      description: "Web Mockup",
      tech: "Figma",
      img: "ffstarterkits/Mockup Backup.png",
      href: "/mockup/ffstarterkits",
    },
    {
      name: "Fathforce Starter Kits To Do List",
      description: "Web Apps",
      tech: "Laravel 8",
      img: "ffstarterkits/todo 1.png",
      href: "/web/ffstarterkits",
    },
    {
      name: "Mockup DigiLine",
      description: "Web Mockup",
      tech: "Figma",
      img: "digiline/Dashboard.png",
      href: "/mockup/digiline",
    },
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
    {
      name: "Notflix",
      description: "Landing Page",
      tech: "React JS",
      img: "notflix.png",
      href: "/web/notflix",
    },
  ];

  useEffect(() => {
    AOS.init();
    document.title = "Portfolio";
  }, []);

  return (
    <>
      <Navigation />
      <section className="pt-10">
        <div className="container">
          <div className="h-[100vh] px-4 sm:px-8 lg:px-16">
            <div className="w-full mb-6 overflow-hidden">
              <h1
                id="title"
                className="text-5xl md:text-6xl lg:text-8xl uppercase font-extrabold tracking-tighter translate-y-full">
                Portfolio
              </h1>
            </div>
            <div className="w-11/12 md:w-2/3">
              <p className="text-xl lg:text-4xl font-medium leading-none mb-10 animate-fade animate-once animate-delay-500">
                Have a look at some of the portfolio project i've worked on.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between px-4 sm:px-8 lg:px-16 mb-6">
          <p className="font-medium text-lg">Portfolio</p>
          <p className="font-medium text-lg">
            Discover <FontAwesomeIcon icon={faArrowDown} />
          </p>
        </div>
        <div className="px-4 sm:px-8 lg:px-16">
          <div className="relative overflow-hidden bg-cover bg-no-repeat w-11/12 sm:w-full mx-auto">
            {portfolio.map((selected) => (
              <a key={selected.name} href={selected.href} className="group">
                <div
                  data-aos="fade-up"
                  data-aos-once="true"
                  className="md:h-96 lg:h-[30rem] overflow-hidden rounded-2xl">
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
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Portfolio;
