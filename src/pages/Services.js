import React from 'react'
import cst from "../img/CSTLogo.png";
import serubtse from "../img/ShreubtsheLogo.png";
import cnr from "../img/CNRLogo.png";
import gcbs from "../img/GCBSLogo.webp";
import jnec from "../img/JNECLogo.png";
import {BsFillArrowRightCircleFill} from "react-icons/bs"


const Services = () => {
  const incubationCenter=[
  {id:1,logo:cst,name:"College of Science and Technology",link:"https://www.facebook.com/profile.php?id=100083131992140"},
  {id:2,logo:serubtse,name:"Sherubtse College",link:"https://www.sherubtse.edu.bt/entrepreneurship-development-programme-edp-cell/"},
  {id:3,logo:gcbs,name:"Gedu College of Business Studies",link:"https://www.gcbs.edu.bt/?page_id=10593"},
  {id:4,logo:jnec,name:"Jigme Namgyal Engineering College",link:"https://www.jnec.edu.bt/en/entrepreneurship-and-innovation-center/"},
  {id:5,logo:cnr,name:"College of Natural Resources",link:"https://www.cnr.edu.bt/?page_id=1251"}]

  return (
    <div className=''>
      <h1 className='text-6xl font-medium text-center'>Services</h1>
      <h2 className='text-3xl font-semibold ml-[5%]' id="incubation"> Incubation Center</h2>
      <div className='w-[90%] my-5 py-5 rounded-md shadow-md bg-gray-200 mx-auto grid grid-cols-2  lg:grid-cols-3 place-items-center gap-5 '>
        {incubationCenter.map((item)=>{
          return <div className='bg-[#fff] rounded-[50px] shadow-sm p-5'>
          <a href={item.link}>
              <img src={item.logo} className='md:h-[180px] md:w-[180px] h-[100px] w-[100px]' alt="college_Incubation_center"/>
          </a>
          </div>
        })}
          <a href="/services/incubation-center-registration">
        <div className='bg-[#0d57d8] rounded-sm md:rounded-[50px] shadow-sm p-7 w-[120px] h-[120px] md:h-[200px] md:w-[200px] flex flex-col justify-center items-center'>
          <h1 className='text-[white] font-semibold text-sm md:text-xl text-center' >Register for an Incubation Space 
          </h1>
          <i className='text-3xl text-center text-white'><BsFillArrowRightCircleFill/></i> 
          </div>
          </a>
      </div>
    </div>
  )
}

export default Services