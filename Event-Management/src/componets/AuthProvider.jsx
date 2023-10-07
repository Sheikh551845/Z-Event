import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext(null);

export default function AuthProvider({children}) {

    const [data, setData] = useState([])
   
    useEffect(()=>{
    fetch("/data.json")
    .then ((res)=> res.json())
    .then((data)=>setData(data))
},[])

  const authInformation ={
    data,

  }
    
   

   
  return (
   <AuthContext.Provider value={authInformation}>
    {children}
   </AuthContext.Provider>
  )
}