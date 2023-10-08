import React, { useContext } from 'react'
import HomeCard from './HomeCard';
import { AuthContext } from './AuthProvider';
import { NavLink } from 'react-router-dom';

export default function HomeCards() {
    const {data}= useContext(AuthContext)
 
  const Sliced = data.slice(0,6) ;
  
  return (
    <div className=" mt-3 mx-auto ">
        <h1 className="text-4xl font-bold my-5">Our services</h1>
        <div className="flex justify-between flex-wrap gap-4  max-w-fit mx-auto">
          
        {
        Sliced?.map((data) => (
            <HomeCard key={data.id} data={data}></HomeCard>
          ))
      }
        </div>
        <div className="my-3"> 
       <NavLink to="/Services">
       <button
  className="middle none center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  data-ripple-light="true"
 
>
  Sell All
</button>
        
        </NavLink> 
        </div>
       
    </div>
  )
}
