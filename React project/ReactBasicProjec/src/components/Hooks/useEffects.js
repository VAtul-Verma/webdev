import React,{useState,useEffect} from "react";
import "./style.css";

const UseEffect = () => {
 const [count,setcount]=useState(0);
 useEffect(()=>{
    document.title=`Chat(${count})`;
 })

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
       
      </div>
    </>
  );
};

export default UseEffect;