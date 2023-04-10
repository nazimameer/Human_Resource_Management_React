import React, { useEffect, useState } from "react";
import axios from '../../../Api/EmployeeAxios'
function Invoice({ open, closeModal,InvId }) {
    const [slipDetails, setSlipDetails] = useState([{}]);
    useEffect(() => {
        axios.get(`/employee/getSalarySlip/${InvId}`).then((response)=>{
            console.log(response)
            if(response.status === 200){
                const data = response.data.doc.salaries;
                setSlipDetails(data)
                console.log(data)
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        axios.get(`/employee/getSalarySlip/${InvId}`).then((response)=>{
            console.log(response)
            if(response.status === 200){
                const data = response.data.doc.salaries;
                setSlipDetails(data)
                console.log(data)
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [InvId]);

  if (!open) return null;
  return (
    <div className="overlay h-screen w-full items-center">
      <div className="modalcontainer flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 m-auto flex-0 lg:w-6/12 my-10">
          <form
            className="relative mb-32"
            // style="height: 402px;"
          >
            <div className="flex justify-end">
            </div>
            <div>
              <div className="mt-4 -mx-3 max-h-1/2">
                <div class="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 col-span-12 2xl:col-start-3 2xl:col-span-8 md:mx-6 lg:my-6">
                  <div class="overflow-hidden p-4 space-y-6">
                    <div class="sm:flex">
                      <div class="mb-5 text-xl font-bold sm:text-2xl sm:mb-0 flex flex-col">
                        PaySlip 
                        <span className="text-base">
                            
                            #{InvId}
                            </span> 
                      </div>
                      
                      <div class="space-y-3 text-left sm:ml-auto sm:text-right">
                       <div className="pr-5 cursor-pointer"  onClick={closeModal}>
                        X
                       </div>
                        <div class="space-y-1">
                          <div class="text-lg font-semibold text-gray-900">
                            HRM Private Limited
                          </div>
                          <div class="text-sm font-normal text-gray-900">
                            {slipDetails[0].month} Month Salary 
                          </div>
                        </div>
                        <div class="text-sm font-normal text-gray-500">
                          {slipDetails[0].submiton}
                        </div>
                      </div>
                    </div>
                    <div class="sm:w-72">
                      <div class="mb-4 text-base font-bold text-gray-900 uppercase">
                        Bill to
                      </div>
                      <address class="text-base font-normal text-gray-500">
                        {slipDetails[0].holdername}

                      </address>
                    </div>

                    <div class="flex flex-col my-8">
                      <div class="overflow-x-auto border-b border-gray-200">
                        <div class="inline-block min-w-full align-middle">
                          <div class="overflow-hidden shadow-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                              <thead class="text-gray-900 bg-gray-50">
                                <tr>
                                  <th
                                    scope="col"
                                    class="p-4 text-xs font-semibold tracking-wider text-left uppercase"
                                  >
                                    Item
                                  </th>
                                  <th
                                    scope="col"
                                    class="p-4 text-xs font-semibold tracking-wider text-left uppercase"
                                  >
                                    Price
                                  </th>
                                  <th
                                    scope="col"
                                    class="p-4 text-xs font-semibold tracking-wider text-left uppercase"
                                  >
                                    Qty
                                  </th>
                                  
                                  <th
                                    scope="col"
                                    class="p-4 text-xs font-semibold tracking-wider text-left uppercase"
                                  >
                                    Total
                                  </th>
                                </tr>
                              </thead>
                              <tbody class="text-gray-900 bg-white">
                                <tr>
                                  <td class="p-4 text-sm font-normal whitespace-nowrap">
                                    <div class="text-base font-semibold">
                                      Salary
                                    </div>
                                    <div class="text-sm font-normal text-gray-500">
                                      CTC
                                    </div>
                                  </td>
                                  <td class="p-4 text-base font-normal text-gray-500 whitespace-nowrap">
                                  {(slipDetails[0].salary)+(slipDetails[0].cutoff)}/-
                                  </td>
                                  <td class="p-4 text-base font-semibold text-gray-900 whitespace-nowrap">
                                    1
                                  </td>
                                 
                                  <td class="p-4 text-base font-semibold whitespace-nowrap">
                                  {(slipDetails[0].salary)+(slipDetails[0].cutoff)}/-
                                  </td>
                                </tr>
                                
                                <tr>
                                  <td class="p-4 text-sm font-normal whitespace-nowrap">
                                    <div class="text-base font-semibold">
                                      Cut Off
                                    </div>
                                    {/* <div class="text-sm font-normal text-gray-500">
                                      Html template
                                    </div> */}
                                  </td>
                                  <td class="p-4 text-base font-normal text-gray-500 whitespace-nowrap">
                                    {slipDetails[0].cutoff}/-
                                  </td>
                                  <td class="p-4 text-base font-semibold text-gray-900 whitespace-nowrap">
                                    1
                                  </td>
                                 
                                  <td class="p-4 text-base font-semibold whitespace-nowrap">
                                  {slipDetails[0].cutoff}/-
                                  </td>
                                </tr>
                                
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="space-y-3 sm:text-right sm:ml-auto sm:w-72">
                      <div class="flex justify-between">
                        <div class="text-sm font-medium text-gray-500 uppercase">
                          Subtotal
                        </div>
                        <div class="text-base font-medium text-gray-900">
                          {slipDetails[0].salary}/-
                        </div>
                      </div>
                      <div class="flex justify-between">
                        {/* <div class="text-sm font-medium text-gray-500 uppercase">
                          Tax rate
                        </div> */}
                        {/* <div class="text-base font-medium text-gray-900">
                          5%
                        </div> */}
                      </div>
                      {/* <div class="flex justify-between">
                        <div class="text-sm font-medium text-gray-500 uppercase">
                          Discount
                        </div>
                        <div class="text-base font-medium text-gray-900">
                          $64.00
                        </div>
                      </div> */}
                      <div class="flex justify-between">
                        <div class="text-base font-semibold text-gray-900 uppercase">
                          Total
                        </div>
                        <div class="text-base font-bold text-gray-900">
                          {slipDetails[0].salary}/-
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Invoice;
