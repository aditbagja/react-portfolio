import React, { useLayoutEffect } from "react";
import Navigation from "../components/Navigation";
import { gsap } from "gsap";
import Footer from "../components/Footer";

const Portfolio = () => {
  useLayoutEffect(() => {
    gsap.to("#title", {
      y: 0,
      delay: 0.2,
      duration: 0.5,
      opacity: 1,
    });
  });

  const portfolio = [
    {
      name: "Fathforce Starter Kits",
      description: "Web Mockup",
      tech: "Figma",
      img: "ffstarterkits/Mockup Backup.png",
      href: "/mockup/ffstarterkits",
    },
    {
      name: "Fathforce Starter Kits",
      description: "Web Apps",
      tech: "Laravel 8",
      img: "ffstarterkits/todo 1.png",
      href: "/web/ffstarterkits",
    },
    {
      name: "DigiLine",
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
  return (
    <>
      <Navigation />
      <section className="pt-10">
        <div className="container">
          <div className="h-[100vh] px-4 sm:px-8 lg:px-16">
            <div className="w-full mb-6">
              <h1
                id="title"
                className="text-5xl md:text-6xl lg:text-8xl uppercase font-extrabold tracking-tighter translate-y-full opacity-0">
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
        <div className="px-4 sm:px-8 lg:px-16">
          <div className="relative overflow-hidden bg-cover bg-no-repeat w-11/12 sm:w-full">
            {portfolio.map((selected) => (
              <a key={selected.name} href={selected.href}>
                <div className="md:h-96 lg:h-[30rem] overflow-hidden rounded-2xl">
                  <img
                    src={require("../assets/img/portfolio/" + selected.img)}
                    alt={selected.name}
                    className="rounded-2xl max-w-lg sm:max-w-full object-cover transition duration-300 ease-in-out hover:scale-105"
                  />
                </div>
                <div className="flex justify-between flex-col sm:flex-row mt-3 mb-10">
                  <p className="font-semibold">{selected.name}</p>
                  <p className="font-semibold">{selected.description}</p>
                  <p className="font-semibold">{selected.tech}</p>
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
