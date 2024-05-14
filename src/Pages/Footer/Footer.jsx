import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Footer = () => {
  return (
    <>
      <footer
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-anchor-placement="bottom"
        className=" bg-black text-white  absolute sm:bottom-0  sm:left-0 md:relative p-5 md:p-0 w-full"
      >
        <div className="container mx-auto flex flex-grow justify-center items-center">
          <a
            href="https://www.linkedin.com/in/abhijeet-mane-07012000/"
            className=" w-10 h-10  items-center justify-center md:flex hidden  mt-2 mr-2 mb-2"
          >
            <FaLinkedin size={20} />
          </a>
          
          <a
            href="https://github.com/AbhiMane07012000/"
            className="w-10 h-10 md:flex items-center hidden justify-center mt-2 mr-2 mb-2"
          >
            <FaGithubSquare size={20} />
          </a>

          <span className=" pb-3  md:mt-0 text-sm md:text-base  xl:p-[1.64rem]">
            &copy; 2024
            <a href="mailto:abhijeet.nitin.mane@gmail.com">Abhijeet Mane</a> All
            rights reserved.
          </span>
        </div>
      </footer>
   
    </>
  );
};

export default Footer;
