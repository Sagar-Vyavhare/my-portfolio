import React from 'react'
import { Link, Outlet ,useNavigate} from "react-router-dom";
export default function Portfolio() {
  let navigate =useNavigate()
  return (
    <div>
      <Link to='/'>/</Link>
      <Link to='/demo2'>demo2</Link>
      <Outlet />

      <h1 onClick={()=>navigate("/sagar")}>goto sagar</h1>
    </div>
  )
}
