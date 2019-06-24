import React, { Component } from 'react';
import '../../vehicle_info/VehicleInfo.css';
import './AdditionalDriverInfo.css';

class AccidentsClaims extends Component {

    state = {
        question: {
            one: this.props.accidentClaims.question.one,
            two: this.props.accidentClaims.question.two,
        },
        category: {
            myFault: this.props.accidentClaims.category.myFault,
            notMyFault: this.props.accidentClaims.category.notMyFault,
            claims: this.props.accidentClaims.category.claims
        }
         
    }

    chooseAnswer = (e) => {
        this.toggleButton(e);
    }

    toggleButton =(e)=>{
        const question = this.state[e.target.name];
        Object.keys(question).forEach(element => {
            question[element] = false
        });

        //falsify state
        this.setState({ question });

        //switch
        question[e.target.value] = !question[e.target.value]

        //update state
        this.setState({ question });
        console.log(this.state);
        
                
    }

    increment = (e) => {
        const category = this.state.category;
        category[e.target.value] +=1;
        this.setState({
            category
        });
        // this.sync()
    }
    decrement = (e) => {
        const category = this.state.category;
        category[e.target.value] -=1;
        this.setState({
            category
        });
        // this.sync()
    }
    // sync = () => {
    //     if(this.state.category.myFault+this.state.category.notMyFault > this.state.category.claims
    //         || this.state.category.myFault+this.state.category.notMyFault < this.state.category.claims){
    //             this.setState({
    //                 claims: this.state.category.myFault+this.state.category.notMyFault
    //             })
    //     }
    // }

    render(){
        console.log(this.state.question.one);
        
        return(
            <div>
            
                <div id="numberOfAccidents" hidden={(this.props.yes === false && this.props.no === false) || this.props.no === true}><br/>
                    <h3>How many of each?</h3>
                    <h5>Accidents that were my fault</h5>
                        <div className="control">
                            <button type="button" disabled={ this.state.category.myFault === 0 } value="myFault" onClick={this.decrement}>-</button> 
                            <div className="number">{ this.state.category.myFault }</div>
                            <button type="button" value="myFault" onClick={this.increment}>+</button>
                        </div>   
                    
                    <h5>Accidents that were not my fault </h5>
                    <div className="control">
                        <button type="button" disabled={ this.state.category.notMyFault === 0 } value="notMyFault" onClick={this.decrement}>-</button> 
                        <div className="number">{ this.state.category.notMyFault }</div>
                        <button type="button" value="notMyFault" onClick={this.increment}>+</button>
                    </div>

                    <h5>Claims (weather, vandalism, uninsured motorist damage, etc.)</h5>
                    <div className="control">
                        <button type="button" disabled={ this.state.category.claims === 0} value="claims" onClick={this.decrement}>-</button> 
                        <div className="number">{ this.state.category.claims }</div>
                        <button type="button" disabled={this.state.category.claims >= (this.state.category.myFault+this.state.category.notMyFault)} value="claims" onClick={this.increment}>+</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default AccidentsClaims;