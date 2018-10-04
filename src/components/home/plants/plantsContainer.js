import React, { Component } from 'react';
import AddPlant from './addPlant';
import '../../../styles/plants.css';


export default class PlantsContainer extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){

    }

    render() {

        return (
            <div className="plants">
                <AddPlant />
                <AddPlant />

            </div>
        );
    }
}
