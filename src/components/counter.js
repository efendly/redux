import React, { useState } from "react";
import Decrement from "./decrement";
import Increment from "./increment";
import "./counter.css";
import { useSelector } from "react-redux";

const Counter = () => {
   
    const count=useSelector(store=>store.counter);
    
    return (
        <div className="Counter">
            <Decrement />
            <h1>{count}</h1>
            <Increment/>
        </div>
    )
}
export default Counter;