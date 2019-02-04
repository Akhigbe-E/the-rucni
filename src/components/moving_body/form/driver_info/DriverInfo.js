import React, { Component } from 'react'

export class DriverInfo extends Component {

    state = {
        name: 'driver',
        field: {
            firstName: this.props.driver.firstName,
            lastName: this.props.driver.lastName,
            birthDate: this.props.driver.birthDate,
            emailAddress: this.props.driver.emailAddress,
            phoneNumber: this.props.driver.phoneNumber,
            gender: this.props.driver.gender
        },
    };

    onChange=e=>{
        const field = this.state.field;
        field[e.target.name] = e.target.value;
        this.setState({
          field
        });
    };

    handleRadioChange=(e)=>{
      const field = this.state.field;
        field.gender = e.target.value;
        this.setState({
          field
        });
    }

    onSubmitClick=e=>{
      e.preventDefault();
      this.props.handleSubmit(this.state);
      this.props.previousStep();
    }

  render() {
    return (
      <div>
        <form onSubmit={ this.onSubmitClick } >
        <h2>Driver Info</h2>
          <input name='firstName' type='text' value={ this.state.field.firstName } id="input" placeholder='First Name' onChange={ this.onChange }/><br/>
          <br/>
          <input name='lastName' type='text' value={this.state.field.lastName} placeholder='Last Name' onChange={ this.onChange }/><br/>
          <br/>
          <input name='birthDate' type='text' value={ this.state.field.birthDate } id="input" placeholder='Birth Date' onChange={ this.onChange }/><br/>
          <br/>
          <input name='emailAddress' type='text' value={ this.state.field.emailAddress } id="input" placeholder='Email Address' onChange={ this.onChange }/><br/>
          <br/>
          <input name='phoneNumber' type='text' value={ this.state.field.phoneNumber } id="input" placeholder='Phone Number' onChange={ this.onChange }/><br/>
          <br/>
          <div>
            <input name='Gender' type='radio' value="Male" checked={this.state.field.gender === "Male"} onChange={ this.handleRadioChange }/> Male<br/>
            <input name='Gender' type='radio' value="Female" checked={this.state.field.gender === "Female"} onChange={ this.handleRadioChange }/> Female<br/>
          </div>
          
          <br/>
          <input type='submit' value='Save and Continue'/>
        </form>
        <button onClick={this.props.previousStep} >Previous</button>
        
      </div>
    );
  }
}

export default DriverInfo
