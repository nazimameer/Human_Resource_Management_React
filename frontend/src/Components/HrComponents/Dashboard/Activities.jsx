import React, { useEffect, useState } from "react";
import axios from "../../../Api/HrAxios";
import "./Activities.css";
function Activities({openModal, refresh, setObj}) {
  const [overtimes, setOvertimes] = useState([]);
  const [isLength, setIsLength] = useState(false);
  useEffect(() => {
    axios.get("/hr/checkAnyOverTime").then((response) => {
      const data = response.data.overtimes;
      if (data.length !== 0) {
        setIsLength(true);
        setOvertimes(data);
      }else{
        setIsLength(false)
      }
    });
  }, []);

  useEffect(() => {
    axios.get("/hr/checkAnyOverTime").then((response) => {
      const data = response.data.overtimes;
      if (data.length !== 0) {
        setIsLength(true);
        setOvertimes(data);
      }else{
        setIsLength(false)
      }

    });
  }, [refresh]);

  const handleClick = (obj)=>{
    setObj(obj)
    openModal()
  }
  return (
    <div className="w-1/2">
      <div className="activitiesbar w-4/5  mx-10 p-5 rounded-xl bg-white  flex flex-col ">
        <div className="text-xl font-medium">All Activities</div>
        <div className="taskdue flex flex-col overflow-y-scroll ">
          {isLength ? (
            overtimes.map((obj, i) => {
              return (
                <div className="mt-5 border p-3 rounded-xl" key={i}>
                  <div className="flex justify-between">
                  <div>Over Time Worked : {obj.date}</div>
                  <div className="cursor-pointer" onClick={()=>handleClick(obj)}><i class='bx bx-money-withdraw text-2xl' ></i></div>
                  </div>
                  <div className="text-xs mt-2 flex flex-col justify-between">
                    <div>
                      <div>{obj.fullname}</div>
                    </div>

                    <div>
                      <div>UID: {obj.UID}</div>
                    </div>

                    <div>
                      <div>Duration : {obj.overtime}</div>
                    </div>

                    <div>
                      <div>{obj.position}</div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="mt-5 border p-3 rounded-xl flex justify-center items-center">
              <div>No Activities</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Activities;
