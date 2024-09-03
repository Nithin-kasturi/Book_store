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
        const response=await axios.get("https://book-store-ap.vercel.app/book");
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
            <h1 className='text-2xl font-semibold md:text-4xl'>We’re Glad You’ve Joined <span className='text-[#e5981f]'>Us!!</span></h1>
            <p className='mt-12'>Welcome to Book Store! Discover a wide range of books across various genres, from timeless classics to the latest bestsellers. Whether you're looking for fiction, non-fiction, or children's books, our collection has something for every reader. Dive in and find your next great read today!

</p>
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
