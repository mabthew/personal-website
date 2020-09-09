import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import Resume from './components/Resume/Resume'

import './App.css';
import './Stars.css'


function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <div className="App">
              <Header></Header>
              <About></About>
              <Experience></Experience>
              <Portfolio></Portfolio>
              <Footer></Footer>
            </div>
          </Route>
          <Route path="/resume">
            <Resume></Resume>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
