import React, { useState, useEffect } from "react";
import axios from "../../../Api/EmployeeAxios";
import { useNavigate } from "react-router-dom";

function EmployeeLogin() {
  useEffect(() => {
    if (localStorage.getItem("employeejwt")) {
      console.log("Hai");
      axios.post('/employee/checkBlocked').then((response)=>{
        if(response.status === 200){

          axios.post("/employee/LoginPageAuth").then((response) => {
            console.log(response.status);
            if (response.status === 200) {
              Navigate("/employee/home");
            }
          });
        }
      }).catch((error)=>{
        console.log(error);
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Navigate = useNavigate();

  const [usernameError, setusernameError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);
  const [errors, setErrors] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [message, setmessage] = useState("");

  const handleChange = (event) => {
    if (event.target.value === "") {
      if (event.target.name === "username") {
        setusernameError(true);
      } else if (event.target.name === "password") {
        setpasswordError(true);
      }
    } else {
      if (event.target.name === "username") {
        setusernameError(false);
      } else if (event.target.name === "password") {
        setpasswordError(false);
      }
    }
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.username === "") {
      setusernameError(true);
      return;
    } else if (formData.password === "") {
      setpasswordError(true);
      return;
    }

    axios
      .post("/employee/login", formData)
      .then((response) => {
        if (response.status === 200) {
          const token = response.data.token;
          localStorage.setItem("employeejwt", token);
          Navigate("/employee/home");
        }
      })
      .catch((error) => {
        console.log(error.response.status);
        if (error.response.status === 400) {
          setErrors(true);
          const msg = error.response.data.error;
          setmessage(msg);
        } else if (error.response.status === 401) {
          setErrors(true);
          const msg = error.response.data.error;
          setmessage(msg);
        }
      });
  };

  return (
    <div>
      <div>
        <div class="p-8 lg:w-1/2 mx-auto">
          <div class=" rounded-b-lg py-12 px-4 lg:px-24">
            <p class="text-center text-3xl text-gray-500 font-semibold">
              Employee Login
            </p>
            {errors ? (
              <div className=" h-10  flex justify-center items-center mt-2 rounded text-white bg-red-600">
                <span class="p-5">{message}</span>
              </div>
            ) : (
              ""
            )}

            <form class="mt-6" onSubmit={handleSubmit}>
              <div class="relative">
                <input
                  class="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  id="username"
                  name="username"
                  type="text"
                  onChange={handleChange}
                  placeholder="Email"
                />

                <div class="absolute left-0 inset-y-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7 ml-3 text-gray-400 p-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
              {usernameError ? (
                <div>
                  <div className=" w-60 h-10  flex justify-center items-center mt-2 rounded text-white bg-red-600">
                    <span class="p-5">This field is required !</span>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div class="relative mt-3">
                <input
                  class="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  id="username"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                />

                <div class="absolute left-0 inset-y-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7 ml-3 text-gray-400 p-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                  </svg>
                </div>
              </div>
              {passwordError ? (
                <div>
                  <div className=" w-60 h-10  flex justify-center items-center mt-2 rounded text-white bg-red-600">
                    <span class="p-5">This field is required !</span>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div class="mt-4 flex items-center text-gray-500">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  class="mr-3"
                />
                <label for="remember">Remember me</label>
              </div>
              <div class="flex items-center justify-center mt-8">
                <button
                  class="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                  type="submit"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeLogin;
