import React from 'react'
import { NavLink } from 'react-router-dom'

export default function GetStarted() {
  return (
    <div className="my-4">
      <div className="hero min-h-fit" style={{backgroundImage: 'url(https://i.ibb.co/g92jxQ5/pexels-abby-kihano-431722.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-white  py-24">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Let's Make Your Event Memorable!</h1>
      <p className="mb-5 text-3xl font-bold">With Z Event</p>
      <NavLink to="/Services"><button className="btn bg-black text-white hover:text-black">Get Started</button></NavLink>
    </div>
  </div>
</div>
    </div>
  )
}
