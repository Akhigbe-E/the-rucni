import React, { Component } from 'react';

import MovingBody from './components/moving_body/MovingBody';
import Navbar from './components/navigation_bar/Navbar';
import StaticBody from './components/static_body/StaticBody';

import './App.css'

class App extends Component{

  render(){
    return(
      <div id="container">
        <div id="header">
          <Navbar />
          <MovingBody />
        </div>

        <div id="section2">
          <StaticBody/>
        </div>
        <div id="section3">

        </div>
      </div>
    );
  }
}

export default App;
