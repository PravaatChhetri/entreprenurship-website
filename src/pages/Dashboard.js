import React from 'react'
import Testimonials from '../components/Testimonials';
import Mentors from '../components/Mentors';
import MatchMaking from '../components/MatchMaking';
import IncubationSpaceBooking from '../components/IncubationSpaceBooking';
import Events from '../components/Events';
import Reports from '../components/Reports';

const Dashboard = () => {
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
              <li><a onClick={()=>{handleItemClick('1')}}>Testimonials</a></li>
              <li><a  onClick={()=>{handleItemClick('2')}}>Mentors</a></li>
              {/* <li><a  onClick={()=>{handleItemClick('3')}}>Matchmaking</a></li> */}
              <li><a  onClick={()=>{handleItemClick('4')}}>Incubation Space Booking</a></li>
              <li><a  onClick={()=>{handleItemClick('5')}}>Events</a></li>
              <li><a  onClick={()=>{handleItemClick('6')}}>Reports</a></li>

            </ul>
          </div>

          {/* content for events */}
          {selectedMenu ==='1' && <Testimonials/>}
          {selectedMenu ==='2' && <Mentors/>}
          {selectedMenu ==="3" && <MatchMaking/>}
          {selectedMenu ==="4" && <IncubationSpaceBooking/>}
          {selectedMenu ==="5" && <Events/>}
          {selectedMenu ==="6" && <Reports/>}
         
      </div>
    </div>
  )
}

export default Dashboard