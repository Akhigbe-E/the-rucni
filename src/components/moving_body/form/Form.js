import React, { Component } from "react";

import DriverInfo from './driver_info/DriverInfo';
import VehicleInfo from './vehicle_info/VehicleInfo';


import './Form.css'

class Form extends Component {

    state={
        step: 1,
        field:{
            vehicle: [{
                year: '',
                make: '',
                model: '',
            }],
            driver: [{
                firstName: 'Lola',
                lastName: 'Adams',
                birthDate: '',
                emailAddress: '',
                phoneNumber: '',
                gender: ''
            }]
        }
        
    };

    handleNextClick=()=>{
        this.onNextClick();
    };
    onNextClick=()=>{
       const { step } = this.state
       this.setState({
           step: step+1
       })
    };

    handlePreviousClick=(e)=>{
        this.onPreviousClick();
    };
    onPreviousClick=()=>{
       const { step } = this.state
       this.setState({
           step: step-1
       })
    };

    checkRedundantData(input) {
        const { firstName, lastName, birthDate, emailAddress, phoneNumber, gender } = input.field;
        const { name } = input;
        const field = this.state.field;
        const stateAttr = field[name];
        const found = stateAttr.some((el)=> {
          return el.firstName === firstName && el.lastName === lastName && el.birthDate === birthDate && el.emailAddress === emailAddress && el.phoneNumber === phoneNumber && el.gender === gender;
        });
        if (found) { return true }else{ return false }
      }

    // recieves and object from one of the forms, and uses its name to get the states property
    handleInput= input =>{
        if(!this.checkRedundantData(input)){
            const name = input.name;
            const field = this.state.field;
            const stateAttr = field[name];
            field[name] = [...stateAttr, input.field]
            this.setState({
                field
            });
            console.log(this.state)
        }else return
        
    }


    render(){
        const { step } = this.state;
        const { vehicle, driver } = this.state.field;
        switch (step) {
            case 1:
            return(
                <div id='form'>
                    <VehicleInfo
                        nextStep = { this.handleNextClick }
                    />
                </div>
            );
            case 2:
            return(
                <div id='form'>
                    <DriverInfo 
                        driver = {driver[driver.length-1]}
                        nextStep = { this.handleNextClick }
                        previousStep = { this.handlePreviousClick }
                        handleSubmit={this.handleInput} />
                </div>
            );
             
            default:
            return(
                <div id='form'>
                    <VehicleInfo />
                </div>
            );
        }
    }
};

export default Form;