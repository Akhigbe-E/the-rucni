import React, { Component } from 'react';
import './StaticBody.css';
import HeroText from './hero_text/HeroText'
class StaticBody extends Component{

    render(){
        return(
            <div>
                <HeroText/>
                <div id="section2">
                    <div id="cards">
                    <h2>Why Rucni?</h2>
                        <div className="card">
                            <div className="card-body">
                                <img src={require('./img/easy.png')} alt="saving"/>
                            </div>
                            <div className="card-header">
                                Ease
                            </div>
                            <div className="card-body-lower">
                                We provide you with a hassle free way of getting quotes
                            </div>
                            {/* <div className="card-footer">
                                O
                            </div> */}
                            
                        </div>

                        <div className="card">                          
                            <div className="card-body">
                                <img src={require('./img/saving.png')} alt="saving"/>
                            </div>
                            <div className="card-header">
                                Savings
                            </div>
                            <div className="card-body-lower">
                                Save money by comparing quotes from insurance companies
                            </div>
                            {/* <div className="card-footer">
                                O
                            </div> */}
                            
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <img src={require('./img/fast.png')} alt="saving"/>
                            </div>
                            <div className="card-header">
                                Speed
                            </div>
                            <div className="card-body-lower">
                                Quickly get quotes from different auto insurance companies
                            </div>
                            {/* <div className="card-footer">
                                O
                            </div> */}
                            
                        </div>

                    </div>
                </div>
                <div id="rucni">RUCNI</div>
               <div id="section3">
               <h2 id="whatIsRucni">What we offer</h2>
                <div id="driver-illustrator-image">
                    <img src={require('./img/useLaptop.png')} alt="driver-illustrator"/>
                </div>
                <div id="driver-illustrator-text">
                    <img src={require('./img/tick.png')}/> Easy to use UI <br/>
                    <img src={require('./img/tick.png')}/> Get the auto insurance quotes fast <br/>
                    <img src={require('./img/tick.png')}/> Save money by comparing quotes <br/>
                    <img src={require('./img/tick.png')}/> Direct linkage to the company's site <br/>
                    <img src={require('./img/tick.png')}/> Real time generation of insurance quotes <br/>
                    <button type="submit" id="section-3-button"> Get Quote </button>
                </div>
               </div>
               <div id="section4">
                    Akhigbe Emmanuel
               </div>
            </div>
            
        );
    }
};

export default StaticBody;