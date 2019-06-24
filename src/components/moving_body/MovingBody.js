import React, { Component } from 'react';

import Form from './form/Form';
// import HeroText from './hero_text/HeroText';


import './form/Form.css';

class MovingBody extends Component {

    // state = {
    //     formOpen: false
    // };
    // getQuote = (input) => {
    //     this.setState({
    //         formOpen: input.formOpen
    //     })
    // }
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    // showCurrentBody=()=>{
    //     if(this.state.formOpen){
    //         return(
    //             <Form/>
    //         ) 
    //     }else return <HeroText formOpen={this.getQuote}/>
    // };

    render(){
        return(
            <div id="header">
                <Form/>
                {/* {this.showCurrentBody()} */}
            </div>
        );
    }
};

export default MovingBody;