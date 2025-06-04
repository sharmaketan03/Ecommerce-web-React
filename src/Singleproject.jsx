import { useLocation, useParams } from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";
import "./index.css";
import { use } from "react";
import Cart from "./Cart";
import Header from "./src/Header.jsx";  


const UserContext=createContext()
function Singleproject() {
  const { id } = useParams();
  //  console.log(id)
  const [product, setProduct] = useState({});
  const [Cart, setCart] = useState(0);

//  console.log(Cart)
  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);
  

  async function fetchData(id) {
    let response = await fetch("https://fakestoreapi.com/products/" + id);
    let result = await response.json();
    console.log(result);
    setProduct(result);
  }

  console.log(Cart)
  return (
    <>
    <UserContext value={Cart}>
      <Header/>
    </UserContext>
      <div className="flex">
        <div className="set">
          <img src={product.image} alt="" className="img" />
        </div>
        <div className="set1">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h1>Price:-${product.price}</h1>
          <button className="btn1"  onClick={()=>setCart(Cart + 1)} >
            Add TO Cart
          </button>
          <button className="btn2">Wishlist</button>
        </div>
      </div>
    </>
  );
}


export default Singleproject;
export {UserContext}

