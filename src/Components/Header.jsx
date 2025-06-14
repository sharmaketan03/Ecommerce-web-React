
import { Link } from "react-router-dom"
import { UserContext } from "./UserContext"
import { useContext, useEffect } from "react"
import { useState } from "react"
import { IoHeart } from "react-icons/io5";

function Header() {
  
   let {Cart}= useContext(UserContext)
   let {data} =useContext(UserContext) //to use state variable in value store
   console.log(data)
  
    
  return (
      <>
       <div className='header'>
             <h1><Link to={"/"}>Ecommerce</Link></h1>
             <nav>
                <ul className='lists'>
                    <li><Link to={"/"}>Home</Link></li>
                   <li><Link to={"/about"}>About</Link></li>
                   <li><Link to={"/contact"}>Contact</Link></li>
                    <li><Link to={"/blog"}>Blog</Link></li>
                    <li><Link to={"/icons"}><IoHeart /></Link></li>
                    <li><Link to={"/cart"}>Cart <span><sup  className="super" >{Cart}</sup></span></Link></li>

                </ul>
             </nav>
       </div>
      
      </>
  )
}

export default Header





