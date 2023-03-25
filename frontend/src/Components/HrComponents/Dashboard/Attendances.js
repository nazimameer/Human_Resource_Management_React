import React from "react";
import "./Dashboard.css";
function Attendances(props) {
  return (
    <>
      <div className="dashboard bg-slate-900">
        <div class="flex-none  w-full px-3 ">
          <div class="relative flex flex-col min-w-0 break-words border-0 rounded-2xl bg-clip-border">
            <div class="flex-auto p-4">
              <div class="attendaceBar flex mx-3">
                {props.attLength ? (
                  props.attendance.map((obj) => {
                    return (
                      <div class="w-full px-3 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12 my-3">
                        <div class="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none  rounded-2xl bg-clip-border">
                          <div class="relative">
                            <a href="/" class="block shadow-xl rounded-2xl">
                              <img
                                src={obj.image.url}
                                alt="img-blur-shadow"
                                class="w-full shadow-2xl rounded-2xl "
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

                            <a href="/">
                              <h5 class="text-white">{obj.position}</h5>
                            </a>
                            <p class="mb-6 text-sm leading-normal text-white">
                              {obj.time}
                            </p>
                            {props.Present && !props.Absent  ? (
                              <div class="flex items-center justify-between">
                                <button
                                  type="button"
                                  class="inline-block w-full px-8 py-2 mb-0 text-xs font-bold leading-normal text-center text-green-500 align-middle transition-all ease-in bg-transparent border border-green-500 border-solid rounded-lg shadow-none cursor-pointer hover:-translate-y-px active:shadow-xs tracking-tight-rem hover:border-blue-500 hover:bg-transparent hover:text-blue-500 hover:opacity-75 hover:shadow-none active:bg-blue-500 active:text-white active:hover:bg-transparent active:hover:text-blue-500"
                                >
                                  Present
                                </button>
                              </div>
                            ) :props.Absent && !props.Present? (
                              <div class="flex items-center justify-between">
                                <button
                                  type="button"
                                  class="inline-block w-full px-8 py-2 mb-0 text-xs font-bold leading-normal text-center text-green-500 align-middle transition-all ease-in bg-transparent border border-red-500 border-solid rounded-lg shadow-none cursor-pointer hover:-translate-y-px active:shadow-xs tracking-tight-rem hover:border-blue-500 hover:bg-transparent hover:text-blue-500 hover:opacity-75 hover:shadow-none active:bg-blue-500 active:text-white active:hover:bg-transparent active:hover:text-blue-500"
                                  onClick={() => props.handleConfirm(obj.UID)}
                                >
                                  Give Present
                                </button>

                                
                                <div class="mt-2"></div>
                              </div>
                            )
                            
                            : (
                              <div class="flex items-center justify-between">
                                <button
                                  type="button"
                                  class="inline-block px-8 py-2 mb-0 text-xs font-bold leading-normal text-center text-green-500 align-middle transition-all ease-in bg-transparent border border-green-500 border-solid rounded-lg shadow-none cursor-pointer hover:-translate-y-px active:shadow-xs tracking-tight-rem hover:border-blue-500 hover:bg-transparent hover:text-blue-500 hover:opacity-75 hover:shadow-none active:bg-blue-500 active:text-white active:hover:bg-transparent active:hover:text-blue-500"
                                  onClick={() => props.handleConfirm(obj.UID)}
                                >
                                  Confirm
                                </button>

                                <button
                                  type="button"
                                  class="inline-block px-8 py-2 mb-0 text-xs font-bold leading-normal text-center text-red-500 align-middle transition-all ease-in bg-transparent border border-red-500 border-solid rounded-lg shadow-none cursor-pointer hover:-translate-y-px active:shadow-xs tracking-tight-rem hover:border-blue-500 hover:bg-transparent hover:text-blue-500 hover:opacity-75 hover:shadow-none active:bg-blue-500 active:text-white active:hover:bg-transparent active:hover:text-blue-500"
                                  onClick={() => props.handleAbsent(obj.UID)}
                                >
                                  Mark Absent
                                </button>
                                <div class="mt-2"></div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="flex p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50 justify-center absolute w-2/3 ml-40">
                    <div>No Attendance </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Attendances;
