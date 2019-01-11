import React from 'react';
import Icon, { icons } from '../../../assets/icons';
import * as routes from '../../../constants/routes'
import { Link } from 'react-router-dom';

const AddPlant = (props) => {
    return (
        <div className="plant-wrapper add-plant" >
            <Link 
                to={routes.ADD_PLANT}
            >
                <div className="plant-content">
                    <h2>Add new plant</h2><Icon icon={icons.PLUS} />
                </div>
            </Link>
        </div>
    );
}

export default AddPlant