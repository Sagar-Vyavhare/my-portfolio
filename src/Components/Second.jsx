import React from 'react'
import { Link ,useNavigate } from 'react-router-dom';

export default function Second() {
    let navigate=useNavigate()
  return (
    <div>
      {" "}
      <Link to="/sagar">/</Link>
          <Link to="/sagar/demo2">demo2</Link>
          <h1 onClick={()=>navigate("/")}>goto /</h1>
    </div>
  );
}
