import React from "react";

function Employees() {
  return (
    <div className="bg-slate-900">
      <div className="w-full px-6 py-6 mx-auto mt-16 bg-slate-900">
        <div className="flex flex-wrap -mx-3 mb-32">
          <div className="flex-none w-full max-w-full px-3">
            <div className="relative flex flex-col min-w-0 mb-6 break-words bg-slate-900 border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent flex">
                <h1 className="dark:text-white">EMPLOYEES</h1>
                <button className=" bg-green-500 p-2 ml-10 rounded text-xs">Add Employee</button>
              </div>
              <div className="flex-auto px-0 pt-0 pb-2">
                <div className="p-0 overflow-x-auto ps">
                  <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                    <thead className="align-bottom">
                      <tr>
                        <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                          NAME
                        </th>
                        <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                          Function
                        </th>
                        <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                          Status
                        </th>
                        <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                          WORKING HOUR
                        </th>
                        <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none dark:border-white/40 dark:text-white tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <div className="flex px-2 py-1">
                            <div>
                              <img
                                src=""
                                className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                                alt="user1"
                              />
                            </div>
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-0 text-sm leading-normal dark:text-white">
                                Akshay Kumar
                              </h6>
                              <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                                akshaykumar@gmail.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
                            Manager
                          </p>
                          <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                          supervisor
                          </p>
                        </td>
                        <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <span className="bg-gradient-to-tl from-emerald-500 to-teal-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                            Online
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                            5 hours 30 minutes
                          </span>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <a
                            href="/"
                            className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"
                          >
                            {" "}
                            Edit{" "}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <div className="flex px-2 py-1">
                            <div>
                              <img
                                src=""
                                className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                                alt="user2"
                              />
                            </div>
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-0 text-sm leading-normal dark:text-white">
                                Abin vargheese
                              </h6>
                              <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                                abinvargheese@gmail.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
                            Designer
                          </p>
                          <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                            UI & UX
                          </p>
                        </td>
                        <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <span className="bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                            Offline
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                            4 hours 18 minutes
                          </span>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <a
                            href="/"
                            className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"
                          >
                            {" "}
                            Edit{" "}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <div className="flex px-2 py-1">
                            <div>
                              <img
                                src=""
                                className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                                alt="user3"
                              />
                            </div>
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-0 text-sm leading-normal dark:text-white">
                                Abdulla AK
                              </h6>
                              <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                                abduak@gmail.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
                            Frontend
                          </p>
                          <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                            React js Developer
                          </p>
                        </td>
                        <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <span className="bg-gradient-to-tl from-emerald-500 to-teal-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                            Online
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                            5 hours 40 minutes
                          </span>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <a
                            href="/"
                            className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"
                          >
                            {" "}
                            Edit{" "}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <div className="flex px-2 py-1">
                            <div>
                              <img
                                src=""
                                className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                                alt="user4"
                              />
                            </div>
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-0 text-sm leading-normal dark:text-white">
                                Thalha Zubair
                              </h6>
                              <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                                thalhazub@gamil.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
                            Front end
                          </p>
                          <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                            React js Developer
                          </p>
                        </td>
                        <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <span className="bg-gradient-to-tl from-emerald-500 to-teal-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                            Online
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                            6 hours 40 minutes
                          </span>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <a
                            href="/"
                            className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"
                          >
                          
                            Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <div className="flex px-2 py-1">
                            <div>
                              <img
                                src=""
                                className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                                alt="user5"
                              />
                            </div>
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-0 text-sm leading-normal dark:text-white">
                                Roshith P
                              </h6>
                              <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                                roshithp@gmail.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
                            Backend
                          </p>
                          <p class="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                            Node js Developer
                          </p>
                        </td>
                        <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <span className="bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                            Offline
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                            4 hour 8 minutes
                          </span>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <a
                            href="/"
                            className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"
                          >
                            {" "}
                            Edit{" "}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                          <div className="flex px-2 py-1">
                            <div>
                              <img
                                src=""
                                className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                                alt="user6"
                              />
                            </div>
                            <div clclassNameass="flex flex-col justify-center">
                              <h6 className="mb-0 text-sm leading-normal dark:text-white">
                                Nazim Ameer
                              </h6>
                              <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                                nazimameerpp@gmail.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                          <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
                            Team Lead
                          </p>
                          <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                            Full Stack Developer
                          </p>
                        </td>
                        <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                          <span className="bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                            Offline
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                            8 hours 2 minutes
                          </span>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                          <a
                            href="/"
                            className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"
                          >
                            {" "}
                            Edit{" "}
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div
                    className="ps__rail-x"
                    // style="left: 0px; bottom: 0px;"
                  >
                    <div
                      className="ps__thumb-x"
                      tabindex="0"
                      // style="left: 0px; width: 0px;"
                    ></div>
                  </div>
                  <div
                    className="ps__rail-y"
                    // style="top: 0px; right: 0px;"
                  >
                    <div
                      className="ps__thumb-y"
                      tabindex="0"
                      // style="top: 0px; height: 0px;"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <footer className="pt-4">
          <div className="w-full px-6 mx-auto">
            <div className="flex flex-wrap items-center -mx-3 lg:justify-between">
              <div className="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
                <div className="text-sm leading-normal text-center text-slate-500 lg:text-left">
                  ©
                  <script>
                    
                  </script>
                  HRM <i className="fa fa-heart" aria-hidden="true"></i>{" "}
                
                  <a
                    href="/"
                    className="font-semibold dark:text-white text-slate-700"
                    target="_blank"
                  >
                    
                  </a>
            
                </div>
              </div>
              <div className="w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none">
                <ul className="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end">
                  
                  <li className="nav-item">
                    <a
                      href="/"
                      className="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500"
                      target="_blank"
                    >
                      About Us
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="/"
                      className="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500"
                      target="_blank"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/"
                      className="block px-4 pt-0 pb-1 pr-0 text-sm font-normal transition-colors ease-in-out text-slate-500"
                      target="_blank"
                    >
                      License
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Employees;
