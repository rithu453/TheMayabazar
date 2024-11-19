import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Sum from './pages/Sum';
import Compare from './pages/Compare';
import Sumresult from './pages/Sumresult'; 
import Nav from './pages/Nav';
import Compres from './pages/CompareResult';
import ComparePrices from './pages/Pricecomp';
import Load from './pages/Load';

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

function Layout() {
  const loc = useLocation();

  return (
    <>
      {/*  Navbar based on pathname */}
      {loc.pathname !== '/' && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summarize" element={<Sum />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/sumresult" element={<Sumresult />} />
        <Route path="/compres" element={<Compres />} />
        <Route path="/pricecomp" element={<ComparePrices />} />
        <Route path="/load" element={<Load />} />
      </Routes>
    </>
  );
}

export default App;
