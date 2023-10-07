import React from 'react'
import Navbar from '../componets/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../componets/Footer'

export default function Layout() {
  return (
    <div>
       <Navbar></Navbar>
       <Outlet></Outlet>
       <Footer></Footer>
    </div>
  )
}
