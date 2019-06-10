import React, { Component } from 'react';
import SelectionListSearch from '../../../controls/selectionListSearch';
import * as selectionType from '../../../../constants/selectionType';
import { getUserPlants } from '../../../../services/userPlantService';



export default class SelectUserPlant extends Component {

    constructor(props){
        super(props);
        this.state={
          selectedPlants: new Set(),
          selectedPlantComplete: false,
        };
    }

    createLabel(plant){   

        const label = (
            <div className='label-wrapper'>
            <span className='nickname'>{plant.nickname}</span>
            <span className='name'>{plant.name}</span>  
            </div>    
        );

        return label;
    }

    getID(plant){
        return plant._id
    }

    render(){
        return(
            <SelectionListSearch 
                getItems={getUserPlants}
                type={selectionType.CHECKBOX}
                handleSelectedItems={this.props.handleSelectedItems}
                createLabel={this.createLabel}           
                getID={this.getID}
            />
        );
    }
}