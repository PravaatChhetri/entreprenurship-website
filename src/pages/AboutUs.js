import React from "react";
import HeaderImg from "../img/startupBT.PNG";

const AboutUs = () => {
  return (
    <div>
      <div className="">
        <div className="relative flex justify-center items-start h-[400px] w-auto">
          <img
            src={HeaderImg}
            alt="Startup Background"
            className="w-full lg:h-900 relative-z-30"
          />
          <h1 className="absolute bottom-40 lg:bottom-10 left-0 px-6 py-10 font-bold text-white md:px-20 md:py-10 md:text-8xl">
            About Us
          </h1>
        </div>  
      </div>
      <div className="relative container mx-auto mt-8">
          <h2 className="text-2xl font-bold my-4">Our Vision</h2>
          <div className="flex justify-center">
            <div className="max-w-xl w-full bg-white shadow-md rounded-lg p-6">
              <p className="text-gray-700">
              To create a world where every individual with an entrepreneurial spirit has 
              the opportunity to turn their ideas into successful and impactful ventures, 
              contributing to economic growth and societal progress.              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default AboutUs;
