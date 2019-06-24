import React, { Component } from 'react'
import AccidentsClaims from './AccidentsClaims';

import '../../vehicle_info/VehicleInfo.css'

export class AdditionalDriverInfo extends Component {

    state = {
        field: {
            id: this.props.driver.id,
            firstName: this.props.driver.firstName,
            lastName: this.props.driver.lastName,
            birthDate: this.props.driver.birthDate,
            emailAddress: this.props.driver.emailAddress,
            phoneNumber: this.props.driver.phoneNumber,
            gender: this.props.driver.gender,
            notFilled:this.props.driver.notFilled,
            editClose: this.props.driver.editClose,
            additionalInfodriver: {
                question1: {
                    one: this.props.driver.additionalInfodriver.question1.one,
                    two: this.props.driver.additionalInfodriver.question1.two,
                    three: this.props.driver.additionalInfodriver.question1.three
                },
                question2: {
                    one: this.props.driver.additionalInfodriver.question2.one,
                    two: this.props.driver.additionalInfodriver.question2.two,
                    three: this.props.driver.additionalInfodriver.question2.three,
                    four: this.props.driver.additionalInfodriver.question2.four
                },
                question3: {
                    question:{
                        one: this.props.driver.additionalInfodriver.question3.question.one,
                        two: this.props.driver.additionalInfodriver.question3.question.two,
                    },
                    category:{
                        myFault: this.props.driver.additionalInfodriver.question3.category.myFault,
                        notMyFault: this.props.driver.additionalInfodriver.question3.category.notMyFault,
                        claims: this.props.driver.additionalInfodriver.question3.category.claims
                    }
                },
                notFilled: this.props.driver.additionalInfodriver.notFilled
            }
        }
    }
    
    toggleButton =(e)=>{
        const additionalInfodriver = this.state.field.additionalInfodriver;
        const question = additionalInfodriver[e.target.name];

        //change all answers to false
        if(question.question){
            Object.keys(question.question).forEach(element => {
                question.question[element] = false
            });
        }else{
            Object.keys(question).forEach(element => {
                question[element] = false
            });
        }
        
        //falsify state
        this.setState({ additionalInfodriver });

        //switch
        if(question.question !== undefined ){
            question.question[e.target.value] = !question.question[e.target.value];
            console.log(question.question[e.target.value]);
            
        }else{
            question[e.target.value] = !question[e.target.value]
        }

        //update state
        this.setState({ additionalInfodriver });  
        console.log(this.state);
                      
    }

    onSubmitClick=e=>{
        e.preventDefault();
        this.props.handleSubmit(this.state);
        this.props.addDriver();
        this.props.proceed();
        this.props.nextStep();
      }

    chooseAnswer = (e) => {
        this.toggleButton(e);
        this.allFilled();
    }

    // onChange=e=>{
    //     const additionalInfodriver = this.state.field.additionalInfo;
    //     const question = this.state;
    //     question[e.target.name] = e.target.value;
    //     this.setState({
    //       question
    //     });
    // };

    allFilled =()=>{
        if(this.q1() && this.q2() && this.q3()){
            const additionalInfodriver = this.state.field.additionalInfodriver;
            additionalInfodriver.notFilled = false;
            this.setState({
                additionalInfodriver
            })
        }
    }
    q1 = ()=>{
        let count = 0
        Object.values(this.state.field.additionalInfodriver.question1).forEach(element => {
            if(element === true){
                count += 1
            }
        });
        if(count !== 0){
            return true
        }
    }

    q2 = ()=>{
        let count = 0
        Object.values(this.state.field.additionalInfodriver.question2).forEach(element => {
            if(element === true){
                count += 1
            }
        });
        if(count !== 0){
            return true
        }
    }

    q3 = ()=>{
        let count = 0
        Object.values(this.state.field.additionalInfodriver.question3.question).forEach(element => {
            if(element === true){
                count += 1
            }
        });
        if(count !== 0){
            return true
        }
    }

    handleEditSubmit = () => {
        this.props.onEditSubmit(this.state)
    }
    
    displayButtons = ()=> {
        if (!this.state.field.editClose) {
            return(
              <button type="button" className="save-and-continue" id="navigationNext" disabled={this.state.field.additionalInfodriver.notFilled} onClick={this.handleEditSubmit}>Submit Change</button>
            );
          } 
    }

    render(){
        return(
            <div>
                <h2>Please tell us a little about yourself.</h2>
                <h5>Many insurance companies require certain information to provide accurate discounts and quotes.</h5>
                <form className="add-form-style" onSubmit={this.onSubmitClick}>
                    <div id="centered">
                    <div className="first-additional-question">
                        <img src={require("./AdditionalDriverInfoImages/ring.png")} alt="ring"/>
                        <h3>What is your marital status?</h3>
                        <button type="button" className={this.state.field.additionalInfodriver.question1.one ? "additional-answer-button1" : "additional-answer-button"} name="question1" value="one" onClick={this.chooseAnswer}>Single</button>
                        <button type="button" className={this.state.field.additionalInfodriver.question1.two ? "additional-answer-button1" : "additional-answer-button"} name="question1" value="two" onClick={this.chooseAnswer}>Married</button>
                        <button type="button" className={this.state.field.additionalInfodriver.question1.three ? "additional-answer-button1" : "additional-answer-button"} name="question1" value="three" onClick={this.chooseAnswer}>Divorced</button>
                        <button type="button" className={this.state.field.additionalInfodriver.question1.four ? "additional-answer-button1" : "additional-answer-button"} name="question1" value="four" onClick={this.chooseAnswer}>Widowed</button>
                    </div>
                    <div className="additional-question">
                        <img src={require("./AdditionalDriverInfoImages/home.png")} alt="home"/>
                        <h3>Do you own or rent a home?</h3>
                        <h6>If you live with a family member or do not have a lease with your name on it, please answer Other.</h6>
                        <button type="button" className={this.state.field.additionalInfodriver.question2.one ? "additional-answer-button1" : "additional-answer-button"} name="question2" value="one" onClick={this.chooseAnswer}>Own house</button>
                        <button type="button" className={this.state.field.additionalInfodriver.question2.two ? "additional-answer-button1" : "additional-answer-button"} name="question2" value="two" onClick={this.chooseAnswer}>Rent flat</button>
                        <button type="button" className={this.state.field.additionalInfodriver.question2.three ? "additional-answer-button1" : "additional-answer-button"} name="question2" value="three" onClick={this.chooseAnswer}>Rent house</button>
                        <button type="button" className={this.state.field.additionalInfodriver.question2.four ? "additional-answer-button1" : "additional-answer-button"} name="question2" value="four" onClick={this.chooseAnswer}>Other</button>
                    </div>
                    <div className="additional-question">
                    <img src={require("./AdditionalDriverInfoImages/accident.png")} alt="wallet"/>
                        <h3>Any accidents, tickets, or claims in the past 3 years?</h3>      
                        <h6>What should you add here?</h6>
                        <button type="button" className={this.state.field.additionalInfodriver.question3.question.one ? "additional-answer-button1" : "additional-answer-button"} name="question3" value="one" onClick={this.chooseAnswer}>Yes</button>
                        <button type="button" className={this.state.field.additionalInfodriver.question3.question.two ? "additional-answer-button1" : "additional-answer-button"} name="question3" value="two" onClick={this.chooseAnswer}>No</button>
                        <AccidentsClaims 
                            chooseAnswer = {this.chooseAnswer}
                            yes={this.state.field.additionalInfodriver.question3.question.one} 
                            no={this.state.field.additionalInfodriver.question3.question.two}
                            accidentClaims ={this.state.field.additionalInfodriver.question3}
                        />
                    </div>
                </div>
                <button type='submit' id="navigationNext" className="save-and-continue" hidden={this.state.field.additionalInfodriver.notFilled || !this.state.field.editClose}>Save and Continue</button>
                {this.displayButtons()}
                </form>
                <button id="navigationPrevious" type='button' onClick={this.props.finalStep} hidden={!this.props.final}>Go back to get quote</button>
                <button id="navigationPrevious" type='button' onClick={this.props.noNewEntityStep} hidden={(this.props.final===false || this.props.final===true) && this.props.newEntity===false}>Go back to driver summary</button>
                <button id="navigationPrevious" hidden={this.props.final === true} onClick={this.props.previousStep} >Previous</button>
            </div>
        );
    }

}

export default AdditionalDriverInfo;