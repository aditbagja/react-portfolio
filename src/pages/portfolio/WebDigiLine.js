import React, { useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import digilineImg from "../../assets/img/portfolio/digiline/web/digiline 1.png";
import AOS from "aos";
import "aos/dist/aos.css";

const WebDigiLine = () => {
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
      name: "Dashboard",
      src: "digiline/web/digiline 1.png",
    },
    {
      name: "Kirim Saldo",
      src: "digiline/web/digiline 2.png",
    },
    {
      name: "Metode Pembayaran",
      src: "digiline/web/digiline 3.png",
    },
    {
      name: "Konfirmasi Pembayaran",
      src: "digiline/web/digiline 4.png",
    },
    {
      name: "Detail Transaksi",
      src: "digiline/web/digiline 5.png",
    },
  ];

  useEffect(() => {
    AOS.init();
    document.title = "DigiLine";
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
                DigiLine
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1
                id="title2"
                className="text-5xl md:text-6xl lg:text-8xl uppercase font-extrabold leading-none tracking-tighter translate-y-full">
                Web Apps
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap justify-between animate-fade animate-once animate-delay-500">
            <p className="w-11/12 md:w-2/3 text-xl lg:text-3xl font-medium leading-none mb-10">
              DigiLine Web Apps that control your e-wallet transfer
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
            src={digilineImg}
            alt="DigiLine Dashboard"
            className="rounded-2xl object-cover h-[50vh] md:h-full w-full"
          />
        </div>
        <div className="container mx-auto py-32 px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3">
              <p className="text-lg font-medium">(001)</p>
            </div>
            <div className="w-full lg:w-2/3 ">
              <p className="text-3xl font-medium mb-20">
                After finalizing the web mockup for DigiLine, I channeled my
                expertise into developing the web application using Laravel 10.
                It's important to note that this initial concept of DigiLine
                does not include a payment gateway, as it serves as a proof of
                concept to showcase the core functionality and features of the
                application. Rest assured, future iterations of DigiLine may
                incorporate additional functionalities, including a payment
                gateway, as the project evolves.
              </p>
              <a
                href="https://github.com/aditbagja/digiline"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-medium py-2 border-b border-black">
                View source code
              </a>
              <div className="mt-16 flex justify-between border-t border-slate-300 py-4">
                <p className="text-lg font-medium">Project Name </p>
                <p className="text-lg font-medium text-right">DigiLine</p>
              </div>
              <div className="flex justify-between border-t border-slate-300 py-4">
                <p className="text-lg font-medium">Type </p>
                <p className="text-lg font-medium text-right">Web Apps</p>
              </div>
              <div className="flex justify-between border-y border-slate-300 py-4">
                <p className="text-lg font-medium">Tech </p>
                <p className="text-lg font-medium text-right">Laravel 10</p>
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
          <a href="/web/bandung-creative-hub" className="group">
            <div
              data-aos="fade-up"
              data-aos-once="true"
              className="md:h-96 lg:h-[30rem] overflow-hidden rounded-2xl">
              <img
                src={require(`../../assets/img/portfolio/bandung-creative-hub/home.jpg`)}
                alt="Bandung Creative Hub"
                className="rounded-2xl max-w-lg sm:max-w-full object-cover transition duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between flex-col sm:flex-row mt-3 mb-10">
              <p className="font-semibold text-center">Bandung Creative Hub</p>
              <p className="font-semibold text-center">Landing Pages</p>
              <p className="font-semibold text-center">HTML, CSS, Javascript</p>
            </div>
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WebDigiLine;
