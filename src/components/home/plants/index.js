import React from 'react';
import PlantsContainer from './plantsContainer';

const Plants = (props) => 
    <PlantsContainer
        onOpenAddPlant={props.onOpenAddPlant}
    />

export default Plants;