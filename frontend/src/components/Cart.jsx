import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Cards from './Cards';
import { CartCards } from './CartCards';
import { PlaceOrder } from './PlaceOrder';
import { resetState } from '../../store/cartSlice';

export const Cart = () => {
    const productCart=useSelector(state=>state.cart).cart;
    const total=useSelector(state=>state.cart).total;
    const dispatch=useDispatch();
    console.log(total);
    const [placeOrderBtn,setPlaceOrderBtn]=useState(true);
    useEffect(()=>{
        if(productCart.length==0){
            setPlaceOrderBtn(false);
            dispatch(resetState());
        }   
    },[productCart])
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className='text-black'>
        <div id="my_modal_3" className="">
            <div className="modal-box w-full bg-white">
      <form method='dialog'>
      <Link to='/course' className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>X</Link>
        </form>
        {
    productCart.length > 0 ? (
        productCart.map((item) => (
            <CartCards item={item} key={item.id}  removeBtn={true}/>
        ))
    ) : (
        <div className='h-96 w-96 items-center flex justify-center text-[#e5981f] text-4xl'>Your cart is empty ;(</div>
    )
}
{
    placeOrderBtn?
            <div className='mt-2'>
                <button className="bg-[#e5981f] text-[#000001] px-3 py-2 rounded-md w-full hover:bg-black hover:text-[#e5981f] duration-300 cursor-pointer mt-6"
                onClick={()=>document.getElementById("my_modal_1").showModal()}
                >Place Order <span className='ml-5 text-xl font-bold'>${total}</span></button> 
                <PlaceOrder/>
            </div>:
            <div></div>    

}
    </div>
    
        </div>
        

        </div>
        </div>
    )
}
