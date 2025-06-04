import  { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import First from "./Components/First.jsx";
import Home from "./Home";
// import Singleproject from './singleproject'
import Singleproject from "./Components/Singleproject";
import About from "./Components/About";
import Contact from  "../Components/Contact.jsx"
import Blog from "../Components/Blog.jsx";
import Cart from "../Components/Cart.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
    children: [
      { index: true, element: <Home /> },
      { path: "/product/:id", element: <Singleproject /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "blog", element: <Blog /> },
      {path:"cart",element:<Cart/>}
    ],
  },
]);




function Router() {
  
  return (
  <>
  <RouterProvider router={router} />
  </>
  )
}

export default Router;
