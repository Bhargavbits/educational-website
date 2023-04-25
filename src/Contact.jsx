import React from "react";

import { useState } from "react";

const Contact=()=>{
    const[data,setData]=useState({
 fullname:'',
 email:'',
 phone:'',
    });
    const InputEvent=(event)=>{
        const{name,value}=event.target;
        setData((preVal)=>{
            return {
                ...preVal,
                [name]:value,
            }
        })
    }
    const formSubmit=(e)=>{
        e.preventDefault()
        alert(`your data has been submitted and you will soon get a call and consultuncy to provide you best corses .Your phone no:${data.phone}`);

    }
return(
    <>
        <div className="my-5">
        <h1 className="text-center">Fill details</h1>
        </div>
        <div className="container contact_div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
            
            <form onSubmit={formSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Name</label>
    <input 
    type="text" 
    className="form-control"
     id="exampleInputEmail1" aria-describedby="emailHelp" 
     name="fullname"
     value={data.fullname}
     onChange={InputEvent}
     placeholder="Enter your name"/>
   
  </div>
  <br/>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
    name="email"
    value={data.email}
    onChange={InputEvent}
    placeholder="Enter email"/>
    
  </div>
  <br/>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Phone Number</label>
    <input type="number" className="form-control" id="exampleInputPassword1" 
    name="phone"
    value={data.phone}
    onChange={InputEvent}
    placeholder="enter your number"/>
  </div>
  <br/><center>
  <button type="submit" className="btn btn-outline-primary ">Submit</button></center>
</form>

           

            </div>
        </div>

        </div>
    </>
)
    return <h1>contact please</h1>;
    
};
export default Contact;