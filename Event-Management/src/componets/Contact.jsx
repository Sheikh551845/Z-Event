import React from 'react'

export default function Contact() {
  return (
    <div className="mb-2 ">
       
    <div className="container mx-auto ">
                 <div className="lg:flex max-w-screen-xl ">
                     <div className=" max-w-screen-sm md:max-w-screen-lg lg:max-w-screen-xl bg-slate-400 py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none  ">
                         <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
                             <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold">Contact Us</h1>
                             <p className="text-xl text-white pb-8 leading-relaxed font-normal lg:pr-4">Got a question about us? Are you interested in partnering with us? Have some suggestions or just want to say Hi? Just contact us. We are here to asset you.</p>
                             <div className="flex pb-4 items-center  w-fit mx-auto">
                                 <div aria-label="phone icon" role="img">
                                     <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/contact_indigo-svg1.svg" alt="phone"/>
                                     
                                 </div>
                                 <p className="pl-4 text-white text-base text-center">+1 (308) 321 321</p>
                             </div>
                             <div className="flex items-center w-fit mx-auto">
                                 <div aria-label="email icon" role="img">
                                     <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/contact_indigo-svg2.svg" alt="email"/>
                                    
                                 </div>
                                 <p className="pl-4 text-white text-base ">Info@alphas.com</p>
                             </div>
                             <p className="text-lg text-white pt-10 tracking-wide">
                                 545, Street 11, Block F
                                 <br />
                                 Dean Boulevard, Ohio
                             </p>
                           
                         </div>
                     </div>
                 
                 </div>
             </div>
         
 </div>
  )
}
