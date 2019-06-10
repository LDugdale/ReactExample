import React, {Component} from 'react';
import SelectUserPlant from '../pages/selectUserPlant';
import AddAmmount from '../pages/addAmmount';
import * as pageTitle from '../../../../constants/pageTitle';


export default class WaterActivity extends Component {

    constructor(props){
        super(props)
        this.state={
            title: pageTitle.RECORD_WATER_ACTIVITY_1,
            selectedPlants: [],
            waterAmmount: -1,
            selectedPlantComplete: false,
            ammountInputComplete: false
        };
        
        this.handleSelectedItems = this.handleSelectedItems.bind(this);
        this.handleAmmountInput = this.handleAmmountInput.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);        
        this.handleDone = this.handleDone.bind(this);
    }

    handlePageChange(currentPage){
        const title = currentPage === 0 ? pageTitle.RECORD_WATER_ACTIVITY_1 : pageTitle.RECORD_WATER_ACTIVITY_2    
        this.setState({title: title});
    }

    handleSelectedItems(newSelectedItems, selectedPlantComplete, item){

        this.setState({
            selectedPlantComplete: selectedPlantComplete,
            selectedPlants: newSelectedItems
        });

    }   

    handleAmmountInput(value, valueKey){

        const isSelected = value.length > 0

        this.setState({
            ammountInputComplete: isSelected,
            waterAmmount: value
        }); 
    }

    async handleDone(){

        const plants = this.state.selectedPlants.map((item, i) =>
            item.item
        );

        const activityData = {
            waterAmmount: this.state.waterAmmount
        };         

        await this.props.handleDone(plants, activityData);
    }

    render(){
        const SinglePageTemplate = this.props.template;
        return (
            <SinglePageTemplate
                title={this.state.title}
                open={this.props.open}
                handlePageChange={this.handlePageChange}
                onClose={this.props.onClose}
                handleDone={this.handleDone}
            >
                <SelectUserPlant
                    handleSelectedItems={this.handleSelectedItems}
                    isComplete={this.state.selectedPlantComplete}
                />
                <AddAmmount
                    handleInput={this.handleAmmountInput}
                    isComplete={true}
                />
            </SinglePageTemplate>
        );
    }
}