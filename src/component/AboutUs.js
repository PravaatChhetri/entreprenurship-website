import React from 'react'
import HeaderImg from '../assets/images/'

const AboutUs = () => {
  return (
    <div>
        <div class="">
            <div className="relative flex justify-center items-start h-[400px] w-auto">
                <img
                src={HeaderImg}
                alt="Hero Background"
                className="w-full h-[250px] lg:h-[400px] relative -z-30"
                />
                <h1 className="absolute bottom-40 lg:bottom-10 left-0 px-6 py-10 text-2xl font-bold text-white md:px-20 md:py-10 md:text-5xl">
                About CST
                </h1>
            </div>
        </div>
    </div>

  )
}

export default AboutUs