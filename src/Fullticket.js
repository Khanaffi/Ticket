import React from "react";
import img from "./right-arrow.png";
import barcode from './barcode.png';
import doneicon from './doneicon.png';
import { Link } from "react-router-dom";

function Fullticket({data}) {


return <div className="Ticketfull">
    <img className='doneicon' src={doneicon} alt="doneicon" width='70px'></img>
    <div className="Ticket1st"><p className="item1">  {data.fr} <img src={img} alt="img" width='20px' />  {data.to}</p></div>

    <div className="Ticket2nd">  
       <div className="passanger" > <p>Passanger</p> <p> Seat</p></div>
       <div className="names"> <h3>Aftab khan</h3> <h4>D12</h4></div>
       <div className="terminal">
        <p>Terminal</p> <p>Gate</p> <p> Bus Number</p> </div>

       <div className="terminalbody"> <h4>T6</h4> <h4>20</h4> <h4>BH29167</h4></div>
       <img className="barcode" src={barcode} alt="barcode "></img>
     <button className="btn"> <Link to="/"> Home </Link></button>
       </div>

         

</div>
    
}

export default Fullticket;