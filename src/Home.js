import React , { useState } from "react";
import {  useNavigate  } from 'react-router-dom';
// import Payment from "./Payment.js";

import './App.css';

function Home() {
    const [from ,setfrom]=useState({
      from:"",
      to:""
    });
    const [price,setprice]=useState("");
    const navigate = useNavigate();
    function handleChange() {
      if (from.from !== "" && from.to !== "") {
        setprice("$100");
        navigate('/payment',{ state: { from: from.from, to: from.to, price: "$100" } });
      } else {
        setprice("");
      }
      console.log(from);
    }
    
    return (
      <div >
        <div className='locationdiv'>
          <h1> Trip Location</h1>
   <input type='text' placeholder='FROM ' onChange={(e)=>setfrom((prev) => ({ ...prev, from: e.target.value }))} />
   <input type='text' placeholder='TO'  onChange={(e)=>setfrom((prev) => ({ ...prev, to: e.target.value }))}/>
   <p>{price}</p>
    <button onClick={handleChange}> Submit  </button>
  
        </div>
      </div>
    );
  }
  export default Home;