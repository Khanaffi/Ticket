import React from "react";
import chip from "./chip.png"
import circle from "./circles.png"
// import Cvv from "./Cvv";
import { useNavigate } from "react-router-dom";
function Cards(props){
const Navigate=useNavigate();
    function Handlechange(e){
        if (e.target.classList.contains('card1') || e.target.classList.contains('card2') || e.target.classList.contains('card3')) {
            console.log('Card clicked:', e.target.classList);
              if (e.target.classList.contains('card1') || e.target.classList.contains('card2') || e.target.classList.contains('card3')) {
      console.log('Card clicked:', e.target.classList.value);
    //   <Cvv class={e.target.classList.value} />
Navigate('/cvv' ,{state:{clas:e.target.classList.value,fr:props.fr,to:props.to,price:props.price}})
    } } }
    return (
        <div className="cards">
         
         <div className="card1" onClick={Handlechange}>
          <div>  <h3 id="cardtitle" >ICICI    Supreme</h3>
          <p className="premium">Premium</p></div> 
<img id="chip" src={chip} alt="chip" width="50px" />
            <img id='circle' src={circle} alt="circle" width='40px' />
         </div>
         <div className="card2"  onClick={Handlechange}>
         <div> <h3 id="cardtitle">Axis Visa</h3>    <p className="premium2">New Edition</p></div>
<img id="chip2" src={chip} alt="chip" width="50px" />
          
            <img id='circle' src={circle} alt="circle" width='40px' />
         </div>
         <div className="card3"  onClick={Handlechange}>
        <div><h3 id="cardtitle">HDFC BANk</h3> <p className="premium3">BIZ GROW</p> </div> 
<img id="chip3" src={chip} alt="chip" width="50px" />
            
            <img id='circle' src={circle} alt="circle" width='40px' /></div>
         
        </div>
    )
}
export default Cards;