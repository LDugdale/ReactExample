import React, {Component} from 'react';
import SelectUserPlant from '../pages/selectUserPlant';
import * as pageTitle from '../../../../constants/pageTitle';
import AddPlantPost from '../pages/addPlantPost';


export default class PostActivity extends Component {

    constructor(props){
        super(props)
        this.state={
            title: pageTitle.RECORD_MEDIA_ACTIVITY_1,
            selectedPlants: [],
            selectedPlantComplete: false,
            mediaComplete: false
        };
        
        this.handleSelectedItems = this.handleSelectedItems.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);        
        this.handleDone = this.handleDone.bind(this);
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
        this.handleMediaChange = this.handleMediaChange.bind(this);
    }

    handlePageChange(currentPage){
        const title = currentPage === 0 ? pageTitle.RECORD_MEDIA_ACTIVITY_1 : pageTitle.RECORD_MEDIA_ACTIVITY_2    
        this.setState({title: title});
    }

    handleSelectedItems(newSelectedItems, selectedPlantComplete, item){

        this.setState({
            selectedPlantComplete: selectedPlantComplete,
            selectedPlants: newSelectedItems
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

    handleTextAreaChange(value){


        this.setState({
        }); 
    }

    handleMediaChange(fileList){

        debugger;
        this.setState({
        }); 
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
                    isComplete={this.state.selectedPlantComplete}
                    handleSelectedItems={this.handleSelectedItems}
                />
                <AddPlantPost
                    isComplete={true}
                    onTextAreaChange={this.handleTextAreaChange}
                    onMediaChange={this.handleMediaChange}
                />
            </SinglePageTemplate>
        );
    }
}