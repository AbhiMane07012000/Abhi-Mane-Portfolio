import React from "react";
import Loading from "../Loading/Loading";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import { FaLaptopCode } from "react-icons/fa6";


const Projects = () => {
  return (
    <Loading>
     
      <div className="relative items-center justify-center">
        <div
          className=" p-5 font-bold text-center"
          data-aos="zoom-out"
          data-aos-duration="1500"
          
        >
           <div className=" flex items-center justify-center flex-col py-5 pr-3">
              
              <div  className="font-bold py-2 px-4 inline-flex items-center ">
              <span className="ml-2">
                  <FaLaptopCode size={30} />
                </span>
                <span className="text-xl md:text-3xl pl-4">PROJECT MADE</span>
               
              </div>
           
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div
            className="p-10 "
            data-aos="zoom-in"
            data-aos-duration="2500"
            
          >
            <ProjectCard
              imgSrc="shopify.png"
              projectName="SHOPIFY"
              details="With this application, you can purchase smartwatches, wireless earbuds, Bluetooth speakers and headphones. Products are divided by category wise, so users get products according to their needs. Customers can add products to their carts providing the quantity of each item they want to buy. Additionally, they can manage the quantity of products then remove items out from the cart. After viewing the Total of their purchases, users can proceed with payment through RazorPay."
              link="https://github.com/AbhiMane07012000/E-Commerce_WebSite/"
            />
          </div>
          <div
            className="p-10 "
            data-aos="zoom-in"
            data-aos-duration="2500"
            data-aos-anchor-placement="top-center"
          >
           <ProjectCard
              imgSrc="Keeper App.png"
              projectName="NOTE KEEPER"
              details="This application keeps records of all notes that user want to take. In this application users would be able to take notes they need to take. Users can also delete notes they don’t want it."
              link="https://github.com/AbhiMane07012000/Note-Keeper"
            />
          </div>

         
        </div>
      </div>
    </Loading>
  );
};

export default Projects;
