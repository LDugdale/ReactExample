import React, { Component } from 'react';
import TableView from '../../controls/tableView';
import { getUserPlants } from '../../../services/userPlantService'; 
import AddPlant from './addPlant';
import UserPlant from './userPlant';
import Spinner from '../../spinner';
import '../../../assets/styles/plants.css';

const INITIAL_STATE = {
    plants: []
}

export default class PlantsContainer extends Component {

    constructor(props){
        super(props);
        this.handleTableRefresh = this.handleTableRefresh.bind(this);
        this.state = { ...INITIAL_STATE };
    }

    createUserPlant(){
        return Object.values(this.state.plants).map((plant) => {
            return(
                <UserPlant
                    plant={plant}
                />
            );
        });
    }

    async handleTableRefresh(finished){
        const plants = await getUserPlants();
        this.setState({ plants: plants});
        finished();
    }

    render() {

        return (
            <div className="plants">
                <Spinner />
                <TableView
                    onRefresh={this.handleTableRefresh}
                >
                    {this.createUserPlant()}
                    <AddPlant
                        onOpenAddPlant={this.props.onOpenAddPlant}
                    />
                </TableView>
            </div>
        );
    }
}
