import { useLocation, useParams } from "react-router-dom";
import {  useContext, useEffect, useState } from "react";
import "./index.css";
import { use } from "react";
import Cart from "./Cart";
import Header from "./Header";  
import { UserContext } from "./UserContext";



function Singleproject() {
  const { id } = useParams();
  //  console.log(id)
  const [product, setProduct] = useState({});
  const [disabled,setDisabled]=useState(false)
  const {addtocartid,setAddtocartid}=useContext(UserContext)
  const { Cart, setCart } = useContext(UserContext)     //shared state and update the state
  // console.log(Cart)
//  console.log(Cart)
  useEffect(() => {
    if (id) {
      fetchData(id);

    }
  }, [id]);
  
  // console.log(addtocartid)
  async function fetchData(id) {
    let response = await fetch("https://fakestoreapi.com/products/" + id);
    let result = await response.json();
    console.log(result);
    setProduct(result);
  }
  function handelAddCart(event){
       if(id){
        console.log(id)
        if(!disabled){
           setDisabled(true) 
           setCart(Cart+1)
           setAddtocartid(id)
        }

        else{
           console.log(id)
          setDisabled(false)
        }
       }
  }

  // console.log(Cart)
  return (
    <>
  
      <div className="flex">
        <div className="set">
          <img src={product.image} alt="" className="img" />
        </div>
        <div className="set1">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h1>Price:-${product.price}</h1>
          <button className="btn1"  onClick={handelAddCart}  disabled={disabled}>
            Add TO Cart
          </button>
          <button className="btn2">Wishlist</button>
        </div>
      </div>
    </>
  );
}


export default Singleproject;










