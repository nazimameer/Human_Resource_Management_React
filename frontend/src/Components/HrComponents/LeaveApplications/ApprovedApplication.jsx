import React, { useState, useEffect } from "react";
import TopBar from "./topBar";
import axios from "../../../Api/HrAxios";
function ApprovedApplication() {
  const [isLength, setIsLength] = useState(false);
  const [applications, setApplications] = useState([]);
  useEffect(() => {
    axios
      .get("/hr/applications/approved")
      .then((response) => {
        if (response.status === 200) {
          const data = response.data.applicationsinfo;
          setApplications(data);
          setIsLength(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLength(false);
      });
  }, []);
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
                                // eslint-disable-next-line no-useless-concat
                                ? "Half Day" + " ("+obj.section+")"
                                : obj.period + " Days"}
                            </span>

                            
                          </span>

                         {obj.period !== "Half Day"? 
                         <div className="flex flex-col">
                         <span className="leading-tight text-xs">
                            From:{" "}
                            <span className="font-semibold text-slate-700 sm:ml-2">
                              {obj.from}
                            </span>
                          </span>

                          <span className="leading-tight text-xs mt-1">
                            To:{" "}
                            <span className="font-semibold text-slate-700 sm:ml-2">
                              {obj.to}
                            </span>
                          </span>
                         </div>
                          :
                          ""}
                          <span className="leading-tight text-xs mt-1">
                            Reason:{" "}
                            <span className="font-semibold text-slate-700 sm:ml-2">
                              {obj.reason}
                            </span>
                          </span>

                          <span className="leading-tight text-xs mt-1">
                            Submit on:{" "}
                            <span className="font-semibold text-slate-700 sm:ml-2">
                              {obj.submiton}
                            </span>
                          </span>

                          
                        </div>
                        <div className="ml-auto text-right flex">
                          <div
                            className="relative z-10 inline-block px-4 mb-0 font-bold text-center text-transparent uppercase align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 bg-gradient-to-tl from-red-600 to-rose-400 hover:scale-102 active:opacity-85 bg-x-25 bg-clip-text"
                          >
                            <span className="text-lime-500 "> Approved</span>
                          </div>
                        </div>
                      </li>
                    );
                  })
                ) : (
                  <li className="relative flex p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50 justify-center">
                    <div>No Approved Application</div>
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

export default ApprovedApplication;
