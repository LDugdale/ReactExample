import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import SinglePageNavigation from '../singlePageNavigation'
import Icon, { icons } from '../../../assets/icons';
import '../../../assets/styles/singlePageTemplate.css'

export default class RecordPlantActivityContainer extends Component {
    
  constructor(props){
    super(props);
    this.state={
      open: props.open
    }
  }

  render(){

    return(
      <CSSTransition
        className="single-page-background"
        in={this.props.open}
        timeout={300}
        classNames="single-page-background"
        unmountOnExit
      >
      <div >
        <div className='single-page'>
          <div className='single-page-header'>
            <Icon  
              icon={icons.BACK}
              onClick={this.props.onClose}
            />
            <div className="header-text">
              <h1>{this.props.title}</h1>
            </div>
          </div> 
            
          <SinglePageNavigation
              handlePageChange={this.props.handlePageChange}
              handleDone={this.props.handleDone}
              onClose={this.props.onClose}
          >
              {this.props.children}
          </SinglePageNavigation>
        </div>
        </div>
      </CSSTransition>
    );
  }
}