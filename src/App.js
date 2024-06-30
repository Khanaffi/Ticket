// import logo from './logo.svg';
           import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import Payment from './Payment.js';
import Cvv from './Cvv.js';
// import Machine from './Machine.js';
import Ticket from './Ticket.js';

function App(){
  // const navigate = useNavigate();
  return (

<Router>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/payment" element={<Payment />} />
  <Route path="/cvv" element={<Cvv />} />
  <Route path="/mcnn" element={<Ticket />} />


</Routes>
</Router>
); }
export default App;
