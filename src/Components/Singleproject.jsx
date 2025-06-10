import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "./index.css";
import { UserContext } from "./UserContext";

function Singleproject() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [DisabledWishlist,setDisabledWishlist]=useState(false)
  const {AddtoWishlist ,setAddtoWishlist}=useContext(UserContext)

  const { addtocartid, setAddtocartid, Cart, setCart } = useContext(UserContext);

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);

  async function fetchData(id) {
    const response = await fetch("https://fakestoreapi.com/products/" + id);
    const result = await response.json();
    setProduct(result);
  }

  function handleAddCart() {
    if (id && !disabled) {
      setDisabled(true);
      setCart(Cart + 1);
      setAddtocartid([...addtocartid, id]); // fixed array push
    }
  }
  function AddWishlist(){
        if(id && !DisabledWishlist){
            setDisabledWishlist(true)
            setAddtoWishlist([...AddtoWishlist , id]);
          
        }
  }
 console.log(AddtoWishlist)

  return (
    <div className="flex">
      <div className="set">
        <img src={product.image} alt="" className="img" />
      </div>
      <div className="set1">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h1>Price:-${product.price}</h1>
        <button className="btn1" onClick={handleAddCart} disabled={disabled}>
          Add TO Cart
        </button>
        <button className="btn2" onClick={AddWishlist} disabled={DisabledWishlist}>Wishlist</button>
      </div>
    </div>
  );
}

export default Singleproject;
