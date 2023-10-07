import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
   
       <div className=" flex justify-between items-center mt-3 justify-items-center shadow-md p-3  " style={{
        backgroundImage: 'url(https://i.ibb.co/XLB4Y2M/4mujs-512.jpg  )', backgroundSize: 'cover'}}> 
     <div className="">
   
    <img src="https://i.ibb.co/g9vdv8s/pngegg.png" className="h-20 w-28 rounded-lg" alt="" />
   </div>
   <div>
   <div className="hidden lg:block">
    <ul className="mt-5 flex gap-7 mr-7 text-lg text-white font-bold">
      <li>
        <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FFF] underline" : ""
              }
            >
              Home
            </NavLink>
      </li>
      <li><NavLink
              to="/Services"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FFF] underline" : ""
              }
            >
              Services
            </NavLink></li>

    <li>
    <NavLink
              to="/AboutUs"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FFF] underline" : ""
              }
            >
              About Us
            </NavLink>
    </li>
    <li>
        <NavLink
              to="/Registration"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FFF] underline" : ""
              }
            >
              Registration
            </NavLink>
      </li>
      <li>
        <NavLink
              to="/Login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FFF] underline" : ""
              }
            >
              Login
            </NavLink>
      </li>
    </ul>
  </div>
  <div className="dropdown mr-6 relative">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <div className="absolute right-20">
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-28">
      <li>
        <NavLink
              to="/Home"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FFF] underline" : ""
              }
            >
              Home
            </NavLink>
      </li>
      <li><NavLink
              to="/Services"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FFF] underline" : ""
              }
            >
              Services
            </NavLink></li>

    <li>
    <NavLink
              to="/AboutUs"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FFF] underline" : ""
              }
            >
              About Us
            </NavLink>
    </li>
    <li>
        <NavLink
              to="/Registration"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FFF] underline" : ""
              }
            >
              Registration
            </NavLink>
      </li>
      <li>
        <NavLink
              to="/Login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FFF] underline" : ""
              }
            >
              Login
            </NavLink>
      </li>
      </ul>
      </div>
      
    </div>
   </div>
 
    </div>
  )
}
