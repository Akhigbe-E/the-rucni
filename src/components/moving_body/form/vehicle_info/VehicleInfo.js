import React, { Component } from 'react'
import './VehicleInfo.css'

export class VehicleInfo extends Component {

  state = {
    id: this.props.vehicle.id,
    carInfo: this.props.vehicle.carInfo,
    years: this.props.vehicle.years,
    year:this.props.vehicle.year,
    makes: this.props.vehicle.makes,
    make: this.props.vehicle.make,
    models: this.props.vehicle.models,
    model: this.props.vehicle.model,
    image: this.props.vehicle.image,
    notFilled: this.props.vehicle.notFilled,
    editClose: this.props.vehicle.editClose
  }

  handleEditSubmit = () => {
    this.props.onEditSubmit(this.state)
  }
  
  fetchYearsFromApi = ()=>{
    fetch('http://localhost:8080/api/years')
      .then(response => response.json())
      .then(carInfo => {
        let years  = carInfo[0].result.map((yearDetails)=>{
          return(
            <div id="allign-years" key={yearDetails.year}>
              <li><button type="button" onClick={this.goToMake} value={yearDetails.year}>{yearDetails.year}</button></li>
            </div>
          );
        });
        console.log('from makes');
        this.setState({years})
      });
  }

  fetchMakesFromApi = (year)=>{
    fetch(`http://localhost:8080/api/carapis?filter[where][year]=${year}`)
      .then(response => response.json())
      .then(carInfo => {

        let carMake=[];
        carInfo.forEach(carDetail => {
        carMake.push(carDetail.make)
        });  
        let uniqueCarMake = [...new Set(carMake)]
        
        let makes  = uniqueCarMake.map((make)=>{
          return(
            <div id="allign-years" key={make}>
              <li>
                <button type="button" onClick={this.goToModel} value={make}>
                  <img src={require(`./vehicleBrandImages/${make}.png`)} alt={make}/><br/>
                  {make}
                </button>
              </li>
            </div>
          );
        });

        
      this.setState({
        year,
        years: [],
        makes,
        models: [],
        model: '',
        make: ''
      });
      });  
  }

  fetchModelsFromApi = (make) =>{
    fetch(`http://localhost:8080/api/carapis?filter[where][make]=${make}`)
      .then(response => response.json())
      .then(carInfo => {
        let models  = carInfo.map((carInfo)=>{
          return(
            <div id="allign-years" key={carInfo.model}>
              <li><button type="button" onClick={ this.carDetailSummary } value={carInfo.model}>{carInfo.model}</button></li>
            </div>
          );
        });
      this.setState({
        models,
        model: '',
        makes: [],
        make
      });
      });
  }
  
  
  componentDidMount() {
    if(this.state.year === ''){
      this.fetchYearsFromApi();
    }else return
  }

  carDetailSummary = (e) => {
    const model = e.target.value;
    this.setState({
      model,
      models:[],
      notFilled: false
    });
  }
  

  goToModel = e =>{
    const make = e.target.value || e.target.alt;
    this.setState({
      image: e.target.src || e.target.querySelector('img').src
    });
    console.log(e.target);
    
    this.fetchModelsFromApi(make);
  }

  goToMake = e =>{
    const year = e.target.value;
    this.fetchMakesFromApi(year);
    }

  onSubmitClick=e=>{
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.props.nextStep();
    this.props.addVehicle();    
  }

  closeYearChoice = ()=> {
    this.fetchYearsFromApi();
    this.setState({
      year:'',
      makes: [],
      make: '',
      models: [],
      model:'',
      notFilled: true
    });
  }
  closeMakeChoice = ()=> {
    this.fetchMakesFromApi(this.state.year);    
    this.setState({
      make: '',
      models: [],
      model:'',
      notFilled: true
    });
  }
  closeModelChoice = ()=> {
    this.fetchModelsFromApi(this.state.make);    
    this.setState({
      model:'',
      notFilled: true
    });
  }
  handleEditSubmit = () => {
    this.props.onEditSubmit(this.state)
  }

  displayButtons = () => {
    console.log(this.state.editClose);
    
    if (!this.state.editClose) {
      return(
        <button type="button" id="navigationNext" hidden={this.state.notFilled} onClick={this.handleEditSubmit}>Submit Change</button>
      );
    } 
  }

  render() {
    return (
      <div> 
        <h2>What do you drive?</h2>
        <h5>If you have more than one car, you will be able to add it after this one.</h5>
        <form onSubmit={this.onSubmitClick}>
        
          <div className="choice">
            <div className="choice-selected">
              <div className="choice-selected-name">Year: </div>
              <button type="button">
                <div className="choice-selected-item">{this.state.year}</div>
                <div className="choice-selected-close" onClick={this.closeYearChoice} >X</div>
              </button>
            </div>
            <div className="choice-selected">
              <div className="choice-selected-name">Make: </div>
              <button type="button">
                <div className="choice-selected-item">{this.state.make}</div>
                <div className="choice-selected-close" onClick={this.closeMakeChoice}>X</div>
              </button>
            </div>
            <div className="choice-selected">
              <div className="choice-selected-name">Model: </div>
              <button type="button">
                <div className="choice-selected-item">{this.state.model}</div>
                <div className="choice-selected-close" onClick={this.closeModelChoice} >X</div>
              </button>
            </div>
          </div>
          <h3 hidden={this.state.year !== ''}>Select Year</h3>
          <div id="arrange-years">
            <ul>{this.state.years}</ul>
          </div>

          <h3 hidden={this.state.year ==='' || this.state.make !== ''}>Select Make</h3>
          <div id="arrange-years">
            <ul>{this.state.makes}</ul>
          </div>

          <h3 hidden={this.state.make ==='' || this.state.model !== ''}>Select Model</h3>
          <div id="arrange-years">
            <ul>{this.state.models}</ul>
          </div>
          <button id="navigationNext" type='submit' hidden={this.state.notFilled || !this.state.editClose}>Save and Continue</button>
        </form>
        {this.displayButtons()}
      </div>
    )
  }
}

export default VehicleInfo
