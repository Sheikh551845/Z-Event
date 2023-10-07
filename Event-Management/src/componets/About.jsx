import React from 'react'

export default function About() {
  return (
    <div className="mt-3">
        <div className="hero min-h-screen bg-gradient-to-r from-zinc-400 to-zinc-600">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/Y7n3Sz1/About.jpg" className="max-w-lg max-h-lg rounded-lg shadow-2xl" />
    <div>
        <p className="text-white text-lg">About US</p>
      <h1 className="text-3xl font-bold text-white">We help you to arrange social events</h1>
      <p className="py-6 text-white">Welcome to <span className='text-black text-xl font-bold'>Z event</span> , where we specialize in crafting unforgettable social events. Our dedicated team combines creativity, precision, and a personal touch to ensure every detail exceeds your expectations. Let us turn your event dreams into reality and create moments that will be cherished forever..</p>
      <button className="btn btn-primary">Know More</button>
    </div>
  </div>
</div>
      
    </div>
  )
}