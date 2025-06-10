import React, { useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { useContext } from "react";
import "./index.css";
import { data } from "react-router-dom";
// let ids=[]
let result;
function Cart() {
  let { addtocartid,setAddtocartid ,Cart,setCart} = useContext(UserContext);
  const [data, setData] = useState([]);
  const {Quantity,setQuantity}=useContext(UserContext)
  console.log(Quantity)
  console.log(addtocartid);
  
  let storequantity = [];

  useEffect(() => {
    async function fetcheddata() {
      if (addtocartid.length === 0) return;

      const result = await Promise.all(
        addtocartid.map(async (x) => {
          const response = await fetch(`https://fakestoreapi.com/products/${x}`);
          return await response.json();
        })
      );
      const newquantities={}
      result.map((item)=>{
        newquantities[item.id]=1
      })
      
      setQuantity((Quantity)=>({...Quantity,newquantities}))
      setData(result)
       
       
    }
    fetcheddata();
  }, [addtocartid]);
function increment(id){
   setQuantity((prev)=>({...Quantity,[id]:(prev[id]||1)+1}))
}
function decrement(id){
  setQuantity((prev)=>({...Quantity,[id]:(prev[id]||1)-1}))
}
let value=0
console.log(value)
 function RemoveCart(index){
 const product= data.filter((items,index1)=>(index!=index1))
  console.log(product)
  setData(product)
  
  addtocartid.splice(index,1)
  setCart(Cart-1)
 
  
 }
if(addtocartid.length==0){
  return(<h1 className="EmptyCard">🛒 Cart is empty</h1>)
}
  return (
    <div>
      {data.map((item, index) => (

    <div>
        <div className="cartflex">
          <div className="cartimg">
            <img src={item.image} alt="" />
          </div>
          <div className="ratelist">
            <h2>{item.title}</h2>
            <h3>Price: ${item.price}</h3>
            <h3>Rating: {item.rating?.rate}</h3>
            <h3>Count: {item.rating?.count}</h3>
            <div className="marginCartquantity">
              <button onClick={() => decrement(item.id)}>-</button>
              <span>{Quantity[item.id]||1}</span>
              <button onClick={() => increment(item.id)}>+</button>
            </div>
          
          </div>
             <div>
              <span>Remove:-</span> <button onClick={()=>RemoveCart(index)}>&times;</button>
             </div>
        </div>

        <div>
              <span>Total Price:-${Quantity[item.id]*item.price||item.price*1}</span>
               
            </div>
            
        </div>
      ))}
    </div>
  );
}

export default Cart;





// import React, { useEffect, useState } from "react";
// import { UserContext } from "./UserContext";
// import { useContext } from "react";
// import "./index.css";
// import { data } from "react-router-dom";
// // let ids=[]
// let result;
// function Cart() {
//   let { addtocartid } = useContext(UserContext);
//   const [data, setData] = useState([]);
// const { quantities, setQuantities } = useContext(UserContext);

//   console.log(addtocartid);

//   let storequantity = [];

//   useEffect(() => {
//     async function fetcheddata() {
//       if (addtocartid.length === 0) return;

//       const result = await Promise.all(
//         addtocartid.map(async (x) => {
//           const response = await fetch(`https://fakestoreapi.com/products/${x}`);
//           return await response.json();
//         })
//       );

//       // Initialize quantities for each product ID if not already set
//       const initialQuantities = {};
//       result.forEach((item) => {
//         if (!(item.id in quantities)) {
//           initialQuantities[item.id] = 1;
//         }
//       });

//       setQuantities((prev) => ({ ...prev, ...initialQuantities }));
//       setData(result);
//     }

//     fetcheddata();
//   }, [addtocartid]);

//    const increment = (id) => {
//     setQuantities((prev) => ({
//       ...prev,
//       [id]: prev[id] + 1,
//     }));
//   };

//   const decrement = (id) => {
//     setQuantities((prev) => ({
//       ...prev,
//       [id]: Math.max(1, prev[id] - 1), // optional: prevent going below 1
//     }));
//   };


//   return (
//     <div>
//       {data.map((item, index) => (
//         <div className="cartflex">
//           <div className="cartimg">
//             <img src={item.image} alt="" />
//           </div>
//           <div className="ratelist">
//             <h2>{item.title}</h2>
//             <h3>Price: ${item.price}</h3>
//             <h3>Rating: {item.rating?.rate}</h3>
//             <h3>Count: {item.rating?.count}</h3>
//             <div>
//               <button onClick={() => decrement(item.id)}>-</button>
//               <span>{quantities[item.id] || 1}</span>
//               <button onClick={() => increment(item.id)}>+</button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Cart;
