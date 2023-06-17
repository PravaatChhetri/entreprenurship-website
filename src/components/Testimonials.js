import React from 'react'
import {GrEdit} from 'react-icons/gr'
import {BiUpload} from 'react-icons/bi'

const Testimonials = () => {
  return (
    <div className="bg-slate-100 w-full h-[500px]">
        <div className="flex flex-col m-5 bg-white rounded-xl">
            <h1 className="font-bold text-xl p-5">
                All Testimonials
            </h1>
            <div className="overflow-x-auto px-8">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Comments</th>
                  <th></th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>1</th>
                      <td>Pravaat</td>
                      <td>Founder, aaaa</td>
                      <td>Bhutan Startup is the best startup accelerator. It helps their companies a lot, and the community is a huge asset for the companies that go through the program.</td>
                      <td><GrEdit/></td>
                      <td><BiUpload/></td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <th>2</th>
                      <td>Dechen</td>
                      <td>Founder, bbbb</td>
                      <td>Bhutan Startup is the best program for creating top-end entrepreneurs that has ever existed.</td>
                      <td><GrEdit/></td>
                      <td><BiUpload/></td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th>3</th>
                      <td>Kezang</td>
                      <td>Founder, cccc</td>
                      <td>At Bhutan startup, we were challenged to do things that don't scale – to start with the perfect experience for one person, then work backwards and scale it to 100 people who love us. This was the best piece of advice we've ever received</td>
                      <td><GrEdit/></td>
                      <td><BiUpload/></td>
                    </tr>
                    {/* row 4 */}
                    <tr>
                      <th>4</th>
                      <td>Pema</td>
                      <td>Founder, dddd</td>
                      <td>I doubt that dddd would have worked without Bhutan startup. It's that simple. Acquiring early customers, figuring out who to hire, closing deals with banks, raising money – BS's partners were closely involved and crucially helpful.</td>
                      <td><GrEdit/></td>
                      <td><BiUpload/></td>
                    </tr>
                </tbody>
            </table>
            </div>
            </div>
        </div>
  )
}

export default Testimonials
