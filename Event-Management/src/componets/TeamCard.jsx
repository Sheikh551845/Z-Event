import React from 'react'

export default function TeamCard({member}) {
    
  const {image,name,position, email}=member
  return (
    
    <div className="mx-auto">
      <div className="relative flex w-80 flex-col rounded-xl bg-transparent  text-gray-700 shadow-md border-white border-solid border-2">
  <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-transparent text-gray-700 shadow-lg">
    <img src={image} alt="profile-picture" />
  </div>
  <div className="p-6 text-center">
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-white antialiased">
     {name}
    </h4>
    <p className="block  font-sans text-white font-medium leading-relaxed text-transparent antialiased">
      {position}
    </p>
  </div>
  
</div>
    </div>
  )
}
