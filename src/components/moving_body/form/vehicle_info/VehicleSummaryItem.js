import React, { Component } from "react";

class VehicleSummaryItem extends Component {

    handleEditClick = () => {
        this.props.vehicle.editClose = false;
        this.props.vehicle.notFilled = false;
        this.props.editClick(this.props.vehicle)
    }
    handleDeleteClick = () => {
        this.props.deleteClick(this.props.vehicle)
        this.props.proceed();
    }

    render(){
        const { vehicle} = this.props
        return(
            <div>
                <div id="item-id">
                    <li id="summary-list">
                <div id="display-summary">
                    <div id="car-image">
                        <img src={vehicle.image} alt="carimage"/>
                    </div>
                    <h4>{vehicle.year} {vehicle.make}</h4>
                    <h5 id="model-id">{vehicle.model}</h5>
                </div>
                <div id="edit-remove-style">
                    <button onClick={this.handleEditClick}><img src={require('./AdditionalVehicleImages/edit.png')} alt="Edit" /><div>Edit</div></button><button onClick={this.handleDeleteClick}><img src={require('./AdditionalVehicleImages/remove.png')} alt=""/><div>Remove</div></button>
                </div><br/>
                </li><br/>
                </div>
            </div>
        );
    }
}

export default VehicleSummaryItem;
