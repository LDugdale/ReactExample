import React, { Component } from 'react';
import Icon, { icons } from '../../assets/icons';
import '../../assets/styles/spinner.css'

const INITIAL_STATE = {
    show: false
};

export default class SpinnerContainer extends Component {

    constructor(props){
        super(props);
        this.state = { ...INITIAL_STATE};
    }

    componentWillMount(){
        this.spinnerController = this.props.spinnerController;
        if(this.spinnerController){
            this.spinnerController.attach(this);
        }
    }

    set show(show){
        this.setState({ show: show });
          
    }

    render(){

        if (!this.state.show){
            return null;
        }

        return(
            <div className="spinner-background">
                <Icon icon={icons.SPINNER}/>
            </div>
        );
    }
}