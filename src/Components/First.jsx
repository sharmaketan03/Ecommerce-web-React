import { useState } from "react";
import { UserContext } from "./UserContext";
import { Outlet } from "react-router-dom";
import Header from "./Header"

function First() {
  const [Cart, setCart] = useState(0);
  const [addtocartid, setAddtocartid] = useState([]);
  const [data, setData] = useState([]);
  const [Quantity, setQuantity] = useState({}); // ✅ add this
const [AddtoWishlist,setAddtoWishlist]=useState([])
  return (
    <UserContext.Provider
      value={{
        Cart,
        setCart,
        addtocartid,
        setAddtocartid,
        data,
        setData,
        Quantity,        // ✅ pass to context
        setQuantity, // ✅ pass setter to context
        AddtoWishlist,
        setAddtoWishlist
      }}
    >
      <Header />
      <Outlet />

    </UserContext.Provider>
  );
}

export default First;
