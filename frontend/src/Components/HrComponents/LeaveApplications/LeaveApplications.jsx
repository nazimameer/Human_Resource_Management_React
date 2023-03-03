import React from "react";
import "./LeaveApplication.css";
function LeaveApplications() {
  return (
    <div className=" sm:mx-10 overflow-hidden mt-16">
      <div class="flex flex-wrap -mx-3">
        <div class="w-full max-w-full px-3 md:flex-none">
          <div class="relative flex flex-col min-w-0 break-words border-0 shadow-soft-xl rounded-2xl bg-clip-border">
            <div class="p-6 px-4 pb-0 mb-0  border-b-0 rounded-t-2xl">
              {/* <h6 class="mb-0 text-white text-2xl">Leave Applications</h6> */}

              <div class="relative flex flex-col flex-auto min-w-0 p-4  overflow-hidden break-words bg-white border-0 shadow-3xl dark:bg-slate-850 rounded-2xl bg-clip-border my-3">
                <div class="flex flex-wrap -mx-3">
                  <div class="flex-none w-auto max-w-full px-3">
                    <div class="mt-2 ml-3 text-lg relative inline-flex items-center justify-center  text-black transition-all duration-200 ease-in-out h-19 w-19 rounded-xl">
                      Leave Applications
                    </div>
                  </div>

                  <div class="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12">
                    <div class="relative right-0">
                      <ul
                        class="relative flex flex-wrap p-1 list-none bg-gray-50 rounded-xl"
                        nav-pills=""
                        role="tablist"
                      >
                        <li class="z-30 flex-auto text-center">
                          <a
                            class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg bg-inherit text-slate-700"
                            nav-link=""
                            href="/"
                            role="tab"
                            aria-selected="false"
                          >
                            <span class="ml-2">Pending</span>
                          </a>
                        </li>
                        <li class="z-30 flex-auto text-center">
                          <a
                            class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg bg-inherit text-slate-700"
                            nav-link=""
                            href="/"
                            role="tab"
                            aria-selected="false"
                          >
                            <span class="ml-2">Approved</span>
                          </a>
                        </li>
                        <li class="z-30 flex-auto text-center">
                          <a
                            class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-colors ease-in-out border-0 rounded-lg bg-inherit text-slate-700"
                            nav-link=""
                            href="/"
                            role="tab"
                            aria-selected="true"
                            active=""
                          >
                            <span class="ml-2">Rejected</span>
                          </a>
                        </li>
                        <div
                          class="piece-2 z-10 absolute text-slate-700 rounded-lg bg-inherit flex-auto text-center bg-none border-0 block"
                          moving-tab=""
                          nav-link=""
                        >
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="application flex-auto p-4 pt-6 overflow-y-scroll">
              <ul class="flex flex-col pl-0 mb-0 rounded-lg">
                <li class="relative flex p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50">
                  <div class="flex flex-col">
                    <h6 class="mb-4 leading-normal text-sm">Vaseem anwar</h6>
                    <span class="mb-2 leading-tight text-xs">
                      ID:{" "}
                      <span class="font-semibold text-slate-700 sm:ml-2">
                        13413
                      </span>
                    </span>
                    <span class="mb-2 leading-tight text-xs">
                      Period:{" "}
                      <span class="font-semibold text-slate-700 sm:ml-2">
                        1 Day
                      </span>
                    </span>
                    <span class="leading-tight text-xs">
                      Reason:{" "}
                      <span class="font-semibold text-slate-700 sm:ml-2">
                        Health Issue
                      </span>
                    </span>
                  </div>
                  <div class="ml-auto text-right flex">
                    <a
                      class="relative z-10 inline-block px-4 mb-0 font-bold text-center text-transparent uppercase align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 bg-gradient-to-tl from-red-600 to-rose-400 hover:scale-102 active:opacity-85 bg-x-25 bg-clip-text"
                      href="/"
                    >
                      <span className="text-lime-500"> Approve</span>
                    </a>
                    <a
                      class="inline-block px-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-700"
                      href="/"
                    >
                      <span className="text-red-600"> Reject</span>
                    </a>
                  </div>
                </li>

                <li class="relative flex p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50">
                  <div class="flex flex-col">
                    <h6 class="mb-4 leading-normal text-sm">Vaseem anwar</h6>
                    <span class="mb-2 leading-tight text-xs">
                      ID:{" "}
                      <span class="font-semibold text-slate-700 sm:ml-2">
                        13413
                      </span>
                    </span>
                    <span class="mb-2 leading-tight text-xs">
                      Period:{" "}
                      <span class="font-semibold text-slate-700 sm:ml-2">
                        1 Day
                      </span>
                    </span>
                    <span class="leading-tight text-xs">
                      Reason:{" "}
                      <span class="font-semibold text-slate-700 sm:ml-2">
                        Health Issue
                      </span>
                    </span>
                  </div>
                  <div class="ml-auto text-right flex">
                    <a
                      class="relative z-10 inline-block px-4 mb-0 font-bold text-center text-transparent uppercase align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 bg-gradient-to-tl from-red-600 to-rose-400 hover:scale-102 active:opacity-85 bg-x-25 bg-clip-text"
                      href="/"
                    >
                      <span className="text-lime-500"> Approve</span>
                    </a>
                    <a
                      class="inline-block px-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-700"
                      href="/"
                    >
                      <span className="text-red-600"> Reject</span>
                    </a>
                  </div>
                </li>

                <li class="relative flex p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50">
                  <div class="flex flex-col">
                    <h6 class="mb-4 leading-normal text-sm">Vaseem anwar</h6>
                    <span class="mb-2 leading-tight text-xs">
                      ID:{" "}
                      <span class="font-semibold text-slate-700 sm:ml-2">
                        13413
                      </span>
                    </span>
                    <span class="mb-2 leading-tight text-xs">
                      Period:{" "}
                      <span class="font-semibold text-slate-700 sm:ml-2">
                        1 Day
                      </span>
                    </span>
                    <span class="leading-tight text-xs">
                      Reason:{" "}
                      <span class="font-semibold text-slate-700 sm:ml-2">
                        Health Issue
                      </span>
                    </span>
                  </div>
                  <div class="ml-auto text-right flex">
                    <a
                      class="relative z-10 inline-block px-4 mb-0 font-bold text-center text-transparent uppercase align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 bg-gradient-to-tl from-red-600 to-rose-400 hover:scale-102 active:opacity-85 bg-x-25 bg-clip-text"
                      href="/"
                    >
                      <span className="text-lime-500"> Approve</span>
                    </a>
                    <a
                      class="inline-block px-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-700"
                      href="/"
                    >
                      <span className="text-red-600"> Reject</span>
                    </a>
                  </div>
                </li>

                <li class="relative flex p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50">
                  <div class="flex flex-col">
                    <h6 class="mb-4 leading-normal text-sm">Vaseem anwar</h6>
                    <span class="mb-2 leading-tight text-xs">
                      ID:{" "}
                      <span class="font-semibold text-slate-700 sm:ml-2">
                        13413
                      </span>
                    </span>
                    <span class="mb-2 leading-tight text-xs">
                      Period:{" "}
                      <span class="font-semibold text-slate-700 sm:ml-2">
                        1 Day
                      </span>
                    </span>
                    <span class="leading-tight text-xs">
                      Reason:{" "}
                      <span class="font-semibold text-slate-700 sm:ml-2">
                        Health Issue
                      </span>
                    </span>
                  </div>
                  <div class="ml-auto text-right flex">
                    <a
                      class="relative z-10 inline-block px-4 mb-0 font-bold text-center text-transparent uppercase align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 bg-gradient-to-tl from-red-600 to-rose-400 hover:scale-102 active:opacity-85 bg-x-25 bg-clip-text"
                      href="/"
                    >
                      <span className="text-lime-500"> Approve</span>
                    </a>
                    <a
                      class="inline-block px-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-700"
                      href="/"
                    >
                      <span className="text-red-600"> Reject</span>
                    </a>
                  </div>
                </li>

                <li class="relative flex p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50">
                  <div class="flex flex-col">
                    <h6 class="mb-4 leading-normal text-sm">Vaseem anwar</h6>
                    <span class="mb-2 leading-tight text-xs">
                      ID:{" "}
                      <span class="font-semibold text-slate-700 sm:ml-2">
                        13413
                      </span>
                    </span>
                    <span class="mb-2 leading-tight text-xs">
                      Period:{" "}
                      <span class="font-semibold text-slate-700 sm:ml-2">
                        1 Day
                      </span>
                    </span>
                    <span class="leading-tight text-xs">
                      Reason:{" "}
                      <span class="font-semibold text-slate-700 sm:ml-2">
                        Health Issue
                      </span>
                    </span>
                  </div>
                  <div class="ml-auto text-right flex">
                    <a
                      class="relative z-10 inline-block px-4 mb-0 font-bold text-center text-transparent uppercase align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 bg-gradient-to-tl from-red-600 to-rose-400 hover:scale-102 active:opacity-85 bg-x-25 bg-clip-text"
                      href="/"
                    >
                      <span className="text-lime-500"> Approve</span>
                    </a>
                    <a
                      class="inline-block px-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-700"
                      href="/"
                    >
                      <span className="text-red-600"> Reject</span>
                    </a>
                  </div>
                </li>

                <li class="relative flex p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50">
                  <div class="flex flex-col">
                    <h6 class="mb-4 leading-normal text-sm">Vaseem anwar</h6>
                    <span class="mb-2 leading-tight text-xs">
                      ID:{" "}
                      <span class="font-semibold text-slate-700 sm:ml-2">
                        13413
                      </span>
                    </span>
                    <span class="mb-2 leading-tight text-xs">
                      Period:{" "}
                      <span class="font-semibold text-slate-700 sm:ml-2">
                        1 Day
                      </span>
                    </span>
                    <span class="leading-tight text-xs">
                      Reason:{" "}
                      <span class="font-semibold text-slate-700 sm:ml-2">
                        Health Issue
                      </span>
                    </span>
                  </div>
                  <div class="ml-auto text-right flex">
                    <a
                      class="relative z-10 inline-block px-4 mb-0 font-bold text-center text-transparent uppercase align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 bg-gradient-to-tl from-red-600 to-rose-400 hover:scale-102 active:opacity-85 bg-x-25 bg-clip-text"
                      href="/"
                    >
                      <span className="text-lime-500"> Approve</span>
                    </a>
                    <a
                      class="inline-block px-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-700"
                      href="/"
                    >
                      <span className="text-red-600"> Reject</span>
                    </a>
                  </div>
                </li>

                <li class="relative flex p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50">
                  <div class="flex flex-col">
                    <h6 class="mb-4 leading-normal text-sm">Vaseem anwar</h6>
                    <span class="mb-2 leading-tight text-xs">
                      ID:{" "}
                      <span class="font-semibold text-slate-700 sm:ml-2">
                        13413
                      </span>
                    </span>
                    <span class="mb-2 leading-tight text-xs">
                      Period:{" "}
                      <span class="font-semibold text-slate-700 sm:ml-2">
                        1 Day
                      </span>
                    </span>
                    <span class="leading-tight text-xs">
                      Reason:{" "}
                      <span class="font-semibold text-slate-700 sm:ml-2">
                        Health Issue
                      </span>
                    </span>
                  </div>
                  <div class="ml-auto text-right flex">
                    <a
                      class="relative z-10 inline-block px-4 mb-0 font-bold text-center text-transparent uppercase align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 bg-gradient-to-tl from-red-600 to-rose-400 hover:scale-102 active:opacity-85 bg-x-25 bg-clip-text"
                      href="/"
                    >
                      <span className="text-lime-500"> Approve</span>
                    </a>
                    <a
                      class="inline-block px-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-700"
                      href="/"
                    >
                      <span className="text-red-600"> Reject</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaveApplications;
