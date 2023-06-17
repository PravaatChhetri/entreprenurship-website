import React from "react";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import RGOBLogo from "../img/rgobLogo.png";


const NavBar = ({ children }) => {
  return (
    <div className="bg-[#fff0]">
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 bg-transparent md:px-8 lg:w-auto lg:px-8">
          <a href="/">
            <img className="h-16 md:h-18 lg:h-18" src={RGOBLogo} alt="CST" />
          </a>
          <div className="ml-auto flex items-center">
            <Link to="/login" className="mr-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-10 ">
                Sign Up
              </button>
            </Link>
            <label
              htmlFor="my-drawer-4"
              className="text-[#767676] drawer-button"
            >
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
            </label>
          </div>
        </div>
        {children}
        <Footer />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="flex flex-col p-10 w-[300px] sm:w-[350px] h-[100vh] bg-[#021b2a] text-white text-2xl">
          <a href="/">
            <img
              className="h-auto w-20 mx-auto mb-10"
              src={RGOBLogo}
              alt="CST"
            />
          </a>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <div className="collapse collapse-arrow pr-5">
              <input type="checkbox" />
              <div className="collapse-title pl-0">About Us</div>
              <div className="collapse-content text-[1.2rem] flex flex-col gap-3 pb-0">
                <Link to="/admission-policy">Vision</Link>
                <Link to="/academics">Mission</Link>
                <Link to="/fee-structure">Policy and Regulations</Link>
                <Link to="/fee-structure">Frameworks</Link>
                <Link to="/fee-structure">Mandates</Link>
                <Link to="/fee-structure">DoEE, EPD</Link>
                <Link to="/fee-structure">Our Partners</Link>
                </div>
              </div>
            </li>
            <li>
              <div className="collapse collapse-arrow pr-5">
                <input type="checkbox" />
                <div className="collapse-title pl-0 ">Services</div>
                <div className="collapse-content text-[1.2rem] flex flex-col gap-3 pb-0">
                  <Link to="/services/#incubation">Incubation Center</Link>
                  <Link to="/services">BDS</Link>
                </div>
              </div>
            </li>
            <li>
              <div className="collapse collapse-arrow pr-5">
                <input type="checkbox" />
                <div className="collapse-title pl-0 ">Programs</div>
                <div className="collapse-content text-[1.2rem] flex flex-col gap-3 pb-0">
                  <Link to="/admission-policy">Startup Events</Link>
                  <Link to="/academics">Training</Link>
                  <Link to="/fee-structure">Mentoring Programs</Link>
                  <Link to="/fee-structure">Promotion and Networking Events</Link>
                  <Link to="/fee-structure">Accelerator Programs</Link>
                </div>
              </div>
            </li>
            <li>
              <div className="collapse collapse-arrow pr-5">
                <input type="checkbox" />
                <div className="collapse-title pl-0 ">Startups</div>
                <div className="collapse-content text-[1.2rem] flex flex-col gap-3 pb-0">
                  <Link to="/admission-policy">Existing</Link>
                  <Link to="/academics">Incubates</Link>
                  <Link to="/fee-structure">Graduated</Link>
                  <Link to="/fee-structure">Startups</Link>
                  
                </div>
              </div>
            </li>
            <li>
              <Link to="/annoucements">Announcements</Link>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
