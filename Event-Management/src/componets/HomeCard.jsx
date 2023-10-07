import React from 'react'

export default function HomeCard({data}) {

   const {title, short_details,img}=data;

  return (
    <div className="max-w-fit border-black border-solid mx-auto">
     <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-black shadow-md">
  <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
    <img
      src={img}
      alt=""
      className=" h-60 w-full"
    />
  </div>
  <div className="p-6">
    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-rose-500 antialiased">
      {title}
    </h4>
    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
      {short_details}
    </p>
  </div>
 
</div>
    </div>
  )
}
