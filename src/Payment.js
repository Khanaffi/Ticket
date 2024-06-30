
    import React from "react";
    import {   useLocation } from 'react-router-dom';
    import img from "./right-arrow.png";
    import Cards from "./Cards.js";
    import Ticket from "./Ticket.js";
 function Payment() {
    const location = useLocation();
    console.log(location.state);
  const { from, to, price } = location.state || { from: "", to: "", price: "" };
  <Ticket fr={from} to={to} price={price} />


  return (<div className="paymentpg">
    <div className="paymentdiv">
    
      <p className="item"> {from}  <img src={img} alt="img" width='20px' />  {to}</p>
     
      <h2>{price}</h2>
    </div>
    <ul className="payment-options">
    <li>UPI</li>
    <li>Card</li>
    <li>Net Banking</li>
  </ul>
  <div id="cardsection">
           <Cards fr={from} to={to} price={price} /> </div>
</div>
  );
    
}
export default Payment;