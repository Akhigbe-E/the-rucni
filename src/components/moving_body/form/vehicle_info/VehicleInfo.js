import React, { Component } from 'react'

export class VehicleInfo extends Component {

  state = {
    carInfo: null
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/years')
      .then(response => response.json())
      .then(carInfo => this.setState({ carInfo }));
      
      // this.showApiData();
  }

  showApiData=()=>{
    const year = this.state.carInfo[0].result;

    year.map((data)=>{  
      console.log(data.year);
        
      return(
        <div className="years">
          <button>{data.year}</button>
        </div>
      );
      
    })
  }

  render() {
    return (
      <div> 
        <h2>Choose car info</h2>
        {this.showApiData}
        <button onClick={this.props.nextStep} >Next</button>

        <button onClick={this.showApiData} >show</button>
      </div>
    )
  }
}

export default VehicleInfo
