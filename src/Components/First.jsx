import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import { UserContext } from "./UserContext";
function First() {
  const [Cart,setCart]=useState(0)
  const [addtocartid,setAddtocartid]=useState(0)
  return (
    <>
    <UserContext.Provider value={{Cart,setCart,addtocartid,setAddtocartid}}>
      <Header/>
      <Outlet />
      <footer />
      </UserContext.Provider>
    </>
  );
}

export default First;



