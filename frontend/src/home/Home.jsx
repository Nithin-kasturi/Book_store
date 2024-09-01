import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import { FreeBook } from '../components/FreeBook'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <div className="">
      <Navbar/>
      <Banner />
      <FreeBook/>
      <Footer/>
    </div>
  )
}
