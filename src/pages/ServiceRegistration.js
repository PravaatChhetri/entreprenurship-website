import React from "react";

const ServiceRegistration = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="bg-white w-[90%] lg:w-[50%] rounded-md">
        <h1 className="font-bold text-3xl my-8 text-center">
          Registration Form
        </h1>
        <div className="flex flex-col px-10 lg:px-0 lg:flex-row row-span-2 gap-20 justify-center py-10">
          <div className="flex flex-col gap-6 ">
            <input
              type="text"
              placeholder="Enter your name"
              className="p-2 bg-slate-200 rounded-lg"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="p-2 bg-slate-200 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 bg-slate-200 rounded-lg"
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="p-2 bg-slate-200 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-6">
            <select className="select select-bordered bg-slate-200 w-full max-w-xs">
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
              className="px-2 min-h-[100px] max-h-[100%] bg-slate-200 rounded-lg"
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
          <button className="p-2 w-32 bg-blue-500 rounded-md text-center font-semibold text-white hover:border-2 hover:border-blue-500 hover:bg-transparent hover:text-blue-500">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceRegistration;
