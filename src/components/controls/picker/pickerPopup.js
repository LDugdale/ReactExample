import React from 'react';

const PickerPopup = (props) => {

    if(!props.showPopup){
        return null;
    }

    return(
        <div className='popup-wrapper'>
            <div className='popup-header'>
                <input />
            </div>
            <div className='popup-content'>
                <h1>WTF</h1>
            </div>
        </div>
    );
} 

export default PickerPopup;