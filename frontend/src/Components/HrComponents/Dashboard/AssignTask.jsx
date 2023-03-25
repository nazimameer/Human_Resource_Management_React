import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../Api/HrAxios";

function AssignTask() {
  const [employees, setEmployees] = useState([]);
  const [isLength, setIsLength] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const Navigate = useNavigate();

  useEffect(() => {
    axios.get("/hr/employees").then((response) => {
      console.log(response);

      if (response.status === 401) {
        Navigate("/hr/login");
      } else if (response.status === 500) {
        Navigate("/hr/login");
      }

      if (response.data.status) {
        if (response.data.length !== 0) {
          setIsLength(true);
          setEmployees(response.data.employees);
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredList = searchQuery
    ? employees.filter(
        (employees) =>
          employees.fullname
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          employees.UID.toString().includes(searchQuery) ||
          employees.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          employees.position.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : employees;

  return (
    <div className="bg-slate-900">
      <div className="sm:mx-5 md:mx-10 mb-6">
        <div className="">
          <div className="flex items-center justify-between">
            {isLength ? (
              <input
                type="text"
                className="p-3 mb-3 w-28 h-7 sm:w-40 sm:h-9 md:h-10 rounded-lg focus:border-none bg-white py-2 text-gray-700 transition-all placeholder:text-gray-500 "
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

                <th className="p-3 text-sm font-semibold tracking-wide text-left"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {isLength ? (
                filteredList.map((obj, index) => {
                  return (
                    <tr key={index} className="bg-white cursor-pointer" onclick>
                      <td className="p-3 text-sm text-grey-700 flex items-center">
                        <div className="w-12 h-12  rounded-lg my-1 mx-2 shadow-lg shadow-gray-300 overflow-hidden">
                          <img
                            src="../images/adminlogo.jpeg"
                            alt="fsdfd"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="mx-3">
                          <div>{obj.fullname}</div>
                          <div className="text-xs">{obj.email}</div>
                        </div>
                      </td>
                      <td className="p-3 text-sm text-grey-700 ">
                        {" "}
                        <span className="p-1.5 text-xs  font-medium uppercase tracking-wider text-yellow-800 bg-green-200 rounded-lg bg-opacity-50">
                          Active
                        </span>{" "}
                      </td>
                      <td className="p-3 text-sm text-grey-700">#{obj.UID}</td>
                      <td className="p-3 text-sm text-grey-700 ">
                        {obj.position}
                      </td>

                      <td className="my-10">
                        <div>
                            <div class="flex justify-between mb-1">
                              <span class="text-sm font-medium text-green-700 ">
                                45%
                              </span>
                            </div>
                            <div
                              class="w-full bg-gray-200 rounded-full h-2.5 "
                              style={{ width: "200px" }}
                            >
                              <div 
                                class="bg-green-600 h-2.5 rounded-full"
                                style={{ width: `${150}px` }}
                              ></div>
                            </div>
                        </div>
                      </td>
                      <td className="p-3 cursor-pointer text-blue-400">
                        <div>Assign Task</div>
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

              {isLength ? (
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
          {employees.map((obj, index) => {
            return (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow overflow-hidden cursor-pointer"
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

export default AssignTask;
