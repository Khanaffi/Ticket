import React from "react";
import An from "./an.gif";
import dial from "./dial.png";
import Ticket from "./Ticket";
import Fullticket from "./Fullticket";

function Machine(props){
    const [mcn ,setmcn]=React.useState('first');
    const [fullpage ,setfullpage]=React.useState(true);

    let data;

    switch (mcn) {
        case 'first':
          data=   <h2>Insert Card</h2>
            
            break;
            case 'second':
           data=   <img src={An} alt="an" width="100px"></img>
           break;
           case 'sec':
            data=   <h2>Verifying your card</h2>
            break;
            case 'third':
                data= <h2>All Done!</h2>
            break;
            case 'four':
                data=<h2>Printing Your Ticket </h2>
                break;
        default:
          data=   <h2>ERROR 404</h2>
              
        break;

    }


React.useEffect(()=>{

    setTimeout(()=>{
        setmcn("sec")
    },4000);
    setTimeout(()=>{
        setmcn('second')
    },7000);
    setTimeout(()=>{
        setmcn('third')
    },10000);
    setTimeout(()=>{
        setmcn('four')
    },12000);

    setTimeout(()=>{
        setfullpage(false)
    },16000);

},[]);
    return <div> { fullpage? <div id="machine">

<p className="line">- </p>
<div className="screen">
    {data}

</div>
<div className="holder">
<div className="cardaccept">

</div>

<div className="billprint"></div> 
</div>
    <img src={dial} alt="dial" className="dial" />
    <Ticket  data={props}/>
    </div> : <Fullticket  data={props}/> }</div>
    
}
export default Machine;