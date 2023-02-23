import React from 'react'

function Navbar() {
  return (
    <>
      <div className=' h-20 bg-slate-900 flex justify-between items-center'>
            <div className=''>
                <h1 className='text-white text-4xl pl-28 cursor-pointer italic font-bold'>H R M</h1>
            </div>
            <div>
                <ul className='text-white flex'>
                <li className='px-8 cursor-pointer'>About</li>
                <li className='px-8 cursor-pointer'>Contact</li>
                <li className='px-8 cursor-pointer'>Faq</li>
                </ul>
            </div>
        </div> 
    </>
  )
}

export default Navbar
