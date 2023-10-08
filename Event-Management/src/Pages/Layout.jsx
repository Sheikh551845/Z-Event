import React from 'react'
import Navbar from '../componets/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../componets/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default function Layout() {
  return (
    <div>
       <Navbar></Navbar>
       <Outlet></Outlet>
       <Footer></Footer>
       <ToastContainer></ToastContainer>
    </div>
  )
}
