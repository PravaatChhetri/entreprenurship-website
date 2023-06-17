import React from 'react'
import Accounting from '../components/Accounting'
import Finance from '../components/Finance'
import Technology from '../components/Technology'
import AI from '../components/AI'
import Webdev from '../components/webdev'


const Mentors = () => {
  const [selectedMenu,setSelectedMenu]=React.useState("1");

  const handleItemClick =(item) =>{setSelectedMenu(item);};

  return (
    <div>
      <div className="drawer lg:drawer-open flex flex-row">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle"/>
          {/* sidebar */}
          <div className="drawer-side pr-10">
            <ul className="menu p-8 w-64 h-full text-base-content">
              {/* Sidebar content here */}
              <li><a onClick={()=>{handleItemClick('1')}}>All</a></li>
              <li><a  onClick={()=>{handleItemClick('2')}}>Accounting</a></li>
              <li><a  onClick={()=>{handleItemClick('3')}}>Finance</a></li>
              <li><a  onClick={()=>{handleItemClick('4')}}>Technology</a></li>
              <li><a  onClick={()=>{handleItemClick('5')}}>Artificial Intelligence</a></li>
              <li><a  onClick={()=>{handleItemClick('6')}}>Web Development</a></li>

            </ul>
          </div>

          {/* content for events */}
          {selectedMenu ==='1' && <Accounting/>}
          {selectedMenu ==='2' && <Accounting/>}
          {selectedMenu ==="3" && <Finance/>}
          {selectedMenu ==="4" && <Technology/>}
          {selectedMenu ==="5" && <AI/>}
          {selectedMenu ==="6" && <Webdev/>}
         
      </div>
    </div>
  )
}

export default Mentors