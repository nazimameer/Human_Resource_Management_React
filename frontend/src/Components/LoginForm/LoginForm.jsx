import React,{useState} from "react";
import axios from '../../axios'
import {useNavigate} from 'react-router-dom'
function LoginForm() {
const [formData,setFormData] = useState({
    username:'',
    password:''
})
const Navigate = useNavigate()

const handleChange = (event) =>{
    setFormData({
        ...formData,
        [event.target.name]: event.target.value
    })
}
const handleSubmit = (event)=>{
    event.preventDefault();

    axios.post('/hr/login',formData).then(response=>{
        console.log(response.data)
        if(response.data){
            console.log('halo')
            Navigate('/hr/home')
        }
    })

}

  return (
    <>
      <div className="bg-slate-900 w-screen h-screen flex justify-center ">
        <div className="  rounded-3xl flex w-3/4 h-3/4 justify-around items-center relative">
          <div className="text-white font-extrabold text-6xl absolute top-10">
                        HR LOGIN
                    </div>
          <div className="pl-20" >
            <form onSubmit={handleSubmit}>
              <div>
                    
                <label
                  htmlFor="username"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="username"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full rounded-md py-2 px-3.5 text-sm shadow-sm "
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold leading-6 text-white mt-2.5"
                >
                  Password
                </label>
                <div className="">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-96 rounded-md py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm "
                  />
                </div>
              </div>

              <div className="mt-3">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-sky-400 border px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div>
            <img src="/images/landing.png" className="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
