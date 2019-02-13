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
    render(){

        return(
            <div>
                <h2>Does this information look correct?</h2>
                <h5>If you have another car, you can add it now.</h5><br/>
                <ul>{this.summary}</ul>
                <div>
                    <button id="add-vehicle-button" onClick={this.props.addVehicle}>+ Add Vehicle</button>
                </div>
                <button onClick={this.props.nextStep} disabled={this.props.notProceed}>Save and Continue</button>
            </div>
            // <div>
            //     <h2>Does this information look correct?</h2>
            //     <h5>If you have another car, you can add it now.</h5><br/>

            //     <div id="display-summary">
            //         <div id="car-image">
            //             <img src={this.state.image} alt="carimage"/>
            //         </div>
            //         <h4>{this.state.year} {this.state.make}</h4>
            //         <h5 id="model-id">{this.state.model}</h5>
            //     </div>
            //     <div id="edit-remove-style">
            //         <button><img src={require('./AdditionalVehicleImages/edit.png')} alt="Edit" /><div>Edit</div></button><button><img src={require('./AdditionalVehicleImages/remove.png')} /><div>Remove</div></button>
            //     </div><br/>
            //     <div>
            //         <button id="add-vehicle-button">+ Add Vehicle</button>
            //     </div>
            //     <button>Save and Continue</button>
            // </div>
        );
    }
};

export default VehicleSummary;