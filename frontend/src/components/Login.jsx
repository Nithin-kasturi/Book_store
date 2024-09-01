import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
    const [userInfo,setUserInfo]=useState({
        email:"",
        password:""
    })
    const handleSubmit=()=>{
        if(userInfo.email==='' || userInfo.password===''){
            toast("All fields are required");
        }
        if(userInfo.password.length<6){
            toast("Password length must be greater than 6")
        }
        
    }
  return (
    <div className='text-black'>

        <dialog id="my_modal_3" className="modal">
            <div className='flex items-center justify-center'>
                <ToastContainer className='w-[300px]'/>
            </div>

  <div className="modal-box bg-white">

    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Login</h3>
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

              <button className="bg-[#e5981f] text-[#000001] rounded-md px-3 py-1 hover:bg-white hover:text-[#e5981f] duration-200" onClick={handleSubmit}>
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>{" "}
              </p>
            </div>
  </div>
</dialog>
    </div>
  )
}

export default Login