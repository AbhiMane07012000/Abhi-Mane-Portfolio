import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import Loading from "../Loading/Loading";
import CourseDetails from "../../Components/CourseDetails/CourseDetails";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Education = () => {
  return (
    <Loading>
      <div className="relative">
        <div
          className=" p-5 font-bold text-center"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-anchor-placement="top-center"
        >
        
        <div className=" flex items-center justify-center flex-col py-5 pr-3">
              
                <div  className=" text-black font-bold py-2 px-4 inline-flex items-center ">
                <span className="ml-2">
                    <FaGraduationCap size={30}/>
                  </span>
                  <span className="text-xl md:text-3xl pl-4">Education</span>
                 
                </div>
             
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
          <div
            className="p-10 "
            data-aos="zoom-out"
            data-aos-duration="2500"
            data-aos-anchor-placement="top-center"
          >
            <CourseDetails
              courseName="MSc - Computer Science"
              collegeName="Modern College"
              year="2021-2023"
              details="Learned The fundamental Concepts of Cloud Computing, Database Technologies, Web Frameworks, Advanced Operating
            System, Mobile Technologies (Android), Software Architecture & Design Patterns, Machine Learning,
            Software Project Management."
              percentage="8.50 CGPA"
            />
          </div>
          <div
            className="p-10 "
            data-aos="zoom-out"
            data-aos-duration="2500"
            data-aos-anchor-placement="top-center"
          >
            <CourseDetails
              courseName="BSc - Computer Science"
              collegeName="Modern College"
              year="2017-2021"
              details="Learned The fundamental Concepts of Programming, Object-oriented Concepts and
            Database Concept such as Polymorphism, Inheritance, Encapsulation, Data Abstraction,
            Class, Object, CURD operation, view, Cursor, Trigger and Relationships and Joints."
            />
          </div>

          <div className="p-10 " data-aos="zoom-out" data-aos-duration="2500">
            <CourseDetails
              courseName="Higher Secondary"
              collegeName="N.M.V High School & Junior College"
              year="2016-2017"
              details="Maharashtra state board of secondary & higher secondary education ,Pune."
            />
          </div>
          <div className="p-10 " data-aos="zoom-out" data-aos-duration="2500">
            <CourseDetails
              courseName="Secondary Schooling"
              collegeName="N.M.V High School & Junior College"
              year="2014-2015"
              details="Maharashtra state board of secondary & higher secondary education ,Pune."
            />
          </div>
        </div>
      </div>
    </Loading>
  );
};

export default Education;
