import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const SkillCard = ({iconName,skillName}) => {
  console.log(iconName , skillName)
  return (
    <div className='flex flex-col '>
        <div  className='justify-center pt-3  px-6 items-center'><img src={`./${iconName}`} alt="skill_image" /></div>
        <div   className='text-xs md:text-sm font-bold py-2  px-2 '><h4>{skillName}</h4></div>
    </div>
  )
}

export default SkillCard