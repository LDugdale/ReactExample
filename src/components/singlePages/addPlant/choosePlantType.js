import React from 'react';
import Input from '../../controls/input';
import SelectionList from '../../controls/selectionList';
import * as selectionType from '../../../constants/selectionType';

const ChoosePlantType = (props) => {
    
    return (
        <div className='select-box-wrapper'>
            <Input 
                onChange={props.handleSearchInput}
                valueKey="plantType"
                type="text"
                placeholder='Plant type'
                value={props.searchText}
            />
            <div className='results'>
                <SelectionList
                    items={props.items}
                    type={selectionType.RADIO}
                    selectionCallback={props.selectionCallback}
                    createLabel={props.createLabel}           
                    getID={props.getID}
                />
            </div>
        </div>
    );

}

export default ChoosePlantType;