import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "./Components/Singleproject.jsx"


function Header() {
   let user=useContext(UserContext)
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
                    <li><Link to={"/cart"}>Cart<sup className="super">{user}</sup></Link></li>
                </ul>
             </nav>
       </div>
      
      </>
  )
}

export default Header