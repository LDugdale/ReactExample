import React, { Component } from 'react';
import SinglePageTemplate from '../singlePageTemplate';
import { addUserPlantActivity } from '../../../services/userPlantService';
import '../../../assets/styles/plantActivity.css';


export default class RecordPlantActivityContainer extends Component {
    
  constructor(props){
    super(props);
    this.state = {
    }
    this.handleDone = this.handleDone.bind(this);
  }

  async handleDone(plants, activityData){

    const activity = {
      activityType: this.props.selectedActivity.activityType,
      plants: plants,
      activityData: activityData
    }

    await addUserPlantActivity(activity);
  } 

  getActivity(){

    const propsToPass = {
      template: SinglePageTemplate,
      open: this.props.open,
      onClose: this.props.onClose,
      handleDone: this.handleDone
    }

    if(!this.props.selectedActivity.page){
      return  (       
        <SinglePageTemplate
          template={SinglePageTemplate}
          open={this.props.open}
          onClose={this.props.onClose}
          handleDone={this.handleDone}
        /> 
      );
    }

    return this.props.selectedActivity.page(propsToPass);
  }

  render(){
    return this.getActivity();
  }
}