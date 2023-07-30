import React, { useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import bchImg from "../../assets/img/portfolio/bandung-creative-hub/home.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const WebBCH = () => {
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

  const images = [
    {
      name: "Home",
      src: "bandung-creative-hub/home.jpg",
    },
    {
      name: "Event",
      src: "bandung-creative-hub/event.png",
    },
    {
      name: "Media",
      src: "bandung-creative-hub/media.png",
    },
    {
      name: "Music",
      src: "bandung-creative-hub/music.png",
    },
    {
      name: "Studio Animation",
      src: "bandung-creative-hub/studio animation.png",
    },
  ];

  useEffect(() => {
    AOS.init();
    document.title = "Bandung Creative Hub";
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
                Bandung Creative Hub
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
              Bandung Creative Hub Landing Pages Concept
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
            src={bchImg}
            alt="Bandung Creative Hub Home"
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
                As part of an inspiring collaboration, I brought the Bandung
                Creative Hub landing pages to life, building upon the design
                crafted by my talented colleague, a skilled UI/UX designer.
                Working closely together, we ensured a seamless fusion of
                captivating visuals and intuitive user experience, resulting in
                a stunning representation of the Bandung Creative Hub's unique
                identity and offerings.
              </p>
              <a
                href="https://bandung-creative-hub.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-medium py-2 border-b border-black">
                View Demo
              </a>
              <div className="mt-16 flex justify-between border-t border-slate-300 py-4">
                <p className="text-lg font-medium">Project Name </p>
                <p className="text-lg font-medium text-right">
                  Bandung Creative Hub
                </p>
              </div>
              <div className="flex justify-between border-t border-slate-300 py-4">
                <p className="text-lg font-medium">Type </p>
                <p className="text-lg font-medium text-right">Landing Pages</p>
              </div>
              <div className="flex justify-between border-y border-slate-300 py-4">
                <p className="text-lg font-medium">Tech </p>
                <p className="text-lg font-medium text-right">
                  HTML, CSS, Javascript
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-32 mx-auto w-11/12">
          {images.map((img) => (
            <div
              data-aos="fade-up"
              data-aos-once="true"
              key={img.name}
              className="bg-slate-100 p-2 lg:p-6 mb-10 rounded-2xl">
              <a
                href={require(`../../assets/img/portfolio/${img.src}`)}
                target="blank"
                rel="noreferrer">
                <img
                  key={img.name}
                  src={require(`../../assets/img/portfolio/${img.src}`)}
                  alt={img.name}
                  className="rounded-lg"
                />
              </a>
            </div>
          ))}
        </div>
        <div className="py-32 mx-auto w-11/12">
          <p className="text-4xl md:text-6xl uppercase font-extrabold mb-5">
            Next Portfolio
          </p>
          <Link to="/web/newsletter" className="group">
            <div
              data-aos="fade-up"
              data-aos-once="true"
              className="md:h-96 lg:h-[30rem] overflow-hidden rounded-2xl">
              <img
                src={require(`../../assets/img/portfolio/newsletter/home.png`)}
                alt="Newsletter"
                className="rounded-2xl max-w-lg sm:max-w-full object-cover transition duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between flex-col sm:flex-row mt-3 mb-10">
              <p className="font-semibold text-center">Newsletter</p>
              <p className="font-semibold text-center">Landing Pages</p>
              <p className="font-semibold text-center">Tailwind CSS</p>
            </div>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WebBCH;
