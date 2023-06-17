import React from "react";
import Pg from "../img/programs.jpeg";
import {FcConferenceCall} from "react-icons/fc";
import {MdEmojiObjects} from "react-icons/md";
import {GiPublicSpeaker} from "react-icons/gi";
import {BsCalendarWeekFill} from "react-icons/bs";

const Program = () => {
  return (
    <div className="mb-10">
      <div className="">
        <div className="relative flex justify-center items-start h-[400px] w-auto">
          <img
            src={Pg}
            alt="Startup Background"
            className="w-full lg:h-full relative object-center object-cover"
          />
          <h1 className="absolute mt-6 text-3xl lg:bottom-10 left-0 px-6 py-10 font-bold text-white md:px-20 md:py-10 md:text-8xl">
            Program{" "}
          </h1>
        </div>
      </div>
      I
      <div className="relative container mx-auto mt-8 min-w-xl max-w-[80vw] justify-center">
        <h2 id="vision" className="text-2xl font-bold my-4 text-[#1d83bd] ">
          Startup Events
        </h2>
        <div className=" bg-white shadow-md rounded-lg p-6 mx-auto flex flex-wrap justify-center">
        <div className=" w-[300px] h-[300px] rounded-lg flex flex-col justify-center items-center">
          <i className="text-[150px]"><BsCalendarWeekFill/></i>
          <p className="text-gray-700 font-semibold text-xl mt-5 ">Startup Weekend</p>
          </div>
          <div className=" w-[300px] h-[300px] rounded-lg flex flex-col justify-center items-center">
          <i className="text-[160px]"><MdEmojiObjects/></i>
          <p className="text-gray-700 font-semibold text-xl ml-6 mt-5">Demo Day</p>          
          </div>
          <div className=" w-[300px] h-[300px] rounded-lg flex flex-col justify-center items-center">
          <i className="text-[150px]"><GiPublicSpeaker/></i>
          <p className="text-gray-700 font-semibold text-xl mt-5">Pitch Competitions</p>
          </div>
          <div className=" w-[300px] h-[300px] rounded-lg flex flex-col justify-center items-center">
          <i className="text-[150px]"><FcConferenceCall/></i>
          <p className="text-gray-700 font-semibold text-xl mt-5">Startup Conferences</p>
          </div>
        </div>
      </div>
      <div className="relative container mx-auto mt-8 min-w-xl max-w-[80vw] justify-left">
        <h2 id="mission" className="text-2xl font-bold my-4 text-[#1d83bd]">
          Training
        </h2>
        <div className=" bg-white shadow-md rounded-lg p-6 mx-auto flex flex-wrap justify-center">
        <div className=" w-[300px] h-[300px] rounded-lg flex flex-col justify-center items-center">
          <i className="text-[150px]"><BsCalendarWeekFill/></i>
          <p className="text-gray-700 font-semibold text-xl mt-5 ">Entrepreneurship Training</p>
          </div>
          <div className=" w-[300px] h-[300px] rounded-lg flex flex-col justify-center items-center">
          <i className="text-[160px]"><MdEmojiObjects/></i>
          <p className="text-gray-700 font-semibold text-xl ml-6 mt-5">Startup Management Training</p>          
          </div>
          <div className=" w-[300px] h-[300px] rounded-lg flex flex-col justify-center items-center">
          <i className="text-[150px]"><GiPublicSpeaker/></i>
          <p className="text-gray-700 font-semibold text-xl text-center mt-5">Technology and Innovation Training</p>
          </div>
          <div className=" w-[300px] h-[300px] rounded-lg flex flex-col justify-center items-center">
          <i className="text-[150px]"><FcConferenceCall/></i>
          <p className="text-gray-700 font-semibold text-xl mt-5">Sales and Marketing Training</p>
          </div>
        </div>
      </div>
      <div className="relative container mx-auto mt-8 min-w-xl max-w-[80vw] justify-left">
        <h2 id="PandR" className="text-2xl font-bold my-4 text-[#1d83bd]">
          Mentoring Programs
        </h2>
        <div className=" bg-white shadow-md rounded-lg p-6 mx-auto flex flex-wrap justify-center">
        <div className=" w-[300px] h-[300px] rounded-lg flex flex-col justify-center items-center">
          <i className="text-[150px]"><BsCalendarWeekFill/></i>
          <p className="text-gray-700 font-semibold text-xl mt-5 ">Incubator Mentoring</p>
          </div>
          <div className=" w-[300px] h-[300px] rounded-lg flex flex-col justify-center items-center">
          <i className="text-[160px]"><MdEmojiObjects/></i>
          <p className="text-gray-700 font-semibold text-xl ml-6 mt-5">Industry-Specific Mentoring</p>          
          </div>
          <div className=" w-[300px] h-[300px] rounded-lg flex flex-col justify-center items-center">
          <i className="text-[150px]"><GiPublicSpeaker/></i>
          <p className="text-gray-700 font-semibold text-xl mt-5">Peer Mentoring Networks</p>
          </div>
          <div className=" w-[300px] h-[300px] rounded-lg flex flex-col justify-center items-center">
          <i className="text-[150px]"><FcConferenceCall/></i>
          <p className="text-gray-700 font-semibold text-xl mt-5">Corporate Mentoring Programs</p>
          </div>
        </div>
      </div>
      <div className="relative container mx-auto mt-8 min-w-xl max-w-[80vw] justify-left">
        <h2 id="framework" className="text-2xl font-bold my-4 text-[#1d83bd]">
          Promotion and Networking Event
        </h2>
        <div className=" bg-white shadow-md rounded-lg p-6 mx-auto flex flex-wrap justify-center">
        <div className=" w-[300px] h-[300px] rounded-lg flex flex-col justify-center items-center">
          <i className="text-[150px]"><BsCalendarWeekFill/></i>
          <p className="text-gray-700 font-semibold text-xl mt-5 ">Incubator Mentoring</p>
          </div>
          <div className=" w-[300px] h-[300px] rounded-lg flex flex-col justify-center items-center">
          <i className="text-[160px]"><MdEmojiObjects/></i>
          <p className="text-gray-700 font-semibold text-xl ml-6 mt-5">Industry-Specific Mentoring</p>          
          </div>
          <div className=" w-[300px] h-[300px] rounded-lg flex flex-col justify-center items-center">
          <i className="text-[150px]"><GiPublicSpeaker/></i>
          <p className="text-gray-700 font-semibold text-xl mt-5">Peer Mentoring Networks</p>
          </div>
          <div className=" w-[300px] h-[300px] rounded-lg flex flex-col justify-center items-center">
          <i className="text-[150px]"><FcConferenceCall/></i>
          <p className="text-gray-700 font-semibold text-xl mt-5">Corporate Mentoring Programs</p>
          </div>
        </div>
      </div>
      <div className="relative container mx-auto mt-8 min-w-xl max-w-[80vw] justify-left">
        <h2 id="mandates" className="text-2xl font-bold my-4 text-[#1d83bd]">
          Accelerator Program
        </h2>
        <div className=" bg-white shadow-md rounded-lg p-6 mx-auto flex flex-wrap justify-center">
        <div className=" w-[300px] h-[300px] rounded-lg flex flex-col lg:row-span-4 md:row-span-2 justify-center items-center">
          <i className="text-[150px]"><BsCalendarWeekFill/></i>
          <p className="text-gray-700 font-semibold text-xl mt-5 ">Incubator Mentoring</p>
          </div>
          <div className=" w-[300px] h-[300px] rounded-lg flex flex-col justify-center items-center">
          <i className="text-[160px]"><MdEmojiObjects/></i>
          <p className="text-gray-700 font-semibold text-xl ml-6 mt-5">Industry-Specific Mentoring</p>          
          </div>
          <div className=" w-[300px] h-[300px] rounded-lg flex flex-col justify-center items-center">
          <i className="text-[150px]"><GiPublicSpeaker/></i>
          <p className="text-gray-700 font-semibold text-xl mt-5">Peer Mentoring Networks</p>
          </div>
          <div className=" w-[300px] h-[300px] rounded-lg flex flex-col justify-center items-center">
          <i className="text-[150px]"><FcConferenceCall/></i>
          <p className="text-gray-700 font-semibold text-xl mt-5">Corporate Mentoring Programs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
