import React from 'react';
import './main.css';

const Form = props => {
    return ( 
        <form className="form" onSubmit={props.submit}>
            <input 
            className="input"
            type="text" 
            value={props.value}
            onChange={props.change}
            placeholder='Write city'
            />
            <button className="button">Search City!</button>
        </form>
     );
}
 
export default Form;