import React from 'react';
import SelectionListContainer from './selectionListContainer';

const SelectionList = (props) => 
    <SelectionListContainer
        items={props.items}
        type={props.type}
        selectionCallback={props.selectionCallback}
        createLabel={props.createLabel}           
        getID={props.getID}
    />

export default SelectionList;