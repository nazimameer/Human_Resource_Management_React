import React from "react";
import { useNavigate } from 'react-router-dom'
import './Departments.css'
function Departments(props) {
  const Navigate = useNavigate();
const toDepartment =(id)=>{
  Navigate(`/hr/Departmentpayslip/${id}`)
}

const handleOnclick = (id) =>{
  props.setId(id)
  props.openTaskDep()
}
  return (
    <div className="mx-5 relative mt-20">
      <div class="flex flex-wrap my-6 -mx-3">
        <div class="w-full max-w-full px-3 mt-0 mb-6 md:mb-0  md:flex-none  lg:flex-none">
          <div class="border-black/12.5 shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
            <div class="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
              <div class="flex flex-wrap mt-0 -mx-3">
                <div class="flex w-7/12 max-w-full px-3 lg:w-full justify-between">
                  <div className="h-9 flex justify-center items-center">
                 
                  </div>

            <div ><input type="text" className="rounded w-40" placeholder="Search..." onChange={(event)=>props.Search(event)}/></div>
                </div>
                
              </div>
            </div>
            <div class="tablebody flex-auto p-6 px-0 pb-2 max-h-[28rem] overflow-y-scroll">
              <div class="overflow-x-auto ps">
                <table class="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                  <thead class="align-bottom">
                    <tr>
                      <th class="px-6 py-3 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                        Departments
                      </th>
                      <th class="px-6 py-3 pl-2 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                        Members
                      </th>
                      {/* <th class="px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                        Budget
                      </th> */}
                      {/* <th class="px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                        Completion
                      </th> */}

                      <th class="px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                        Task
                      </th>
                    </tr>
                  </thead>
                  <tbody>
{ props.Department.map((obj,index)=>{
  return(

                    <tr className="cursor-pointer" 
                    key={index} 
                    >
                      <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap" 
                      onClick={()=>toDepartment(obj._id)}
                      >
                        <div class="flex px-2 py-1">
                          
                          <div class="flex flex-col justify-center">
                            <h6 class="mb-0 leading-normal text-sm">
                              {obj.name}
                            </h6>
                          </div>
                        </div>

                      </td>

                      <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                        <div class="mt-2 avatar-group">
                          <a
                            href="/"
                            class="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                            data-target="tooltip_trigger"
                            data-placement="bottom"
                          >
                            <img
                              src="../images/adminlogo.jpeg"
                              class="w-full h-full rounded-full object-cover"
                              alt="team1"
                            />
                          </a>
                          <div
                            data-target="tooltip"
                            class="px-2 py-1 text-white bg-black rounded-lg text-sm hidden"
                            role="tooltip"
                            // style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(688px, 224.8px, 0px);"
                            data-popper-placement="bottom"
                          >
                            Ryan Tompson
                            <div
                              class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                              data-popper-arrow=""
                            //   style="position: absolute; left: 0px; transform: translate3d(0px, 0px, 0px);"
                            ></div>
                          </div>
                          <a
                            href="/"
                            class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                            data-target="tooltip_trigger"
                            data-placement="bottom"
                          >
                            <img
                              src="../images/adminlogo.jpeg"
                              class="w-full h-full rounded-full object-cover"
                              alt="team2"
                            />
                          </a>
                          <div
                            data-target="tooltip"
                            class="px-2 py-1 text-white bg-black rounded-lg text-sm hidden"
                            role="tooltip"
                            // style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(700px, 224px, 0px);"
                            data-popper-placement="bottom"
                          >
                            Romina Hadid
                            <div
                              class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                              data-popper-arrow=""
                            //   style="position: absolute; left: 0px; transform: translate3d(0px, 0px, 0px);"
                            ></div>
                          </div>
                          <a
                            href="/"
                            class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                            data-target="tooltip_trigger"
                            data-placement="bottom"
                          >
                            <img
                              src="../images/adminlogo.jpeg"
                              class="w-full h-full rounded-full object-cover"
                              alt="team3"
                            />
                          </a>
                          <div
                            data-target="tooltip"
                            class="px-2 py-1 text-white bg-black rounded-lg text-sm hidden"
                            role="tooltip"
                            // style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(712px, 224px, 0px);"
                            data-popper-placement="bottom"
                          >
                            Alexander Smith
                            <div
                              class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                              data-popper-arrow=""
                            //   style="position: absolute; left: 0px; transform: translate3d(0px, 0px, 0px);"
                            ></div>
                          </div>
                          <a
                            href="/"
                            class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30"
                            data-target="tooltip_trigger"
                            data-placement="bottom"
                          >
                            <img
                              src="../images/adminlogo.jpeg"
                              class="w-full h-full rounded-full object-cover"
                              alt="team4"
                            />
                          </a>
                          <div
                            data-target="tooltip"
                            class="px-2 py-1 text-white bg-black rounded-lg text-sm hidden"
                            role="tooltip"
                            // style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(724px, 224.8px, 0px);"
                            data-popper-placement="bottom"
                          >
                            Jessica Doe
                            <div
                              class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                              data-popper-arrow=""
                            //   style="position: absolute; left: 0px; transform: translate3d(0px, 0px, 0px);"
                            ></div>
                          </div>
                        </div>
                      </td>


                      {/* <td class="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap">
                        <span class="font-semibold leading-tight text-xs">
                          {" "}
                          $14,000{" "}
                        </span>
                      </td> */}


                      {/* <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                        <div class="w-3/4 mx-auto">
                          <div>
                            <div>
                              <span class="font-semibold leading-tight text-xs">
                                60%
                              </span>
                            </div>
                          </div>
                          <div class="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                            <div
                              class="duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5 w-3/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all"
                              role="progressbar"
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </td> */}

                      <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap" 
                    //    onClick={()=>handleOnclick(obj._id)}
                       >
                            <div className="flex items-center justify-center" >
                            <i class='bx bx-task text-xl'></i>
                            </div>
                      </td>
                    </tr>
  )
})
}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Departments;
