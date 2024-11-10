import React, {useState, useEffect} from 'react';
import { HashRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import { SpeedInsights } from '@vercel/speed-insights/react';

// components
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import DisclaimerCat from './components/DisclaimerCat';


const App = () => {

  return (
    <HashRouter>
      <ScrollToTop />
      <NavBar/>
      <DisclaimerCat/>
      <Footer/>
      <SpeedInsights/>
    </HashRouter>
  )
}

export default App
