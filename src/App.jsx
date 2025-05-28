import { useEffect, useState } from 'react';
import { PiCurrencyDollarBold } from "react-icons/pi";
import "./App.css"

function App() {
    const [products,setproducts]=useState([])
 async  function fetchdata(){
      let response =await fetch("https://fakestoreapi.in/api/products")
      let result=await response.json()
      // console.log(result.products)
      setproducts(result.products)
   }
  console.log(products)
   useEffect(()=>{
     fetchdata()

   },[])
  return (

    <>
    { products? (
       <div className='maindiv'>
        { products.map((ele)=>(
      <div className='div' >
          <img src={ele.image} alt=""  className='images'/>
          <h1>{ele.title.slice(0,20)+"..."}</h1>
          <p className='para'>Price:<PiCurrencyDollarBold  className='icon'/>
{ele.price}</p>
        </div>  ))}
    </div>
    ):""

    }
   
   
      
    </>
  )
}

export default App
