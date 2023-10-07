import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import ServiceCard from './ServiceCard'

export default function ServiceCards() {
    const {data} = useContext(AuthContext) 
    
  return (
    <div className="my-5">
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/dMG5wWX/Services.jpg)'}}>
      
      <div className="hero-overlay bg-opacity-60"></div>
      <div className='py-10 '>
      <h1 className="text-4xl font-bold text-center text-white my-16 border-white border-solid border-2 w-fit mx-auto p-2 rounded-lg">Our Services</h1>
      <div className="mx-auto flex flex-wrap gap-4">
            
      {data.map((service, index) => (
            <ServiceCard key={index} service={service}></ServiceCard>
            ))}
            
      </div>
      </div>
      
    </div>
    </div>
  )
}
