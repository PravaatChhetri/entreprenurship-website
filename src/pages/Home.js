import React,{ useState,useEffect,useRef} from 'react'

import Counter from "../components/Counter.js"
import herobg1 from "../assets/images/hero-bg1.jpg"
import herobg2 from "../assets/images/hero-bg2.jpg"
import herobg3 from "../assets/images/hero-bg3.jpg"
import herobg4 from "../assets/images/hero-bg4.jpg"
import user1 from "../assets/images/user.jpg"
import event1 from "../assets/images/hackathon.jpg"
import {CiCircleChevRight, CiCircleChevLeft} from "react-icons/ci"





const Home = () => {
  return (
    // hero section
    <div className="bg-slate-200">
      <img src={herobg1} alt="Hero Background" className="w-full h-[400px] object-fit object-bottom"/>


      {/* Announcement section */}
      <div>
        <h1 className="text-[35px] font-bold text-center mt-8 text-[#1d83bd]">
          Announcements
        </h1>

        <div className="flex justify-center">
          <div className="flex flex-col mt-8">
            {/* Announcement items */}
            <div className="flex flex-col lg:flex-row mb-6">
              <div className="bg-blue-500 w-[120px] h-[120px] pt-3 rounded-lg text-center">
                <p className="text-6xl">15</p>
                <p className="font-bold">June 2023</p>
              </div>
              <div className="pt-6 pl-4">
                <p className="font-bold">Bhutan Startup Hackathon Challenge</p>
                <p>Empowering Start-up Ecosystem through Digital Transformation..Read more</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row mb-6">
              <div className="bg-blue-500 w-[120px] h-[120px] pt-3 rounded-lg text-center">
                <p className="text-6xl">05</p>
                <p className="font-bold">March 2023</p>
              </div>
              <div className="pt-6 pl-4">
                <p className="font-bold">Bhutan Startup Hackathon Challenge</p>
                <p>Empowering Start-up Ecosystem through Digital Transformation..Read more</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row mb-6">
              <div className="bg-blue-500 w-[120px] h-[120px] pt-3 rounded-lg text-center">
                <p className="text-6xl">05</p>
                <p className="font-bold">March 2023</p>
              </div>
              <div className="pt-6 pl-4">
                <p className="font-bold">Bhutan Startup Hackathon Challenge</p>
                <p>Empowering Start-up Ecosystem through Digital Transformation..Read more</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Events section */}
      <div className="bg-white pt-10 pb-20">
        <h1 className="text-[35px] font-bold text-center text-[#1d83bd]">
          Events
        </h1>

        {/* Event items */}
        <div className="flex justify-center flex-row row-span-3 gap-16 mt-10">
        <CiCircleChevLeft className="w-10 h-10"/>
          {/* Event 1 */}
          <div className="card w-80 h-[450px] bg-slate-100 shadow-lg">
            <figure className="px-10 pt-10">
              <img src={event1} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title pt-5 font-bold text-xl">Bhutan Startup Hackathon Challenge</h2>
              <p className="text-xs pt-3">Empowering Start-up Ecosystem through Digital Transformation</p>
              <div className="card-actions">
                <button className="btn btn-primary p-2 mt-3 border-2 border-blue-500 rounded-lg font-semibold hover:bg-blue-500 hover:text-white">Read More</button>
              </div>
            </div>
          </div>

          {/* Event 2 */}
          <div className="card w-80 h-[450px] bg-slate-100 shadow-lg">
            <figure className="px-10 pt-10">
              <img src={event1} className="rounded-xl"  />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title pt-5 font-bold text-xl">Bhutan Startup Hackathon Challenge</h2>
              <p className="text-xs pt-3">Empowering Start-up Ecosystem through Digital Transformation</p>
              <div className="card-actions">
                <button className="btn btn-primary p-2 mt-3 border-2 border-blue-500 rounded-lg font-semibold hover:bg-blue-500 hover:text-white">Read More</button>
              </div>
            </div>
          </div>

          {/* Event 3 */}
          <div className="card w-80 h-[450px] bg-slate-100 shadow-lg">
            <figure className="px-10 pt-10">
              <img src={event1} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title pt-5 font-bold text-xl">Bhutan Startup Hackathon Challenge</h2>
              <p className="text-xs pt-3">Empowering Start-up Ecosystem through Digital Transformation</p>
              <div className="card-actions">
                <button className="btn btn-primary p-2 mt-3 border-2 border-blue-500 rounded-lg font-semibold hover:bg-blue-500 hover:text-white">Read More</button>
              </div>
            </div>
          </div>
          <CiCircleChevRight className="w-10 h-10"/>
        </div>
      </div>

      {/* counter */}
      <Counter/>

      {/* testimonials */}
      <div>
        <h1 className="text-[35px] font-bold text-center mt-8 text-slate-600">
          Testimonials
        </h1>

        <div className="flex flex-row row-span-2 gap-20 py-14 justify-center">
          {/* testimonial 1 */}
          <div className="card w-80 h-[450px] bg-slate-100 border-4 border-t-blue-500 rounded-3xl">
              <div className="mx-[35%] my-10 w-28 rounded-full">
                <img src={user1} className="rounded-full" />
              </div>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-xl text-blue-500">Pravaat</h2>
                <p className="p-5 text-justify">"Thanks to Startup Bhutan, my business has experienced exponential growth. Highly recommended!"</p>
              </div>
          </div>

          {/* testimonial 2 */}
          <div className="card w-80 h-[450px] bg-slate-100 border-4 border-t-blue-500 rounded-3xl">
              <div className="mx-[35%] my-10 w-28 rounded-full">
                <img src={user1} className="rounded-full" />
              </div>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-xl text-blue-500">Dechen</h2>
                <p className="p-5 text-justify">"Startup Bhutan has been a game-changer for our startup. Their network, resources, and guidance have helped us scale our business and reach new heights."</p>
              </div>
          </div>

        </div>
      </div>

      {/* Booking Incubation space */}
      {/* <div className="flex flex-row row-span-2 h-[550px]">
        <div className="bg-blue-500 w-[30%]">
          <h1 className="text-center font-bold text-4xl text-white pt-8 px-24">Book Your Incubation Space Here!</h1>
        </div>
        {/* form 
       
      </div> */}


    </div>
  )
}

export default Home