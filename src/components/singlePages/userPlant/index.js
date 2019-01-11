import React from 'react';
import UserPlantContainer from './userPlantContainer';


const UserPlant = ({ match }) => {    
    return (
        <UserPlantContainer
            userPlantId={match.params.userPlantId}
        />
    );
}

export default UserPlant;