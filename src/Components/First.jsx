import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import { UserContext } from "./UserContext";
function First() {
  const [Cart,setCart]=useState(0)
  let value=1
  const [addtocartid,setAddtocartid]=useState([])
  return (
    <>
    <UserContext.Provider value={{Cart,setCart,addtocartid,setAddtocartid,quantity:value}}>
      <Header/>
      <Outlet />
      <footer />
      </UserContext.Provider>
    </>
  );
}

export default First;



