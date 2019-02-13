import React, { Component } from 'react';

import Form from './form/Form';
import HeroText from './hero_text/HeroText';

class MovingBody extends Component {

    state = {
        formOpen: false
    };
    getQuote = (input) => {
        this.setState({
            formOpen: input.formOpen
        })
    }

    showCurrentBody=()=>{
        if(this.state.formOpen){
            return <Form/>
        }else return <HeroText formOpen={this.getQuote}/>
    };

    render(){
        return(
            <div id='movingBody'>

                {this.showCurrentBody()}

            </div>
        );
    }
};

export default MovingBody;