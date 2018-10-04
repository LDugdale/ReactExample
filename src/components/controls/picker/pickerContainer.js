import React, { Component } from 'react';
import PickerPopup from './pickerPopup';
import '../../../styles/picker.css';

const INITIAL_STATE = {
    showPopup: false
}

export default class PickerContainer extends Component {

    constructor(props){
        super(props);
        this.state = { ...INITIAL_STATE };
        this.togglePopup = this.togglePopup.bind(this);
    }

    togglePopup(){
        if(this.state.showPopup){
            this.setState({showPopup: false})
        } else {
            this.setState({showPopup: true})
        }
    }

    render(){
        return(
            <div className='picker-wrapper'>
                <PickerPopup 
                    showPopup={this.state.showPopup}
                />
                <input
                    onClick={() => this.togglePopup()}
                    onChange={event => this.props.onChange(this.props.valueKey, event.target.value)}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                />
            </div>
        );
    }
}