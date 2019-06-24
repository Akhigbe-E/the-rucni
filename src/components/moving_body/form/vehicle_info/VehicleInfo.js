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
    editClose: this.props.vehicle.editClose,
    additionalInfovehicle: {
      question1: {
          one: this.props.vehicle.additionalInfovehicle.question1.one,
          two: this.props.vehicle.additionalInfovehicle.question1.two,
          three: this.props.vehicle.additionalInfovehicle.question1.three
      },
      question2: {
          one: this.props.vehicle.additionalInfovehicle.question2.one,
          two: this.props.vehicle.additionalInfovehicle.question2.two,
          three: this.props.vehicle.additionalInfovehicle.question2.three,
          four: this.props.vehicle.additionalInfovehicle.question2.four
      },
      question3: this.props.vehicle.additionalInfovehicle.question3,
      notFilled: this.props.vehicle.additionalInfovehicle.notFilled
  },
  notLoading: false
  }

  handleEditSubmit = () => {
    this.props.onEditSubmit(this.state)
  }
  
  fetchYearsFromApi = ()=>{
    //Get years according to make
    //https://www.edmunds.com/api/vehicle/v3/modelYears?pagenum=1&pagesize=all&publicationStates=USED,NEW_USED&fields=year&sortby=makeName&makeName=${this.state.make}&instart_disable_injection=true
    
    fetch('http://localhost:8080/api/years')
      .then(response => response.json())
      .then(carInfo => {
        let years  = carInfo[0].result.map((yearDetails)=>{
          if(yearDetails.year < 1990 || yearDetails.year >2019){
            return
          }else{
            return(
            <div id="allign-years" key={yearDetails.year}>
              <li><button type="button" onClick={this.goToMake} value={yearDetails.year}>{yearDetails.year}</button></li>
            </div>
          );
          }
          
        })
        this.setState({years, notLoading: true})
      });
  }

  fetchMakesFromApi = (year)=>{
    //Get all the makes
    //https://www.edmunds.com/api/vehicle/v3/modelYears?pagenum=1&pagesize=all&publicationStates=USED,NEW_USED&fields=makeName&sortby=year&instart_disable_injection=true
    
    fetch(`https://www.edmunds.com/api/vehicle/v3/modelYears?pagenum=1&pagesize=all&publicationStates=USED,NEW_USED&fields=makeName,makeId&sortby=makeName&year=${year}&instart_disable_injection=true`)
      .then(response => response.json())
      .then(carInfo => {

        // const unique = [...new Set(carInfo.results.map(item => {return ({name:item.makeName, id: item.makeId})}))]
 
        // let carMake=[];
        // unique.forEach(carDetail => {
        // carMake.push(carDetail)
        // });  
        // let uniqueCarMake = [...new Set(carMake)]

        let carInf = carInfo.results
        const map = new Map();
        for (const item of carInf) {
          if(!map.has(item.makeId)){
              map.set(item.makeId, true);    // set any value to Map
              carInf.push({
                  id: item.makeId,
                  name: item.makeName
              });
          }
      }

        let makes  = carInf.map(({name, id})=>{
          if(id === undefined){
            return
          }else{
            return(
            <div id="allign-years" key={id}>
              <li>
                <button type="button" onClick={this.goToModel} name={id} value={name}>
                  {/* <img src={require(`./vehicleBrandImages/${make}.png`)} alt={make}/><br/> */}
                  {name}
                </button>
              </li>
            </div>
          );
          }
          
        });

        
      this.setState({
        year,
        years: [],
        makes,
        models: [],
        model: '',
        make: '',
        notLoading:true
      });
      })
      .catch(e => <p>Kindly refresh the app</p>);  
  }

  fetchModelsFromApi = (name, value) =>{
    //Get model according to make
    //https://www.edmunds.com/api/vehicle/v3/modelYears?pagenum=1&pagesize=all&publicationStates=USED,NEW_USED&fields=modelNiceName&sortby=makeName&makeName=${this.state.make}&instart_disable_injection=true
    
    fetch(`https://www.edmunds.com/api/vehicle/v3/submodels?wrapresult=true&pagenum=1&pagesize=all&publicationStates=USED,NEW_USED&fields=name,styleIds,identifier,modelNiceName&sortby=name&year=${this.state.year}&makeId=${name}&instart_disable_injection=true`)
      .then(response => response.json())
      .then(carInfo => {
        let models  = carInfo.results.map((carInfo)=>{
          return(
            <div id="allign-years" key={carInfo.name}>
              <li><button type="button" onClick={ this.carDetailSummary } value={carInfo.name}>{carInfo.name}</button></li>
            </div>
          );
        });
      this.setState({
        models,
        model: '',
        makes: [],
        make: value,
        notLoading: true
      });
      });
  }
  
  
  componentDidMount() {
    window.scrollTo(0,0);
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
    // const make = e.target.value || e.target.alt;
    // this.setState({
    //   image: e.target.src || e.target.querySelector('img').src
    // });
    // console.log(e.target);
    this.setState({
      notLoading: false
    })

    this.fetchModelsFromApi(e.target.name, e.target.value);
  }

  goToMake = e =>{
    const year = e.target.value;
    this.setState({
      notLoading: false
    })
    this.fetchMakesFromApi(year);
  }

  onSubmitClick=e=>{
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.props.nextStep();    
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
    if (!this.state.editClose) {
      return(
        <button type="button" id="navigationNext" disabled={this.state.notFilled} className="save-and-continue" onClick={this.handleEditSubmit}>Submit Change</button>
      );
    } 
  }

  render() {
    return (
      <div> 
        <h2>Hello, we need your vehicle's details</h2>
        <h5>If you want to, You can add another vehicle after this</h5>
        <form onSubmit={this.onSubmitClick}>
        
          <div className="choice">
            <div className="choice-selected">
              <div className="choice-selected-name">Year: </div>
              <button type="button" disabled={this.state.year === ''}>
                <div className="choice-selected-item">{this.state.year}</div>
                <div className="choice-selected-close" onClick={this.closeYearChoice} >X</div>
              </button>
            </div>
            <div className="choice-selected">
              <div className="choice-selected-name">Make: </div>
              <button type="button" disabled={this.state.make === ''}>
                <div className="choice-selected-item">{this.state.make}</div>
                <div className="choice-selected-close" onClick={this.closeMakeChoice}>X</div>
              </button>
            </div>
            <div className="choice-selected">
              <div className="choice-selected-name">Model: </div>
              <button type="button" disabled={this.state.model === ''}>
                <div className="choice-selected-item">{this.state.model}</div>
                <div className="choice-selected-close" onClick={this.closeModelChoice} >X</div>
              </button>
            </div>
          </div>
          <h3 hidden={this.state.year !== ''}>What year was your vehicle made?</h3>
          <div id="arrange-years">
            <ul>{this.state.notLoading? this.state.years:<img hidden={this.state.year !== ''} src={require('./AdditionalVehicleImages/487.gif')} alt="Loading..." />}</ul>
          </div>
          {/* <img hidden={this.state.isLoading} src={require('./AdditionalVehicleImages/487.gif')} alt="Loading..." /> */}
          <h3 hidden={this.state.year ==='' || this.state.make !== ''}>What make is your vehicle?</h3>
          <div id="arrange-years">
            <ul>{this.state.notLoading? this.state.makes:<img hidden={this.state.year ==='' || this.state.make !== ''} src={require('./AdditionalVehicleImages/487.gif')} alt="Loading..." />}</ul>
          </div>

          <h3 hidden={this.state.make ==='' || this.state.model !== ''}>What model is your vehicle?</h3>
          <div id="arrange-years">
            <ul>{this.state.notLoading? this.state.models:<img hidden={this.state.make ==='' || this.state.model !== ''} src={require('./AdditionalVehicleImages/487.gif')} alt="Loading..." />}</ul>
          </div>
          <button id="navigationPrevious" type='button' onClick={this.props.finalStep} hidden={!this.props.final}>Go back to get quote</button>
          <button id="navigationPrevious" type='button' onClick={this.props.noNewEntityStep} hidden={(this.props.final===false || this.props.final===true) && this.props.newEntity===false}>Go back to vehicle summary</button>
          <button id="navigationNext" className="save-and-continue" type='submit' hidden={this.state.notFilled || !this.state.editClose}>Save and Continue</button>
        </form>
        {this.displayButtons()}
      </div>
    )
  }
}

export default VehicleInfo
