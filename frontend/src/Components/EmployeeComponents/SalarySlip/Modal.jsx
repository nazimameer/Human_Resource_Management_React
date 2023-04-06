import React, { useState } from 'react'
import axios from '../../../Api/EmployeeAxios';

function Modal({open, closeModal, refresh}) {
  const [holderError, setHolderError] = useState(false);
  const [accountError, setAccountError] = useState(false);
  const [ifscError, setIfscError] = useState(false);
  const [formData, setFormData] = useState({
    holdername:'',
    accountno:'',
    ifsc:'',
  })

  const handleChange = (event)=>{

    if (event.target.value === "") {
      if (event.target.name === "holdername") {
        setHolderError(true);
        return;
      }else if (event.target.name === "accountno") {
        setAccountError(true);
        return;
      }else if (event.target.name === "ifsc") {
        setIfscError(true);
        return;
    }
    }else{
      if (event.target.name === "holdername") {
        setHolderError(false);
      }else if (event.target.name === "accountno") {
        setAccountError(false);
      }else if (event.target.name === "ifsc") {
        setIfscError(false);
    }
    }
    setFormData({
      ...formData,
      [event.target.name]: event.target.value 
    })
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
    if (formData.holdername === "") {
      setHolderError(true);
      return;
    }else if (formData.accountno === "") {
      setAccountError(true);
      return;
    }else if (formData.ifsc === "") {
      setIfscError(true);
      return;
  }


  axios.post('/employee/setAccount',{formData}).then((response)=>{
    if(response.status === 200){
      closeModal()
      refresh()
    }
  })
  }
  
  if(!open)return null;
  return (
    <div className="overlay h-screen w-full items-center">
      <div className="modalcontainer flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 m-auto flex-0 lg:w-4/12 my-32">
          <form
            className="relative mb-32"
            // style="height: 402px;"
            onSubmit={handleSubmit}
          >
            <div
              active=""
              form="user"
              className=" top-0 left-0 flex flex-col visible w-full h-auto min-w-0 p-4 break-words bg-white border-0 shadow-xl opacity-100 dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border"
            >
              <div  className="flex justify-between">
                <div>
              <h5 className="mb-0 font-bold text-black">Add Payment Details</h5>
              <p className="mb-0 text-sm leading-normal">
              </p>
                </div>

              <div className="pr-5 cursor-pointer"
               onClick={closeModal}
               >
                X
              </div>
              </div>
              <div>
                <div className="mt-4 -mx-3">
                  <div className="w-full max-w-full px-3 flex-0 ">
                    <div className="">
                    <label
                      className="mb-3 ml-1 text-xs font-bold text-black"
                      htmlFor="fullname"
                    >
                      Holder Name
                    </label>
                    </div>
                    <input
                      type="text"
                      name="holdername"
                      placeholder="eg. Michael"
                      onChange={handleChange}
                      className="focus:shadow-primary-outline dark:bg-slate-850 text-black  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal  outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                    {holderError ? (
                      <div className="bg-red-700 rounded w-44 my-2">
                        <span className="ml-2 text-white ">
                          This field is required
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="w-full max-w-full px-3 flex-0 ">
                    <div className="">
                    <label
                      className="mb-3 ml-1 text-xs font-bold text-black"
                      htmlFor="fullname"
                    >
                      Account No.
                    </label>
                    </div>
                    <input
                      type="number"
                      name="accountno"
                      placeholder="eg. Michael"
                      onChange={handleChange}
                      className="focus:shadow-primary-outline dark:bg-slate-850 text-black  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal  outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                    {accountError ? (
                      <div className="bg-red-700 rounded w-44 my-2">
                        <span className="ml-2 text-white ">
                          This field is required
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="w-full max-w-full px-3 flex-0 ">
                    <div className="">
                    <label
                      className="mb-3 ml-1 text-xs font-bold text-black"
                      htmlFor="fullname"
                    >
                     IFSC
                    </label>
                    </div>
                    <input
                      type="text"
                      name="ifsc"
                      placeholder="eg. Michael"
                      onChange={handleChange}
                      className="focus:shadow-primary-outline dark:bg-slate-850 text-black  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal  outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                    {ifscError ? (
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
)
}

export default Modal
