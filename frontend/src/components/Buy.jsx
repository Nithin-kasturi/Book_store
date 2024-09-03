import React from 'react';

export const Buy = ({ item }) => {
  return (
    <dialog id="my_modal_2" className="modal text-black">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 className="font-bold text-lg mb-2">
          <span className='text-[#e5981f]'>Nice Choice!</span> Where should we deliver to?
        </h3>
        <div className=''>
          <div className='flex flex-row justify-around'>
            <span>Address</span>
            <input type='text' placeholder='Enter your address' className='w-3/4 border-2 items-center text-center'/>
          </div>
          <div className='flex flex-row justify-around mt-2 gap-1'>
            <span>Pincode</span>
            <input type='text' placeholder='Enter your Pincode' className='w-3/4 border-2 items-center text-center'/>
          </div>
          <div className='flex flex-row justify-around mt-2 gap-3'>
            <span>Phone</span>
            <input type='text' placeholder='Enter your phone' className='w-3/4 border-2 items-center text-center'/>
          </div>
          <div className='flex flex-row justify-around mt-2 gap-3'>
            <span>Book details</span>
            <p>{item}</p>  {/* Display the book name here */}
          </div>
        </div>
      </div>
    </dialog>
  );
}
