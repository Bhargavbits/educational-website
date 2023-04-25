import React from "react";
import{NavLink}from "react-router-dom";
import web from "../src/images/one16.jpeg";
import Commom from "./Commom";
const About=()=>{
    return (
        <>
        <Commom name='Welcome to Bits Education ' imgsrc={web} visit="/contact" btname="Contact Now"/>
        
        <br/>
        
        



        </>
    );
};
export default About;