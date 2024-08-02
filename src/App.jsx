import React, {useState, useEffect} from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';

// components
import NavBar from './components/NavBar';
import Footer from './components/Footer';


const App = () => {

  return (
    <HashRouter>
      <NavBar/>
      <Footer/>
    </HashRouter>
  )
}

export default App
