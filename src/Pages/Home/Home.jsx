import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Home = () => {
  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-anchor-placement="top-center"
           
        className="relative xl:h-[78.2vh] container mx-auto flex flex-col md:flex-col  xl:flex-row items-center justify-center  "
      >
        <div className="p-7 md:w-1/2 text-center md:text-left">
          <h2 className="text-xl text-black font-bold lg:text-3xl mb-4">
            Hi there,
            <br />
            <TypeAnimation
              sequence={[
                "I am Abhijeet Mane",
                4000,
                "I am Frontend Developer",
                4000,
                "I am Backend Developer",
                4000,
                "I am Full Stack Developer",
                4000,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </h2>
          <div className="container flex flex-row">
            <div className=" flex flex-col py-5 pr-2 md:pr-5">
              <a href="./AbhijeetManeResume.pdf" target="_blank" download>
                <button  className="bg-black border shadow-sm shadow-white border-white rounded-full text-white font-bold py-2 px-4 inline-flex items-center hover:bg-yellow-400 hover:text-black">
                  <span>Resume</span>
                  <span className="ml-2">
                    <FaArrowAltCircleDown size={20} />
                  </span>
                </button>
              </a>
            </div>
            <div className=" flex flex-col pl-1 py-5">
              <a href="mailto:abhijeet.nitin.mane@gmail.com">
                <button className="bg-black shadow-sm shadow-white border rounded-full text-white font-bold py-2 px-4  inline-flex items-center hover:bg-yellow-400 hover:text-black">
                  <span>Hire Me</span>
                  <span className="ml-2">
                    <CiMail size={20} />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          data-aos="flip-left"
          data-aos-duration="1000"
          className="py-32   px-11 md:p-7  md:w-1/2 "
        >
          <img
         
            className="w-full h-1/2 shadow-lg shadow-white  md:h-full md:max-w-md md:row mx-auto md:m-0 rounded-full"
            src= "./hero.png"
            alt="hero image"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
