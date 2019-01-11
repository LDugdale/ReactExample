import React from 'react';

const PlantTypeItem = (props) => {
    const plant = {...props.item};
    const plantClass = props.selectedPlant && props.selectedPlant.plantId === plant.plantId ? 'item-wrapper plant-item-wrapper selected': 'item-wrapper plant-item-wrapper' 
    const otherName = plant.names[0].name ? <h5 className='plant-common-name'>{plant.names[0].name}</h5> : null;
    return(
        <div 
            className={plantClass}
            onClick={() => props.onClick(plant)}
        >
            <div className='plant'>
                <div className='plant-image'></div>
                <h4 className='plant-name'>{plant.latinName}</h4>
                {otherName}         
            </div>
        </div>
    );

}

export default PlantTypeItem;