import React from 'react';
import PickerHeader from './pickerHeader';

const PickerPopup = (props) => {

    if(!props.showPopup){
        return null;
    }

    return(
        <div className='popup-wrapper'>
            <div className='popup-header'>
                <PickerHeader
                    inputHandler={props.inputHandler}
                />
            </div>
            <div className='popup-content'>
                {props.pickerItems()}
            </div>
        </div>
    );
} 

export default PickerPopup;