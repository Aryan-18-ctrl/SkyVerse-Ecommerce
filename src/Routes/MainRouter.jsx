import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const MainRouter = () => {
  return (
  <div className=''>
      <Navbar/>
       <Outlet/>
       <Footer/>
  </div>
  )


}

export default MainRouter