import React, { Component } from 'react';

import MovingBody from './components/moving_body/MovingBody';
import Navbar from './components/navigation_bar/Navbar';

import './App.css'

class App extends Component{

  render(){
    return(
      <div id="container">
        
        <Navbar />
        <MovingBody />
      </div>
    );
  }
}

export default App;
