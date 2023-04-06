import React,{useEffect,useState} from "react";
import "./SalarySlip.css";
import axios from '../../../Api/EmployeeAxios'

function SalarySlip({ openModal, refresh,setRefresh }) {
  const date = new Date();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const thismonth = `${year}-${month.toString().padStart(2, "0")}`;
  const [Salary, SetSalary] =useState(null);
  const [accountDetails, setAccountDetails] = useState({
    holder:'',
    accountNo:'',
    ifsc:'', 
  });
  
  useEffect(() => {
    
    axios.get('/employee/getSalaryInfo').then((response)=>{
      const data = response.data.data;
      console.log(data)
      setAccountDetails({
        holder:data.holdername,
        accountNo:data.accNo,
        ifsc:data.ifsc
      })
      SetSalary(data.salary)
    }).then((error)=>{
      console.log(error)
    })

  }, []);

  useEffect(() => {
    axios.get("/employee/getPayslips").then((response)=>{
      console.log(response)
    })
  }, []);

  useEffect(() => {
    axios.get('/employee/getSalaryInfo').then((response)=>{
      const data = response.data.data;
      console.log(data)
      setAccountDetails({
        holder:data.holdername,
        accountNo:data.accNo,
        ifsc:data.ifsc
      })
      SetSalary(data.salary)

      setRefresh()
    }).then((error)=>{
      console.log(error)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);
  return (
    
    <div className="my-20 bg-slate-900">
      <div class="w-full px-6 py-6 mx-auto">
        <div class="flex flex-wrap -mx-3">
          <div class="max-w-full px-3 lg:w-2/3 lg:flex items-center justify-center">
            <div class="flex flex-wrap -mx-3 w-full">
              <div class="w-full max-w-full px-3 mb-4 xl:mb-0 xl:w-1/2 xl:flex-none">
                <div class="relative flex flex-col min-w-0 break-words bg-transparent border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border">
                  <div
                    class="relative overflow-hidden rounded-2xl"
                    // style="background-image: url('../assets/img/curved-images/curved14.jpg')"
                  >
                    <span class="absolute top-0 left-0 w-full h-full bg-center bg-cover  bg-white "></span>
                    <div class="relative z-10 flex-auto p-4">
                      <i
                        class="p-2 text-white fas fa-wifi"
                        aria-hidden="true"
                      ></i>
                      <h5 class="pb-2 mt-6 mb-12 text-black">
                        {accountDetails.accountNo}
                      </h5>
                      <div class="flex justify-between">
                        <div class="flex">
                          <div class="mr-6">
                            <p class="mb-0 leading-normal text-black text-sm opacity-80">
                              Account Holder
                            </p>
                            <h6 class="mb-0 text-black text-sm">{accountDetails.holder}</h6>
                          </div>
                          <div>
                            <p class="mb-0 leading-normal text-black text-sm opacity-80">
                              IFSC
                            </p>
                            
                            <h6 class="mb-0 text-black text-sm">{accountDetails.ifsc}</h6>
                            
                          </div>
                        </div>
                        <div className="flex justify-center items-center mx-3 cursor-pointer" onClick={openModal}>
                          <i class="bx bxs-pencil "></i>

                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full max-w-full px-3 xl:w-1/2 xl:flex-none">
                <div class="flex flex-wrap -mx-3">
                  <div class="w-full max-w-full px-3 md:w-1/2 md:flex-none">
                    <div class="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                      <div class="flex justify-center p-4 mx-6 mb-0 text-center bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                        <div class="  flex items-center justify-center w-16 h-16 text-center bg-center icon bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl rounded-xl">
                          <i class="bx bxs-bank relative text-white opacity-100 fas fa-landmark text-2xl top-31/100"></i>
                        </div>
                      </div>
                      <div class="flex-auto p-4 pt-0 text-center">
                        <h6 class="mb-0 text-center">Yearly</h6>
                        <span class="leading-tight text-xs">Yearly CTC</span>
                        <hr class="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
                        {Salary && <h5 class="mb-0">{Salary}/-</h5>}
                      </div>
                    </div>
                  </div>
                  <div class="w-full max-w-full px-3 mt-6 md:mt-0 md:w-1/2 md:flex-none">
                    <div class="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                      <div class="flex justify-center p-4 mx-6 mb-0 text-center bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                        <div class="flex justify-center items-center w-16 h-16 text-center bg-center icon bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl rounded-xl">
                          <i class="bx bxs-bank relative text-white opacity-100 fas fa-landmark text-2xl top-31/100"></i>
                        </div>
                      </div>
                      <div class="flex-auto p-4 pt-0 text-center">
                        <h6 class="mb-0 text-center">Monthly</h6>
                        <span class="leading-tight text-xs">Monthly CTC</span>
                        <hr class="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
                        {Salary && <h5 class="mb-0">{Math.round(Salary/12)}/-</h5>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* <div class="w-full px-3 mb-4 lg:mb-0  ">
                <div class="relative flex flex-col min-w-0 mt-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                  <div class="p-4 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                    <div class="flex flex-wrap -mx-3">
                      <div class="flex justify-between items-center flex-none w-full max-w-full px-3">
                        <div className="flex gap-2   items-center">
                          <i class="bx bx-dollar-circle text-lg"></i>
                          <h6 class="mb-0 ">Bonus Previous Month</h6>
                        </div>
                        <div className="flex items-center gap-2">
                          <i class="bx bx-dollar-circle"></i>
                          <h6>Bonus This Month</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap -mx-3">
                      <div class="w-full px-3 mb-6 md:mb-0 md:w-1/2 md:flex-none">
                        <div class="relative flex flex-row justify-center items-center flex-auto min-w-0 p-6 break-words bg-transparent border border-solid shadow-none rounded-xl border-slate-200 bg-clip-border">
                          <h6 class="mb-0">
                            February 2023 :{" "}
                            <span className="text-green-600">+ 3299</span>
                          </h6>
                        </div>
                      </div>
                      <div class="  w-full px-3 md:w-1/2 md:flex-none">
                        <div class="relative flex flex-row items-center justify-center  flex-auto min-w-0 p-6 break-words bg-transparent border border-solid shadow-none rounded-xl border-slate-200 bg-clip-border">
                          <h6 class="mb-0">
                            March 2023 :{" "}
                            <span className="text-green-600">+ 3299</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}


            </div>
          </div>
          <div class="w-full max-w-full px-3 lg:w-1/3 lg:flex-none">
            {/* <color:div class="relative flex flex-col h-full min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl "> */}
            <div class="p-4 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
              <div class="flex  -mx-3 overflow-hidden">
                <div class="flex items-center  w-1/2 max-w-full px-3">
                  <h6 class="mb-0">Pay Slips</h6>
                </div>
                <div class="flex-none w-1/2 max-w-full  text-right">
                  <small>
                    <input className="focus:outline-none outline-none focus:border-none border-none" type="month" defaultValue={`${thismonth}`} />
                  </small>
                </div>
              </div>
            </div>

            <div class="invoices flex-auto p-4 pb-0 bg-white rounded-b-2xl ">
              <ul class="flex flex-col pl-0 mb-0 rounded-lg">
                <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-t-inherit text-inherit rounded-xl">
                  <div class="flex flex-col">
                    <h6 class="mb-1 font-semibold leading-normal text-sm text-slate-700">
                      March, 01, 2023
                    </h6>
                    <span class="leading-tight text-xs">#415646</span>
                  </div>
                  <div class="flex items-center leading-normal text-sm">
                    {/* 200 */}
                    <button class="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700">
                      <i class="bx bxs-file-pdf"></i> PDF
                    </button>
                  </div>
                </li>
                <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-t-inherit text-inherit rounded-xl">
                  <div class="flex flex-col">
                    <h6 class="mb-1 font-semibold leading-normal text-sm text-slate-700">
                      February, 01, 2023
                    </h6>
                    <span class="leading-tight text-xs">#415646</span>
                  </div>
                  <div class="flex items-center leading-normal text-sm">
                    {/* $180 */}
                    <button class="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700">
                      <i class="bx bxs-file-pdf"></i> PDF
                    </button>
                  </div>
                </li>
                <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-xl text-inherit">
                  <div class="flex flex-col">
                    <h6 class="mb-1 font-semibold leading-normal text-sm text-slate-700">
                      January, 01, 2023
                    </h6>
                    <span class="leading-tight text-xs">#126749</span>
                  </div>
                  <div class="flex items-center leading-normal text-sm">
                    {/* $250 */}
                    <button class="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700">
                      <i class="bx bxs-file-pdf"></i> PDF
                    </button>
                  </div>
                </li>
                <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-xl text-inherit">
                  <div class="flex flex-col">
                    <h6 class="mb-1 font-semibold leading-normal text-sm text-slate-700">
                      December, 01, 2022
                    </h6>
                    <span class="leading-tight text-xs">#212562</span>
                  </div>
                  <div class="flex items-center leading-normal text-sm">
                    {/* $560 */}
                    <button class="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700">
                      <i class="bx bxs-file-pdf"></i> PDF
                    </button>
                  </div>
                </li>
                <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-xl text-inherit">
                  <div class="flex flex-col">
                    <h6 class="mb-1 font-semibold leading-normal text-sm text-slate-700">
                      November, 01, 2022
                    </h6>
                    <span class="leading-tight text-xs">#103578</span>
                  </div>
                  <div class="flex items-center leading-normal text-sm">
                    {/* $120 */}
                    <button class="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700">
                      <i class="bx bxs-file-pdf"></i> PDF
                    </button>
                  </div>
                </li>
                <li class="relative flex justify-between px-4 py-2 pl-0 bg-white border-0 rounded-b-inherit rounded-xl text-inherit">
                  <div class="flex flex-col">
                    <h6 class="mb-1 font-semibold leading-normal text-sm text-slate-700">
                      October, 01, 2022
                    </h6>
                    <span class="leading-tight text-xs">#803481</span>
                  </div>
                  <div class="flex items-center leading-normal text-sm">
                    {/* $300 */}
                    <button class="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700">
                      <i class="bx bxs-file-pdf"></i> PDF
                    </button>
                  </div>
                </li>
              </ul>
            </div>
            {/* </color:div> */}
          </div>
        </div>
        <div class="flex flex-wrap  w-2/3">
          <div class="w-full max-w-full px-3 mt-6 md:w-full md:flex-none">
            <div class="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
              <div class="p-6 px-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                <h6 class="mb-0">Overtime Pay Slip </h6>
              </div>
              <div class="flex-auto p-4 pt-6">
                <ul class="flex flex-col pl-0 mb-0 rounded-lg">
                  <li class="relative flex p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50">
                    <div class="flex flex-col">
                      <h6 class="mb-4 leading-normal text-sm">
                        Net pay :{" "}
                        <span className="text-green-500 text-lg"> + 1909</span>
                      </h6>
                      <span class="mb-2 leading-tight text-xs">
                        Overtime hours:
                        <span class="font-semibold text-slate-700 sm:ml-2">
                          3 hours
                        </span>
                      </span>
                      <span class="mb-2 leading-tight text-xs">
                        Date:{" "}
                        <span class="font-semibold text-slate-700 sm:ml-2">
                          10-02-2023
                        </span>
                      </span>
                      <span class="leading-tight text-xs">
                        VAT Number:{" "}
                        <span class="font-semibold text-slate-700 sm:ml-2">
                          FRB1235476
                        </span>
                      </span>
                    </div>
                  </li>
                  <li class="relative flex p-6 mt-4 mb-2 border-0 rounded-xl bg-gray-50">
                    <div class="flex flex-col">
                      <h6 class="mb-4 leading-normal text-sm">
                        Net pay :{" "}
                        <span className="text-green-500 text-lg"> + 1209</span>
                      </h6>
                      <span class="mb-2 leading-tight text-xs">
                        Overtime hours:
                        <span class="font-semibold text-slate-700 sm:ml-2">
                          2 hours
                        </span>
                      </span>
                      <span class="mb-2 leading-tight text-xs">
                        Date:{" "}
                        <span class="font-semibold text-slate-700 sm:ml-2">
                          10-02-2023
                        </span>
                      </span>
                      <span class="leading-tight text-xs">
                        VAT Number:{" "}
                        <span class="font-semibold text-slate-700 sm:ml-2">
                          FRB1235476
                        </span>
                      </span>
                    </div>
                  </li>
                  <li class="relative flex p-6 mt-4 mb-2 border-0 rounded-b-inherit rounded-xl bg-gray-50">
                    <div class="flex flex-col">
                      <h6 class="mb-4 leading-normal text-sm">
                        Net pay :{" "}
                        <span className="text-green-500 text-lg"> + 1800</span>
                      </h6>

                      <span class="mb-2 leading-tight text-xs">
                        Overtime hours:{" "}
                        <span class="font-semibold text-slate-700 sm:ml-2">
                          2:30 hours
                        </span>
                      </span>
                      <span class="mb-2 leading-tight text-xs">
                        Date:{" "}
                        <span class="font-semibold text-slate-700 sm:ml-2">
                          10-02-2023
                        </span>
                      </span>
                      <span class="leading-tight text-xs">
                        VAT Number:{" "}
                        <span class="font-semibold text-slate-700 sm:ml-2">
                          FRB1235476
                        </span>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div class="w-full max-w-full px-3 mt-6 md:w-5/12 md:flex-none">
            <div class="transaction relative flex flex-col h-full min-w-0 mb-6 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
              <div class="p-6 px-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                <div class="flex -mx-3 overflow-hidden">
                  <div class="max-w-full px-3 md:w-1/2 md:flex-none">
                    <h6 class="mb-0">Your Transactions</h6>
                  </div>
                  <div class="flex items-center justify-end max-w-full px-3 md:w-1/2 md:flex-none">
                    <small>
                      <input className="focus:outline-none outline-none focus:border-none border-none" type="month" defaultValue={`${thismonth}`} />
                    </small>
                  </div>
                </div>
              </div>
              <div class="translist flex-auto p-4 pt-6">
                <h6 class="mb-4 font-bold leading-tight uppercase text-xs text-slate-500">
                  Newest
                </h6>
                <ul class="flex flex-col pl-0 mb-0 rounded-lg">
                  <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-t-inherit text-inherit rounded-xl">
                    <div class="flex items-center">
                      <div class="flex flex-col">
                        <h6 class="mb-1 leading-normal text-sm text-slate-700">
                          Weekly Bonus
                        </h6>
                        <span class="leading-tight text-xs">
                          27 March 2023, at 12:30 PM
                        </span>
                      </div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                      <p class="relative z-10 inline-block m-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 text-sm bg-clip-text">
                        + 2,000
                      </p>
                    </div>
                  </li>
                  <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 rounded-b-inherit text-inherit rounded-xl">
                    <div class="flex items-center">
                      <div class="flex flex-col">
                        <h6 class="mb-1 leading-normal text-sm text-slate-700">
                          Weekly Bonus
                        </h6>
                        <span class="leading-tight text-xs">
                          27 March 2023, at 04:30 AM
                        </span>
                      </div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                      <p class="relative z-10 inline-block m-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 text-sm bg-clip-text">
                        + 2,000
                      </p>
                    </div>
                  </li>

                  <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-t-inherit text-inherit rounded-xl">
                    <div class="flex items-center">
                      <div class="flex flex-col">
                        <h6 class="mb-1 leading-normal text-sm text-slate-700">
                          Weekly Bonus
                        </h6>
                        <span class="leading-tight text-xs">
                          26 March 2023, at 13:45 PM
                        </span>
                      </div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                      <p class="relative z-10 inline-block m-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 text-sm bg-clip-text">
                        + 750
                      </p>
                    </div>
                  </li>
                  <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 text-inherit rounded-xl">
                    <div class="flex items-center">
                      <div class="flex flex-col">
                        <h6 class="mb-1 leading-normal text-sm text-slate-700">
                          Weekly Bonus
                        </h6>
                        <span class="leading-tight text-xs">
                          26 March 2023, at 12:30 PM
                        </span>
                      </div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                      <p class="relative z-10 inline-block m-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 text-sm bg-clip-text">
                        + 1,000
                      </p>
                    </div>
                  </li>
                  <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 text-inherit rounded-xl">
                    <div class="flex items-center">
                      <div class="flex flex-col">
                        <h6 class="mb-1 leading-normal text-sm text-slate-700">
                          Weekly Bonus
                        </h6>
                        <span class="leading-tight text-xs">
                          26 March 2023, at 08:30 AM
                        </span>
                      </div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                      <p class="relative z-10 items-center inline-block m-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 text-sm bg-clip-text">
                        + 2,500
                      </p>
                    </div>
                  </li>
                  <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 rounded-b-inherit text-inherit rounded-xl">
                    <div class="flex items-center">
                      <div class="flex flex-col">
                        <h6 class="mb-1 leading-normal text-sm text-slate-700">
                          Weekly Bonus
                        </h6>
                        <span class="leading-tight text-xs">
                          26 March 2023, at 05:00 AM
                        </span>
                      </div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                      <p class="relative z-10 inline-block m-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 text-sm bg-clip-text">
                        + 2,500
                      </p>
                    </div>
                  </li>

                  <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 rounded-b-inherit text-inherit rounded-xl">
                    <div class="flex items-center">
                      <div class="flex flex-col">
                        <h6 class="mb-1 leading-normal text-sm text-slate-700">
                          Weekly Bonus
                        </h6>
                        <span class="leading-tight text-xs">
                          26 March 2023, at 05:00 AM
                        </span>
                      </div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                      <p class="relative z-10 inline-block m-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 text-sm bg-clip-text">
                        + 2,500
                      </p>
                    </div>
                  </li>

                  <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 rounded-b-inherit text-inherit rounded-xl">
                    <div class="flex items-center">
                      <div class="flex flex-col">
                        <h6 class="mb-1 leading-normal text-sm text-slate-700">
                          Weekly Bonus
                        </h6>
                        <span class="leading-tight text-xs">
                          26 March 2023, at 05:00 AM
                        </span>
                      </div>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                      <p class="relative z-10 inline-block m-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 text-sm bg-clip-text">
                        + 2,500
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
        {/* footer here */}
      </div>

    </div>








  );
}

export default SalarySlip;
