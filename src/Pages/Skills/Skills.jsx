import React from "react";
import Loading from "../Loading/Loading";
import { FaLaptopCode } from "react-icons/fa6";
import SkillCard from "../../Components/SkillCard/SkillCard";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Skills = () => {
  const skillData = [
    {
      skillName: "React",
      imgName: "react.svg",
    },
    {
      skillName: "Node JS",
      imgName: "nodejs.svg",
    },
    {
      skillName:"Redux",
      imgName:"redux.svg"     
    },
    {
      skillName: "Express JS",
      imgName: "express.svg",
    },
    {
      skillName: "REST API",
      imgName: "api.svg",
    },
    {
      skillName: "Material UI",
      imgName: "materialUI.svg",
    },
    {
      skillName: "Tailwind",
      imgName: "tailwind.svg",
    },
    {
      skillName: "BootStrap",
      imgName: "Bootstrap.svg",
    },
    {
      skillName: "Android",
      imgName: "android.svg",
    },
    {
      skillName: "C",
      imgName: "c.svg",
    },
    {
      skillName: "C++",
      imgName: "cpp.svg",
    },
    {
      skillName: "Java",
      imgName: "java.svg",
    },
    {
      skillName: "Javascript",
      imgName: "js.svg",
    },
    {
      skillName: "HTML",
      imgName: "html.svg",
    },
    {
      skillName: "CSS",
      imgName: "css.svg",
    },
    {
      skillName: "PHP",
      imgName: "php.svg",
    },
    {
      skillName: "Python",
      imgName: "python.svg",
    },
    {
      skillName: "MySQL",
      imgName: "mysql.svg",
    },
    {
      skillName: "PostgreSQL",
      imgName: "pgsql.svg",
    },
    {
      skillName: "MongoDB",
      imgName: "mongodb.svg",
    },
    {
      skillName: "Strapi",
      imgName: "strapi.svg",
    },
    {
      skillName: "Netlify",
      imgName: "netlify.svg",
    },
    {
      skillName: "Git",
      imgName: "git.svg",
    },
    {
      skillName: "Github",
      imgName: "github.svg",
    },
    
  ];

  return (
    <Loading>
      <div  className=" md:p-12  ">
        <div className=" flex items-center justify-center flex-col py-5 pr-3">
          <div data-aos="zoom-out" data-aos-duration="2500" className="py-2 px-4 font-bold inline-flex items-center ">
            <span className="ml-2">
              <FaLaptopCode size={30} />
            </span>
            <span className="text-xl md:text-3xl pl-4">Skills & Abilities</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3  xl:grid-cols-5  pb-3 px-5 xl:px-28    ">
          {skillData.map((skill) => {
            return (
              <div className="p-5 md:p-11  ">
                <div  data-aos="zoom-in" data-aos-duration="3000" className="bg-white outline border border-black outline-black outline-2 outline-offset-8 text-black  rounded-lg text-center">
                  <SkillCard
                    skillName={skill.skillName}
                    iconName={skill.imgName}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Loading>
  );
};

export default Skills;
