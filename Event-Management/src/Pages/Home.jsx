import React from 'react'
import Navbar from '../componets/Navbar'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div className="mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}
