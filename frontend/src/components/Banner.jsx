import React from 'react'
import banner from '../assets/Banner.jpg';
import Logout from './Logout';
import Login from './Login';
function Banner() {
  return (
    < >
        <div  className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row '>
            <div className='order-2 md:order-1 w-full  md:w-1/2 mt-12 md:mt-32'>
            <div className='space-y-12'>
                <h1 className='text-4xl font-bold'>Discover your next great read at our Bookstore – a carefully curated collection of books that brings<span className='text-[#e5981f]'> the joy of reading</span> to your fingertips. </h1>
                <p className='text-xl'>Explore our Bookstore, where every page brings a new adventure. Find your next favorite book among our handpicked selection of literary gems. Happy reading!</p>
            </div>
{/*     <div className="mt-6">
    <a className="bg-[#e5981f] text-[#000001] px-3 py-2 rounded-md hover:bg-white hover:text-[#e5981f] duration-300 cursor-pointer" onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</a>
    <Login/>
  </div>         */}
            </div>
            <div className='w-full md:w-1/2 order-1 flex items-center justify-center'>
                <img src={banner} className='rounded-3xl md:h-96 h-56'/>
            </div>
        </div>
    </>
  )
}

export default Banner
