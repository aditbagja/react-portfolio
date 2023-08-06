import React from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const sosmedItem = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/aditbagja/",
    },
    {
      name: "Github",
      href: "https://github.com/aditbagja",
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/aditbagja",
    },
  ];
  return (
    <section className="pt-14">
      <div className="w-full mb-3 px-2 lg:px-16">
        <h1 className="text-4xl lg:text-6xl font-extrabold uppercase text-center lg:text-left">
          Connect with us
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between mb-6 px-2 lg:px-16">
        <div className="flex justify-between mb-3 mx-auto lg:mx-0">
          {sosmedItem.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="mr-3 text-lg relative group">
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 border-b border-black transition-all group-hover:w-full duration-300"></span>
            </a>
          ))}
        </div>
        <button
          onClick={scrollToTop}
          className="mx-auto mb-3 text-lg hover:text-slate-600">
          Back to Top <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <p className="text-center text-lg">&copy; 2023 | aditbagja</p>
      </div>
    </section>
  );
};

export default Footer;
