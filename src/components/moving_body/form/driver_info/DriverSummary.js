import React, { Component } from 'react';
import '../vehicle_info/VehicleInfo.css'

class DriverSummary extends Component {

    state = {
        drivers: [],
        driver: {}
    };

    editItem = (driver) => {
        this.props.editDriver(driver);
        console.log(driver);
        
    }

    uniqueArray = [...new Set(this.props.driver)];
    summary = this.uniqueArray.map((driver)=>{
            return(
                <div id="item-id">
                    <li id="summary-list">
                <div id="display-summary">
                    <div id="car-image">
                        <img src={require('./AdditionalDriverInfo/AdditionalDriverInfoImages/user.png')} alt="driverimage"/>
                    </div>
                    <h4>{driver.firstName} {driver.lastName}</h4>
                    <h5 id="model-id">{driver.gender}</h5>
                </div>
                <div id="edit-remove-style">
                    <button type="button" onClick={this.editItem}><img src={require('./AdditionalDriverInfo/AdditionalDriverInfoImages/edit.png')} alt="Edit" /><div>Edit</div></button><button><img src={require('./AdditionalDriverInfo/AdditionalDriverInfoImages/remove.png')} alt=""/><div>Remove</div></button>
                </div><br/>
                </li><br/>
                </div>
            );
            
        }) 
    render(){

        return(
            <div>
                <h2>Does this information look correct?</h2>
                <h5>If you plan to have other household members of driving age on your policy, you can add them now.</h5><br/>
                <ul>{this.summary}</ul>
                <div>
                    <button id="add-vehicle-button" onClick={this.props.addDriver}>+ Add Driver</button>
                </div>
                <button onClick={this.props.nextStep}>Save and Continue</button>
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

export default DriverSummary;