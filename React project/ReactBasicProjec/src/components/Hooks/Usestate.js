import React,{useState} from "react";
import "./style.css";

const UseState = () => {
 const [count,setcount]=useState(0);

  return (
    <>
      <div className="center_div">
        <p>{count}</p>
        <div class="button2" onClick={()=>setcount(count+1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          class="button2" onClick={() => count>0 && setcount(count-1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseState;