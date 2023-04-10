import React, { useEffect, useState } from "react";
import axios from '../../../Api/HrAxios'
function Annouce({Refresh}) {
    const [AllAnnou, setAllAnnou] = useState([]);
    const [isLength,setIsLength] = useState(false)
    useEffect(() => {
       axios.get("/hr/getAllAnnouncement").then((response)=>{
        const data = response.data.doc;
        if(data.length !== 0){
            setIsLength(true)
            setAllAnnou(data)
        }
       }).catch((error)=>{
        
        setIsLength(false)
    })
    }, [Refresh]);

    useEffect(() => {
        axios.get("/hr/getAllAnnouncement").then((response)=>{
            const data = response.data.doc;
            if(data.length !== 0){
                setIsLength(true)
                setAllAnnou(data)
            }
        }).catch((error)=>{
            setIsLength(false)
        })
     }, []);
  return (
    <div className=" sm:mx-10 overflow-hidden">
      <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 md:flex-none">
          <div className="relative flex flex-col min-w-0 break-words border-0 shadow-soft-xl rounded-2xl bg-clip-border">

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
                    <h6 className="mb-4 leading-normal text-xl font-semibold">
                      Title:   {obj.tittle}
                    </h6>
                    <span className="mb-2 leading-tight text-xs">
                      content:{" "}
                      <span className="font-semibold text-slate-700 sm:ml-2">
                        {obj.content}
                      </span>
                    </span>

                    <span className="mb-2 leading-tight text-xs">
                      Time:{" "}
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
