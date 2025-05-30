import { useLocation, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import './index.css'
function Singleproject() {
  const {id}=  useParams()
   console.log(id)
  const [product , setProduct]=useState({});

  useEffect(()=>{
    if(id){
      fetchData(id);
    }
 },[id]);

  async function fetchData(id){
     let response =await fetch("https://fakestoreapi.in/api/products/" + id)
     let result=await response.json()
     console.log(result.product)
     setProduct(result.product)
  }
 
  return (
       <>
         <div className="flex">
              <div className="set">
                   <img src={product.image} alt=""  className="img"/>
                </div>
                <div className="set1">
                  <h1>{product.title}</h1>
                <p>{product.description}</p>
                <h1>Price:-${product.price}</h1>
                </div>
                
         </div>
       </>
  )
}

export default Singleproject
