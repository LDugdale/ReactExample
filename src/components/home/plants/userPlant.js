import React from 'react';
import * as routes from '../../../constants/routes'
import { Link } from 'react-router-dom';

const UserPlant = (props) => {
    const plant = props.plant;
    const plantLink = routes.USER_PLANT(plant._id);
    return (
        <div className="plant-wrapper user-plant" >
            <Link className="plant-link" to={plantLink}/>
            <div className="plant-info">
                <h3 className="nickname">{plant.nickname}</h3>
                <h5 className="latin-name">{plant.latinName}</h5>
            </div>
        </div>
    );
}

export default UserPlant