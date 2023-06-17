import React from 'react'
import {IoIosAddCircle} from "react-icons/io"
import {BiUpload, BiHide} from 'react-icons/bi'


const Events = () => {
  return (
    <div className="bg-slate-100 w-full h-[500px]">
    <div className="flex flex-row m-5 bg-white rounded-xl">
        <p className="font-bold text-xl p-5">
            Add New Events
        </p>
        <div className="p-5" >
            <IoIosAddCircle className="h-10 w-10"/>
        </div>
    </div>
    <div className="flex flex-col m-5 bg-white rounded-xl">
        <h1 className="font-bold text-xl p-5">
            All Events
        </h1>
        <div className="overflow-x-auto px-8 py-8">
        <table className="table table-zebra">
            {/* head */}
            <thead>
            <tr>
              <th>Event Name</th>
              <th>Event Date</th>
              <th>Requirements</th>
              <th>Description</th>
              <th></th>
              <th></th>
            </tr>
            </thead>
            <tbody>
                {/* row 1 */}
                <tr>
                  <th>Hackathon</th>
                  <td>15/06/23</td>
                  <td></td>
                  <td>Bhutan Start-up Hackathon Chanllenge to empower start-up ecosystem through digital transformation</td>
                  <td><BiHide/></td>
                  <td><BiUpload/></td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>Springboard Plus Program, 2023</th>
                  <td>29/05/23</td>
                  <td>Start-ups</td>
                  <td> 10 startups win grant support to accelerate and scale up their businesses</td>
                  <td><BiHide/></td>
                  <td><BiUpload/></td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>Ideathon</th>
                  <td>23/04/23</td>
                  <td></td>
                  <td>on the theme "Digital Health"</td>
                  <td><BiHide/></td>
                  <td><BiUpload/></td>
                </tr>
            </tbody>
        </table>
        </div>
        </div>
        </div>
  )
}

export default Events
