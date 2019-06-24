import React, { Component } from 'react';
import './VehicleInfo.css'

import VehicleSummaryItem from './VehicleSummaryItem';

class VehicleSummary extends Component {
    
    summary = this.props.vehicles.map((vehicle)=>{
            return(
                <VehicleSummaryItem 
                    proceed = {this.props.proceed}
                    notProceed = {this.props.notProceed}
                    vehicle = { vehicle }
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
                <h5>If you have another car, you can add it now.</h5><br/>
                <ul>{this.summary}</ul>
                <div>
                    <button id="add-vehicle-button" onClick={this.props.addVehicle}>+ Add Vehicle</button>
                </div>
                {this.displayButton()}
            </div>
            
        );
    }
};

export default VehicleSummary;