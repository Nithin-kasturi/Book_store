import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import Cards from './Cards';
export const FreeBook = () => {
    const [books,setBooks]=useState([]);
    useEffect(()=>{
        const getBooks=async()=>{
            try {
                const response=await axios.get('https://vercel.com/nithins-projects-2a827f8d/book-store-ap/book');
                setBooks(response.data.filter((data)=>data.category==="Free"));                
            } catch (error) {
                console.log(error);
            }
            
        }
        getBooks();
    })
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-6'>
        <div>
        <h1 className='font-semibold text-xl pb-2'>Free Courses</h1>        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, deserunt eligendi consequatur velit eius dolores vitae nostrum quia fuga error optio facere repellendus commodi numquam dolore illo nobis ut saepe.</p>
        </div>
    <div className="slider-container my-6 p-4">
      <Slider {...settings}>
        {
            books.map((item)=>(
                <Cards item={item} key={item.id}/>
            ))
        }
      </Slider>
    </div>
    </div>

    </>
  )
}
