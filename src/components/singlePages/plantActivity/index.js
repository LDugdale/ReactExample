import React from 'react';
import RecordPlantActivityContainer from './recordPlantActivityContainer';

const RecordPlantActivity = (props) => {

    return (
    <RecordPlantActivityContainer
        open={props.open}
        onClose={props.onClose}
        selectedActivity={props.selectedActivity}
    />  
    );
}

export default RecordPlantActivity;