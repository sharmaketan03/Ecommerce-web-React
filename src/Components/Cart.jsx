import React, { useEffect, useState } from 'react'
import { UserContext } from './UserContext'
import { useContext } from 'react'
import "./index.css"
let arr=[]
function Cart() {
  let {addtocartid}=useContext(UserContext)
  const [data,setData]=useState([])
  const [count,setCount]=useState(0)
  // const
  // console.log(addtocartid)
 async  function fetcheddata(){
         let response=await fetch(`https://fakestoreapi.com/products/${addtocartid}`)
         let result=await response.json()
         console.log(result)
         arr.push(result)
         setData([result])
         console.log(arr)
      //  console.log(data)
         
  }
  
  useEffect(()=>{
fetcheddata()
  },[addtocartid])
  return (
    <>
     <div >
       
{arr.map((item)=>(

<div className='cartflex'>
          <div className='cartimg'>
             <img src={item.image} alt="" />
            </div>
            <div className='ratelist'>
              <h2>{item.title}</h2>
              
             <h3>Price: ${item.price}</h3>
               <h3>Rating: {item.rating.rate}</h3>
              <h3>Count: {item.rating.count}</h3>
                <div className='addquantity'><button onClick={()=>{count>0?setCount(count-1):""}}>-</button><span>{count}</span><button onClick={()=>{setCount(count+1)}}>+</button></div>
            </div>
           
      </div>

))
 


  

}
    


       



    </div>
    
    </>
   
  )
}

export default Cart