import React, { Component } from 'react';
import './HeroText.css';


class HeroText extends Component {

    state = {
        formOpen: true
    }
    getQuote = () =>{

        this.props.formOpen(this.state)
    }

    render(){
        return(
                <div id="hero-text">
                    <h1>Insurance for everyone</h1>
                    <h4>Finding the best insurance for you...</h4>
                    <button type="button" onClick={this.getQuote} name="button">Get Quote</button>
                </div>
        );
    }
};

export default HeroText;