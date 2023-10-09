import React from 'react'

export default function ChooseUsCard({topic}) {
  return (
    <div className="mx-auto">
         <div className="relative flex w-80 md:w-96 flex-col rounded-xl bg-gradient-to-r from-stone-200 to-stone-400 bg-clip-border text-gray-700 shadow-md">
    <div className="p-6">
      <h5 className="mb-2 block font-sans text-xl  leading-snug tracking-normal text-black font-bold antialiased">
       {topic.title}
      </h5>
      <p className="block font-sans text-base  leading-relaxed text-black font-semi-bold antialiased">
        {topic.description}
      </p>
    </div>
    
  </div>
    </div>
   
  )
}
