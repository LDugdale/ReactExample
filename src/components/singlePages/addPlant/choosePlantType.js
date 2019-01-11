import React from 'react';
import Input from '../../controls/input';

const ChoosePlantType = (props) => {

    const hasResults = props.hasPlantResults ? 'has-results' : '';
    const resultsClass = `search-content ${hasResults}`;
    
    return (
        <div className='plant-type'>
            <div className="add-plant-header">
                <h2 className='title'>
                    What type of plant is {props.nickname}?
                </h2>
                <Input 
                    onChange={props.inputHandler}
                    valueKey="plantType"
                    type="text"
                    placeholder='Plant type'
                    value={props.searchText}
                />
            </div>
            <div className={resultsClass}>
                {props.pickerItems()}
            </div>
        </div>
    );

}

export default ChoosePlantType;