import React, { Component } from 'react';
import '../vehicle_info/VehicleInfo.css'

import DriverSummaryItem from './DriverSummaryItem';

class DriverSummary extends Component {

    uniqueArray = [...new Set(this.props.drivers)];
    summary = this.uniqueArray.map((driver)=>{
        
        return(
            <DriverSummaryItem 
                    proceed = {this.props.proceed}
                    notProceed = {this.props.notProceed}
                    driver = { driver }
                    editClick = {this.props.editClick}
                    deleteClick = { this.props.deleteClick }
            /> 
        );   
    }) 
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    displayButton = () => {
        if(this.props.final) {
            return(
                <button className="save-and-continue" onClick={this.props.finalStep} disabled={this.props.notProceed}>Get Quote</button>
            )
        }else{
            return(
                <button className="save-and-continue" onClick={this.props.nextStep} disabled={this.props.notProceed}>Save and Continue</button>
            )
        }
    }
    render(){
        return(
            <div>
                <h2>Does this information look correct?</h2>
                <h5>If you plan to have other household members of driving age on your policy, you can add them now.</h5><br/>
                <ul>{this.summary}</ul>
                <div>
                    <button id="add-vehicle-button" onClick={this.props.addDriver}>+ Add Driver</button>
                </div>
                {this.displayButton()}
            </div>
            
        );
    }
};

export default DriverSummary;