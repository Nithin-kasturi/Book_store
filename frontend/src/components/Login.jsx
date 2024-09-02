import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';
function Login() {
    const [userInfo,setUserInfo]=useState({
        email:"",
        password:""
    })
    const handleSubmit=async()=>{
        if(userInfo.email==='' || userInfo.password===''){
            toast.error("All fields are required");
        }
        else{
          await axios
      .post("https://book-store-ap.vercel.app/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Logging you in !");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
        }
        

        
    }
  return (
    <div className='text-black'>

        <dialog id="my_modal_3" className="modal">
  
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