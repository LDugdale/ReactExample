import React from 'react';
import AddPlantContainer from './addPlantContainer';

const AddPlant = (props) => {
    
    return (
    <AddPlantContainer
        open={props.open}
        onClose={props.onClose}
    />
    );
}

export default AddPlant;