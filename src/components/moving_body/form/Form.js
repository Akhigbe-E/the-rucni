import React, { Component } from "react";

import uuid from 'uuid/v4';

import DriverInfo from './driver_info/DriverInfo';
import DriverSummary from './driver_info/DriverSummary'
import VehicleInfo from './vehicle_info/VehicleInfo';
import AdditionalVehicleInfo from './vehicle_info/AdditionalVehicleInfo';
import AdditionalDriverInfo from './driver_info/AdditionalDriverInfo/AdditionalDriverInfo'

import './Form.css'
import VehicleSummary from "./vehicle_info/VehicleSummary";

class Form extends Component {

    state={
        step: 1,
        notProceed: false,
        field:{
            vehicles: [],
            vehicle: {
                carInfo: null,
                id: uuid(),
                years: [],
                year:'',
                makes: [],
                make: '',
                models: [],
                model: '',
                image: '',
                notFilled: true,
                editClose: true
            },
            additionalInfovehicle: {
                question1: {
                    one: false,
                    two: false,
                    three: false
                },
                question2: {
                    one: false,
                    two: false,
                    three: false,
                    four: false
                },
                question3: '',
                notFilled: true
            },
            additonalInfodriver: {
                question1: {
                    one: false,
                    two: false,
                    three: false
                },
                question2: {
                    one: false,
                    two: false,
                    three: false,
                    four: false
                },
                question3: {
                    question: {
                        one: false,
                        two: false
                    },
                    category: {
                        myFault: 0,
                        notMyFault: 0,
                        claims: 0
                    }  
                }
            },
            drivers: [],
            driver: {
                firstName: '',
                lastName: '',
                birthDate: '',
                emailAddress: '',
                phoneNumber: '',
                gender: '',
                notFilled:true
            }
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

    // checkRedundantData(input) {
    //     const { firstName, lastName, birthDate, emailAddress, phoneNumber, gender } = input.field;
    //     const { name } = input;
    //     const field = this.state.field;
    //     const stateAttr = field[name];
    //     const found = stateAttr.some((el)=> {
    //       return el.firstName === firstName && el.lastName === lastName && el.birthDate === birthDate && el.emailAddress === emailAddress && el.phoneNumber === phoneNumber && el.gender === gender;
    //     });
    //     if (found) { return true }else{ return false }
    //   }

    // recieves and object from one of the forms, and uses its name to get the states property
    handleDriverInput= input =>{
        // if(!this.checkRedundantData(input)){
            const name = input.name;
            const field = this.state.field;
            // const stateAttr = field[name];
            // field[name] = [...stateAttr, input.field]
            field[name] = input.field;
            this.setState({
                field
            });
            console.log(this.state)
        // }else return
        
    }

    handleVehicleInput= input =>{
        const name = 'vehicle';
        const field = this.state.field;
        // const stateAttr = field[name];
        // field[name] = [...stateAttr, input]
        field[name] = input
        this.setState({
            field
        });
        console.log(this.state)
    }

    newVehicleInput=()=>{
        console.log(this.state)
        const field = this.state.field;
        field.vehicle = {
            id: uuid(),
            carInfo: null,
            years: [],
            year:'',
            makes: [],
            make: '',
            models: [],
            model: '',
            image: '',
            notFilled: true,
            editClose: true
        };
        this.setState({
            field,   
            step: 1
        });
        console.log(this.state.field.vehicle.editClose);
    }
    newDriverInput=()=>{
        const field = this.state.field;
        field.driver= {
            firstName: '',
            lastName: '',
            birthDate: '',
            emailAddress: '',
            phoneNumber: '',
            gender: '',
            notFilled:true
        };
        this.setState({
            field,
            step: 4
        });
    }
    addVehicleInput = ()=> {
        // const name = 'vehicle';
        
        const field = this.state.field;
        const stateAttr = field.vehicles;
        field.vehicles = [...stateAttr, field.vehicle]
        this.setState({
            field,
        });
        
    }
    addDriverInput = ()=> {
        // const name = 'vehicle';
        
        const field = this.state.field;
        const stateAttr = field.drivers;
        field.drivers = [...stateAttr, field.driver]
        this.setState({
            field,
        });
        
    }
    editDriver = (driver) =>{
        const field = this.state.field;
        field.driver = driver
        this.setState({
            field,
            step: 4
        })   
    }

    deleteVehicle = (vehicle) => {
        const id  = vehicle.id;
        const field = this.state.field;
        const filtered = field.vehicles.filter(v => v.id !== id)
        field.vehicles = filtered;
        
        this.setState({
            field
        })
    }

    editSubmit=(attr) => {
        const field = this.state.field;
        const scannedVehicles = field.vehicles.map( vehicle => {
            if(vehicle.id === attr.id){
                vehicle = {  
                    id: attr.id,
                    carInfo:null,
                    years:attr.years,
                    year:attr.year,
                    makes:attr.makes,
                    make: attr.make,
                    models: attr.models,
                    model: attr.model,
                    image: attr.image,
                    notFilled: false
                }
            }
            return vehicle
        })
        field.vehicles = scannedVehicles;
        field.vehicle = attr
        this.setState({
            field,
            step:2 
        })
    };
    editVehicle = (attr) => {
        const field = this.state.field;
        field.vehicle = attr
        console.log(attr);
        
        this.setState({
            field,
            step: 1
        })
    }

    handleAddVehicleInput= input =>{
        const name = 'additionalInfovehicle';
        const field = this.state.field;
        field[name] = input;
        this.setState({
            field
        });
        console.log(this.state.additonalInfovehicle)
    }
    handleAddDriverInput= input =>{
        const name = 'additonalInfodriver';
        const field = this.state.field;
        field[name] = input;
        this.setState({
            field
        });
    }
    proceed = () => {
        console.log(this.state.field.vehicles.length);
        
        if(this.state.field.vehicles.length < 1){
            this.setState({
                notProceed: true
            });
            console.log(this.state.notProceed);
        }else{
            this.setState({
                notProceed: false
            });
        }
    }


    render(){
        const { step } = this.state;
        const { vehicle, vehicles, additionalInfovehicle, additonalInfodriver, driver, drivers} = this.state.field;
        
        
        switch (step) {
            case 1:
            return(
                <div id='form'>
                    <VehicleInfo
                        vehicle = {vehicle}
                        addVehicle = {this.addVehicleInput}
                        nextStep = { this.handleNextClick }
                        handleSubmit={this.handleVehicleInput}
                        onEditSubmit = {this.editSubmit}
                        
                    />
                </div>
            );
            case 2:
            return(
                <div id='form'>
                    <AdditionalVehicleInfo 
                        addInfovehicle = {additionalInfovehicle}
                        nextStep = { this.handleNextClick }
                        previousStep = { this.handlePreviousClick }
                        handleSubmit={this.handleAddVehicleInput}
                        proceed = {this.proceed}
                    />
                </div>
            );
            case 3:
            return(
                <div id='form'>
                    <VehicleSummary 
                        vehicles = { vehicles }
                        editClick = {this.editVehicle}
                        deleteClick = { this.deleteVehicle }
                        addVehicle = {this.newVehicleInput}
                        nextStep = { this.handleNextClick }
                        previousStep = { this.handlePreviousClick }
                        handleSubmit={this.handleAddDriverInput} 
                        notProceed = {this.state.notProceed}
                        proceed = {this.proceed}/>
                </div>
            );
            case 4:
            return(
                <div id='form'>
                    <DriverInfo 
                        driver = {driver}
                        addDriver = {this.addDriverInput}
                        nextStep = { this.handleNextClick }
                        previousStep = { this.handlePreviousClick }
                        handleSubmit={this.handleDriverInput} />
                </div>
            );
            case 5:
            return(
                <div id='form'>
                    <AdditionalDriverInfo 
                        addInfodriver = {additonalInfodriver}
                        nextStep = { this.handleNextClick }
                        previousStep = { this.handlePreviousClick }
                        handleSubmit={this.handleAddDriverInput} />
                </div>
            );
            case 6:
            return(
                <div id='form'>
                    <DriverSummary 
                        driver = {drivers}
                        addDriver = {this.newDriverInput}
                        editDriver = {this.editDriver}
                        nextStep = { this.handleNextClick }
                        previousStep = { this.handlePreviousClick }
                        handleSubmit={this.handleDriverInput} />
                </div>
            );
            
            default:
            
        }
    }
};

export default Form;