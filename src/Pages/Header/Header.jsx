import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOnClick = () => {
    alert("Site Under Construction");
  };

  return (
    <header>
    <nav
      data-aos="fade-down"
      data-aos-duration="2000"
      className="py-4 bg-black text-white"
    >
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="flex-shrink-0 flex items-center">
            <NavLink
              to="/"
              className="text-white font-bold text-xl flex items-center"
            >
              <div className="h-10 w-10 rounded-full border border-white flex items-center justify-center mr-2 hover:bg-white hover:text-gray-800 transition duration-300">
                <span className="text-lg font-bold">AM</span>
              </div>
            </NavLink>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="hidden md:block "
          >
            <div className="pt-2">
              <NavLink
                to="/"
                className=" text-white  hover:text-gray-200 px-3 py-2   text-base  font-semibold"
              >
                Home
              </NavLink>
              <NavLink
                to="/education"
                className="text-white hover:text-gray-200  px-3 py-2 text-base font-semibold"
              >
                Education
              </NavLink>
              <NavLink
                to="/projects"
                className="text-white hover:text-gray-200 px-3 py-2  text-base  font-semibold "
              >
                Projects
              </NavLink>
              <NavLink
  
                to="/skills"
                className="text-white hover:text-gray-200 px-3 py-2  text-base  font-semibold "
              >
                Skills
              </NavLink>
              <NavLink
  
                to="/about-me"
                className="text-white hover:text-gray-200 px-3 py-2  text-base  font-semibold "
              >
                About Me
              </NavLink>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none "
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="md:hidden mt-2"
        >
          <NavLink
            to="/"
            className="block text-white hover:text-gray-700 px-3 py-2  text-base font-medium"
          >
            Home
          </NavLink>
          <NavLink
            to="/education"
            className="block text-white hover:text-gray-700 px-3 py-2  text-base font-medium"
          >
            Education
          </NavLink>
          <NavLink
            
            to="/projects"
            className="block text-white hover:text-gray-700 px-3 py-2  text-base font-medium"
          >
            Projects
          </NavLink>
          <NavLink
            to="/skills"
            className="block text-white hover:text-gray-700 px-3 py-2  text-base font-medium"
          >
            Skills
          </NavLink>
          <NavLink
            to="/about-me"
            className="block text-white hover:text-gray-700 px-3 py-2  text-base font-medium"
          >
            About Me
          </NavLink>
          <div className="grid grid-cols-6">
          <NavLink
            to="https://github.com/AbhiMane07012000/"
            className="block ml-3 text-white hover:text-gray-700 px-3 py-2  text-base font-medium"
          >
            <FaGithubSquare size={20}/>
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/in/abhijeet-mane-07012000/"
            className="block text-white hover:text-gray-700 px-3 py-2  text-base font-medium"
          >
            <FaLinkedin size={20}/>
          </NavLink>
          </div>
        </div>
      )}
    </nav>
    </header>
  );
};

export default Header;
