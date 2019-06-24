import React, { Component } from 'react';

import MovingBody from './components/moving_body/MovingBody';
import Navbar from './components/navigation_bar/Navbar';
import StaticBody from './components/static_body/StaticBody';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom'
import './App.css'

class App extends Component{

  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render(){
    return(
      <Router>
          <div id="container">
            <div id="header">
            <Navbar />
            <Route path="/form" component={MovingBody}/>
            </div>
            <div id="section2">
              <Route path="/" component={StaticBody} exact/>
            </div>  
          </div> 
      </Router>


      // <div id="container">
      //   <div id="header">
      //    
      //     <MovingBody />
      //   </div>

      //   <div id="section2">
      //     <StaticBody/>
      //   </div>
      //   <div id="rucni">RUCNI </div><h3>Finding the best insurance for you...</h3>
      //   <div id="section3">

      //   </div>
      // </div>
    );
  }
}

export default App;
