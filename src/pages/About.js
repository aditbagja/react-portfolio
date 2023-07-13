import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import resume from "../assets/files/CV Adit Bagja.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useLayoutEffect(() => {
    gsap.to("#title", {
      y: 0,
      delay: 0.2,
      duration: 0.5,
    });
  });

  const services = [
    {
      no: "01.",
      name: "lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque, officia eaque omnis quasi natus?",
    },
    {
      no: "02.",
      name: "lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque, officia eaque omnis quasi natus?",
    },
    {
      no: "03.",
      name: "lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque, officia eaque omnis quasi natus?",
    },
  ];

  const contact = [
    {
      name: "WhatsApp",
      href: "https://wa.me/6285295185905",
    },
    {
      name: "E-Mail",
      href: "mailto:aditbagja44@gmail.com",
    },
  ];
  useEffect(() => {
    AOS.init();
    document.title = "About";
  }, []);

  return (
    <>
      <Navigation />
      <section className="pt-10">
        <div className="h-[100vh] px-4 sm:px-8 lg:px-16">
          <div className="w-full mb-6 overflow-hidden">
            <h1
              id="title"
              className="text-5xl md:text-6xl lg:text-8xl uppercase font-extrabold translate-y-full">
              About
            </h1>
          </div>
          <div className="w-11/12 md:w-2/3">
            <p className="text-xl lg:text-4xl font-medium leading-none mb-10 animate-fade animate-once animate-delay-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
              minima cupiditate laudantium quod nihil ratione!
            </p>
          </div>
        </div>
        <div className="px-4 sm:px-8 lg:px-16">
          <div className="flex flex-wrap justify-between">
            <p className="text-lg font-medium">Know About me </p>
            <p className="text-lg font-medium">
              Discover <FontAwesomeIcon icon={faArrowDown} />
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            className="flex flex-wrap py-32">
            <div className="w-full md:w-1/3">
              <p className="text-lg font-medium">(001)</p>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-3xl font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                ad quidem nemo, esse maiores quaerat, consequuntur blanditiis
                earum, sit quo sunt porro! Aliquid, dolore rem.
              </p>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-8xl uppercase font-extrabold mb-10">
            Services
          </h1>
          {services.map((service) => (
            <div key={service.no} className="w-full py-10 border-y">
              <div
                data-aos="fade-up"
                data-aos-once="true"
                className="flex flex-wrap">
                <div className="w-full lg:w-1/12 hidden lg:flex">
                  <p className="text-lg font-medium">{service.no}</p>
                </div>
                <div className="w-full lg:w-4/12 lg:px-5 mb-5">
                  <p className="text-3xl font-medium leading-none tracking-tighter">
                    {service.name}
                  </p>
                </div>
                <div className="w-full lg:w-7/12 lg:px-12">
                  <p className="text-lg font-medium text-gray-500">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div
            data-aos="fade-up"
            data-aos-once="true"
            className="flex flex-col py-6">
            <h1 className="text-2xl font-extrabold uppercase mb-3">
              Get my resume
            </h1>
            <a
              href={resume}
              download
              className="w-fit border border-black rounded-full p-4 hover:border-white hover:bg-black hover:text-white transition duration-300">
              Get Resume
            </a>
          </div>
          <div className="w-full py-32">
            <h1 className="text-5xl md:text-6xl lg:text-8xl uppercase font-extrabold mb-10">
              Get in touch
            </h1>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              className="flex flex-wrap">
              <div className="w-full md:w-1/3">
                <p className="text-lg font-medium">(002)</p>
              </div>
              <div className="w-full md:w-2/3 py-3">
                <p className="text-3xl font-medium">
                  Im always free to collaborate and new opportunities. If you
                  have any question or need help with a project, feel free to
                  contact me from link below
                </p>
                <div className="flex flex-wrap mt-5">
                  {contact.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mr-3 text-xl relative group">
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 border-b border-black transition-all group-hover:w-full duration-300"></span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
