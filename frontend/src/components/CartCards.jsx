import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../../store/cartSlice';
import toast from "react-hot-toast";
export const CartCards = ({item,removeBtn}) => {
    const dispatch=useDispatch();
    const handleClick=(item)=>{
        toast.success("Item removed");
        dispatch(remove(item._id));
    }
    return (
    <div className="mt-4 my-3 p-3">
        <div className="card glass hover:scale-105 duration-200">
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between flex items-center">
              <p>Price :<span className="pl-2 items-center text-green-400">${item.price}</span></p>
              {
                removeBtn &&
                <button
                className="bg-[#e5981f] text-[#000001] px-3 py-2 rounded-md hover:bg-white hover:text-[#e5981f] duration-300 cursor-pointer"
                onClick={()=>handleClick(item)} >
                Remove from cart
              </button>
              
              }
              {/* <Buy item={item.name}/> */}
            </div>
          </div>
        </div>
      </div>
  )
}
