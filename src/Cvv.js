import React from "react";
import chip from "./chip.png"
import circle from "./circles.png"
import {   useLocation } from 'react-router-dom';
import Machine from "./Machine";


function Cvv(){
  const location = useLocation();
  let  {clas,fr,to,price}= location.state
    const [inputValue, setInputValue] = React.useState('');
    const [dp, setdp] = React.useState('none');
    const [ren, setren] = React.useState('block');
    const [css, setcss] = React.useState(true);
    const [machine, setmachine] = React.useState(false);





console.log(clas);
    let card;
    const handleChange = (event) => {
        if (event.target.value.length <= 3) {
          setInputValue(event.target.value);
          setdp('block')
        }
      };

      const animation=()=>{
console.log('animation');
setren('none')
setcss(false)
setmachine(true)
      }
        if(clas==="card1"){
        card=<div className="card1 c1 an" >
         <div>  <h3 id="cardtitle">ICICI Supreme</h3> 
         <p className="premium">Premium</p></div> 
<img id="chip" src={chip} alt="chip" width="40px" />
            
            <img id='circle' src={circle} alt="circle" width='50px' />
         </div>}else if(clas==='card2'){

            card= <div className="card2 c2 an"  >
          <div> <h3 id="cardtitle">Axis Visa</h3>
          <p className="premium2">New Edition</p></div> 
   <img id="chip2" src={chip} alt="chip" width="40px" />
               
               <img id='circle' src={circle} alt="circle" width='50px' />
            </div>
         } else if(clas==="card3"){
            card=<div className="card3 c3 an"  >
           <div><h3 id="cardtitle">HDFC BANk</h3>  <p className="premium3">BIZ GROW</p></div> 
   <img id="chip3" src={chip} alt="chip" width="50px" />
              
               <img id='circle' src={circle} alt="circle" width='50px' /></div>
         }

        
        
         
return (
    
<div className={css ? 'cvv' : 'cvvcards'}>
    {machine&&<Machine  fr={fr} to={to} price={price}/>}
    {card }
    <div style={{display:ren}} className="cvvarea" >
        <span className="cvvno">Enter CVV Number</span><input maxLength="3"  value={inputValue}
        onChange={handleChange} className="cvvinput" type="number" />
        <button className="cvvbtn" onClick={animation} style={{display:dp}} >Complete Payment</button>

    </div>

        </div>)
  
}
export default Cvv;