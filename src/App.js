import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';

import './App.css';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Experience></Experience>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
