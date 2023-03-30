import React, { useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from "../../../Api/HrAxios";

function EditEmployee(props) {
    const [Removed, setRemoved] = useState(false)
    const {id} = useParams();
    const uid = id;
    useState(()=>{
        axios.get(`/hr/employee/edit/${uid}`).then((response)=>{
            const data = response.data.data;
            if(data.status === 'Removed'){
              setRemoved(true);
            }else{
              setRemoved(false);
            }
            if(data){
                setFormData(data);
            }
        })
    },[])
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    place: "",
    position: "",
    role: "",
    email: "",
    phone: "",
    password: "",
    salary:"",
  });

  const [nameError, setNameError] = useState(false);
  const [placeError, setPlaceError] = useState(false);
  const [positionError, setpositionError] = useState(false);
  const [roleError, setRoleError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [salaryError, setSalaryError] = useState(false);

  const handleChange = (event) => {
    if (event.target.value === "") {
      if (event.target.name === "fullname") {
        setNameError(true);
        return;
      } else if (event.target.name === "place") {
        setPlaceError(true);
        return;
      } else if (event.target.name === "position") {
        setpositionError(true);
        return;
      } else if (event.target.name === "role") {
        setRoleError(true);
        return;
      } else if (event.target.name === "email") {
        setEmailError(true);
        return;
      } else if (event.target.name === "phone") {
        setPhoneError(true);
        return;
      } else if (event.target.name === "password") {
        setPasswordError(true);
        return;
      } else if (event.target.name === 'salary'){
        setSalaryError(true);
        return;
      }
      return;
    } else {
      if (event.target.name === "fullname") {
        setNameError(false);
      } else if (event.target.name === "place") {
        setPlaceError(false);
      } else if (event.target.name === "position") {
        setpositionError(false);
      } else if (event.target.name === "role") {
        setRoleError(false);
      } else if (event.target.name === "email") {
        setEmailError(false);
      } else if (event.target.name === "phone") {
        setPhoneError(false);
      } else if (event.target.name === "password") {
        setPasswordError(false);
      } else if (event.target.name === 'salary'){
        setSalaryError(false);
      }
    }
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleRemove = (uid) =>{
    props.openModal()
    props.setUid(uid)
    
  }

  const handleReplace = (uid)=>{
    const data = {
      data:uid
    }
    axios.post('/hr/employee/edit/replace',data).then((response)=>{
      if(response.status === 200){
        Navigate('/hr/employees')
      }
    }).catch((error)=>{
      console.log(error)
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.fullname === "") {
      setNameError(true);
      return;
    } else if (formData.place === "") {
      setPlaceError(true);
      return;
    } else if (formData.position === "") {
      setpositionError(true);
      return;
    } else if (formData.role === "") {
      setRoleError(true);
      return;
    } else if (formData.email === "") {
      setEmailError(true);
      return;
    } else if (formData.phone === "") {
      setPhoneError(true);
      return;
    } else if (formData.password === "") {
      setPasswordError(true);
      return;
    } else if (formData.salary === ""){
        setSalaryError(true)
        return;
    }

    console.log(formData)

    const email = formData.email;
    console.log(email);
    // axios
    //   .post("/hr/checkemail", { email: email })
    //   .then((response) => {
    //     if (response.status === 200) {
          axios.post('/hr/employee/edit',{uid, formData }).then((response) => {
            if (response.status === 200) {
              Navigate("/hr/employees");
            }
          });
        // }
      // })
      // .catch((error) => {
      //   if (error.response.data.error) {
      //     message.error("Email Already Taken", [2]);
      //   }
      // });
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
              <h5 className="mb-0 font-bold text-black">EDIT EMPLOYEE</h5>
              <p className="mb-0 text-sm leading-normal">
                Mandatory Informations
              </p>
              <div>
                <div className="flex flex-wrap mt-4 -mx-3">
                  <div className="w-full max-w-full px-3 flex-0 sm:w-6/12">
                    <label
                      className="mb-2 ml-1 text-xs font-bold text-black"
                      htmlFor="fullname"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      placeholder="eg. Michael"
                      defaultValue={formData.fullname}
                      onChange={handleChange}
                      className="focus:shadow-primary-outline dark:bg-slate-850 text-black  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal  outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                    {nameError ? (
                      <div className="bg-red-700 rounded w-44 my-2">
                        <span className="ml-2 text-white ">
                          This field is required
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="w-full max-w-full px-3 mt-4 flex-0 sm:mt-0 sm:w-6/12">
                    <label
                      className="mb-2 ml-1 text-xs font-bold text-black"
                      htmlFor="place"
                    >
                      Place
                    </label>
                    <input
                      type="text"
                      name="place"
                      placeholder="eg. Prior"
                      defaultValue={formData.place}
                      onChange={handleChange}
                      className="focus:shadow-primary-outline dark:bg-slate-850 text-black text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal  outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                    {placeError ? (
                      <div className="bg-red-700 rounded w-44 my-2">
                        <span className="ml-2 text-white ">
                          This field is required
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
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
                      defaultValue={formData.position}
                      onChange={handleChange}
                      className="focus:shadow-primary-outline dark:bg-slate-850 text-black text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal  outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                    />

                    {positionError ? (
                      <div className="bg-red-700 rounded w-44 my-2">
                        <span className="ml-2 text-white ">
                          This field is required
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
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
                      defaultValue={formData.role}
                      onChange={handleChange}
                      className="focus:shadow-primary-outline dark:bg-slate-850 text-black text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal  outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                    {roleError ? (
                      <div className="bg-red-700 rounded w-44 my-2">
                        <span className="ml-2 text-white ">
                          This field is required
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
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
                      defaultValue={formData.email}
                      onChange={handleChange}
                      className="focus:shadow-primary-outline dark:bg-slate-850 text-black text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal  outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                    {emailError ? (
                      <div className="bg-red-700 rounded w-44 my-2">
                        <span className="ml-2 text-white ">
                          This field is required
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="w-full max-w-full px-3 mt-4 flex-0 sm:mt-0 sm:w-6/12">
                    <label
                      className="mb-2 ml-1 text-xs font-bold text-black"
                      htmlFor="Password"
                    >
                      Phone
                    </label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="eg. 977834978"
                      defaultValue={formData.phone}
                      onChange={handleChange}
                      className="focus:shadow-primary-outline dark:bg-slate-850 text-black text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal  outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                    {phoneError ? (
                      <div className="bg-red-700 rounded w-44 my-2">
                        <span className="ml-2 text-white ">
                          This field is required
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap mt-4 -mx-3">
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
                    {passwordError ? (
                      <div className="bg-red-700 rounded w-44 my-2">
                        <span className="ml-2 text-white ">
                          This field is required
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="w-full max-w-full px-3 mt-4 flex-0 sm:mt-0 sm:w-6/12">
                    <label
                      className="mb-2 ml-1 text-xs font-bold text-black"
                      htmlFor="Password"
                    >
                      Salary (LPA)
                    </label>
                    <input
                      type="number"
                      name="salary"
                      placeholder="eg. 100000"
                      defaultValue={formData.salary}
                      onChange={handleChange}
                      className="focus:shadow-primary-outline dark:bg-slate-850 text-black text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal  outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                    {salaryError ? (
                      <div className="bg-red-700 rounded w-44 my-2">
                        <span className="ml-2 text-white ">
                          This field is required
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="flex mt-6">
                  {Removed?

                    

                  <div
                    aria-controls="address"
                    next-form-btn=""
                    onClick={()=>handleReplace(uid)}
                    className="inline-block px-6 py-3 mb-0 ml-auto text-xs font-bold text-right text-white uppercase align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 bg-gradient-to-tl from-blue-800 to-blue-500 leading-pro tracking-tight-rem bg-150 bg-x-25"
                  >
                    Replace
                  </div>

                  :
                  <div
                    aria-controls="address"
                    next-form-btn=""
                    onClick={()=>handleRemove(uid)}
                    className="inline-block px-6 py-3 mb-0 ml-auto text-xs font-bold text-right text-white uppercase align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 bg-gradient-to-tl from-red-800 to-red-500 leading-pro tracking-tight-rem bg-150 bg-x-25"
                  >
                    Remove
                  </div>
                  
                  }
                  <button
                    type="submit"
                    aria-controls="address"
                    next-form-btn=""
                    href="/"
                    className="inline-block px-6 py-3 mb-0 ml-auto text-xs font-bold text-right text-white uppercase align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 bg-gradient-to-tl from-lime-600 to-green-500 leading-pro tracking-tight-rem bg-150 bg-x-25"
                  >
                    EDIT
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

export default EditEmployee;
