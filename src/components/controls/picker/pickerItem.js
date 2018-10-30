import React from 'react';
import { nameTypes } from '../../../constants/plantNameType'

const PickerItem = (props) => {
    const plant = {...props.item.plant};
    return(
        <div className='item-wrapper plant-item-wrapper'>
            <div className="plant-name-search">
                <h5>{nameTypes[props.item.nameType]}:</h5><h5>{props.item.name}</h5>                
            </div>
            <div className='plant'>
                <div className='plant-image'></div>
                <h4 className='plant-name'>{plant.latinName}</h4>
                <h5 className='plant-genus'>{plant.genus}</h5>            
            </div>
        </div>
    );

}

export default PickerItem;