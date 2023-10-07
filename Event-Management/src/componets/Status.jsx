import React from 'react'

export default function Status() {
  return (
    <div className="my-10">
        
      <div className="stats shadow-lg border-black border-solid border-2 ">
  
  <div className="stat place-items-center w-96  ">
    <div className="stat-title">Successful Events </div>
    <div className="stat-value">560+</div>
    <div className="stat-desc">From 2019 to till now</div>
  </div>
  
  <div className="stat place-items-center w-96 border-black border-solid divide-x-2 ">
    <div className="stat-title">Active Client</div>
    <div className="stat-value text-secondary">1200+</div>
    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
  </div>
  
  <div className="stat place-items-center w-96 border-black border-solid divide-x-2  ">
    <div className="stat-title">New Registers</div>
    <div className="stat-value">600+</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
    </div>
  )
}
