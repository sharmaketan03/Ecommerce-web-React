import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import { useState } from "react";
function First() {
  return (
    <>
      <Header/>
      <Outlet />
      <footer />
    </>
  );
}

export default First;
