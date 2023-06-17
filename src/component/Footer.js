import React from 'react'
//import RGoBLogo from '../img/rgobLogo.png'
import DHI from "../img/dhi.webp"
import Loden from "../img/loden.png"
// import bi-facebook, bi-youtube,bi-instagram from 'react-icons/bi'
 import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="py-8 bg-[#2C2C2C] text-[#ebe5e5]">

   
			<div class="grid grid-row md:grid-cols-3 max-w-5xl mx-auto gap-2">
				<div class="p-4 flex flex-col items-center">
					<h3 class="font-bold text-[#eee] mb-4 text-xl">Quick Links</h3>
					<div className="flex flex-row">
						<div class="text-[#9d9d9d] space-y-2 flex flex-col justify-center items-center">
							<a
								href="https://ims.rub.edu.bt"
								className="transition-colors duration-300 hover:text-blue-700 text-center"
							>
								Ministry of Industry, Commerce and Employment
							</a>
							<a
								href="https://www."
								className="transition-colors duration-300 hover:text-blue-700"
							>Loden Foundation</a>							
							<a
								href="https://www.dhi.bt"
								className="transition-colors duration-300 hover:text-blue-700"
							>
								Druk Holding and Investments
							</a>
							<a
								href="https://journal.cst.edu.bt"
								className="transition-colors duration-300 hover:text-blue-700"
							>
								Bhutan Standards Bureau
							</a>
							<a
								href="http://mail.rub.edu.bt/"
								className="transition-colors duration-300 hover:text-blue-700"
							>G2B Service							
              </a>
              <a
								href="https://rub.edu.bt"
								className="transition-colors duration-300 hover:text-blue-700"
							>Innovation Bhutan
							</a>
						</div>
					</div>
				</div>
				{/* <div className="flex items-center justify-center">
					<img src={RGoBLogo} alt="CST Logo" height={120} width={120} />
				</div> */}
        <div>
        <h1 className='text-center font-bold text-[30px]'>Our Partners</h1>

   <div className='flex justify-center items-center gap-10 my-[30px]'>
      <img src={DHI} alt=" "  className='w-20 opacity-70'/>
      <img src={Loden} alt=" "  className='w-20 opacity-70'/>
      </div>
        </div>

				<div class="p-4 flex flex-col items-center justify-start">
					<h3 class="font-bold text-[#eee] mb-4 text-xl">Address</h3>
					<div class="text-[#9d9d9d] space-y-1 text-center md:text-left">
						<p>Changzamtok, Thimphu</p>
						<p>Post Box No. 173</p>
						<p>Email: startupbhutan@gmail.com</p>
						<p>Phone: +975-77408625</p>
					</div>
				</div>
			</div>

			<div className="flex items-center justify-center mt-8">
				<a
					href="https://www.facebook.com/CST.University/"
					target="_blank"
					rel="noopener noreferrer"
					className="mx-4 text-gray-700 transition-colors duration-300 hover:text-blue-700"
				>
					<i className="text-3xl bi bi-facebook"></i>
				</a>
				<a
					href="https://www.youtube.com/@CSTMultimedia"
					target="_blank"
					rel="noopener noreferrer"
					className="mx-4 text-[#eee] transition-colors duration-300 hover:text-red-500"
				>
					<i className="text-4xl bi bi-youtube"></i>
				</a>
				<a
					href="https://www.instagram.com/cst_rub/"
					target="_blank"
					rel="noopener noreferrer"
					className="mx-4 text-gray-700 transition-colors duration-300 hover:text-pink-500"
				>
					<i className="text-3xl bi bi-instagram"></i>
				</a>
			</div>
			<div className="flex flex-col justify-center mt-4 text-[#eee]">
				<div className='flex justify-center items-center gap-5 my-4'>
				<i className='text-white text-3xl'> <FaFacebook/></i>
				<i className='text-white text-3xl'> <FaTwitter/></i>
				<i className='text-white text-3xl'> <FaLinkedinIn/></i>
					
				</div>
				<p className='text-center'>© 2023 Department of Employment &amp; Entrepreneurship</p>
			</div>
		</div>
  )
}

export default Footer