import React, { useEffect, useState } from 'react'
import { UserContext } from './UserContext'
import { useContext } from 'react'
import "./index.css"
import { data } from 'react-router-dom'
let arr=[]
// let ids=[]
function Cart() {
  let {addtocartid}=useContext(UserContext)
  const [data,setData]=useState([])
  const [count,setCount]=useState(1)
  console.log(addtocartid)

 async  function fetcheddata(){
  if (addtocartid.length==0) return;
  else{
       
   let result=await  Promise.all(
     addtocartid.map( async(x)=>{
            const response =await fetch(`https://fakestoreapi.com/products/${x}`)
            const result1=await response.json()
           
            return result1
     })

        
    )
   
    setData(result)


 

          console.log(arr)
     }

  }console.log(data)
 useEffect(()=>{
fetcheddata()
  },[addtocartid])
  
  function decrement(){
   
    setCount(count-1)
  }
   function increment(item){
  
       setCount(count+1)
      
    
  }
  
  
  return (  
       <div>
           {data.map((item,index) => (
  <div className='cartflex'  key={item.id}>
    <div className='cartimg' >
      <img src={item.image} alt="" />
    </div>
    <div className='ratelist'>
      <h2>{item.title}</h2>
      <h3>Price: ${item.price}</h3>
      <h3>Rating: {item.rating?.rate}</h3>
      <h3>Count: {item.rating?.count}</h3>
      <div><button onClick={()=>decrement(item.id)}>-</button><span>{count}</span><button onClick={()=>increment(item.id)}>+</button></div>
    </div>
    <div>
      TOTAL PRICE:- ${item.price * count}
    </div>
  </div>
))}

       </div>
   
  )


         
  }
  
 


export default Cart