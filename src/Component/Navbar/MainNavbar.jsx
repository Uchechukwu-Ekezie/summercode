import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../Navbar/Navbar.css";
import Button from "../Button/Button";

function MainNavbar({ Enroll }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navItems = [
    { id: 1, text: "Home", link: "/" },
    {
      id: 2, text: "Section", items: [
        { id: 2.1, text: "Children Bootcamp", link: "/childrenhome" },
        { id: 2.2, text: "Adult Bootcamp", link: "/adulthome" },
      ]
    },
    { id: 3, text: "Contact", link: "/contact" },
  ];

  return (
    <header className="fixed z-50 w-full shadow-md bg-[#48758E]">
      <div className="container flex items-center justify-between px-2 mx-auto my-2 md:px-6 lg:py-2">
        <Link to="/" className="flex-col items-center justify-center lg:flex">
          <img
            src="/Assets/Image/logo.png"
            alt="logo"
            className="h-[45px] w-auto ml-4 lg:ml-[-1rem]"
          />
          <h1 className="text-white">Glitz Tutors</h1>
        </Link>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <AiOutlineClose className="w-8 h-8" />
            ) : (
              <AiOutlineMenu className="w-8 h-8" />
            )}
          </button>
        </div>

        <nav
          className={`${
            isOpen ? "translate-y-0" : "translate-x-full"
          } fixed top-14 right-0 w-2/4 h-full bg-[#48758E] transition-transform duration-300 ease-in-out md:static md:flex md:w-auto md:h-auto md:bg-transparent md:translate-x-0`}
        >
          <ul className="flex flex-col items-start justify-center h-full p-6 space-y-6 md:flex-row md:space-y-0 md:space-x-8 md:p-0">
            {navItems.map((item) => (
              <li key={item.id} className="relative md:border-none">
                {item.items ? (
                  <>
                    <button
                      onClick={toggleDropdown}
                      className="block font-semibold transition-all text-[#f9f9fa] hover:font-bold md:text-base"
                    >
                      {item.text}
                    </button>
                    {isDropdownOpen && (
                      <ul className="absolute left-0 mt-2 space-y-2 text-black bg-white rounded-md shadow-lg">
                        {item.items.map((subItem) => (
                          <li key={subItem.id}>
                            <NavLink
                              to={subItem.link}
                              className="block px-4 py-2 hover:bg-gray-200"
                              onClick={() => {
                                toggleMenu();
                                setIsDropdownOpen(false);
                              }}
                            >
                              {subItem.text}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.link}
                    className="block font-semibold transition-all text-[#f9f9fa] hover:font-bold md:text-base"
                    onClick={toggleMenu}
                  >
                    {item.text}
                  </NavLink>
                )}
              </li>
            ))}
            <li className="mt-4 md:hidden">
              <Link to="/contact">
                <Button
                  txt="Speak With Us"
                  className="text-black bg-white rounded-xl"
                />
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden md:block">
          <Link to="/contact">
            <Button
              txt="Speak With Us"
              className="text-black bg-white rounded-xl"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default MainNavbar;
