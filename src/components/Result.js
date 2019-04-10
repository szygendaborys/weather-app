import React from 'react';
import './main.css';

const Result = props => {
    
    const { error, city, date, pressure, sunrise, sunset, temp, wind } = props.weather;
    
    let content = null;

    if(!error && city) {
        content = (
            <div className="content">
                <h2>Results from {city}.</h2>
                <h5>Day: {date}</h5>
                <h5>Temp: {temp} Celsius</h5>
                <h5>Wind: {wind} M/s</h5>
                <h5>Pressure: {pressure} HPa</h5>
                <h5>Have a great day!</h5>
            </div>
        )
    }

    return (
        <div className="result">
        {error ? `Failed to fetch city named ${city}` : content}
        </div>
      );
}
 
export default Result;
