import React from 'react';
import Icon, { icons } from '../../../assets/icons';

const AddPlant = (props) => {
    return (
        <div className="plant-wrapper add-plant"
            onClick={() => props.onOpenAddPlant()}        
        >
                <div className="plant-content">
                    <h2>Add new plant</h2><Icon icon={icons.PLUS} />
                </div>
        </div>
    );
}

export default AddPlant