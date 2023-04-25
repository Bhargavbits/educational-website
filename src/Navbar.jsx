import React from "react";
import './App.css';
import { NavLink } from "react-router-dom"
<link rel="stylesheet" href="../src/App.css"></link>
const Navbar=()=>{
    return(
        <>
        <div className="container-fluid nav_bg">
        <div className="row">
        <div className="col-10 mx-auto">
              
       
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/">BITS EDUCATION</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item ">
        <NavLink  className="nav-link"  to="/">Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/service">Services</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Log in</NavLink>
      </li>
     
      
    </ul>
    
  </div>
</nav> 
 </div>
        </div>

        </div>
        </>
    )
}
export default Navbar;