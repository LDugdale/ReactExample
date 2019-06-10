import React, { Component } from 'react';
import PickerPopup from './pickerPopup';
import PickerItem from './pickerItem';
import { searchPlantNames } from '../../../services/plantService';
import { Spinner, spinnerController } from '../../spinner';
import '../../../styles/picker.css';

const INITIAL_STATE = {
    showPopup: false,
    plants: {}
}

export default class PickerContainer extends Component {

    constructor(props){
        super(props);
        this.state = { ...INITIAL_STATE };
        this.togglePopup = this.togglePopup.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        this.displayPickerItems = this.displayPickerItems.bind(this);
    }

    togglePopup(){
        if(this.state.showPopup){
            this.setState({showPopup: false})
        } else {
            this.setState({showPopup: true})
        }
    }

    inputHandler(inputText){
        spinnerController.show();

        searchPlantNames(inputText)
        .then((result) => {
            this.setState({plants: {...result.data.searchPlantNamess.items}});
            spinnerController.hide();
        })
        .catch((error) => {
            spinnerController.hide();
        });
    }

    displayPickerItems(){
        return Object.values(this.state.plants).map((item) =>
            <PickerItem
                item={item}
            />
        );
    }

    render(){
        return(
            <div className='picker-wrapper'>
                <Spinner />
                <PickerPopup 
                    showPopup={this.state.showPopup}
                    inputHandler={this.inputHandler}
                    pickerItems={this.displayPickerItems}
                />
                <input
                    onClick={() => this.togglePopup()}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                />
            </div>
        );
    }
}