import React, { useContext } from 'react'
import Navbar from '../componets/Navbar'
import { Outlet } from 'react-router-dom'
import Banner from '../componets/Banner'
import About from '../componets/About'
import { AuthContext } from '../componets/AuthProvider'
import HomeCards from '../componets/HomeCards'
import Status from '../componets/Status'

export default function Home() {

 
 
  return (
    <div className="mx-auto">
    <Banner></Banner>
    <About></About>
    <HomeCards></HomeCards>
    <Status></Status>
     
    </div>
  )
}
