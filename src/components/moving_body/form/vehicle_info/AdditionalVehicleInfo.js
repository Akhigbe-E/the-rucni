import React, { Component } from 'react'
import './VehicleInfo.css'

export class AdditionalVehicleInfo extends Component {

    state = {
        question1: {
            one: this.props.addInfovehicle.question1.one,
            two: this.props.addInfovehicle.question1.two,
            three: this.props.addInfovehicle.question1.three
        },
        question2: {
            one: this.props.addInfovehicle.question2.one,
            two: this.props.addInfovehicle.question2.two,
            three: this.props.addInfovehicle.question2.three,
            four: this.props.addInfovehicle.question2.four
        },
        question3: this.props.addInfovehicle.question3,
        notFilled: this.props.addInfovehicle.notFilled
    }
    componentDidMount(){
        console.log(this.props.addInfovehicle);
        
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
        this.props.proceed();
        this.props.nextStep();
      }

    chooseAnswer = (e) => {
        this.toggleButton(e);
        this.allFilled();
    }

    allFilled =()=>{
        if(this.q1() && this.q2() && this.q3()){
            this.setState({
                notFilled: false
            })
        }
    }
    //     const question = this.state;
        
    //     let count = 0;
    //     Object.values(this.state.question1).forEach(element => {
    //     if(element === true){
    //       count +=1
    //     }
    //     });       
    //     if(count !== 0){
            
    //         Object.values(this.state.question2).forEach(element => {
    //         if(element === true){
    //           count +=1
    //         }
    //         });

    //         if(count !== 0){
    //             if(question.question3 ===''){
    //                 question.notFilled = false
    //                 this.setState({
    //                     question
    //                 })
    //             }
    //         }
    //    }  

    q1 = ()=>{
        let count = 0
        Object.values(this.state.question1).forEach(element => {
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
        Object.values(this.state.question2).forEach(element => {
            if(element === true){
                count += 1
            }
        });
        if(count !== 0){
            return true
        }
    }

    q3 = ()=>{
        if(this.state.question3 !==''){
            return true;
        }
    }
    
        
        // if(question.question2.one !== true && question.question2.two !== true && question.question2.three !== true && question.question2.four !== true){
        //     question.notFilled = false
        //     this.setState({
        //         question
        //     })
        // }
        // if(question.question1.one === false && question.question1.two === false && question.question1.three === false){
        //     question.notFilled = true
        //     this.setState({
        //         question
        //     })
        // }
    
    onChange=e=>{
        const question = this.state;
        question[e.target.name] = e.target.value;
        this.setState({
          question
        });
        this.allFilled();
    };

    render(){
        console.log(this.state.question1.one);
        
        return(
            <div>
                <h2>Tell us more about your vehicle</h2>
                <h5>If you have more than one car, you can add it after this one.</h5>
                <form onSubmit={this.onSubmitClick}>
                    <div id="centered">
                    <div className="first-additional-question">
                        <img src={require("./AdditionalVehicleImages/wallet.png")} alt="wallet"/>
                        <h3>Do you own or lease the car?</h3>
                        <h6>If you finance or lease your car, your lender may require 'full coverage'.</h6>
                        <button type="button" className={this.state.question1.one ? "additional-answer-button1" : "additional-answer-button"} name="question1" value="one" onClick={this.chooseAnswer}>Own-Paid in full</button>
                        <button type="button" className={this.state.question1.two ? "additional-answer-button1" : "additional-answer-button"} name="question1" value="two" onClick={this.chooseAnswer}>Own-Making payments</button>
                        <button type="button" className={this.state.question1.three ? "additional-answer-button1" : "additional-answer-button"} name="question1" value="three" onClick={this.chooseAnswer}>Lease</button>
                    </div>
                    <div className="additional-question">
                        <img src={require("./AdditionalVehicleImages/tyre.png")} alt="wallet"/>
                        <h3>What do you use the car for?</h3>
                        <h6>If you drive for a ridesharing service like Uber or Lyft, please choose Business/Rideshare.</h6>
                        <button type="button" className={this.state.question2.one ? "additional-answer-button1" : "additional-answer-button"} name="question2" value="one" onClick={this.chooseAnswer}>Personl/Commuting</button>
                        <button type="button" className={this.state.question2.two ? "additional-answer-button1" : "additional-answer-button"} name="question2" value="two" onClick={this.chooseAnswer}>Pleasure</button>
                        <button type="button" className={this.state.question2.three ? "additional-answer-button1" : "additional-answer-button"} name="question2" value="three" onClick={this.chooseAnswer}>Farm</button>
                        <button type="button" className={this.state.question2.four ? "additional-answer-button1" : "additional-answer-button"} name="question2" value="four" onClick={this.chooseAnswer}>Business/Rideshare</button>
                    </div>
                    <div className="additional-question">
                        <img src={require("./AdditionalVehicleImages/garage.png")} alt="wallet"/>
                        <h3>Where do you park your car?</h3>
                        <h6>This is probably your home address.</h6>
                        <input type="text" id="address-input" className="input" name="question3" value={this.state.question3} onChange={this.onChange} placeholder="Example: 123 Elon Mars Street."/>
                    </div>
                </div>
                <button id="navigationNext" type='submit' hidden={this.state.notFilled}>Save and Continue</button>
                </form>
                

                
                <button id="navigationPrevious" onClick={this.props.previousStep} >Previous</button>
            </div>
        );
    }

}

export default AdditionalVehicleInfo;