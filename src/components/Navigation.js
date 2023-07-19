import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const navMenu = [
    {
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      name: "About",
      link: "/about",
    },
  ];

  return (
    <nav className="py-5">
      <div className="w-full flex flex-wrap justify-between px-4 sm:px-8 lg:px-16">
        <Link to={"/"} className="font-bold text-lg">
          aditbagja
        </Link>
        <ul className="flex justify-between gap-4">
          {navMenu.map((menu) => (
            <li key={menu.name}>
              <Link to={menu.link} className="pb-2 text-lg relative group">
                {menu.name}
                <span className="absolute bottom-0 left-0 w-0 border-b-[1px] border-black transition-all group-hover:w-full duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
