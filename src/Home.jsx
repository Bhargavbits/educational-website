import React from "react";
import{NavLink}from "react-router-dom";
import web from "../src/images/one44.jpg";
import Commom from "./Commom";
const Home=()=>{
    return (
        <>
       <Commom name='Get the best courses with our consultancy  '  
       imgsrc={web} 
       visit="/service" 
       btname="Get Started"/>
        </>
    );
};
export default Home;