import React from 'react';
import '../../../styles/input.css'

const Input = (props) => {

    return(
        <label className="input-wrapper">
            <input
                onChange={event => props.onChange(props.valueKey, event.target.value)}
                type={props.type}
                placeholder=" "
            />
            <span>{props.placeholder}</span>
        </label>
        
    );
}

export default Input;