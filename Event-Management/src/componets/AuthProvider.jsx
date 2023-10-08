import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebaseConfig';

export const AuthContext = createContext(null);

const googleProvider= new GoogleAuthProvider();

export default function AuthProvider({children}) {

  const googleLogin = () => {
   
    return signInWithPopup(auth, googleProvider);
}


    const [data, setData] = useState([])
   
    useEffect(()=>{
    fetch("/data.json")
    .then ((res)=> res.json())
    .then((data)=>setData(data))
},[])

  const authInformation ={
    data,
    googleLogin,
  }
    
   

   
  return (
   <AuthContext.Provider value={authInformation}>
    {children}
   </AuthContext.Provider>
  )
}