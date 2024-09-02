import React, { useEffect, useState } from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import {Link} from 'react-router-dom'
import axios from 'axios';
function Course() {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try {
        const response=await axios.get("https://vercel.com/nithins-projects-2a827f8d/book-store-ap/book");
        setBook(response.data);
      } catch (error) {
        console.log('error',error);
      }
    }
    getBook();
  },[])
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-10 items-center justify-center text-center'>
            <h1 className='text-2xl font-semibold md:text-4xl'>We are delighted to have you <span className='text-[#e5981f]'>here</span>! :)</h1>
            <p className='mt-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur repudiandae itaque, quasi illo dolores neque? Saepe voluptas quod voluptatibus ipsum fuga cupiditate amet commodi harum, quaerat a earum temporibus atque?</p>
          <Link to="/">
          <button className="bg-[#e5981f] text-[#000001] px-3 py-2 rounded-md hover:bg-white hover:text-[#e5981f] duration-300 cursor-pointer mt-6">Back</button>
          </Link>
            
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
              book.map((item)=>(
                <Cards item={item} key={item.id}/>
              ))
            }
        </div>
    </div>
    </>
    
  )
}

export default Course