import React, { Component } from 'react';
import ChooseNickname from './chooseNickname';
import { searchPlants } from '../../../services/plantService';
import { addUserPlant } from '../../../services/userPlantService';
import SinglePageTemplate from '../singlePageTemplate';
import SelectionListSearch from '../../controls/selectionListSearch';
import * as pageTitle from '../../../constants/pageTitle';
import * as selectionType from '../../../constants/selectionType'; 
import '../../../assets/styles/addPlant.css';


const updateByPropertyName = (propertyName, value) => () => ({
    [propertyName]: value,
  });


const INITIAL_STATE = {
    title: pageTitle.ADD_PLANT_ACTIVITY_1,
    nickname: '',
    searchText: '',
    nicknameIsComplete: false,
    plantTypeIsComplete: false,
    plants: [],
    selectedPlant: {}
}

export default class AddPlantcontainer extends Component {

    constructor(props){
        super(props);
        this.state = { ...INITIAL_STATE };
        this.handleNicknameChange = this.handleNicknameChange.bind(this);
        this.handlePlantSearchInput = this.handlePlantSearchInput.bind(this);
        this.handleSelectedItems = this.handleSelectedItems.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleDone = this.handleDone.bind(this);
    }

    pageContent(){
        return this.state.pages[this.state.currentPage];
    }

    handlePageChange(currentPage){

        let title = currentPage === 0 ? pageTitle.ADD_PLANT_ACTIVITY_1 :  pageTitle.ADD_PLANT_ACTIVITY_2;
        this.setState({title: title})
    }

    handleNicknameChange(value, key){
        this.setState(updateByPropertyName(key,value));
        if(value && value !== ''){
            this.setState({ nicknameIsComplete: true });
        } else {
            this.setState({ nicknameIsComplete: false });
        }
    }

    async handlePlantSearchInput(inputText){
        const plants = await searchPlants(inputText);
        this.setState({plants: {...plants}});
        return plants;
    }

    async handleDone(value, key){
        await addUserPlant(this.state.selectedPlant, this.state.nickname)
    }

    hasPlantResults(){
        return Object.keys(this.state.plants).length > 0;
    }

    handleSelectedItems(newSelectedItems, selectedPlantComplete, item){
        this.setState({
            selectedPlantComplete: selectedPlantComplete,
            selectedPlant: item
        });
    }

    createLabel(plant){   
        
        const otherName = plant.names[0].name ? <span className='plant-common-name'>{plant.names[0].name}</span> : null;

        const label = (
            <div className='label-wrapper'>
                <div className='plant-image'></div>
                <span className='plant-name'>{plant.latinName}</span>
                {otherName} 
            </div>    
        );

        return label;
    }
    
    getID(plant){
        return plant.plantId
    }

    render(){
        return(
            <>
                <SinglePageTemplate
                    open={this.props.open}
                    title={this.state.title}
                    handlePageChange={this.handlePageChange}
                    handleDone={this.handleDone}
                    onClose={this.props.onClose}
                >
                     <ChooseNickname
                         onChange={this.handleNicknameChange}
                         value={this.state.nickname}
                         isComplete={this.state.nicknameIsComplete}
                     />
                    <SelectionListSearch 
                        getItems={() => Object.values(this.state.plants)}
                        onSearchInput={this.handlePlantSearchInput}
                        type={selectionType.RADIO}
                        handleSelectedItems={this.handleSelectedItems}
                        createLabel={this.createLabel}           
                        getID={this.getID}
                        isComplete={this.state.selectedPlantComplete}
                    />
                </SinglePageTemplate>
            </>
        );
    }
}
