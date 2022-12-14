import React from "react";
import { useDispatch } from "react-redux";
const Decrement=()=>{
    const dispatch=useDispatch();
  const Minus=()=>{
dispatch({
    type:'Decrement',
    payload:5
})

  }
    return(
        <div>
      <button onClick={Minus}>-</button>
        </div>
    )
}
export default Decrement;