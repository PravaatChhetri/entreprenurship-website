import React from 'react'
import {RiChatDeleteLine} from "react-icons/ri"
import {BiUpload} from 'react-icons/bi'


const Mentors = () => {
  return (
    <div className="bg-slate-100 w-full h-[500px]">
    <div className="flex flex-col m-5 bg-white rounded-xl">
        <h1 className="font-bold text-xl p-5">
            List of Registered Mentors
        </h1>
        <div className="overflow-x-auto px-8 py-8">
          <table className="table table-zebra">
            {/* head */}
            <thead>
            <tr>
              <th>Sl No.</th>
              <th>Name</th>
              <th>Total Session</th>
              <th>Domain</th>
              <th>Description</th>
              <th></th>
              <th></th>
            </tr>
            </thead>
            <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Pema</td>
                  <td>12hrs</td>
                  <td>Web Dev</td>
                  <td></td>
                  <td><RiChatDeleteLine/></td>
                  <td><BiUpload/></td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>Dal</td>
                  <td>8hrs</td>
                  <td>Finance</td>
                  <td></td>
                  <td><RiChatDeleteLine/></td>
                  <td><BiUpload/></td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>Wangchuk</td>
                  <td>3hrs</td>
                  <td>AI</td>
                  <td></td>
                  <td><RiChatDeleteLine/></td>
                  <td><BiUpload/></td>
                </tr>
            </tbody>
          </table>
        </div>
        </div>
        </div>
  )
}

export default Mentors
