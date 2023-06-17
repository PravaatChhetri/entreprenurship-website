import React from "react";

const ServiceRegistration = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="bg-white w-[90%] lg:w-[50%] rounded-md border-2 border-orange-500">
        <h1 className="font-bold text-3xl my-8 text-center text-[#808080]">
          Registration Form
        </h1>
        <div className="flex flex-col px-10 lg:px-0 lg:flex-row row-span-2 gap-20 justify-center py-10">
          <div className="flex flex-col gap-6 ">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
              />
            <input
              type="text"
              placeholder="Company Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"

            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"


            />
            <input
              type="text"
              placeholder="Contact Number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"


            />
          </div>
          <div className="flex flex-col gap-6">
            <select className="select select-bordered w-full max-w-xs focus:outline-none focus:border-orange-500 ">
              <option disabled selected>
                Incubation Center Location
              </option>
              <option>College of Science and Technology</option>
              <option>College of Natural Resources</option>
              <option>Gedu College of Business Studies</option>
              <option>Jigme Namgyal Engineering College</option>
              <option>Sherubtse College</option>
            </select>
            <input
              type="text"
              placeholder="Description/Remarks"
              className="px-2 w-full min-h-[100px] max-h-[100%] rounded-lg border focus:outline-none focus:border-orange-500 "

            />
            {/* <div className="flex gap-3 items-center justify-evenly">
            <label for="start-date" className="text-md font-semibold">
              Start Date
            </label>
            <input
              type="date"
              placeholder="Start Date"
              className="p-2 bg-slate-200 rounded-lg w-[200px]"
            />
            </div>
            <div className="flex items-center gap-3 justify-evenly">
            <label for="end-date" className="text-md font-semibold">
              End Date
            </label>
            <input
              type="date"
              placeholder="End Date"
              className="p-2 bg-slate-200 rounded-lg w-[200px]"
            />
            </div> */}
          </div>
        </div>
        <div className="flex justify-center my-8">
          <button className="p-2 w-32 bg-orange-500 rounded-md text-center font-semibold text-white hover:border-2 hover:border-orange-500 hover:bg-transparent hover:text-orange-500">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceRegistration;
