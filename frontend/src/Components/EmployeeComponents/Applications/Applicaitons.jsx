import React,{useState} from "react";
import "./Applications.css";

function Applicaitons() {

    const [FullDay,setFullDay] = useState(true)
    const handleClick =(event)=>{

        const value = event.target.value;
            console.log(value)       
            if(value==="Half Day"){
                setFullDay(false)
            }else{
                setFullDay(true)
            }
    }
  return (
    <div className="flex mt-20 justify-center">
      <div class="w-1/3 h-full bg-white rounded-xl ">
      
        <div className="p-14">
          <form class="w-full max-w-lg">

          <div class="w-full md:w-1/3  mb-6 md:mb-0 py-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-state"
                >
                  Leave Period
                </label>
                <div class="relative w-28">
                  <select onChange={handleClick}
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option >Full Day</option>
                    <option >Half Day</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>



          {
            FullDay&&

            <div class="flex flex-wrap -mx-3 mb-6">
            
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Leave From
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="date"
                  placeholder="Jane"
                />
                
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  To
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="date"
                  placeholder="Doe"
                />
              </div>
            </div>
           
          }



            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Reason
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="text"
                  placeholder=""
                />
                
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2 justify-end">
              
              
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="w-full max-w-full px-3 shrink-0 xl:flex-0 xl:w-3/12 ">
        <div class="flex flex-wrap -mx-3">
          <div class="w-full max-w-full px-3 mt-6 shrink-0 md:flex-0 md:w-6/12 xl:w-full xl:mt-0">
            <div class="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl   rounded-2xl bg-clip-border">
              <div class="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-4 pb-0">
                <h6 class="mb-0 ">Previous Leave Application</h6>
              </div>
              <div class="flex-auto p-4 rounded-xl">
                <div class="flex">
                  <div>
                    <div class="inline-block w-12 h-12 text-center text-black bg-center rounded-lg shadow-none fill-current stroke-none bg-red-600/3">
                      <i class="bx bx-note text-2xl"></i>
                    </div>
                  </div>
                  <div class="ml-4">
                    <div>
                      <h6 class="mb-1 text-sm leading-normal  text-slate-700">
                        Health issue
                      </h6>
                      <span class="text-sm leading-normal">
                        21 March 2021, at 12:30 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div class="flex mt-6">
                  <div>
                    <div class="inline-block w-12 h-12 text-center text-black bg-center rounded-lg shadow-none fill-current stroke-none bg-blue-500/3">
                      <i class="bx bx-note text-2xl"></i>
                    </div>
                  </div>
                  <div class="ml-4">
                    <div>
                      <h6 class="mb-1 text-sm leading-normal  text-slate-700">
                        Personal issue
                      </h6>
                      <span class="text-sm leading-normal">
                        24 March 2021, at 10:00 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div class="flex mt-6">
                  <div>
                    <div class="inline-block w-12 h-12 text-center text-black bg-center rounded-lg shadow-none fill-current stroke-none bg-emerald-500/3">
                      <i class="bx bx-note text-2xl"></i>
                    </div>
                  </div>
                  <div class="ml-4">
                    <div>
                      <h6 class="mb-1 text-sm leading-normal  text-slate-700">
                        Marriage Function
                      </h6>
                      <span class="text-sm leading-normal">
                        25 March 2021, at 9:30 AM
                      </span>
                    </div>
                  </div>
                </div>
                <div class="flex mt-6">
                  <div>
                    <div class="inline-block w-12 h-12 text-center text-black bg-center rounded-lg shadow-none fill-current stroke-none bg-red-500/3">
                      <i class="bx bx-note text-2xl"></i>
                    </div>
                  </div>
                  <div class="ml-4">
                    <div>
                      <h6 class="mb-1 text-sm leading-normal  text-slate-700">
                        Personal issue
                      </h6>
                      <span class="text-sm leading-normal">
                        25 March 2021, at 2:00 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div class="flex mt-6">
                  <div>
                    <div class="inline-block w-12 h-12 text-center text-black bg-center rounded-lg shadow-none fill-current stroke-none bg-cyan-500/3">
                      <i class="bx bx-note text-2xl"></i>
                    </div>
                  </div>
                  <div class="ml-4">
                    <div>
                      <h6 class="mb-1 text-sm leading-normal  text-slate-700">
                        Verify Dashboard Color Palette
                      </h6>
                      <span class="text-sm leading-normal">
                        26 March 2021, at 9:00 AM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full max-w-full px-3 mt-6 shrink-0 md:flex-0 md:w-6/12 xl:w-full">
            <div class="relative flex flex-col min-w-0 break-words border-0 shadow-xl bg-gradient-to-tl from-zinc-800 to-zinc-700  rounded-2xl bg-clip-border">
              <div class="border-black/12.5 rounded-t-2xl border-b-0 border-solid bg-transparent p-4 pb-0">
                <div class="flex flex-wrap -mx-3">
                  <div class="w-7/12 max-w-full px-3 flex-0">
                    <h6 class="mb-0 text-white">Productivity</h6>
                    <p class="text-sm leading-normal text-white">
                      <i
                        class="fa fa-arrow-up text-emerald-500"
                        aria-hidden="true"
                      ></i>
                      <span class="font-semibold">60% Leave   </span>
                        Completed on March 2023
                    </p>
                  </div>
                  <div class="w-5/12 max-w-full px-3 text-right flex-0">
                    <div class="relative mr-4 text-right">
                      <a
                        href="/"
                        class="cursor-pointer"
                        dropdown-trigger=""
                        aria-expanded="false"
                      >
                        <i
                          class="text-white fa fa-ellipsis-h"
                          aria-hidden="true"
                        ></i>
                      </a>
                      <p class="hidden transform-dropdown-show"></p>
                      <ul
                        dropdown-menu=""
                        class="l z-100  text-sm lg:shadow-3xl duration-250 before:duration-350 before:font-awesome before:ease min-w-44 before:text-5.5 transform-dropdown pointer-events-none absolute right-0 left-auto top-0 m-0 -mr-4 mt-2 list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-0 py-2 text-left text-slate-500 opacity-0 transition-all before:absolute before:right-7 before:left-auto before:top-0 before:z-40 before:text-white before:transition-all before:content-['\f0d8'] sm:-mr-6"
                      >
                        <li>
                          <a
                            class="py-1.2 lg:ease clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700    lg:transition-colors lg:duration-300"
                            href="/"
                          >
                            Action
                          </a>
                        </li>
                        <li>
                          <a
                            class="py-1.2 lg:ease clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700  lg:transition-colors lg:duration-300"
                            href="/"
                          >
                            Another action
                          </a>
                        </li>
                        <li>
                          <a
                            class="py-1.2 lg:ease clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700  lg:transition-colors lg:duration-300"
                            href="/"
                          >
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-auto p-0">
                <div>
                  <canvas
                    className="canvas"
                    id="chart-line-3"
                    height="200"
                    width="469"
                  ></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Applicaitons;
