import React, { useEffect, useState } from "react";
import "./LeaveApplication.css";
import axios from "../../../Api/HrAxios";
import TopBar from "./topBar";
function LeaveApplications() {
  const [isLength, setIsLength] = useState(false);
  const [applications, setApplications] = useState([]);
  useEffect(() => {
    axios
      .get("/hr/applications")
      .then((response) => {
        if (response.status === 200) {
          const data = response.data.applicationsinfo;
          console.log(data)
          setIsLength(true);
          setApplications(data);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });

  }, []);


  const handleApprove = (id) => {
    axios
      .post("/hr/applicationApprove", { id: id })
      .then((response) => {
        if (response.status === 200) {
          axios
            .get("/hr/applications")
            .then((response) => {
              console.log(response)
              if (response.status === 200) {
                const data = response.data.applicationsinfo;
                if(data.length !== 0){
                  setIsLength(true);
                  setApplications(data);
                }else{
                  setIsLength(false)
                }
              }
            })
            .catch((error) => {
              setIsLength(false);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const handleReject = (id) => {
    axios
      .post("/hr/applicationReject", { id: id })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          axios
            .get("/hr/applications")
            .then((response) => {
              if (response.status === 200) {
                const data = response.data.applicationsinfo;
                if(data.length !== 0){

                  setIsLength(true);
                  setApplications(data);
                }else{
                  setIsLength(false)
                }
              }
            })
            .catch((error) => {
              setIsLength(false);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" sm:mx-10 overflow-hidden mt-16">
      <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 md:flex-none">
          <div className="relative flex flex-col min-w-0 break-words border-0 shadow-soft-xl rounded-2xl bg-clip-border">
            <TopBar />

            <div className="application flex-auto p-4 pt-6 overflow-y-scroll">
              <ul className="flex flex-col-reverse pl-0 mb-0 rounded-lg">
                {isLength ? (
                  applications.map((obj, index) => {
                    return (
                      <li
                        className="relative flex p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50"
                        key={index}
                      >
                        <div className="flex flex-col">
                          <h6 className="mb-4 leading-normal text-sm">
                            {obj.name}
                          </h6>
                          <span className="mb-2 leading-tight text-xs">
                            ID:{" "}
                            <span className="font-semibold text-slate-700 sm:ml-2">
                              {obj.uid}
                            </span>
                          </span>
                          <span className="mb-2 leading-tight text-xs">
                            Period:{" "}
                            <span className="font-semibold text-slate-700 sm:ml-2">
                              {obj.period === "Half Day"
                                ? obj.period
                                : obj.period + " Days"}
                            </span>
                          </span>
                          <span className="leading-tight text-xs">
                            Reason:{" "}                                      
                            <span className="font-semibold text-slate-700 sm:ml-2">
                              {obj.reason}
                            </span>
                          </span>

                          <span className="leading-tight text-xs my-2">
                            Submit at:{" "}                                      
                            <span className="font-semibold text-slate-700 sm:ml-2">
                              {obj.submiton}
                            </span>
                          </span>
                          
                        </div>
                        <div className="ml-auto text-right flex">
                          <div
                            className="relative z-10 inline-block px-4 mb-0 font-bold text-center text-transparent uppercase align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 bg-gradient-to-tl from-red-600 to-rose-400 hover:scale-102 active:opacity-85 bg-x-25 bg-clip-text"
                            href="/"
                          >
                            <span
                              className="text-lime-500"
                              key={obj._id}
                              onClick={() => handleApprove(obj._id)}
                            >
                              {" "}
                              Approve
                            </span>
                          </div>
                          <div
                            className="inline-block px-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-700"
                            href="/"
                          >
                            <span
                              className="text-red-600"
                              key={obj._id}
                              onClick={() => handleReject(obj._id)}
                            >
                              {" "}
                              Reject
                            </span>
                          </div>
                        </div>
                      </li>
                    );
                  })
                ) : (
                  <li className="relative flex p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50 justify-center">
                    <div>No Pending Request</div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaveApplications;
