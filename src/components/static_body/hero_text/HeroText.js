import React, { Component } from 'react';
import './HeroText.css';
import { Link } from 'react-router-dom';


class HeroText extends Component {

    state = {
        formOpen: true
    }
    getQuote = () =>{

        // this.props.formOpen(this.state)
    }

    render(){
        return(
                <div id="hero-text">
                    <h1>Insurance for everyone</h1>
                    <h4>Finding the best insurance for you...</h4>
                    <Link to="/form"><button type="button" onClick={this.getQuote} name="button">Get Quote</button></Link>
                    <div id="side-content">
                        <img src={require('./img/search.png')} alt="search"/>
                        <div id="side-text">Free Auto Insurance Quotes<br/> in minutes</div>
                    </div>
                </div>
                
        );
    }
};

export default HeroText;