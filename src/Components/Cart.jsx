// import React, { useEffect, useState } from 'react'
// import { UserContext } from './UserContext'
// import { useContext } from 'react'
// import "./index.css"
// import { data } from 'react-router-dom'
// let arr=[]
// // let ids=[]
// function Cart() {
//   let {addtocartid}=useContext(UserContext)
//   const [data,setData]=useState([])
//   const [count,setCount]=useState({})
//   console.log(addtocartid)

//  async  function fetcheddata(){
//   if (addtocartid.length==0) return;
//   else{
       
//    let result=await  Promise.all(
//      addtocartid.map( async(x)=>{
//             const response =await fetch(`https://fakestoreapi.com/products/${x}`)
//             const result1=await response.json()
           
//             return result1
//      })

        
//     )
   
//     setData(result)
 

 

//           console.log(arr)
//      }

//   }console.log(data)
//  useEffect(()=>{
// fetcheddata()
//   },[addtocartid])
 
  
  
//   return (  
//        <div>
//            {data.map((item,index) => (
//   <div className='cartflex'  >
//     <div className='cartimg' >
//       <img src={item.image} alt="" />
//     </div>
//     <div className='ratelist'>
//       <h2>{item.title}</h2>
//       <h3>Price: ${item.price}</h3>
//       <h3>Rating: {item.rating?.rate}</h3>
//       <h3>Count: {item.rating?.count}</h3>
//       <div><button onClick={()=>decrement()}>-</button><span>{count}</span><button onClick={()=>increment(item.id)}>+</button></div>
//     </div>
//     <div>
//       TOTAL PRICE:- ${item.price * count}
//     </div>
//   </div>
// ))}

//        </div>
   
//   )


         
//   }
  
 


// export default Cart



import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from './UserContext';
import { ImCross } from "react-icons/im";
import './index.css';

function Cart() {
  const { addtocartid } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [Emptydata,setEmptydata]=useState("")


  useEffect(() => {
    async function fetchData() {
      if (addtocartid.length === 0){
           setEmptydata("NO Data TO SHOW YET !!!")
      }else if(addtocartid.length>1 ){
              setEmptydata(" ")
      }

      const result = await Promise.all(
        addtocartid.map(async (id) => {
          const res = await fetch(`https://fakestoreapi.com/products/${id}`);
          return await res.json();
        })
      );

      setProducts(result);

 
      const initial = {};
      result.forEach((item) => {
        initial[item.id] = 1;
        // console.log(initial[item.id])
        // console.log(item)
      });
      setQuantities(initial);
    }

    fetchData();
  }, [addtocartid]);

 
  function increase(id) {
    // console.log([id],count[id])
    setQuantities(({ ...quantities, [id]: quantities[id]>=10?10:quantities[id]+1 }));
  }


  function decrease(id) {
    setQuantities(({...prev,[id]: prev[id] > 1 ? prev[id] - 1 : 1
    }));
}


function cros(ids){
  
      products.filter((item,value)=>{
      
          })
      
}

  return (
    <div>
      {products.map((item,index) => (
        <div key={item.id} className="cartflex">
          <img src={item.image} alt="" className="cartimg" />
          <div className="ratelist">
            <h2>{item.title}</h2>
            <h3>Price: ${item.price}</h3>
            <h3>Rating: {item.rating.rate}</h3>
            <div>
              <button onClick={() => decrease(item.id)}>-</button>
              <span style={{ margin: '0 10px' }}>{quantities[item.id]}</span>
              <button onClick={() => increase(item.id)}>+</button>
            </div>
          </div>
          <div>

            <p><b>Total:</b> ${item.price * quantities[item.id]}</p>
          </div>
          <div>
             <button onClick={()=>cros(item.id)}><ImCross /></button> 
          </div>
        </div>
       
      ))}
       <h1 className='center'>{Emptydata}</h1>
    </div>
  );
}

export default Cart;
