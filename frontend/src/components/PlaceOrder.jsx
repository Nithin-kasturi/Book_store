import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetState } from '../../store/cartSlice';
import axios from 'axios';
export const PlaceOrder = () => {
    const Navigate=useNavigate();
    const dispatch=useDispatch();
    const productCart=useSelector(state=>state.cart).cart;
    const now=new Date();
    const [userDetails,setUserDetails]=useState({
        address:'',
        pincode:'',
        phone:'',
        email:JSON.parse(localStorage.getItem("users")).email,
        items:productCart,
        date:now.toLocaleString()
    })
    const handleSubmit=async()=>{
        console.log(userDetails)
        if(userDetails.address==='' || userDetails.pincode==='' || userDetails.phone===''){
            toast.error("All fields are required");
        }
        else if(!/^\d+$/.test(userDetails.phone)){
            toast.error("Phone number must be numeric");
            
        }
        else if(userDetails.phone.length!=10){
            toast.error("Phone number must be of length 10");

            }
        else if(! /^\d+$/.test(userDetails.pincode)){
            toast.error("Pincode number must be numeric");
        }
        else{
            await axios.post('https://book-store-ap.vercel.app/order/set',
                userDetails
            ).then(res=>console.log(res))
            .catch(err=>console.log(err));
            toast.success("Order placed :)");
          document.getElementById("my_modal_1").close();
          setTimeout(() => {
            dispatch(resetState())
            Navigate('/');
          }, 2000);
        }
    }
  return (
    <div>
        <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Those are some nice choices!</h3>
    <div className='flex justify-around mt-4'>
        <label>Address</label>
        <input type='text' 
        placeholder='Enter Address' 
        className='border-2 text-center w-3/4 rounded-xl'
        onChange={(e)=>{setUserDetails({
            ...userDetails,
            address:e.target.value}
        )}}
        />
    </div>
    <div className='flex justify-around mt-4'>
        <label className='mr-2'>Pincode</label>
        <input type='text' placeholder='Pincode'
         className='border-2 text-center w-3/4 rounded-xl'
         onChange={(e)=>{setUserDetails({
            ...userDetails,
            pincode:e.target.value}
        )}}
         />
    </div>
    <div className='flex justify-around mt-4'>
        <label className='mr-2'>Phone</label>
        <input type='text' placeholder='Contact details' 
        className='border-2 text-center w-3/4 rounded-xl'
        onChange={(e)=>{setUserDetails({
            ...userDetails,
            phone:e.target.value}
        )}}
        />
    </div>
    <button className="bg-[#e5981f] text-[#000001] px-3 py-2 rounded-md w-full hover:bg-black hover:text-[#e5981f] duration-300 cursor-pointer mt-6"
    onClick={handleSubmit}
    >

                Confirm Details</button> 
  </div>
</dialog>
    </div>
  )
}
