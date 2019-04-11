import React from 'react';
import './main.css';

const Form = props => {
    return ( 
        <form className="form">
            <input 
            className="input"
            type="text" 
            value={props.value}
            onChange={props.change}
            placeholder='Write city'
            />
        </form>
     );
}
 
export default Form;