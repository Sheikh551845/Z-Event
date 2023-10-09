import React from 'react'
import { Link } from 'react-router-dom';

export default function HomeCard({data}) {

   const {title, short_details,img,id}=data;

  return (
    <div className=" max-w-fit mx-auto" data-aos="flip-right" data-aos="flip-down" >
    <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
<div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
  <img
    src={img}
    alt=""
    className='h-60 w-full'
  />
</div>
<div className="p-5">
  <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    {title}
  </h4>
  <p className="my-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
    {short_details}
  </p>
  <div className=" text-2xl font-semibold"><span className="text-orange-500">Price:</span>  See Details</div>
</div>

<div className="p-5 pt-0">
<Link to={`/Details/${id}`}> 
  <button
    className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button"
    data-ripple-light="true"
  >
    Show Details
  </button>
  </Link>
</div>
</div>
  </div>
  )
}
