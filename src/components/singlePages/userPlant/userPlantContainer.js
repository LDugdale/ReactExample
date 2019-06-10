import React, { Component } from 'react';
import { getUserPlant } from '../../../services/userPlantService'; 
import Spinner, { spinnerController } from '../../spinner';
import '../../../assets/styles/userPlant.css';

const INITIAL_STATE = {
    plant: {}
}

export default class UserPlantContainer extends Component {

    constructor(props){
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    async componentDidMount(){
        spinnerController.show();
        const plant = await getUserPlant(this.props.userPlantId);
        this.setState({ plant: plant});
        spinnerController.hide();
    } 

    render() {

        const {
            nickname,
            latinName,
            } = this.state.plant;

        return (
            <div className='container user-plant'>
                <Spinner />
                <div className='content'>
                    <div className='user-plant-header'>
                        <div className='user-plant-image'>

                        </div>
                        <div className='user-plant-title'>
                            <h2>{nickname}</h2>
                            <h3>{latinName}</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
