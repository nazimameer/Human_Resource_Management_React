import React, { useState, useEffect } from "react";
import "./Applications.css";
import axios from "../../../Api/EmployeeAxios";
import { Link } from "react-router-dom";

function Applicaitons() {
  const [isLength, setIsLength] = useState(false);
  const [Applications, setApplications] = useState([]);
  const [InputError, setInputError] = useState(false);
  const [FullDay, setFullDay] = useState(true);
  useEffect(() => {
    axios.get("/employee/previousApplication").then((response) => {
      console.log(response);
      const data = response.data.applicationsinfo;
      if (data.length !== 0) {
        setIsLength(true);
        setApplications(response.data.applicationsinfo);
      }
    });
  }, []);

  const [formData, setFormData] = useState({
    leaveperiod: "Full Day",
    from: "",
    to: "",
    reason: "",
  });
  const handleClick = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    const value = event.target.value;
    console.log(value);
    if (value === "Half Day") {
      setFullDay(false);
    } else {
      setFullDay(true);
    }
  };

  const handleChange = (event) => {
    if (event.target.value === "") {
      setInputError(true);
    } else {
      setInputError(false);
    }
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.reason === "") {
      setInputError(true);
      return;
    }

    axios.post("/employee/leave_application", formData).then((response) => {
      if (response.status === 200) {
        axios.get("/employee/previousApplication").then((response) => {
          console.log(response);
          const data = response.data.applicationsinfo;
          if (data.length !== 0) {
            setIsLength(true);
            setApplications(response.data.applicationsinfo);
          }
        });
      }
    });
  };
  return (
    <div className="flex mt-20 justify-center">
      <div class="w-1/3 h-full bg-white rounded-xl ">
        <div className="p-14">
          <form class="w-full max-w-lg" onSubmit={handleSubmit}>
            <div class="w-full md:w-1/3  mb-6 md:mb-0 py-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Leave Period
              </label>
              <div class="relative w-28">
                <select
                  onChange={handleClick}
                  class="block appearance-none w-32 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  name="leaveperiod"
                  required
                >
                  <option>Full Day</option>
                  <option>Half Day</option>
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

            {FullDay && (
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
                    name="from"
                    onChange={handleChange}
                    required
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
                    name="to"
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}

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
                  name="reason"
                  onChange={handleChange}
                />
              </div>
              {InputError ? (
                <div>
                  <div className=" w-60 h-10 ml-3 flex justify-center items-center rounded text-white bg-red-600">
                    <span class="p-5">This field is required !</span>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>

            <div class="flex flex-wrap -mx-3 mb-2 justify-end">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <button
                  type="submit"
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                >
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
            <div class="prev relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl rounded-2xl bg-clip-border">
              <div class=" border-black/12.5 rounded-t-2xl border-b-0 border-solid p-4 pb-0">
                <h6 class="mb-0">Previous Leave Application</h6>
              </div>
              <div class="flex flex-col-reverse p-4 rounded-xl">
                {isLength ? (
                  Applications.map((obj, index) => {
                    return (
                      <Link to={"/"} class="flex mb-6 relative" key={index}>
                        <div>
                          <div class="inline-block w-12 h-12 text-center text-black bg-center rounded-lg shadow-none fill-current stroke-none bg-red-600/3">
                            <i class="bx bx-note text-2xl"></i>
                          </div>
                        </div>
                        <div class="ml-4">
                          <div>
                            <h6 class="mb-1 text-sm leading-normal  text-slate-700">
                              {obj.reason}
                            </h6>
                            <span class="text-sm leading-normal">
                              {obj.submitdate}
                            </span>
                          </div>
                        </div>
                        <div className="absolute right-0">
                          {
                          obj.status === "Rejected" ?
                          
                          <span className="p-1 px-2 text-xs  font-medium uppercase tracking-wider text-yellow-800 bg-red-200 rounded-lg bg-opacity-50">
                          {obj.status}
                        </span>

                        :
                        obj.status === "Pending"?

                        <span className="p-1 px-2 text-xs  font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
                          {obj.status}
                        </span>

                        :

                        <span className="p-1 px-2 text-xs  font-medium uppercase tracking-wider text-yellow-800 bg-green-200 rounded-lg bg-opacity-50">
                          {obj.status}
                        </span>
                          }
                        </div>
                        
                      </Link>
                    );
                  })
                ) : (
                  <div class="flex mb-6">
                    <div>
                      <div class="inline-block w-12 h-12 text-center text-black bg-center rounded-lg shadow-none fill-current stroke-none bg-red-600/3">
                        <i class="bx bx-note text-2xl"></i>
                      </div>
                    </div>
                    <div class="ml-4">
                      <div>
                        <h6 class="mb-1 text-sm leading-normal  text-slate-700">
                          No Data Available
                        </h6>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div class="w-full max-w-full px-3 mt-6 shrink-0 md:flex-0 md:w-6/12 xl:w-full">
            <div class="relative flex flex-col min-w-0 break-words border-0 shadow-xl bg-gradient-to-tl from-zinc-800 to-zinc-700  rounded-2xl bg-clip-border">
              <div class="h-40 border-black/12.5 rounded-t-2xl border-b-0 border-solid bg-transparent p-4 pb-0">
                <div class="flex flex-wrap -mx-3">
                  <div class="w-7/12 max-w-full px-3 flex-0">
                    <h6 class="mb-0 text-white">Productivity</h6>
                    <p class="text-sm leading-normal text-white">
                      <i
                        class="fa fa-arrow-up text-emerald-500"
                        aria-hidden="true"
                      ></i>
                      <span class="font-semibold">60% Leave </span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Applicaitons;
