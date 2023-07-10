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
      href: "https://www.linkedin.com/in/adit-bagja-septiana-22727718a/",
    },
  ];
  return (
    <section className="pt-14">
      <div className="container mx-auto">
        <div className="w-full block items-center justify-center mb-3 px-2 lg:px-6">
          <h1 className="text-4xl lg:text-6xl font-extrabold uppercase text-center lg:text-left">
            Connect with us
          </h1>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between mb-6 px-2 lg:px-6">
          <div className="px-2 lg:px-0 flex justify-between mb-3">
            {sosmedItem.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="px-2 text-lg relative group">
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 border-b-[1px] border-black transition-all group-hover:w-full duration-300"></span>
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
      </div>
    </section>
  );
};

export default Footer;
