import React from 'react'
import Navbar from '../componets/Navbar'
import { Outlet } from 'react-router-dom'
import Banner from '../componets/Banner'
import About from '../componets/About'

export default function Home() {
  return (
    <div className="mx-auto">
    <Banner></Banner>
    <About></About>
    </div>
  )
}
