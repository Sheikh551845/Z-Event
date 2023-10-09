import React from 'react'

export default function Status() {
  return (
    <div className="my-10" >
        
      <div className="stats shadow-lg border-black border-solid border-2 " data-aos="zoom-in">
  
  <div className="stat place-items-center w-24 lg:w-96  " >
    <div className="md:stat-title text-xs lg:text-xl">Successful Events </div>
    <div className="md:stat-value text-lg lg:text-2xl">560+</div>
    <div className="md:stat-desc text-xs lg:text-lg">From 2019 to till now</div>
  </div>
  
  <div className="stat place-items-center w-24 lg:w-96  border-black border-solid divide-x-2 ">
    <div className="md:stat-title text-xs lg:text-xl">Active Client</div>
    <div className="md:stat-value text-lg lg:text-2xl">1200+</div>
    <div className="md:stat-desc text-xs lg:text-lg">↗︎ 40 (2%)</div>
  </div>
  
  <div className="stat place-items-center w-24 lg:w-96  border-black border-solid divide-x-2  ">
    <div className="md:stat-title text-xs lg:text-xl">New Registers</div>
    <div className="md:stat-value text-lg lg:text-2xl">600+</div>
    <div className="md:stat-desc text-xs lg:text-lg">↘︎ 90 (14%)</div>
  </div>
  
</div>
    </div>
  )
}
