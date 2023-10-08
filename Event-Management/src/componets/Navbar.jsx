import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from './AuthProvider'

export default function Navbar() {
 
  
  const {user,logout}=useContext(AuthContext)

  
  
console.log(user)

  return (
   
       <div className="  bg-gradient-to-r from-stone-200 to-zinc-600 flex justify-between items-center mt-2 justify-items-center shadow-xl p-3  "> 
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
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black underline" : ""
              }
            >
              Home
            </NavLink>
      </li>
      <li><NavLink
              to="/Services"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black underline" : ""
              }
            >
              Services
            </NavLink></li>

    <li>
    <NavLink
              to="/AboutUs"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black underline" : ""
              }
            >
              About Us
            </NavLink>
    </li>
    <li>
        <NavLink
              to="/Registration"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black underline" : ""
              }
            >
              Registration
            </NavLink>
      </li>
     
      </ul>
      </div>
      
    </div>
   </div>
   {
    user && Object.keys(user).length > 0? <div className="flex justify-center items-center gap-2 ">
    <p className="text-white fond-bold">{ user.email}</p>
    
    <div className="avatar">
      <div className="w-12 rounded-full ring ring-offset-base-100 ring-offset-2">

        {
          user?.photoURL? <img src={user.photoURL} /> :<img src="https://ibb.co/qWZz5GR"/>
        }
         
        
       
      </div>
      </div>
    
      <button className="btn text-black p-2 bg-white rounded-lg"
          onClick={logout}
      >Logout</button>
    
    </div> :

    <div>
      <NavLink to="/Login">
      <button className="btn text-black p-2 bg-white rounded-lg">Log In</button>
   </NavLink>
    </div>

   }
 
    </div>
  )
}




