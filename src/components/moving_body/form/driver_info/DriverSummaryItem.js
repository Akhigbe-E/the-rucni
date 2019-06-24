import React, { Component } from "react";

class DriverSummaryItem extends Component {

    handleEditClick = () => {
        this.props.driver.editClose = false;
        this.props.driver.notFilled = false;
        this.props.editClick(this.props.driver)
    }
    handleDeleteClick = () => {
        this.props.deleteClick(this.props.driver.id)
        this.props.proceed();
    }
    driverImage = () =>{
        if(this.props.driver.gender ==='Male'){
            return (<img src={require('./AdditionalDriverInfo/AdditionalDriverInfoImages/maleIcon.png')} alt="carimage"/>)
        }else{
            return (<img src={require('./AdditionalDriverInfo/AdditionalDriverInfoImages/femaleIcon.png')} alt="carimage"/>)
        }
    }
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render(){
        const { driver } = this.props
        
        return(
            <div>
                <div id="item-id">
                    <li id="summary-list">
                <div id="display-summary">
                    <div id="car-image">
                        {this.driverImage()}
                    </div>
                    <h4>{driver.firstName} {driver.lastName}</h4>
                    <h5 id="model-id">{driver.gender}</h5>
                </div>
                <div id="edit-remove-style">
                    <button onClick={this.handleEditClick}><img src={require('./AdditionalDriverInfo/AdditionalDriverInfoImages/edit.png')} alt="Edit" /><div>Edit</div></button>
                    <button onClick={this.handleDeleteClick}><img src={require('./AdditionalDriverInfo/AdditionalDriverInfoImages/remove.png')} alt="Remove"/><div>Remove</div></button>
                </div><br/>
                </li><br/>
                </div>
            </div>
        );
    }
}

export default DriverSummaryItem;
