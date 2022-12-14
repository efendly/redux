import React from "react";
import { useDispatch } from "react-redux";
const Increment=()=>{
    const dispatch=useDispatch();
    const Plus=()=>{
   dispatch({
    type:'Increment',
    payload:2
   })
    }
    return(
        <div>
<button onClick={Plus}>+</button>
        </div>
    )
}
export default Increment;