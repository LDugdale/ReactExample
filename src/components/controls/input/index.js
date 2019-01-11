import React from 'react';
import '../../../assets/styles/input.css'

const Input = (props) => {

    return(
        <label className="input-wrapper">
            <input
                onChange={event => props.onChange(event.target.value, props.valueKey)}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
            />
        </label>
        
    );
}

export default Input;