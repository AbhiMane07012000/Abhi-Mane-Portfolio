import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({projectName,details,link,imgSrc}) => {
  return (
    <div className="max-w-full  xl:max-w-xl rounded-lg  shadow-lg bg-white">
      <div className="px-6 py-6 ">
        <img className="w-100 xl:w-full" src={`./${imgSrc}`} alt="Project Image" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-sm xl:text-xl mb-2">{projectName}</div>
        <p className="text-gray-700  text-xs xl:text-xl  truncate  text-justify ">
          {details}
        </p>
        <div className=" flex flex-col py-5">
              <a href={link}>
                <button className="bg-black sm:text-xs shadow-sm shadow-white border rounded-full text-white font-bold py-2 px-4 inline-flex items-center hover:bg-yellow-400 hover:text-black">
                  <span className="text-sm xl:text-lg" >View Source</span>
                  <span className="ml-2">
                    <FaGithub size={20} />
                  </span>
                </button>
              </a>
            </div>
      </div>
    </div>
  );
};

export default ProjectCard;
