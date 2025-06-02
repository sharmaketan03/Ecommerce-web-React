
import { Outlet } from 'react-router-dom'
import Header from './Header'

function First() {
  return (
    <>
     <Header/>
     <Outlet/>
     <footer/>
    </>
  )
}

export default First