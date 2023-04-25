import React from "react";
import Home from "./Home";
import web from "../src/images/one5.png";
import { NavLink } from "react-router-dom";
const Card=(props)=>{
return(
    <>
 
            <div className="col-md-4 col-10 mx-auto">
            <div className="card" >
  <img  src={props.imgsrc} className="card-img-top"  alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text">{props.des}</p>
    <center>
    <NavLink to={props.pet} className="btn btn-primary">Enroll now</NavLink></center>
  </div>
</div>

            </div>
           
            
        
       
       
    </>
)
    return <h1>contact please</h1>;
    <p>gvghvgh</p>
};
export default Card;