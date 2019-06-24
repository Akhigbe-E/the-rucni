import React, { Component } from "react";

import uuid from 'uuid/v4';

import DriverInfo from './driver_info/DriverInfo';
import DriverSummary from './driver_info/DriverSummary'
import VehicleInfo from './vehicle_info/VehicleInfo';
import AdditionalVehicleInfo from './vehicle_info/AdditionalVehicleInfo';
import AdditionalDriverInfo from './driver_info/AdditionalDriverInfo/AdditionalDriverInfo';
import Discount from './discount_info/Discount';
import Quote from "./quote/Quote";

import { CSSTransition } from "react-transition-group";

import {mutual, cornerstone, aiico, sovereignTrust, zenith} from "../form/quote_logic/QuoteLogic";

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
                editClose: true,
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
                }
            },
            drivers: [],
            driver: {
                id: uuid(),
                firstName: '',
                lastName: '',
                birthDate: '',
                emailAddress: '',
                phoneNumber: '',
                gender: '',
                notFilled: true,
                editClose: true,
                additionalInfodriver: {
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
                    },
                    notFilled: true
                }
            }
        },
        final: false,
        newEntity: false,
        validated: false
        
    };
    componentDidMount(){
        window.scrollTo(0, 0);
    }

    handleNextClick=()=>{
        this.onNextClick();
    };

    onNextClick=()=>{
       const { step } = this.state;
       if(this.state.newEntity === true && (this.state.step === 3 || this.state.step === 6)){
            this.setState({
                newEntity: false
            })
        }
       this.setState({
           step: step+1
       })
    };

    finalStep = () => {
        let { step } = this.state
        step = 8;
       this.setState({
           step 
       })
    }
    noNewEntityStep = () => {
        let { step } = this.state
        if(step === 1 || step === 2){
            step = 3;
        }else step = 6 
       this.setState({
           step 
       })
    }

    handlePreviousClick=(e)=>{
        this.onPreviousClick();
    };

    onPreviousClick=()=>{
       const { step } = this.state
       if(step === 4){
            this.setState({notProceed: false})
       }
    //    if(step === 5){
    //        console.log(step)
    //     this.setState({
    //         validated: true
    //     })
    //     console.log(this.state)
    // }
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
            field[name] = input.field;
            this.setState({
                field
            });
            console.log(this.state)
        // }else return
        
    }

    handleVehicleInput= input =>{
        console.log(input);
        
        const name = 'vehicle';
        const field = this.state.field;
        field[name] = input
        this.setState({
            field
        });
        console.log(this.state)
    }

    newVehicleInput=()=>{
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
            editClose: true,
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
            }
        };
        this.setState({
            field,   
            step: 1,
        });
        if(this.state.field.vehicles.length > 0){
            this.setState({ newEntity: true})
        }
    }

    newDriverInput=()=>{
        const field = this.state.field;
        field.driver= {
            id: uuid(),
            firstName: '',
            lastName: '',
            birthDate: '',
            emailAddress: '',
            phoneNumber: '',
            gender: '',
            editClose: true,
            notFilled:true,
            additionalInfodriver: {
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
                },
                notFilled: true
            },
        };
        this.setState({
            field,
            step: 4
        });
        if(this.state.field.drivers.length > 0){
            this.setState({ newEntity: true})
        }else this.setState({ newEntity: false})
    }
    
    addVehicleInput = ()=> {
        const field = this.state.field;
        const stateAttr = field.vehicles;
        field.vehicles = [...stateAttr, field.vehicle]
        this.setState({
            field,
        });        
    }

    addDriverInput = ()=> {
        const field = this.state.field;
        const stateAttr = field.drivers;
        field.drivers = [...stateAttr, field.driver]
        this.setState({
            field,
        });
        
    }

    editVehicle = (attr) => {
        const field = this.state.field;
        field.vehicle = attr
        this.setState({
            field,
            step: 1
        })
    }

    editDriver = (attr) =>{
        const field = this.state.field;
        field.driver = attr
        this.setState({
            field,
            step: 4
        })  
        console.log(this.state);
         
    }

    editVehicleSubmit=(attr) => {
        const field = this.state.field;
        
        const scannedVehicles = field.vehicles.map( vehicle => {
            if(vehicle.id === attr.id){
                const { question1, question2, question3, notFilled } = attr.additionalInfovehicle
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
                    notFilled: false,
                    additionalInfovehicle: {
                        question1: {
                            one: question1.one,
                            two: question1.two,
                            three: question1.three
                        },
                        question2: {
                            one: question2.one,
                            two: question2.two,
                            three: question2.three,
                            four: question2.four
                        },
                        question3: question3,
                        notFilled: notFilled
                    }
                }
            }
            return vehicle
        })
        field.vehicles = scannedVehicles;
        field.vehicle = attr
        let step = this.state.step
        if(step === 2) {
            step = 3
        }else {
            step = 2
        }
        this.setState({
            field,
            step
        })
    };

    editDriverSubmit=(attr) => { 
        const field = this.state.field;        
        const scannedDrivers = field.drivers.map( driver => {
            console.log(attr);
            
            console.log(driver.emailAddress);
            if(driver.emailAddress === attr.field.emailAddress){
                
                const { question1, question2, question3 } = attr.field.additionalInfodriver
                
                driver = {
                    firstName: attr.field.firstName,
                    lastName: attr.field.lastName,
                    birthDate: attr.field.birthDate,
                    emailAddress: attr.field.emailAddress,
                    phoneNumber: attr.field.phoneNumber,
                    gender: attr.field.gender,
                    notFilled:true,
                    additionalInfodriver: {
                        question1: {
                            one: question1.one,
                            two: question1.two,
                            three: question1.three
                        },
                        question2: {
                            one: question2.one,
                            two: question2.two,
                            three: question2.three,
                            four: question2.four
                        },
                        question3: {
                            question: {
                                one: question3.question.one,
                                two: question3.question.two
                            },
                            category: {
                                myFault: question3.category.myFault,
                                notMyFault: question3.category.notMyFault,
                                claims: question3.category.claims
                            }  
                        }
                    }
                }
            }
            return driver
        })
        field.drivers = scannedDrivers;
        field.driver = attr.field
        let step = this.state.step
        if(step === 5) {
            step = 6
        }else {
            step = 5
        }
        this.setState({
            field,
            step
        })
        
    };

    deleteVehicle = (id) => {
        // const id  = vehicle.id;
        const field = this.state.field;
        const filtered = field.vehicles.filter(v => v.id !== id)
        field.vehicles = filtered;
        this.setState({
            field
        })
    }
    deleteDriver = (id) => {
        // const id  = vehicle.id;
        const field = this.state.field;
        const filtered = field.drivers.filter(v => v.id !== id)
        field.drivers = filtered;
        this.setState({
            field
        })
    }

    handleAddVehicleInput= input =>{
        // const name = 'vehicle';
        const field = this.state.field;
        field.vehicle = input;
        this.setState({
            field
        });
        console.log(this.state);
        
    }
    
    handleAddDriverInput= input =>{
        const field = this.state.field;
        field.driver = input.field;
        this.setState({
            field
        });
    }

    proceedVehicle = () => {
        console.log(this.state.field.vehicles.length);
        
        if(this.state.field.vehicles.length < 1){
            this.setState({
                notProceed: true,
            });
            //if step is ... go to the info page
        }else{
            this.setState({
                notProceed: false
            });
        }
    }

    proceedDriver = () => {

        if(this.state.field.drivers.length < 1){
            this.setState({
                notProceed: true,
            });
        }else{
            this.setState({
                notProceed: false
            });
        }
    }

    title = () => {
        return(
            <div id="title-band">{this.titleVehicle()}{this.titleDriver()}{/*this.titleQuote()*/}</div>
        )
    }
    
    clickTitleVehicle = () => {
        this.setState({step: 3})
    }

    titleVehicle = () => {
        if (this.state.field.vehicles.length > 0) {
            if (this.state.field.vehicles.length > 1) {
                return <div onClick = {this.clickTitleVehicle} className="title-band-item">{ this.state.field.vehicles.length } Vehicles</div>
            } else {
                return <div onClick = {this.clickTitleVehicle} className="title-band-item">{ this.state.field.vehicles.length } Vehicle</div>
            }
        }
    }

    clickTitleDriver = () => {
        this.setState({step: 6})
    }

    titleDriver = () => {
        if (this.state.field.drivers.length > 0) {
            if (this.state.field.drivers.length > 1) {
                return <div onClick = {this.clickTitleDriver} className="title-band-item">{ this.state.field.drivers.length } Drivers</div> 
            } else {
                return <div onClick = {this.clickTitleDriver} className="title-band-item">{ this.state.field.drivers.length } Driver</div> 
            }
        }
    }
    titleQuote = () => {
        let quotes = mutual(this.state).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        
        return <div className="title-band-item">Premium: N { quotes } per Annum</div> 
    }
    footer = () => {
        // return(
        //     <div id="footer-band">
        //         <div id="footer-band-text">Akhigbe Emmanuel </div>
        //     </div>
        // );
    }
    reachFinal = () => {
        this.setState({
            final: true
        })
    }
    render(){        
        const { step } = this.state;
        let { vehicle, vehicles, driver, drivers} = this.state.field;
                
        switch (step) {
            case 1:
            return(
                <div id='form'>
                    {this.title()}
                    <VehicleInfo
                        vehicle = {vehicle}
                        final = { this.state.final }
                        finalStep = {this.finalStep}
                        newEntity = {this.state.newEntity}
                        noNewEntityStep = {this.noNewEntityStep}
                        // addVehicle = {this.addVehicleInput}
                        nextStep = { this.handleNextClick }
                        handleSubmit={this.handleVehicleInput}
                        onEditSubmit = {this.editVehicleSubmit} 
                    />
                    {this.footer()}
                </div>
            );
            case 2:
            return(
                <div id='form'>
                    {this.title()}
                    <AdditionalVehicleInfo 
                        vehicle = {vehicle}
                        final = { this.state.final }
                        finalStep = {this.finalStep}
                        newEntity = {this.state.newEntity}
                        noNewEntityStep = {this.noNewEntityStep}
                        onEditSubmit = {this.editVehicleSubmit}
                        addVehicle = {this.addVehicleInput}
                        nextStep = { this.handleNextClick }
                        previousStep = { this.handlePreviousClick }
                        handleSubmit={this.handleAddVehicleInput}
                        proceed = {this.proceedVehicle}
                    />
                    {this.footer()}
                </div>
            );
            case 3:
            return(
                <div id='form'>
                    {this.title()}
                    <VehicleSummary 
                        vehicles = { vehicles }
                        final = { this.state.final }
                        finalStep = {this.finalStep}
                        editClick = {this.editVehicle}
                        deleteClick = { this.deleteVehicle }
                        addVehicle = {this.newVehicleInput}
                        nextStep = { this.handleNextClick }
                        previousStep = { this.handlePreviousClick }
                        handleSubmit={this.handleAddDriverInput} 
                        notProceed = {this.state.notProceed}
                        proceed = {this.proceedVehicle}
                    />
                        {this.footer()}
                </div>
            );
            case 4:
            return(
                <div id='form'>
                    {this.title()}
                    <DriverInfo 
                        driver = {driver}
                        final = { this.state.final }
                        finalStep = {this.finalStep}
                        newEntity = {this.state.newEntity}
                        noNewEntityStep = {this.noNewEntityStep}
                        nextStep = { this.handleNextClick }
                        previousStep = { this.handlePreviousClick }
                        handleSubmit={this.handleDriverInput}
                        onEditSubmit = {this.editDriverSubmit} 
                        validated = {this.state.validated}
                    />
                    {this.footer()}
                </div>
            );
            case 5:
            return(
                <div id='form'>
                    {this.title()}
                    <AdditionalDriverInfo 
                        driver = { driver }
                        final = { this.state.final }
                        finalStep = {this.finalStep}
                        newEntity = {this.state.newEntity}
                        noNewEntityStep = {this.noNewEntityStep}
                        nextStep = { this.handleNextClick }
                        addDriver = {this.addDriverInput}
                        previousStep = { this.handlePreviousClick }
                        handleSubmit={this.handleAddDriverInput} 
                        onEditSubmit = {this.editDriverSubmit}
                        proceed = {this.proceedDriver}
                    />
                    {this.footer()}
                </div>
            );
            case 6:
            return(
                <div id='form'>
                    {this.title()}
                    <DriverSummary 
                        drivers = {drivers}
                        final = { this.state.final }
                        finalStep = {this.finalStep}
                        proceed = {this.proceedDriver}
                        notProceed = {this.state.notProceed}
                        addDriver = {this.newDriverInput}
                        editClick = {this.editDriver}
                        deleteClick = {this.deleteDriver}
                        nextStep = { this.handleNextClick }
                        previousStep = { this.handlePreviousClick }
                        handleSubmit={this.handleDriverInput} 
                    />
                    {this.footer()}
                </div>
            );
            case 7:
            return(
                <div id='form'>
                    {this.title()}
                    <Discount 
                        previousStep = { this.handlePreviousClick }
                        nextStep = { this.handleNextClick }
                    />
                    {this.footer()}
                </div>
            );
            case 8:
            return(
                <div id='form'>
                    {this.title()}
                    <Quote 
                        companies = {{mutual,  cornerstone, aiico, sovereignTrust, zenith}}
                        dState = {this.state}
                        reachFinal = {this.reachFinal}
                    />
                    {this.footer()}
                </div>
            );
            
            default:
            
        }
    }
};

export default Form;