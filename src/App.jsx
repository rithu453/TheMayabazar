import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sum from './pages/Sum';
import Compare from './pages/Compare';
import Sumresult from './pages/Sumresult'; 
import Nav from './pages/Nav';
import Compres from './pages/CompareResult';
import ComparePrices from './pages/Pricecomp';

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