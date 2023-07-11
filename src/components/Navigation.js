import React from "react";

const Navigation = () => {
  const navMenu = [
    {
      name: "Portfolio",
      href: "/portfolio",
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  return (
    <nav className="py-5">
      <div className="w-full flex flex-wrap justify-between px-4 sm:px-8 lg:px-16">
        <a href="/" className="font-bold text-lg">
          aditbagja
        </a>
        <ul className="flex justify-between">
          <li>
            {navMenu.map((menu) => (
              <a
                key={menu.name}
                href={menu.href}
                className="px-2 py-2 text-lg relative group">
                {menu.name}
                <span className="absolute bottom-0 left-0 w-0 border-b-[1px] border-black transition-all group-hover:w-full duration-300"></span>
              </a>
            ))}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
