import React from 'react'
import Navbar from '../../Components/Header/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'

const Root = () => {
  return (
    <div className='w-11/12 mx-auto'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Root