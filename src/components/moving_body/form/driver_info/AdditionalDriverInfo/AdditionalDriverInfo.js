import React, { Component } from 'react'
import AccidentsClaims from './AccidentsClaims';

import '../../vehicle_info/VehicleInfo.css'

export class AdditionalDriverInfo extends Component {

    state = {
        question1: {
            one: this.props.addInfodriver.question1.one,
            two: this.props.addInfodriver.question1.two,
            three: this.props.addInfodriver.question1.three
        },
        question2: {
            one: this.props.addInfodriver.question2.one,
            two: this.props.addInfodriver.question2.two,
            three: this.props.addInfodriver.question2.three,
            four: this.props.addInfodriver.question2.four
        },
        question3: {
            question:{
                one: this.props.addInfodriver.question3.question.one,
                two: this.props.addInfodriver.question3.two,
            },
            category:{
                myFault: this.props.addInfodriver.question3.category.myFault,
                notMyFault: this.props.addInfodriver.question3.category.notMyFault,
                claims: this.props.addInfodriver.question3.category.claims
            }
        }
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

    onSubmitClick=e=>{
        e.preventDefault();
        this.props.handleSubmit(this.state);

      }

    chooseAnswer = (e) => {
        this.toggleButton(e);
    }

    onChange=e=>{
        const question = this.state;
        question[e.target.name] = e.target.value;
        this.setState({
          question
        });
    };

    render(){
        return(
            <div>
                <h2>Please tell us a little about yourself.</h2>
                <h5>Many insurance companies require certain information to provide accurate discounts and quotes.</h5>
                <form onSubmit={this.onSubmitClick}>
                    <div id="centered">
                    <div className="first-additional-question">
                        <img src={require("./AdditionalDriverInfoImages/ring.png")} alt="ring"/>
                        <h3>What is your marital status?</h3>
                        <button className={this.state.question1.one ? "additional-answer-button1" : "additional-answer-button"} name="question1" value="one" onClick={this.chooseAnswer}>Single</button>
                        <button className={this.state.question1.two ? "additional-answer-button1" : "additional-answer-button"} name="question1" value="two" onClick={this.chooseAnswer}>Married</button>
                        <button className={this.state.question1.three ? "additional-answer-button1" : "additional-answer-button"} name="question1" value="three" onClick={this.chooseAnswer}>Divorced</button>
                        <button className={this.state.question1.four ? "additional-answer-button1" : "additional-answer-button"} name="question1" value="four" onClick={this.chooseAnswer}>Widowed</button>
                    </div>
                    <div className="additional-question">
                        <img src={require("./AdditionalDriverInfoImages/home.png")} alt="home"/>
                        <h3>Do you own or rent a home?</h3>
                        <h6>If you live with a family member or do not have a lease with your name on it, please answer Other.</h6>
                        <button className={this.state.question2.one ? "additional-answer-button1" : "additional-answer-button"} name="question2" value="one" onClick={this.chooseAnswer}>Own house</button>
                        <button className={this.state.question2.two ? "additional-answer-button1" : "additional-answer-button"} name="question2" value="two" onClick={this.chooseAnswer}>Rent flat</button>
                        <button className={this.state.question2.three ? "additional-answer-button1" : "additional-answer-button"} name="question2" value="three" onClick={this.chooseAnswer}>Rent house</button>
                        <button className={this.state.question2.four ? "additional-answer-button1" : "additional-answer-button"} name="question2" value="four" onClick={this.chooseAnswer}>Other</button>
                    </div>
                    <AccidentsClaims accidentClaims ={this.state.question3}/>
                </div>
                <input type='submit' value='Save Progress'/>
                </form>
                

                
                <button id="navigationPrevious" onClick={this.props.previousStep} >Previous</button>
                <button id="navigationNext" onClick={this.props.nextStep} >Next</button>
            </div>
        );
    }

}

export default AdditionalDriverInfo;