import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import First from './First'
import Home from "./Home"
// import Singleproject from './singleproject'
import Singleproject from "./Singleproject.jsx"
import About from "./About"
import Contact from './Contact'
import Blog from "./Blog"




let router=createBrowserRouter([
    {
        path:'/',
        element:<First/>,
        children:[
           {index:true , element:<Home/>},
            {path:"/product/:id", element:<Singleproject/>},
            {path:"about" ,element:<About/>},
            {path:"contact" ,element:<Contact/>},
            {path:"blog" ,element:<Blog/>}
            
          ]
    }
])

function Router() {
  return (
    <RouterProvider router={router}/>
  )
}

export default Router