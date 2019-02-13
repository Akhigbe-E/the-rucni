import React, { Component } from 'react';
import './DriverInfo.css';

export class DriverInfo extends Component {

    state = {
        name: 'driver',
        field: {
            firstName: this.props.driver.firstName,
            lastName: this.props.driver.lastName,
            birthDate: this.props.driver.birthDate,
            emailAddress: this.props.driver.emailAddress,
            phoneNumber: this.props.driver.phoneNumber,
            gender: this.props.driver.gender,
            notFilled: this.props.driver.notFilled
        },
    };
    onChange=e=>{
      const field = this.state.field;
      field[e.target.name] = e.target.value;
      this.setState({
        field
      });
      this.notFilled();
    };

    handleRadioChange=(e)=>{
      const field = this.state.field;
      field.gender = e.target.value;
      this.setState({
        field
      });
      this.notFilled();
    }

    notFilled=()=>{
      let count = 0;
      const field = this.state.field;
      Object.values(this.state.field).forEach(element => {
        if(element === ''){
          count +=1
        }
      });
      if(count === 0){
        field.notFilled = false
        this.setState({
          field
        })
      }
    }

    onSubmitClick=e=>{
      e.preventDefault();
      this.props.handleSubmit(this.state);
      this.props.addDriver()
      
    }

  render() {
    return (
      <div>
        <form onSubmit={ this.onSubmitClick } >
        <h2>Driver Info</h2>
          <div className='centered'>
            <input name='firstName' class="input" type='text' value={ this.state.field.firstName } id="input" placeholder='First Name' onChange={ this.onChange }/><br/>
            <br/>
            <input name='lastName' class="input" type='text' value={this.state.field.lastName} placeholder='Last Name' onChange={ this.onChange }/><br/>
            <br/>
            <input name='birthDate' class="input" type='text' value={ this.state.field.birthDate } id="input" placeholder='Birth Date' onChange={ this.onChange }/><br/>
            <br/>
            <input name='emailAddress' class="input" type='text' value={ this.state.field.emailAddress } id="input" placeholder='Email Address' onChange={ this.onChange }/><br/>
            <br/>
            <input name='phoneNumber' class="input" type='text' value={ this.state.field.phoneNumber } id="input" placeholder='Phone Number' onChange={ this.onChange }/><br/>
            <br/>
            <div>
              <input name='Gender' type='radio' value="Male" checked={this.state.field.gender === "Male"} className="radioButton" onChange={ this.handleRadioChange }/> Male
              <input name='Gender' type='radio' value="Female" checked={this.state.field.gender === "Female"} className="radioButton" onChange={ this.handleRadioChange }/> Female<br/>
            </div>
            
            <br/>
            <input type='submit' hidden={this.state.field.notFilled} value='Save and Continue'/>
          </div>
          
        </form>
        <button id="navigationPrevious" onClick={this.props.previousStep} >Previous</button>
        <button id="navigationNext" hidden={this.state.field.notFilled} onClick={this.props.nextStep} >Next</button>   
      </div>
    );
  }
}

export default DriverInfo
