import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import backupImg from "../../assets/img/portfolio/ffstarterkits/Mockup Backup.png";
import AOS from "aos";
import "aos/dist/aos.css";

const MockupFFStarterKits = () => {
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
      name: "Mockup Backup",
      src: "ffstarterkits/Mockup Backup.png",
    },
    {
      name: "Mockup Create Backup",
      src: "ffstarterkits/Mockup Create Backup.png",
    },
    {
      name: "Mockup Import",
      src: "ffstarterkits/Mockup Import.png",
    },
    {
      name: "Wireframe Backup",
      src: "ffstarterkits/Wireframe Backup.png",
    },
    {
      name: "Wireframe Import",
      src: "ffstarterkits/Wireframe Import.png",
    },
  ];

  useEffect(() => {
    AOS.init();
    document.title = "Fathforce Starter Kits Web Mockup";
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
                Fathforce Starter Kits
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1
                id="title2"
                className="text-5xl md:text-6xl lg:text-8xl uppercase font-extrabold leading-none tracking-tighter translate-y-full">
                Web Mockup
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap justify-between animate-fade animate-once animate-delay-500">
            <p className="w-11/12 md:w-2/3 text-xl lg:text-3xl font-medium leading-none mb-10 ">
              Web Mockup for FFStarterKits Web Apps that build and control your
              own website
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
            src={backupImg}
            alt="Mockup Backup FFStarterKits"
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
                During my internship program at PT Inovindo Digital Media, I had
                the opportunity to collaborate with a talented team in creating
                the Fathforce Starter Kits project. As part of the team, my role
                focused on designing and implementing the backup and import
                features web mockup using Figma, ensuring seamless functionality
                and an enhanced user experience.
              </p>
              <a
                href="https://www.figma.com/file/wkHBYg2Wa2MqfHh6u1tBwK/Mockup-backup-import?type=design&node-id=0%3A1&t=s32NUVYjy5yQqX7y-1"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-medium py-2 border-b border-black">
                View all mockup
              </a>
              <div className="mt-16 flex justify-between border-t border-slate-300 py-4">
                <p className="text-lg font-medium">Project Name </p>
                <p className="text-lg font-medium text-right">
                  Fathforce Starter Kits
                </p>
              </div>
              <div className="flex justify-between border-t border-slate-300 py-4">
                <p className="text-lg font-medium">Type </p>
                <p className="text-lg font-medium text-right">Web Mockup</p>
              </div>
              <div className="flex justify-between border-y border-slate-300 py-4">
                <p className="text-lg font-medium">Tech </p>
                <p className="text-lg font-medium text-right">Figma</p>
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
          <Link to="/web/ffstarterkits" className="group">
            <div
              data-aos="fade-up"
              data-aos-once="true"
              className="md:h-96 lg:h-[30rem] overflow-hidden rounded-2xl">
              <img
                src={require(`../../assets/img/portfolio/ffstarterkits/todo 1.png`)}
                alt="Fathforce Starter Kits"
                className="rounded-2xl max-w-lg sm:max-w-full object-cover transition duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between flex-col sm:flex-row mt-3 mb-10">
              <p className="font-semibold text-center">
                Fathforce Starter Kits To Do List
              </p>
              <p className="font-semibold text-center">Web Apps</p>
              <p className="font-semibold text-center">Laravel 8</p>
            </div>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MockupFFStarterKits;
