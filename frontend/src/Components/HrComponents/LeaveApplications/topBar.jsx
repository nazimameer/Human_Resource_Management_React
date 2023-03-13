import React from "react";
import { Link } from "react-router-dom";

function topBar() {
  return (
    <div>
      <div className="p-6 px-4 pb-0 mb-0  border-b-0 rounded-t-2xl">
        {/* <h6 className="mb-0 text-white text-2xl">Leave Applications</h6> */}

        <div className="relative flex flex-col flex-auto min-w-0 p-4  overflow-hidden break-words bg-white border-0 shadow-3xl dark:bg-slate-850 rounded-2xl bg-clip-border my-3">
          <div className="flex flex-wrap -mx-3">
            <div className="flex-none w-auto max-w-full px-3">
              <div className="mt-2 ml-3 text-lg relative inline-flex items-center justify-center  text-black transition-all duration-200 ease-in-out h-19 w-19 rounded-xl">
                Leave Applications
              </div>
            </div>

            <div className="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12">
              <div className="relative right-0">
                <ul
                  className="relative flex flex-wrap p-1 list-none bg-gray-50 rounded-xl"
                  nav-pills=""
                  role="tablist"
                >
                  <li className="z-30 flex-auto text-center">
                    <Link
                      to={"/hr/leaveapplications"}
                      className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg bg-inherit text-slate-700"
                      nav-link=""
                      href="/"
                      role="tab"
                      aria-selected="false"
                    >
                      <span className="ml-2">Pending</span>
                    </Link>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <Link
                      to={"/hr/leaveapplications/approved"}
                      className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg bg-inherit text-slate-700"
                      nav-link=""
                      href="/"
                      role="tab"
                      aria-selected="false"
                    >
                      <span className="ml-2">Approved</span>
                    </Link>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <Link
                      to={"/hr/leaveapplications/rejected"}
                      className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-colors ease-in-out border-0 rounded-lg bg-inherit text-slate-700"
                      nav-link=""
                      href="/"
                      role="tab"
                      aria-selected="true"
                      active=""
                    >
                      <span className="ml-2">Rejected</span>
                    </Link>
                  </li>
                  <div
                    className="piece-2 z-10 absolute text-slate-700 rounded-lg bg-inherit flex-auto text-center bg-none border-0 block"
                    moving-tab=""
                    nav-link=""
                  ></div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default topBar;
