import React from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/common/main.css";
import './Calender'
function Calender() {

    const handleDateClick = (event) => {
        console.log(event);
      };
  return (
    <div className='w-1/2'>
      <div className="calenderbg  mx-2 bg-white p rounded-xl h-10/20 sm:18/20">
          <div className="h-5/6 sm:p-5">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              options={{
                dateClick: handleDateClick,
              }}
            />
          </div>
        </div>
    </div>
  )
}

export default Calender
