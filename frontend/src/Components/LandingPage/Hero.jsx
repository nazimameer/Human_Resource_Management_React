import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
function Hero() {

  return (
    <>
       
       <div className='h-screen bg-slate-900 flex '>

        <div className='bg-slate-900 w-1/2 text-white text-5xl flex justify-end mt-40 pl-48'> 
        <div>
            <span className='text-8xl'>Let's </span>Build a Strong Workforce, Together
            
            <div className='flex justify-evenly mt-10'>

                    <Link  to={"/login"}  className='btn flex justify-center items-center text-2xl border-2 w-40 h-14 rounded-xl border-sky-500 hover:shadow-lg hover:shadow-blue-400 hover:border-white bg-sky-400 hover:bg-slate-900 ease-out duration-300'>
                        I'm HR
                    </Link>

                    <button className='btn text-2xl border-2 w-60 h-14 rounded-xl border-sky-500 hover:shadow-lg hover:shadow-blue-400 hover:border-white hover:bg-sky-400 ease-out duration-300'>
                        I'm Employee
                    </button>
            

            </div>

            </div>            
        </div>
        <div className='w-1/2'> 
        <div className=''>
            <img src="https://orbify.ai/wp-content/uploads/2019/02/Maxifier-office_animated.svg" className='imageLanding'  alt="" />
        </div>
        </div>

       </div>

    </>
  )
}

export default Hero
