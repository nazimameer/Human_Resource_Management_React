import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/common/main.css";
import "./Dashboard.css";
function Dashboard() {
  const handleDateClick = (event) => {
    console.log(event);
  };
  return (
    <div className="bg-slate-900 w-full">
      <div className="flex flex-wrap w-full">
        <div className="calenderbg mt-20 mx-2 bg-white p rounded-xl h-10/20 sm:18/20 sm:mx-5 sm:my-20 sm:w-1/2  ">
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

        <div className=" w-1/3 mx-20 mt-20 p-5 rounded-xl bg-white  flex flex-col ">
          <div className="text-xl font-medium">Task Due Today</div>
          <div className="taskdue flex flex-col overflow-y-scroll ">

            <div className="mt-5 border p-3 rounded-xl">
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div className="text-xs mt-2 flex justify-between">
                <div>
                  <div>Start Time: 04/03/2023 4 pm</div>

                  <div>
                    <div class="flex justify-between mb-1">
                      <span class="text-sm font-medium text-green-700 ">
                        45%
                      </span>
                    </div>
                    <div
                      class="w-full bg-gray-200 rounded-full h-2.5 "
                      style={{ width: "200px" }}
                    >
                      <div
                        class="bg-green-600 h-2.5 rounded-full"
                        style={{ width: `${150}px` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="w-1/2 flex flex-col ">
                  <div className="flex justify-end">Duration: 3 days</div>
                  <div className="mt-3 flex justify-end">
                    <span className="p-1.5 text-xs  font-medium uppercase tracking-wider text-yellow-800 bg-green-200 rounded-lg bg-opacity-50">
                      Finished
                    </span>
                  </div>
                </div>
              </div>
            </div>


            </div>
          </div>
        </div>
      </div>
  );
}

export default Dashboard;
