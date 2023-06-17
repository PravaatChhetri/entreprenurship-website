import React from 'react'
import user from "../assets/images/user.jpg"

const Technology = () => {
  return (
    <div>
      <div className="flex flex-col gap-5">
        {/* mentor 1 */}
        <div className="flex flex-row row-span-5 gap-5 bg-slate-100 p-4 rounded-xl">
          <img src={user} className="w-16 h-16 rounded-full"/>
          <p className="text-center pt-4 font-bold">Durga Nepal</p>
          <p className="text-center font-semibold">
            Domain Session
            <p></p>
            10hrs
          </p>
          <p className="text-center font-semibold">
            Domain
            <p></p>
            Technology
          </p>
          <button className="text-xs text-white bg-blue-500 rounded-lg p-2 h-8 mt-2">View Profile</button>
        </div>

        {/* mentor 2 */}
        <div className="flex flex-row row-span-5 gap-5 bg-slate-100 p-4 rounded-xl">
          <img src={user} className="w-16 h-16 rounded-full"/>
          <p className="text-center pt-4 font-bold">Durga Nepal</p>
          <p className="text-center font-semibold">
            Domain Session
            <p></p>
            10hrs
          </p>
          <p className="text-center font-semibold">
            Domain
            <p></p>
            Technology
          </p>
          <button className="text-xs text-white bg-blue-500 rounded-lg p-2 h-8 mt-2">View Profile</button>
        </div>

        {/* mentor 3 */}
        <div className="flex flex-row row-span-5 gap-5 bg-slate-100 p-4 rounded-xl">
          <img src={user} className="w-16 h-16 rounded-full"/>
          <p className="text-center pt-4 font-bold">Durga Nepal</p>
          <p className="text-center font-semibold">
            Domain Session
            <p></p>
            10hrs
          </p>
          <p className="text-center font-semibold">
            Domain
            <p></p>
            Technology
          </p>
          <button className="text-xs text-white bg-blue-500 rounded-lg p-2 h-8 mt-2">View Profile</button>
        </div>
      </div>
    </div>
  )
}

export default Technology
