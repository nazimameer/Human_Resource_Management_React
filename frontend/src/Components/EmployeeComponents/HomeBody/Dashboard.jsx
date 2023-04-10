import React,{useEffect, useState} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/common/main.css";
import "./Dashboard.css";
import axios from '../../../Api/EmployeeAxios'
function Dashboard(props) {
  const [tasks,SetTasks] = useState([]);
  const [isLength, SetIsLength] = useState(false)

  useEffect(() => {
    axios.get('/employee/getAllTasks').then((response)=>{
      const data = response.data.tasks;
      if(data.length !== 0){
        SetTasks(data);
        SetIsLength(true);
      }
      console.log(data)
     }).catch((error)=>{
      console.log(error)
      SetIsLength(false);
     })
     props.falserefreshTask()
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.refreshTask]);
  useEffect(() => {
   axios.get('/employee/getAllTasks').then((response)=>{
    const data = response.data.tasks;
    if(data.length !== 0){
      SetTasks(data);
      SetIsLength(true);
    }
    console.log(data)
   }).catch((error)=>{
    console.log(error)
    SetIsLength(false);
   })
  }, []);
  const handleEditStatus =(id)=>{
    console.log(id)
    props.SetTaskId(id)
    props.SetOpenModal()
  }

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
          <div>
          <div className="text-xl font-medium">Task Due Today</div>
          </div>
          <div className="taskdue flex flex-col overflow-y-scroll ">
              {isLength?
              tasks.map((obj)=>{
                return(

            <div className="mt-5 border p-3 rounded-xl">
              <div className="flex justify-between">

              <div >
                {obj.task}
              </div>
              <div className="cursor-pointer" onClick={()=>handleEditStatus(obj._id)}><i class='bx bxs-edit-alt' ></i></div>
              </div>

              <div className="text-xs mt-2 flex justify-between">
                <div>
                  <div>Assigned: {obj.startdate}</div>

                  
                </div>

                <div className="w-1/2 flex flex-col ">
                  <div className="flex justify-end">End Date: {obj.enddate}</div>
                  <div className="mt-3 flex justify-end">
                    <span className="p-1.5 text-xs  font-medium uppercase tracking-wider text-yellow-800 bg-green-200 rounded-lg bg-opacity-50">
                      {obj.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
                )
              })
            :
            ""
              }
            </div>
          </div>
        </div>
      </div>
  );
}

export default Dashboard;
