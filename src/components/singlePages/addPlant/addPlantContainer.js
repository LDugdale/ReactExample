import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as routes from '../../../constants/routes';
import '../../../assets/styles/addPlant.css';
import ChooseNickname from './chooseNickname';
import ChoosePlantType from './choosePlantType';
import PlantTypeItem from './plantTypeItem'
import Navigation from '../navigation';
import { searchPlants } from '../../../services/plantService';
import { addUserPlant } from '../../../services/userPlantService';
import { Spinner, spinnerController } from '../../spinner';

const updateByPropertyName = (propertyName, value) => () => ({
    [propertyName]: value,
  });


const INITIAL_STATE = {
    nickname: '',
    searchText: '',
    nicknameIsComplete: false,
    plantTypeIsComplete: false,
    plants: [],
    selectedPlant: {}
}

class AddPlantcontainer extends Component {

    constructor(props){
        super(props);
        this.state = { ...INITIAL_STATE };
        this.handleNicknameChange = this.handleNicknameChange.bind(this);
        this.handleNavClick = this.handleNavClick.bind(this);
        this.handleDoneClick = this.handleDoneClick.bind(this);
        this.handlePlantNameChange = this.handlePlantNameChange.bind(this);
        this.displayPickerItems = this.displayPickerItems.bind(this);
        this.handlePlantSelect = this.handlePlantSelect.bind(this);
    }

    handleNavClick(event, iconClassName){
        let pageNumber = this.state.currentPage;
        if(iconClassName === 'nav-icon next' && this.state.nickname.length > 0){
            pageNumber++
            this.setState({currentPage: pageNumber});
        } else if(iconClassName === 'nav-icon previous' && pageNumber > 0){
            pageNumber--
            this.setState({currentPage: pageNumber});
        }
    }

    pageContent(){
        return this.state.pages[this.state.currentPage];
    }

    handleNicknameChange(value, key){
        this.setState(updateByPropertyName(key,value));
        if(value && value !== ''){
            this.setState({ nicknameIsComplete: true });
        } else {
            this.setState({ nicknameIsComplete: false });
        }
    }

    handlePlantNameChange(inputText){
        this.setState(updateByPropertyName('searchText',inputText))

        spinnerController.show();
        searchPlants(inputText)
        .then((result) => {
            this.setState({plants: {...result}});
            spinnerController.hide();
        })
        .catch((error) => {
            spinnerController.hide();
        });
    }

    handlePlantSelect(plant){
        this.setState({selectedPlant: {...plant}});
        if(plant){
            this.setState({ plantTypeIsComplete: true });
        } else {
            this.setState({ plantTypeIsComplete: false });
        }
    }

    handleDoneClick(value, key){
        spinnerController.show();
        addUserPlant(this.state.selectedPlant, this.state.nickname)
        .then((data) => {
            spinnerController.hide()
            this.props.history.push(routes.HOME);

        })
        .catch(() => {
            spinnerController.hide()
        });
    }

    hasPlantResults(){
        return Object.keys(this.state.plants).length > 0;
    }

    hasSelectedPlant(){
        return Object.keys(this.state.selectedPlant).length > 0;
    }

    displayPickerItems(){
        return Object.values(this.state.plants).map((item) => {
            return(
                <PlantTypeItem
                    item={item}
                    selectedPlant={this.state.selectedPlant}
                    onClick={this.handlePlantSelect}
                />
            );
        });
    }

    render(){
        return(
            <div className='container add-plant'>
                <Spinner />
                <Navigation 
                    currentPage={this.state.currentPage}
                    onClick={this.handleNavClick}
                    onDoneClick={this.handleDoneClick}
                    hasPlantResults={this.hasPlantResults()}
                    hasSelectedPlant={this.hasSelectedPlant()}
                >
                    <ChooseNickname
                        onChange={this.handleNicknameChange}
                        value={this.state.nickname}
                        isComplete={this.state.nicknameIsComplete}
                    />
                    <ChoosePlantType 
                        inputHandler={this.handlePlantNameChange}
                        nickname={this.state.nickname}
                        pickerItems={this.displayPickerItems}
                        hasPlantResults={this.hasPlantResults()}
                        searchText={this.state.searchText}
                        isComplete={this.state.plantTypeIsComplete}
                    />
                </Navigation>
            </div>
        );
    }
}

export default withRouter(AddPlantcontainer);