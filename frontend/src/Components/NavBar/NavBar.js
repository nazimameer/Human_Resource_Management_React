import React from 'react'
import './NavBar.css'
function NavBar() {
  return (
    <>

      <div className='w-full md:h-16 h-14 xl:h-20 bg-slate-900 flex md:justify-end justify-between content-center fixed'>

            <div className='text-xl text-white py-3 md:hidden ml-20'>
              <h1>HRM</h1>
            </div>
           <div className='flex p-4 content-center xl:pt-5'>
            <i class='bx bxs-bell text-xl md:text-2xl  text-white px-5 cursor-pointer' ></i>
            <img class='w-6 md:w-8 xl:mb-3 bg-white rounded-full cursor-pointer' src="" alt="" />
        </div>



      </div>


    </>
  )
}

export default NavBar
