import React, { useEffect, useState } from 'react'
import {auth} from "./Firebase"
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function ProtectedRoute({children}) {
      const [user,setUser]=useState(undefined)
    const  navigate = useNavigate()
        
      useEffect(()=>{
             const unsubscraibed= onAuthStateChanged(auth,(currentUser)=>{
                  setUser(currentUser)
        
                 
             }) 
              return ()=> unsubscraibed()
      },[])
      console.log(children)
  console.log(user)
    if(user==undefined)
    {
      return (<div className="mainloader">

 <div className="loader-container">
  <div className="loader"></div>
  </div>
  </div>)
    }

  return user?children:navigate("/")
}

export default ProtectedRoute