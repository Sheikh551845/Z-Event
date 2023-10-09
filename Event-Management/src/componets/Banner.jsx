import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Banner() {
  return (
    <div className="mt-8">
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/TBgkXqf/Banner.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-xl">
      <h1 className="mb-5 text-2xl md:text-5xl font-bold" data-aos="fade-up" data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Best Event Management in Bangladesh</h1>
      <p className="mb-5">For best services for social events we are there for you</p>
      <NavLink to="/AboutUs" data-aos="fade-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"><button className="btn glass bg-zinc-200" >Learn More</button></NavLink>
    </div>
  </div>
</div>
    </div>
  )
}
