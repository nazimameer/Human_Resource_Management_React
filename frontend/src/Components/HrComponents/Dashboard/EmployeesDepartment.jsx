import React, { useState } from "react";
import { Link } from "react-router-dom";

function EmployeesDepartment(props) {
  
  const [searchQuery, setSearchQuery] = useState("");
  const handleBlock = (uid) =>{
    
  }

  const handleUnBlock = (uid) =>{
    
  }


  const handleInputSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredList = searchQuery
    ? props.employees.filter(
        (employees) =>
          employees.fullname
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          employees.UID.toString().includes(searchQuery) ||
          employees.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          employees.position.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : props.employees;

  return (
    <div className="bg-slate-900">
      <div className="sm:mx-5 md:mx-10 my-24">
        <div className="my-3">
          <div className="flex items-center justify-between">
            <Link
              to={"/hr/addemployee"}
              className=" bg-green-500 p-2  rounded text-xs"
            >
              Add Employee
            </Link>

            {props.isLength ? (
              <input
                type="text"
                className="p-3 w-28 h-7 sm:w-40 sm:h-9 md:h-10 rounded-lg focus:border-none bg-white py-2 text-gray-700 transition-all placeholder:text-gray-500 "
                placeholder="Search..."
                onChange={handleInputSearch}
              />
            ) : (
              ""
            )}
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
                  Status
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  ID
                </th>
                
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Role
                </th>

                <th className="p-3 text-sm font-semibold tracking-wide text-left flex justify-center">
                  Block/unBlock
                </th>

                <th className="p-3 text-sm font-semibold tracking-wide text-left">

                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {props.isLength ? (
                filteredList.map((obj, index) => {
                  return (
                    <tr key={index} className="bg-white">
                      <td className="p-3 text-sm text-grey-700 flex items-center">
                        <div className="w-12 h-12  rounded-lg my-1 mx-2 shadow-lg shadow-gray-300 overflow-hidden">
                          <img
                            src="../../images/adminlogo.jpeg"
                            alt="fsdfd"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="mx-3">
                          <div>
                          {obj.fullname}
                          </div>
                        <div className="text-xs">{obj.email}</div>
                          </div>
                      </td>
                      
                      <td className="p-3 text-sm text-grey-700 ">
                      {obj.status === "Removed"?
                        <span className="p-1.5 text-xs  font-medium uppercase tracking-wider  text-yellow-800 
                        bg-red-200 
                        rounded-lg bg-opacity-50">
                          {obj.status}
                          </span>
                          :
                          obj.status === "Blocked"?
                          <span className="p-1.5 text-xs  font-medium uppercase tracking-wider  text-yellow-800 
                        bg-red-200 
                        rounded-lg bg-opacity-50">
                          {obj.status}
                          </span>
                          :
                          obj.status === "Offline"?

                          <span className="p-1.5 text-xs  font-medium uppercase tracking-wider  text-yellow-800 
                        bg-slate-300
                        rounded-lg bg-opacity-50">
                          {obj.status}
                          </span>
                          :
                          <span className="p-1.5 text-xs font-medium uppercase tracking-wider  text-yellow-800 
                        bg-green-300
                        rounded-lg bg-opacity-50">
                          {obj.status}
                          </span>
                    }
                      </td>

                      <td className="p-3 text-sm text-grey-700">
                        #{obj.UID}
                      </td>
                      <td className="p-3 text-sm text-grey-700 ">
                        {obj.position}
                      </td>
                      
                      <td className="p-3 flex justify-center items-center">

                    {obj.status === 'Blocked'?
                      <button onClick={()=>handleUnBlock(obj.UID)}>
                        <i class='bx bx-lock-open text-2xl text-green-500 p-3'></i>
                      </button>
                      :
                      <button onClick={()=>handleBlock(obj.UID)}>
                      <i class='bx bx-lock text-2xl text-red-600 p-3'></i>
                      </button>

                    }
                      </td>
                      <td className="p-3 cursor-pointer">
                        <Link to={`/hr/employeee/edit/${obj.UID}`}>
                        edit
                        </Link>
                        </td>
                    </tr>
                  );
                })
              ) : (
                <tr className="w-full h-16" colSpan="6">
                  <td></td>
                  <td></td>

                  <td className="flex justify-center my-5">
                    No Data Available
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              )}

              {props.isLength ? (
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
                      <a
                        href="/"
                        className="px-4 py-2 rounded hover:bg-gray-100"
                      >
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
                      <a
                        href="/"
                        className="px-4 py-2 rounded hover:bg-gray-100"
                      >
                        {" "}
                        3{" "}
                      </a>{" "}
                      <a
                        href="/"
                        className="px-4 py-2 rounded hover:bg-gray-100"
                      >
                        {" "}
                        ...{" "}
                      </a>{" "}
                      <a
                        href="/"
                        className="px-4 py-2 rounded hover:bg-gray-100"
                      >
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
              ) : (
                ""
              )}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden mx-3">
          {props.employees.map((obj, index) => {
            return (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow overflow-hidden"
              >
                <div className="flex justify-between item-center space-x-2 text-sm relative">
                  <div className="flex">
                    <div className="w-12 h-12 overflow-hidden rounded-lg shadow">
                      <img
                        src="../images/adminlogo.jpeg"
                        className="w-full h-full"
                        alt="fasda"
                      />
                    </div>

                    <div className="px-3 py-3">
                      {obj.firstname + " " + obj.lastname}
                    </div>
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
                  <div>ID: {obj.UID}</div>
                  <div>{obj.email}</div>

                  <div className="flex justify-between">
                    <div>{obj.position}</div>
                    <div>Edit</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default EmployeesDepartment;
