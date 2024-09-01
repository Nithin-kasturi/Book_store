import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Signup() {
  const [userInfo,setUserInfo]=useState({
    email:"",
    password:"",
    name:''
})
const handleSubmit=()=>{
  if(userInfo.name==='' || userInfo.email==='' || userInfo.password===''){
      toast("All fields are required");
  }
  else if(userInfo.password.length<6){
      toast("Password length must be greater than 6")
  }
  
}
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <ToastContainer/>
      <div className='text-black'>
        <div id="my_modal_3" className="">
            <div className="modal-box w-full bg-white">
      <form method='dialog'>
      <Link to='/' className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>X</Link>
        </form>
    <h3 className="font-bold text-lg">Signup</h3>
    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br/>
        <input type='text'
        placeholder='Enter Your Full name'
        className='w-80 px-3 border rounded-md outline-none border-blue-300'
        onChange={(e)=>setUserInfo({
          ...userInfo,
          name:e.target.value
        })}
        />
        
    </div>
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
        <input type='email'
        placeholder='Enter Your Email'
        className='w-80 px-3 border rounded-md outline-none border-blue-300'
        onChange={(e)=>setUserInfo({
          ...userInfo,
          email:e.target.value
        })}
        />
        
    </div>
    <div className='mt-4 space-y-2'>
        <span>Pasword</span>
        <br/>
        <input type='password'
        placeholder='Enter Your Password'
        className='w-80 px-3 border rounded-md outline-none border-blue-300'
        onChange={(e)=>setUserInfo({
          ...userInfo,
          password:e.target.value
        })}
        />
    </div>
    <div className="flex justify-around mt-6">

              <button
              onClick={handleSubmit} 
              className="bg-[#e5981f] text-[#000001] rounded-md px-3 py-1 hover:bg-white hover:text-[#e5981f] duration-200">
                Signup
              </button>
              <p>
                Already registered?
                <Link
                  to="/"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Login
                </Link>{" "}
              </p>
            </div>
  </div>
</div>
    </div>
    </div>
  )
}
