import React from 'react'
import {GrEdit} from 'react-icons/gr'
import {GiConfirmed} from "react-icons/gi"

const IncubationSpaceBooking = () => {
  return (
    <div className="bg-slate-100 w-full h-[500px]">
      <div className="flex flex-col m-5 bg-white rounded-xl">
        <h1 className="font-bold text-xl p-5">
            Incubation Space Bookings
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
                <th></th>
                <th></th>
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
                    <td><GrEdit/></td>
                    <td><GiConfirmed/></td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>2</th>
                    <td>Pravaat Chhetri</td>
                    <td>bbbb</td>
                    <td>17222222</td>
                    <td>Samtse</td>
                    <td></td>
                    <td><GrEdit/></td>
                    <td><GiConfirmed/></td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>kezang Loday</td>
                    <td>cccc</td>
                    <td>17333333</td>
                    <td>College of Science and Technology,Rinchending</td>
                    <td></td>
                    <td><GrEdit/></td>
                    <td><GiConfirmed/></td>
                  </tr>
                  {/* row 4 */}
                  <tr>
                    <th>4</th>
                    <td>Pema lhaden</td>
                    <td>dddd</td>
                    <td>17444444</td>
                    <td>Gedu College of Business Studies,Chhukha</td>
                    <td></td>
                    <td><GrEdit/></td>
                    <td><GiConfirmed/></td>
                  </tr>
              </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default IncubationSpaceBooking
