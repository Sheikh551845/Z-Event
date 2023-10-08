import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
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
      <li>
        <NavLink
              to="/Login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black underline" : ""
              }
            >
              Login
            </NavLink>
      </li>
      </ul>
      </div>
      
    </div>
   </div>
   <div className="flex justify-center items-center gap-2 ">
    <p className="text-white fond-bold">Hello World</p>
   <div className="avatar">
  <div className="w-12 rounded-full ring ring-offset-base-100 ring-offset-2">
    <img src="https://i.ibb.co/mXj3NcD/CEO.jpg" />
  </div>
  </div>
   </div>
 
    </div>
  )
}

{/* <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div> */}