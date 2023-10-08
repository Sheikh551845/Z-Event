import React from 'react'
import WhyChooseUs from '../componets/WhyChooseUS'
import AboutDetails from '../componets/AboutDetails'
import MeetTeam from '../componets/MeetTeam'
import GetStarted from '../componets/GetStarted'
import Contact from '../componets/Contact'

export default function AboutUs() {
  return (
    <div>
      <AboutDetails></AboutDetails>
      <MeetTeam></MeetTeam>
     <WhyChooseUs></WhyChooseUs>
      <Contact></Contact>
     <GetStarted></GetStarted>
    
    </div>
  )
}
