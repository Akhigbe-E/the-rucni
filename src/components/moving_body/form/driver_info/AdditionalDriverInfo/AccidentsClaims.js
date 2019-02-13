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
                
    }

    increment = (e) => {
        const category = this.state.category;
        category[e.target.value] +=1;
        this.setState({
            category
        })
    }
    decrement = (e) => {
        const category = this.state.category;
        category[e.target.value] -=1;
        this.setState({
            category
        })
    }

    render(){
        return(
            <div className="additional-question">
                <img src={require("./AdditionalDriverInfoImages/accident.png")} alt="wallet"/>
                <h3>Any accidents, tickets, or claims in the past 3 years?</h3>      
                <h6>What should you add here?</h6>
                <button className={this.state.question.one ? "additional-answer-button1" : "additional-answer-button"} name="question" value="one" onClick={this.chooseAnswer}>Yes</button>
                <button className={this.state.question.two ? "additional-answer-button1" : "additional-answer-button"} name="question" value="two" onClick={this.chooseAnswer}>No</button>
            
                <div id="numberOfAccidents" hidden={this.state.question.one === false}><br/>
                    <h3>How many of each?</h3>
                    <h5>Accidents that were my fault</h5>
                        <div className="control">
                            <button disabled={ this.state.category.myFault === 0 } value="myFault" onClick={this.decrement}>-</button> 
                            <div className="number">{ this.state.category.myFault }</div>
                            <button value="myFault" onClick={this.increment}>+</button>
                        </div>   
                    
                    <h5>Accidents that were not my fault </h5>
                    <div className="control">
                        <button disabled={ this.state.category.notMyFault === 0 } value="notMyFault" onClick={this.decrement}>-</button> 
                        <div className="number">{ this.state.category.notMyFault }</div>
                        <button value="notMyFault" onClick={this.increment}>+</button>
                    </div>

                    <h5>Claims Weather, vandalism, uninsured motorist damage, etc.)</h5>
                    <div className="control">
                        <button disabled={ this.state.category.claims === 0 } value="claims" onClick={this.decrement}>-</button> 
                        <div className="number">{ this.state.category.claims }</div>
                        <button value="claims" onClick={this.increment}>+</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default AccidentsClaims;