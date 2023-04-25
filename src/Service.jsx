import React from "react";
import Home from "./Home";
import web from "../src/images/one4.png";
import Card from "./Card";
import Sdata from "./Sdata";
const Service=()=>{
return(
    <>
       <div className="my-5">
        <h1 className="text-center">We provide courses on</h1>

       </div>
       <div className="container-fluid mb-5">
        <div className="row">
        <div className="col-10 mx-auto">
        <div className="row gy-4">
        {
            Sdata.map((val,ind)=>{
                return <Card key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    des={val.des}
                    pet={val.pet}
                />
            })
        }
        
          </div>
        </div>
        </div>
        </div>
    </>
)
    return <h1>contact please</h1>;
    <p>gvghvgh</p>
};
export default Service;