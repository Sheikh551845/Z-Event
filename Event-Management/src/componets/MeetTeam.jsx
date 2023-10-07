import React, { useEffect } from 'react'
import TeamCard from './TeamCard'

export default function MeetTeam() {
    const data = [
          {
            "name": "John Smith Jhanker",
            "position": "Event Planner",
            "email": "john.smith@zevent.com",
            "phone": "(555) 123-4567",
            "image": "https://i.ibb.co/5KxHr5X/jhankar.jpg"
            
          },
          {
            "name": "Gias Davis",
            "position": "Decor Specialist",
            "email": "emily.davis@zevent.com",
            "phone": "(555) 987-6543",
            "image": "https://i.ibb.co/F4m9ctz/Gias.jpg"
          },
          {
            "name": "Farhan Johnson",
            "position": "Entertainment Coordinator",
            "email": "michael.johnson@zevent.com",
            "phone": "(555) 789-0123",
            "image": "https://i.ibb.co/n37sBm4/Farhan.jpg"
          }
        ]
        
       
      
      
  return (
    <div className="my-4">
      
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/CnL9xcH/pexels-716281.jpg)'}}>
      
  <div className="hero-overlay bg-opacity-60"></div>
  <div>
  <h1 className="text-4xl font-bold text-center text-white my-16 border-white border-solid border-2 w-fit mx-auto p-2 rounded-lg">Our Team</h1>
  <div className="mx-auto flex flex-wrap gap-4">
        
  {data.map((member, index) => (
        <TeamCard key={index} member={member}></TeamCard>
        ))}
        
  </div>
  </div>
  
</div>
    </div>
  )
}
