import React, { Component } from 'react'
import './VehicleInfo.css'

export class AdditionalVehicleInfo extends Component {

    state = {
        id: this.props.vehicle.id,
        carInfo: this.props.vehicle.carInfo,
        years: this.props.vehicle.years,
        year:this.props.vehicle.year,
        makes: this.props.vehicle.makes,
        make: this.props.vehicle.make,
        models: this.props.vehicle.models,
        model: this.props.vehicle.model,
        image: this.props.vehicle.image,
        notFilled: this.props.vehicle.notFilled,
        editClose: this.props.vehicle.editClose,
        additionalInfovehicle:{
            question1: {
                one: this.props.vehicle.additionalInfovehicle.question1.one,
                two: this.props.vehicle.additionalInfovehicle.question1.two,
                three: this.props.vehicle.additionalInfovehicle.question1.three
            },
            question2: {
                one: this.props.vehicle.additionalInfovehicle.question2.one,
                two: this.props.vehicle.additionalInfovehicle.question2.two,
                three: this.props.vehicle.additionalInfovehicle.question2.three,
                four: this.props.vehicle.additionalInfovehicle.question2.four
            },
            question3: this.props.vehicle.additionalInfovehicle.question3,
            notFilled: this.props.vehicle.additionalInfovehicle.notFilled
        },
        localGovArs: '',
        loading: false
    }
    toggleButton =(e)=>{
        const additionalInfovehicle = this.state.additionalInfovehicle;
        const question = additionalInfovehicle[e.target.name];
        Object.keys(question).forEach(element => {
            question[element] = false
        });

        //falsify state
        this.setState({ additionalInfovehicle });

        //switch
        question[e.target.value] = !question[e.target.value]

        //update state
        this.setState({ additionalInfovehicle });
        console.log(additionalInfovehicle);
        
                
    }

    onSubmitClick=e=>{
        e.preventDefault();
        this.props.handleSubmit(this.state);
        this.props.addVehicle();
        this.props.proceed();
        this.props.nextStep();
      }

    chooseAnswer = (e) => {
        this.toggleButton(e);
        this.allFilled();
    }

    allFilled =()=>{
        if(this.q1() && this.q2() && this.q3()){
            const additionalInfovehicle = this.state.additionalInfovehicle;
            additionalInfovehicle.notFilled = false;
            this.setState({
                additionalInfovehicle
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
        Object.values(this.state.additionalInfovehicle.question1).forEach(element => {
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
        Object.values(this.state.additionalInfovehicle.question2).forEach(element => {
            if(element === true){
                count += 1
            }
        });
        if(count !== 0){
            return true
        }
    }

    q3 = ()=>{
        if(this.state.additionalInfovehicle.question3 !==''){
            return true;
        }
    }
    componentDidMount(){
        window.scrollTo(0, 0);
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
    handleEditSubmit = () => {
        this.props.onEditSubmit(this.state)
    };

    onChange=(e)=>{
        const additionalInfovehicle = this.state.additionalInfovehicle;
        additionalInfovehicle[e.target.name] = e.target.value;
        this.setState({
            additionalInfovehicle
        });
        if(e.keyCode === 8){
            if(!document.getElementById('address-input').value.includes(',')){
                let notFilled = this.state.additionalInfovehicle.notFilled;
                notFilled = true
                this.setState({
                    notFilled
                })
            }
        }
    };

    selectLga = (e) => {
        const selectedLga = e.target.value;
        let q3 = this.state.additionalInfovehicle.question3;
        let correctLocation = q3.substr(0, q3.indexOf(',')+1)
        let state = correctLocation+selectedLga;
        
        document.getElementById('address-input').value = state;
        
        const additionalInfovehicle = this.state.additionalInfovehicle;
        additionalInfovehicle.question3 = state;
        
        this.setState({
            additionalInfovehicle,
            localGovArs: ''
        })

        this.allFilled();
    }

    getUserLocation = (e) =>{
        if(e.keyCode === 188 && e.target.value.split(',').length-1 === 1){
            this.setState({
                loading: true
            })
            if(e.target.value.length<5){
                //Enter a valid state err
            }else{
                let state = e.target.value.substr(0, e.target.value.length-1);
                fetch(`http://locationsng-api.herokuapp.com/api/v1/states/${state}/lgas`)
                .then(response => response.json())
                .then(
                    lgas => {
                        this.setState({
                            loading: false
                        })
                        let localGovArs = lgas.map(lga=>{
                            return (
                                <button type="button" value={lga} onClick={this.selectLga}>{lga}</button>
                            )
                        });
                        this.setState({
                            localGovArs 
                        })
                    }
                ).catch(e=>{
                    this.setState({
                        localGovArs: <p>This state does not exist</p> 
                    })
                    
                })
            }
        }else if(e.keyCode === 8){
            if(e.target.value.includes(',')){
                let location = e.target.value;
                let deleteLgaStart = location.indexOf(',')
                e.target.value= location.substr(0, deleteLgaStart)
                console.log(this.state.additionalInfovehicle.notFilled)    
                   
            }else{
                e.target.value = '';
                this.setState({
                    localGovArs: ''
                })
            }
        }else{
            return
        }
    }

    displayButtons = ()=> {
        if (!this.state.editClose) {
            return(
              <button type="button" id="navigationNext" disabled={this.state.additionalInfovehicle.notFilled} className="save-and-continue" onClick={this.handleEditSubmit}>Submit Change</button>
            );
          } 
    }
    
    render(){

        return(
            <div>
                <h2>Tell us more about your vehicle</h2>
                <h5>If you have more than one car, you can add it after this one.</h5>
                <form className="add-form-style" onSubmit={this.onSubmitClick}>
                    <div id="centered">
                    <div className="first-additional-question">
                        <img src={require("./AdditionalVehicleImages/wallet.png")} alt="wallet"/>
                        <h3>Do you own or lease the car?</h3>
                        <h6>If you finance or lease your car, your lender may require 'full coverage'.</h6>
                        <button type="button" className={this.state.additionalInfovehicle.question1.one ? "additional-answer-button1" : "additional-answer-button"} name="question1" value="one" onClick={this.chooseAnswer}>Own</button>
                        <button type="button" className={this.state.additionalInfovehicle.question1.two ? "additional-answer-button1" : "additional-answer-button"} name="question1" value="two" onClick={this.chooseAnswer}>Own-Making payments</button>
                        <button type="button" className={this.state.additionalInfovehicle.question1.three ? "additional-answer-button1" : "additional-answer-button"} name="question1" value="three" onClick={this.chooseAnswer}>Lease</button>
                    </div>
                    <div className="additional-question">
                        <img src={require("./AdditionalVehicleImages/tyre.png")} alt="wallet"/>
                        <h3>What do you use the car for?</h3>
                        <h6>If you drive for a ridesharing service like Uber or Lyft, please choose Business/Rideshare.</h6>
                        <button type="button" className={this.state.additionalInfovehicle.question2.one ? "additional-answer-button1" : "additional-answer-button"} name="question2" value="one" onClick={this.chooseAnswer}>Personal/Commuting</button>
                        <button type="button" className={this.state.additionalInfovehicle.question2.two ? "additional-answer-button1" : "additional-answer-button"} name="question2" value="two" onClick={this.chooseAnswer}>Pleasure</button>
                        <button type="button" className={this.state.additionalInfovehicle.question2.three ? "additional-answer-button1" : "additional-answer-button"} name="question2" value="three" onClick={this.chooseAnswer}>Farm</button>
                        <button type="button" className={this.state.additionalInfovehicle.question2.four ? "additional-answer-button1" : "additional-answer-button"} name="question2" value="four" onClick={this.chooseAnswer}>Business/Rideshare</button>
                    </div>
                    <div className="additional-question">
                        <img src={require("./AdditionalVehicleImages/garage.png")} alt="wallet"/>
                        <h3>What local government do you park you vehicle?</h3>
                        <h6>This is probably your local government of residence(State, Local Government Area)</h6>
                        <input type="text" id="address-input" autocomplete="off" className="input" name="question3" value={this.state.additionalInfovehicle.question3} onKeyUp={this.getUserLocation} onChange={this.onChange} placeholder="Put a comma after your state and click your LGA"/>
                        <div id="local-government-suggestion">{this.state.localGovArs}</div>
                        <div hidden={!this.state.loading}>Loading local governments...</div>
                    </div>
                </div>
                {this.displayButtons()}
                <button id="navigationNext" className="save-and-continue" type='submit' hidden={this.state.additionalInfovehicle.notFilled || !this.state.editClose}>Save and Continue</button>
                </form>

                <button id="navigationPrevious" type='button' onClick={this.props.finalStep} hidden={!this.props.final}>Back to get quote page</button>
                <button id="navigationPrevious" type='button' onClick={this.props.noNewEntityStep} hidden={(this.props.final===false || this.props.final===true) && this.props.newEntity===false}>Back to vehicle summary page</button>
                <button id="navigationPrevious" hidden={this.props.final=== true} onClick={this.props.previousStep} >Previous</button>
            </div>
        );
    }

}

export default AdditionalVehicleInfo;