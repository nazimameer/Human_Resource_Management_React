import React, { useEffect, useState } from 'react'
import axios from '../../../Api/HrAxios'
function OverTimeModal({ open,closeModal,obj, refresh }) {
  const [amountPerHour, SetAmountPerHour] = useState(1000);
  const [finalAmount, SetFinalAmount] = useState(null);
  const [valueError, setValueError] = useState(false)
  const [formData, SetFormData] = useState({
    valuePerHour: 0
  })

  useEffect(()=>{
    const overtime = obj.overtime;
    if(overtime){
      const splitedTime = overtime.split(" Hours ")
      const overTimeHour = splitedTime[0];
      const splitedMinute = splitedTime[1].split(" ")
      const overTimeMinute = splitedMinute[0]
      //
      const calAmountHour = (overTimeHour * amountPerHour);
      const valuePerMinute = Math.floor(amountPerHour / 60)
      const calAmountMin = (overTimeMinute* valuePerMinute);
      //
      const totalvalue = calAmountMin + calAmountHour
      SetFinalAmount(totalvalue)
    }

    SetFormData({
      ...formData,
      valuePerHour: amountPerHour,
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[obj])

  useEffect(()=>{
    const overtime = obj.overtime;
    if(overtime){

      const splitedTime = overtime.split(" Hours ")
      const overTimeHour = splitedTime[0];
      const splitedMinute = splitedTime[1].split(" ")
      const overTimeMinute = splitedMinute[0]
      //
      const calAmountHour = (overTimeHour * amountPerHour);
      const valuePerMinute = Math.floor(amountPerHour / 60)
      const calAmountMin = (overTimeMinute* valuePerMinute);
  
      const totalvalue = calAmountMin + calAmountHour
        SetFinalAmount(totalvalue)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[amountPerHour])

  const handleChange = (event)=>{
    if(event.target.value === ""){
      SetFormData({
        ...formData, 
        [event.target.name] : 0
      })
      SetAmountPerHour(0)
      setValueError(true)
      return
    }else{
      setValueError(false)
    }
    SetFormData({
      ...formData,
      [event.target.name] : event.target.value
    })
      SetAmountPerHour(event.target.value)
  }


  const handleSubmit = (event) =>{
    event.preventDefault();

    if(formData.valuePerHour === 0){
      setValueError(true)
      return
    }else{
      setValueError(false)
    }

    const data = {
      date: obj.date,
      fullname: obj.fullname,
      UID: obj.UID,
      position: obj.position,
      duration: obj.overtime,
      payment : finalAmount,
    }

    axios.post('/hr/OverTimePayment',{ data }).then((response)=>{
      if(response.status === 200){
        refresh()
        closeModal()
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
                <h5 className="mb-0 font-bold text-black">OverTime Payment</h5>
                {/* <p className="mb-0 text-sm leading-normal">
                  Mandatory Informations
                </p> */}
                  </div>
  
                <div className="pr-5 cursor-pointer" onClick={closeModal}>
                  X
                </div>
                </div>
                <div>
                  <div className="mt-4 -mx-3">
                    <div className="w-full max-w-full px-3 flex-0 ">
                      <div className="">

                        <div>
                          {obj.fullname}
                          <div className='text-sm flex-col flex'>
                                <div>
                                UID: {obj.UID}
                                </div>
                                <div>
                                Duration: {obj.overtime}
                                </div>

                                <div>
                                Position: {obj.position}
                                </div>
                          </div>
                        </div>
                      <label
                        className="mb-3 ml-1 text-xs font-bold text-black"
                        htmlFor="fullname"
                      >
                        Amount Per Hour
                      </label>
                      </div>
                      <input
                        type="number"
                        name="valuePerHour"
                        placeholder="eg. 1000"
                        defaultValue={1000}
                        onChange={handleChange}
                        className="focus:shadow-primary-outline dark:bg-slate-850 text-black  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal  outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                      />
                      {valueError ? (
                        <div className="bg-red-700 rounded w-44 my-2">
                          <span className="ml-2 text-white ">
                            This field is required
                          </span>
                        </div>
                      ) : (
                        ""
                      )}


                      <div className='mt-3'>
                        Calculated Amount: {finalAmount}
                      </div>
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
                      Initiate
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

export default OverTimeModal
