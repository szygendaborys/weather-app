import React, { Component } from 'react';
import Form from './Form'
import Result from './Result'
import './main.css';
 
  // Key for Weather API
  const APIKey = 'ddfe4fedc767aec46d5081dca8658e5a'; 

class App extends Component {

  state = {
    value:'',
    city:'',
    date:'',
    pressure:'',
    sunrise:'',
    sunset:'',
    temp:'',
    wind:'',
    error: false
  }
  
  render() {
    return (
      <div className="App">
        <h1>React Weather App</h1>
        <Form 
        value={this.state.value} 
        change={this.handleInputChange}
        submit={this.handleSubmit}
        />
        <Result
        weather={this.state}
        city={this.state.city}
        />
      </div>
    );
  }

  handleInputChange = e => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const API = 'http://api.openweathermap.org/data/2.5/weather?q='+this.state.value+',uk&APPID='+APIKey+'&units=metric';
    fetch(API)
    .then(response => {
      if(response.ok) {
        return response;
      }
      throw Error('Failed to fetch.');
    })
    .then(response => response.json())
    .then(data => {
      const time = new Date().toLocaleDateString();
      this.setState({ 
        error: false,
        city: this.state.value,
        date: time,
        pressure: data.main.pressure,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        temp: data.main.temp,
        wind: data.wind.speed
      }); 
    })
    .catch(err => {
      console.log(err);
      this.setState({ 
        error: true,
        city: this.state.value
      });
    })
  }
}


export default App;
