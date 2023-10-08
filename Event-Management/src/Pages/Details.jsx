import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../componets/AuthProvider';
import { useLoaderData, useParams } from 'react-router-dom';
import SilverPakage from '../componets/SilverPackage';
import GoldPackage from '../componets/GoldPackage';
import DiamondPackage from '../componets/DiamondPackage';
import SilverPackage from '../componets/SilverPackage';

export default function Details() {
    const {id}=useParams()
     
   
    const data=useLoaderData();

    

    

    const [card, setCard]=useState([])
    
    useEffect(()=>{
       const findCard = data?.find(card=> card.id == id)

       setCard(findCard);
      
    }
    ,[id,data])
    console.log(card)

    const {title, img,long_details}=card;

  
  return (
    <div className="mx-auto">
         <div className=" py-12 mx-auto">
      <div className="h-[500px] rounded-md flex flex-col bg-no-repeat bg-cover" style={{ backgroundImage: `url('${img}')` }}>
        <div className="w-full h-[480px]">

        </div>
        <div className="w-full h-[120px]  bg-black bg-opacity-60 bg-blend-overlay">
            <p className="text-white p-4 text-3xl font-bold text-left mt-5 ml-5">{title} Event</p>
        </div>
      </div>
      
      <div className="relative flex max-w-screen-xl flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-3xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
      Details
    </h5>
    <p className="block font-sans text-black font-normal leading-relaxed text-inherit antialiased">
      {long_details}
    </p>
  </div>
  
</div>

<div className="flex flex-wrap gap-6 max-w-fit mx-auto mt-5">
    <SilverPackage></SilverPackage>
    <GoldPackage></GoldPackage>
    <DiamondPackage></DiamondPackage>

</div>


    </div>

    
      
    </div>
  )
}
