import { useEffect, useState } from "react";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { Link } from "react-router-dom";
// import Header from './Header';
// import "./Home.css"

function Home(e) {
  // e.prevantDefault()
  const [products, setproducts] = useState([]);
  async function fetchdata() {
    let response = await fetch("https://fakestoreapi.com/products");
    let result = await response.json();
    console.log(result)
    setproducts(result);
  }
  // console.log(products);
  useEffect(() => {
    fetchdata();
  },[]);
 return (
<>

      {products ? (
        <div className="maindiv">
          {products.map((ele) => (
            <div className="div">
             <Link to={`/product/${ele.id}`}>
                {" "}
                <img src={ele.image} alt="" className="images" />
             </Link>
              <h1>{ele.title.slice(0, 20) + "..."}</h1>
              <p className="para">
                Price:
                <PiCurrencyDollarBold className="icon" />
                {ele.price}
              </p>
            </div>
          ))}
        </div>
      ):"" 
    }
   
    </>


  
  )

}  


export default Home;
