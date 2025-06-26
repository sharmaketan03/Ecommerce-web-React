
 
import { UserContext } from "./UserContext"
import { useContext, useEffect } from "react"
import { useState } from "react"
import { IoHeart } from "react-icons/io5";
import "./index.css";
import { Link } from "react-router-dom";
import {auth} from "./Firebase"
import { useNavigate } from "react-router-dom";


function Header() {
   const {input,setInput}=useContext(UserContext)
   let {Cart}= useContext(UserContext)
   let {data} =useContext(UserContext) 
   const navigate=useNavigate()
   console.log(data)
 async function handel(){
      await  auth.signOut()
      navigate("/")
      console.log("SignOut Successfull")
  }
  return (
      <>
       <div className='header'>
             <h1><Link to={"/App"}>Ecommerce</Link></h1>
            
                
             <nav>
               <input type="text"  className="inputwidth" placeholder="search Products With Ecommerce" value={input} onChange={(e)=>setInput(e.target.value)}/>
              
                <ul className='lists'>
                    <li><Link to={"/App"}>Home</Link></li>
                   <li><Link to={"/App/about"}>About</Link></li>
                   <li><Link to={"/App/contact"}>Contact</Link></li>
                    <li><Link to={"/App/blog"}>Blog</Link></li>
                   
                    <li><Link to={"/App/cart"}>Cart <span><sup  className="super" >{Cart}</sup></span></Link></li>
                    <li onClick={handel}>Logout <span></span></li>

                </ul>
             </nav>
       </div>
      
      </>
  )
}

export default Header





