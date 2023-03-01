import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../axios";

function Employees() {
  const [employees,setEmployees] = useState([]) 
  useEffect(() => {
    axios.get("/hr/employees").then((response)=>{
      if(response.data.status){
        setEmployees(response.data.employees)
      }
    })
  }, []);
  return (
    <div className="bg-slate-900">

      <div className="sm:mx-5 md:mx-10 my-24">
        <div className="my-3">
          <div className="flex items-center justify-between">
              <Link to={'/hr/addemployee'} className=" bg-green-500 p-2  rounded text-xs" >Add Employee</Link>
            <div></div>
            <input
              type="text"
              className="p-3 w-28 h-7 sm:w-40 sm:h-9 md:h-10 rounded-lg focus:border-none bg-white py-2 text-gray-700 transition-all placeholder:text-gray-500 "
              placeholder="Search..." 
            />
          </div>
        </div>

        <div className="overflow-auto rounded-lg shadow hidden md:block ">
          <table className="w-full h-full bg-white flex-col">
            <thead className="bg-grey-50 border-b-2 border-grey-200">
              <tr>
                <th className=" p-3 text-sm font-semibold tracking-wide text-left">
                  Name
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Id
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Function
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Email
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Status
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">


              <tr className="bg-white">
                <td className="p-3 text-sm text-grey-700 whitespace-nowrap flex items-center">
                  <div className="w-10 h-10 rounded-lg my-1 mx-2 shadow-lg shadow-gray-300 overflow-hidden">
                    <img src="../images/adminlogo.jpeg" alt="fsdfd" className="w-full h-full"/>
                  </div>
                  <div className="mx-3">
                    Nazim
                    </div> 
                </td>
                <td className="p-3 text-sm text-grey-700 whitespace-nowrap">
                  34822
                </td>
                <td className="p-3 text-sm text-grey-700 whitespace-nowrap">
                  Developer
                </td>
                <td className="p-3 text-sm text-grey-700 whitespace-nowrap">
                  nazim@gmail.com
                </td>
                <td className="p-3 text-sm text-grey-700 whitespace-nowrap">
                  {" "}
                  <span className="p-1.5 text-xs  font-medium uppercase tracking-wider text-yellow-800 bg-green-200 rounded-lg bg-opacity-50">
                    Active
                  </span>{" "}
                </td>
                <td>edit</td>
              </tr>

              

              

              

            <tr className="h-16 relative" colSpan="6">
              <td className="py-3 px-3 absolute right-0">
                <nav
                  aria-label="Pagination"
                  className="flex items-center text-gray-600"
                >
                  {" "}
                  <a href="/" className="p-2 rounded hover:bg-gray-100">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      />{" "}
                    </svg>{" "}
                  </a>{" "}
                  <a href="/" className="px-4 py-2 rounded hover:bg-gray-100">
                    {" "}
                    1{" "}
                  </a>{" "}
                  <a
                    href="/"
                    className="px-4 py-2 rounded bg-gray-200 text-gray-900 font-medium hover:bg-gray-100"
                  >
                    {" "}
                    2{" "}
                  </a>{" "}
                  <a href="/" className="px-4 py-2 rounded hover:bg-gray-100">
                    {" "}
                    3{" "}
                  </a>{" "}
                  <a href="/" className="px-4 py-2 rounded hover:bg-gray-100">
                    {" "}
                    ...{" "}
                  </a>{" "}
                  <a href="/" className="px-4 py-2 rounded hover:bg-gray-100">
                    {" "}
                    9{" "}
                  </a>{" "}
                  <a href="/" className="p-2 rounded hover:bg-gray-100">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />{" "}
                    </svg>{" "}
                  </a>{" "}
                </nav>
              </td>
            </tr>
            </tbody>

          </table>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden mx-3">
          <div className="bg-white p-4 rounded-lg shadow overflow-hidden">
            <div className="flex justify-between item-center space-x-2 text-sm relative">
              <div className="flex">
                <div className="w-12 h-12 overflow-hidden rounded-lg shadow">
                  <img
                    src="../images/adminlogo.jpeg"
                    className="w-full h-full"
                    alt="fasda"
                  />
                </div>

                <div className="px-3 py-3">Nazim Ameer</div>
              </div>
              <div className="flex gap-5 absolute right-0">
                <div>
                  <span className="p-1.5 text-xs  font-medium uppercase tracking-wider text-yellow-800 bg-green-200 rounded-lg bg-opacity-50">
                    Active
                  </span>
                </div>
              </div>
            </div>
            <div className="py-3">
              <div>ID: 49279</div>
              <div>nazimameer@gmail.com</div>

              <div className="flex justify-between">
                <div>Reactjs Developer</div>
                <div>Edit</div>
              </div>
            </div>
          </div>


          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between item-center space-x-2 text-sm relative">
              <div className="flex">
                <div className="w-12 h-12 overflow-hidden rounded-lg shadow">
                  <img
                    src="../images/landing.png"
                    className="w-full"
                    alt="fasda"
                  />
                </div>

                <div className="px-3 py-3">Nazim Ameer</div>
              </div>
              <div className="flex gap-5 absolute right-0">
                <div>
                  <span className="p-1.5 text-xs  font-medium uppercase tracking-wider text-yellow-800 bg-green-200 rounded-lg bg-opacity-50">
                    Active
                  </span>
                </div>
              </div>
            </div>
            <div className="py-3">
              <div>ID: 49279</div>
              <div>nazimameer@gmail.com</div>

              <div className="flex justify-between">
                <div>Reactjs Developer</div>
                <div>Edit</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between item-center space-x-2 text-sm relative">
              <div className="flex">
                <div className="w-12 h-12 overflow-hidden rounded-lg shadow">
                  <img
                    src="../images/landing.png"
                    className="w-full"
                    alt="fasda"
                  />
                </div>

                <div className="px-3 py-3">Nazim Ameer</div>
              </div>
              <div className="flex gap-5 absolute right-0">
                <div>
                  <span className="p-1.5 text-xs  font-medium uppercase tracking-wider text-yellow-800 bg-green-200 rounded-lg bg-opacity-50">
                    Active
                  </span>
                </div>
              </div>
            </div>
            <div className="py-3">
              <div>ID: 49279</div>
              <div>nazimameer@gmail.com</div>

              <div className="flex justify-between">
                <div>Reactjs Developer</div>
                <div>Edit</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between item-center space-x-2 text-sm relative">
              <div className="flex">
                <div className="w-12 h-12 overflow-hidden rounded-lg shadow">
                  <img
                    src="../images/landing.png"
                    className="w-full"
                    alt="fasda"
                  />
                </div>

                <div className="px-3 py-3">Nazim Ameer</div>
              </div>
              <div className="flex gap-5 absolute right-0">
                <div>
                  <span className="p-1.5 text-xs  font-medium uppercase tracking-wider text-yellow-800 bg-green-200 rounded-lg bg-opacity-50">
                    Active
                  </span>
                </div>
              </div>
            </div>
            <div className="py-3">
              <div>ID: 49279</div>
              <div>nazimameer@gmail.com</div>

              <div className="flex justify-between">
                <div>Reactjs Developer</div>
                <div>Edit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employees;
