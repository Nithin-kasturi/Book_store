import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
export default function Signup() {
  const navigate=useNavigate();
  const [userInfo,setUserInfo]=useState({
    fullname:'',
    email:"",
    password:""
})
const handleSubmit=async()=>{
  if(userInfo.fullname==='' || userInfo.email==='' || userInfo.password===''){
      toast.error("All fields are required");
  }
  else if(userInfo.password.length<6){
      toast.error("Password length must be greater than 6")
  }
  else{
   await axios.post("https://book-store-ap.vercel.app/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        setTimeOut(()=>{
        toast.success("Signup is done");          
        },2000);
        navigate('/');
      }
      localStorage.setItem("users",JSON.stringify(res.data.user));
    })
    .catch((err)=>{
      console.log("Error in frontend signup",err);
      if(err){
        toast.error(err.response.data.message);
      }
    });

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
        className='w-80 px-3 border rounded-md outline-none border-blue-300 bg-white text-black'
        onChange={(e)=>setUserInfo({
          ...userInfo,
          fullname:e.target.value
        })}
        />
        
    </div>
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
        <input type='email'
        placeholder='Enter Your Email'
        className='w-80 px-3 border rounded-md outline-none border-blue-300 bg-white text-black'
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
        className='w-80 px-3 border rounded-md outline-none border-blue-300 bg-white text-black'
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
