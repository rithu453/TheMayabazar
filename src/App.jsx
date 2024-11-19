import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './com/Home';
import Sum from './com/Sum';
import Compare from './com/Compare';
import Sumresult from './com/Sumresult'; 
import Nav from './com/Nav';
import Compres from './com/CompareResult';
import ComparePrices from './com/Pricecomp';

function App() {
  return (
    <Router>
       <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summarize" element={<Sum />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/sumresult" element={<Sumresult />} />
        <Route path="/compres" element={<Compres />} />
        <Route path="/pricecomp" element={<ComparePrices />} />


      </Routes>
    </Router>
  );
}

export default App;