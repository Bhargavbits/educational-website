
import './App.css';
import 'bootstrap/js/dist/dropdown';
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { Route,Routes } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Service from './Service';
import Navbar from "./Navbar";
const App=()=> {
  const Name=()=>{
    return <h1>Hello ,Whats your Name girl</h1>;
  };
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/" Component={Home}/>
      <Route exact path="/about" Component={About}/> 
      <Route exact path="/contact" Component={Contact}/> 
      <Route exact path="/service" Component={Service}/>
     
      <Route Component={Error}/>
    </Routes>
    
    {/* <About/>
    <Contact/> */}
      </>
  );
}

export default App;
