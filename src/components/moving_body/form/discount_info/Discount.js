import React, { Component } from 'react';

import '../vehicle_info/VehicleInfo.css'
import './Discount.css';

class Discount extends Component {

    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render(){

        return(
            <div id="centered">
                <div className="first-additional-question">
                    {/* <img src={require("./AdditionalVehicleImages/wallet.png")} alt="wallet"/> */}
                    <h2>Let's get discount for you!</h2>
                    <h3>Different insurance companies offer different discounts. We’ll dig through ‘em all to help you find savings.</h3>
                
                    <div id="discount-question-list">

                        <div id="discount-question-item">
                            <div id="discount-question"> Are you currently employed full time? </div>
                            <div id="discount-answer"> 
                                No <input type="radio"/>
                            </div>
                            <div id="discount-answer"> 
                                Yes <input type="radio"/>
                            </div>
                        </div><br/>

                        <div id="discount-question-item">
                            <div id="discount-question"> Are you or a family member active military or a veteran? </div>
                            <div id="discount-answer"> 
                                No <input type="radio"/>
                            </div>
                            <div id="discount-answer"> 
                                Yes  <input type="radio"/>
                            </div>
                        </div><br/>

                        <div id="discount-question-item">
                            <div id="discount-question"> Do you plan to pay in full at the start of your policy? </div>
                            <div id="discount-answer"> 
                                No <input type="radio"/>
                            </div>
                            <div id="discount-answer"> 
                                Yes<input type="radio"/>
                            </div>
                        </div>
                    </div>
                    <button onClick={this.props.nextStep} className="additional-answer-button1" >Submit and get Quote</button>
                </div>
            </div>
        );
    }
};

export default Discount;