import React, { useContext, useEffect } from 'react'
import { UserContext } from './UserContext'

function Wishlist() {
    let {AddtoWishlist}=useContext(UserContext)
    useEffect(()=>{
          async function fetchdata(){
                  if(AddtoWishlist==0)return;
                  const  result=await Promise.all(
                       AddtoWishlist.map(async (item)=>{
                            let response=await fetch(`https://fakestoreapi.com/products/${item}`)
                           
                            return  await response.json()
                       })
                  )
                  console.log(result)
          }
          fetchdata()
    })
  return (
    <div>Wishlist</div>
  )
}

export default Wishlist