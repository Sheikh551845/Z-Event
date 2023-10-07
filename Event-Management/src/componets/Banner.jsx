import React from 'react'

export default function Banner() {
  return (
    <div className="mt-8">
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/TBgkXqf/Banner.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-xl">
      <h1 className="mb-5 text-5xl font-bold">Best Event Management in Bangladesh</h1>
      <p className="mb-5">For best services for social events we are there for you</p>
      <button className="btn glass bg-zinc-200">Learn More</button>
    </div>
  </div>
</div>
    </div>
  )
}
