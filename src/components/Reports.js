import React from 'react'
import {IoIosAddCircle} from "react-icons/io"
import {BiUpload, BiHide} from 'react-icons/bi'


const Reports = () => {
  return (
    <div className="bg-slate-100 w-full h-full">
      <h1 className="font-bold text-xl p-5 mt-4 ml-4">Status of Applications</h1>
      <div>
        {/* Incubation */}
        <div className="flex flex-col m-5 bg-white rounded-xl">
          <h1 className="font-bold text-xl p-5">
            Incubation Space
          </h1>
          <div className="overflow-x-auto px-8 py-8">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                <tr>
                <th>Sl No.</th>
                <th>Name</th>
                <th>Company</th>
                <th>Contact No.</th>
                <th>Start-up Centre</th>
                <th>Remarks</th>
                <th>Status</th>
                </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>1</th>
                      <td>Dechen Namgyal</td>
                      <td>aaaa</td>
                      <td>17111111</td>
                      <td>Thimphu</td>
                      <td></td>
                      <td>Rejected</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <th>2</th>
                      <td>Pravaat Chhetri</td>
                      <tdb>bbbb</tdb>
                      <td>17222222</td>
                      <td>Samtse</td>
                      <td></td>
                      <td>Accepted</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th>3</th>
                      <td>kezang Loday</td>
                      <td>cccc</td>
                      <td>17333333</td>
                      <td>College of Science and Technology,Rinchending</td>
                      <td></td>
                      <td>Accepted</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
        {/* Mentors */}
        <div className="flex flex-col m-5 bg-white rounded-xl">
          <h1 className="font-bold text-xl p-5">
            Mentors
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
                  <th>Status</th>
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
                      <td>Rejected</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <th>2</th>
                      <td>Dal</td>
                      <td>8hrs</td>
                      <td>Finance</td>
                      <td></td>
                      <td>Rejected</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th>3</th>
                      <td>Wangchuk</td>
                      <td>3hrs</td>
                      <td>AI</td>
                      <td></td>
                      <td>Accepted</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
        {/* Mentees */}
        <div className="flex flex-col m-5 bg-white rounded-xl">
          <h1 className="font-bold text-xl p-5">
            Mentees
          </h1>
          <div className="overflow-x-auto px-8 py-8">
          <table className="table table-zebra">
                {/* head */}
                <thead>
                <tr>
                  <th>Sl No.</th>
                  <th>Name</th>
                  <th>Company/Team</th>
                  <th>Domain</th>
                  <th>Description</th>
                  <th>Status</th>
                </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>1</th>
                      <td>Dechen</td>
                      <td>aaaa</td>
                      <td>Web Dev</td>
                      <td></td>
                      <td>Accepted</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <th>2</th>
                      <td>Kezang</td>
                      <td>bbbb</td>
                      <td>Finance</td>
                      <td></td>
                      <td>Accepted</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th>3</th>
                      <td>Parvat</td>
                      <td>cccc</td>
                      <td>AI</td>
                      <td></td>
                      <td>Accepted</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports
