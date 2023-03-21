import React, { useState,useEffect } from "react";
import "./Dashboard.css";
import axios from '../../../Api/HrAxios'
function Dashboard() {
  const [today,setToday] = useState('');
  const [attendace, setAttendace] = useState([])
  const [attLength, setAttLength] = useState(false)
  useEffect(() => {
    const today = new Date().toLocaleDateString();
    setToday(today)
    //
    axios.get('/hr/getAttendance').then((response)=>{
      console.log(response)
      const data = response.data.attendance;
      if(data.length !== 0){
        setAttendace(data);
        setAttLength(true)
      }

    })
  }, []);
  return (
    <>
      <div className="dashboard bg-slate-900">
        <div class="flex-none  w-full px-3 mt-20">
          <div class="relative flex flex-col min-w-0 mb-6 break-words border-0 rounded-2xl bg-clip-border">
            <div class="p-4 pb-0 mb-0 rounded-t-2xl">
              <h6 class="mb-1 text-white">Attendance</h6>
              <p class="text-sm leading-normal text-white">
                {today}
              </p>
            </div>
            <div class="flex-auto p-4">
              <div class="attendaceBar flex-row-reverse  mx-3">


        {attLength ?
          attendace.map(obj=>{
              return(
                <div class="w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12 my-3">
                  <div class="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none  rounded-2xl bg-clip-border">
                    <div class="relative">
                      <a href="/" class="block shadow-xl rounded-2xl">
                        <img
                          src={obj.image.url}
                          alt="img-blur-shadow"
                          class="w-full shadow-2xl rounded-2xl"
                        />
                      </a>
                    </div>
                    <div class="flex-auto px-1 pt-6">
                      <p class="relative text-white z-10 mb-2 text-sm leading-normal text-transparent bg-gradient-to-tl from-zinc-800 to-zinc-700 bg-clip-text ">
                        #{obj.UID}
                      </p>
                      <a href="/">
                        <h5 class="text-white">{obj.fullname}</h5>
                      </a>
                      <p class="mb-6 text-sm leading-normal text-white">
                        {obj.time}
                      </p>
                      <div class="flex items-center justify-between">
                        <button
                          type="button"
                          class="inline-block px-8 py-2 mb-0 text-xs font-bold leading-normal text-center text-green-500 align-middle transition-all ease-in bg-transparent border border-green-500 border-solid rounded-lg shadow-none cursor-pointer hover:-translate-y-px active:shadow-xs tracking-tight-rem hover:border-blue-500 hover:bg-transparent hover:text-blue-500 hover:opacity-75 hover:shadow-none active:bg-blue-500 active:text-white active:hover:bg-transparent active:hover:text-blue-500"
                        >
                          Confirm
                        </button>

                        <button
                          type="button"
                          class="inline-block px-8 py-2 mb-0 text-xs font-bold leading-normal text-center text-red-500 align-middle transition-all ease-in bg-transparent border border-red-500 border-solid rounded-lg shadow-none cursor-pointer hover:-translate-y-px active:shadow-xs tracking-tight-rem hover:border-blue-500 hover:bg-transparent hover:text-blue-500 hover:opacity-75 hover:shadow-none active:bg-blue-500 active:text-white active:hover:bg-transparent active:hover:text-blue-500"
                        >
                          Confirm
                        </button>
                        <div class="mt-2">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
                      })
                :
                ''
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
