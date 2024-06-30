import React from "react";
import img from "./right-arrow.png";
import barcode from './barcode.png';

function Ticket({data}) {


return <div className="Ticket">
    <div className="billdiv">
    <div className="Ticket1st m"><p className="item1">  {data.fr} <img src={img} alt="img" width='20px' />  {data.to}</p></div>

    <div className="Ticket2nd c">  
       <div className="passanger" > <p>Passanger</p> <p> Seat</p></div>
       <div className="names"> <h3>Aftab khan</h3> <h4>D12</h4></div>
       <div className="terminal">
        <p>Terminal</p> <p>Gate</p> <p> Bus Number</p> </div>

       <div className="terminalbody"> <h4>T6</h4> <h4>20</h4> <h4>BH29167</h4></div>
       <img className="barcode" src={barcode} alt="barcode "></img>
       </div>
          </div>

</div>
    
}

export default Ticket;