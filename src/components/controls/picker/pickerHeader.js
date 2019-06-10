import React from 'react'

const PickerHeader = (props) => {
    return(
        <input
            onChange={event => props.inputHandler(event.target.value)}
            type='text'
            placeholder='Search'
        />
    );
}

export default PickerHeader;