import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../axios";

function AddEmployee() {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    position: "",
    role: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/hr/addemployee", formData).then((response) => {
      if (response.data.success) {
        Navigate("/hr/employees");
      }
    });
  };
  return (
    <div className="bg-slate-900 h-screen">
      <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 m-auto flex-0 lg:w-8/12 my-32">
          <form
            className="relative mb-32"
            // style="height: 402px;"
            onSubmit={handleSubmit}
          >
            <div
              active=""
              form="user"
              className="absolute top-0 left-0 flex flex-col visible w-full h-auto min-w-0 p-4 break-words bg-white border-0 shadow-xl opacity-100 dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border"
            >
              <h5 className="mb-0 font-bold text-black">ADD EMPLOYEE</h5>
              <p className="mb-0 text-sm leading-normal">
                Mandatory Informations
              </p>
              <div>
                <div className="flex flex-wrap mt-4 -mx-3">
                  <div className="w-full max-w-full px-3 flex-0 sm:w-6/12">
                    <label
                      className="mb-2 ml-1 text-xs font-bold text-black"
                      htmlFor="firstname"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      placeholder="eg. Michael"
                      onChange={handleChange}
                      className="focus:shadow-primary-outline dark:bg-slate-850 text-black  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal  outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div className="w-full max-w-full px-3 mt-4 flex-0 sm:mt-0 sm:w-6/12">
                    <label
                      className="mb-2 ml-1 text-xs font-bold text-black"
                      htmlFor="lastname"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      placeholder="eg. Prior"
                      onChange={handleChange}
                      className="focus:shadow-primary-outline dark:bg-slate-850 text-black text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal  outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap mt-4 -mx-3">
                  <div className="w-full max-w-full px-3 flex-0 sm:w-6/12">
                    <label
                      className="mb-2 ml-1 text-xs font-bold text-black"
                      htmlFor="position"
                    >
                      Position
                    </label>
                    <input
                      type="text"
                      name="position"
                      placeholder="eg. Developer"
                      onChange={handleChange}
                      className="focus:shadow-primary-outline dark:bg-slate-850 text-black text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal  outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div className="w-full max-w-full px-3 mt-4 flex-0 sm:mt-0 sm:w-6/12">
                    <label
                      className="mb-2 ml-1 text-xs font-bold text-black"
                      htmlFor="role"
                    >
                      Role
                    </label>
                    <input
                      type="text"
                      name="role"
                      placeholder="eg. frontend"
                      onChange={handleChange}
                      className="focus:shadow-primary-outline dark:bg-slate-850 text-black text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal  outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap mt-4 -mx-3">
                  <div className="w-full max-w-full px-3 flex-0 sm:w-6/12">
                    <label
                      className="mb-2 ml-1 text-xs font-bold text-black"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="eg. employee@gmail.com"
                      onChange={handleChange}
                      className="focus:shadow-primary-outline dark:bg-slate-850 text-black text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal  outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div className="w-full max-w-full px-3 mt-4 flex-0 sm:mt-0 sm:w-6/12">
                    <label
                      className="mb-2 ml-1 text-xs font-bold text-black"
                      htmlFor="Password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="******"
                      onChange={handleChange}
                      className="focus:shadow-primary-outline dark:bg-slate-850 text-black text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal  outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex mt-6">
                  <button
                    type="submit"
                    aria-controls="address"
                    next-form-btn=""
                    href="/"
                    className="inline-block px-6 py-3 mb-0 ml-auto text-xs font-bold text-right text-white uppercase align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 bg-gradient-to-tl from-lime-600 to-green-500 leading-pro tracking-tight-rem bg-150 bg-x-25"
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
