import React from 'react'
import WhyChooseUs from '../componets/WhyChooseUS'
import AboutDetails from '../componets/AboutDetails'
import MeetTeam from '../componets/MeetTeam'
import GetStarted from '../componets/GetStarted'
import Contact from '../componets/Contact'
import { NavLink } from 'react-router-dom'

export default function AboutUs() {
  return (
    <div>
      <AboutDetails></AboutDetails>
     <WhyChooseUs></WhyChooseUs>
     <NavLink to="/MeetTeam" className="mx-auto max-w-fit"><button className="btn text-white bg-rose-500 hover:text-black">Learn More</button></NavLink>
      <Contact></Contact>
     <GetStarted></GetStarted>
    
    </div>
  )
}
