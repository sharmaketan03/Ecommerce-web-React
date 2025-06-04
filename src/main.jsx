import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./Components/index.css"
// import App from './App.jsx'
// import First from './First.jsx'
// import Home from "./Home"
import Router from './Components/Router'

createRoot(document.getElementById('root')).render(
  
    <Router/>
 
)
