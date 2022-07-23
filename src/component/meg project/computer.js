import React from "react";
import Comp from "./megdata/Compdata";
const Computers =()=>{
return(
    <div>
        {Comp.map((item)=>{
            return(
                <>
                <h2>{item.names}</h2>
                        <h2>{item.names1}</h2>
                        <h2>{item.names2}</h2>
                        <h2>{item.description}</h2>
                        <h2>{item.description1}</h2>
                        <h2>{item.description2}</h2>
                        <h4>{item.Price}</h4>
                        <h4>{item.Price1}</h4>
                        <h4>{item.Price2}</h4>
                        <img src={item.image} alt=""/>
                        <img src={item.image1} alt=""/>
                        <img src={item.image2} alt=""/>
                </>
            )
        })}
    </div>
)
}
export default Computers