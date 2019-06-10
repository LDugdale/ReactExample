import React from 'react';
import SelectionListSearchContainer from './selectionListSearchContainer';

const SelectListSearch = (props) => 
    <SelectionListSearchContainer
        getItems={props.getItems}
        onSearchInput={props.onSearchInput}
        type={props.type}
        handleSelectedItems={props.handleSelectedItems}
        createLabel={props.createLabel}           
        getID={props.getID}
    />

export default SelectListSearch;
