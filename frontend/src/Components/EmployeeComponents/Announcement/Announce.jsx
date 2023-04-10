import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import axios from '../../../Api/EmployeeAxios'
function Annouce() {
  const [AllAnnou, setAllAnnou] = useState([])
  const [isLength, SetisLength] = useState(false)
  useEffect(() => {
    axios.get('/employee/getAllAnnounce').then((response)=>{
      const data = response.data.doc;
      if(data.length !== 0){
        console.log(data)
        setAllAnnou(data)
        SetisLength(true)
      }
    }).catch((error)=>{
      SetisLength(false)
    })
  }, []);
  return (
    <div className=" sm:mx-10 overflow-hidden mt-16">
      <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 md:flex-none">
          <div className="relative flex flex-col min-w-0 break-words border-0 shadow-soft-xl rounded-2xl bg-clip-border">
            <TopBar />

            <div className="application flex-auto p-4 pt-6 overflow-y-scroll">
              <ul className="flex flex-col-reverse pl-0 mb-0 rounded-lg">
                {isLength ? 
                AllAnnou.map((obj, index) => {
                  return (
                <li
                  className="relative flex p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50"
                  //   key={index}
                >
                  <div className="flex flex-col">
                    <h6 className="mb-4 leading-normal text-sm">
                      Title:  {obj.tittle}
                    </h6>
                    <span className="mb-2 leading-tight text-xs">
                      content:{" "}
                      <span className="font-semibold text-slate-700 sm:ml-2">
                      {obj.content}
                      </span>
                    </span>

                    <span className="mb-2 leading-tight text-xs">
                      TIME:{" "}
                      <span className="font-semibold text-slate-700 sm:ml-2">
                      {obj.time}
                      </span>
                    </span>

                    <div className="flex flex-col"></div>
                  </div>
                </li>
                 )
                })
                :

                <li className="relative flex p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50 justify-center">
                  <div>No Announcements</div>
                </li>
}
                 
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Annouce;
