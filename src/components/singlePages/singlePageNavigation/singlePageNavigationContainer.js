
import React, { Component } from 'react';
import NavIcon from './navIcon';
import { icons } from '../../../assets/icons';
import Spinner, { spinnerController } from '../../spinner';
import '../../../assets/styles/singlePageNavigation.css';

const INITIAL_STATE = {
    currentPage: 0
}

export default class SinglePageNavigationContainer extends Component {

    constructor(props){
        super(props);
        this.state = { ...INITIAL_STATE };
        this.handlePreviousClick = this.handlePreviousClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handleDoneClick = this.handleDoneClick.bind(this);
        this.displayNavigationIcons = this.displayNavigationIcons.bind(this);
    }

    handlePreviousClick(){
        let currentPage = this.state.currentPage;
        if(this.state.currentPage > 0){
            currentPage --;
            this.setState({currentPage: currentPage});
        }
        this.props.handlePageChange(currentPage);
    }

    handleNextClick(){
        let currentPage = this.state.currentPage;
        if(this.props.children[currentPage].props.isComplete){
            currentPage ++;
            this.setState({currentPage: currentPage});
        }  
        this.props.handlePageChange(currentPage); 
    }

    async handleDoneClick(){

        let currentPage = this.state.currentPage;
        if(!this.props.children[currentPage].props.isComplete){
            return;
        }
        
        spinnerController.show();
        await this.props.handleDone();
        spinnerController.hide();
        this.props.onClose();
    }

    displayNavigationIcons(){

        if(!this.props.children.length){
            return;
        }

        let navIcons;
        let currentPage = this.state.currentPage;
        let numOfPages = this.props.children.length - 1;
        let pageIsComplete = this.props.children[currentPage].props.isComplete;

        if(currentPage === 0){
            navIcons = ( 
                        <NavIcon 
                            icon={icons.NEXT}
                            name='next'
                            onClick={this.handleNextClick}
                            isComplete={pageIsComplete}
                        />
                    );
        } else if (currentPage > 0 && currentPage < numOfPages ){
            navIcons = (
                    <div> 
                        <NavIcon 
                            icon={icons.PREVIOUS}
                            name='previous'
                            onClick={this.handlePreviousClick}
                        />
                        <NavIcon 
                            icon={icons.NEXT}
                            name='next'
                            onClick={this.handleNextClick}
                            isComplete={pageIsComplete}
                        />
                    </div>
                );
        } else if (currentPage === numOfPages){
                navIcons = (
                    <div> 
                        <NavIcon 
                            icon={icons.PREVIOUS}
                            name='previous'
                            onClick={this.handlePreviousClick}
                        />
                        <NavIcon 
                            icon={icons.DONE}
                            name='done'
                            onClick={this.handleDoneClick}
                            isComplete={pageIsComplete}
                        />
                    </div>
                );
        }

        return (
            <div className='single-navigation'>
                {navIcons}
            </div>
        );
    }

    render(){    
        return (
            <div className='content-wrapper'>
                <Spinner />
                <div className='content'>
                    {this.props.children[this.state.currentPage]}
                </div>
                {this.displayNavigationIcons()}
            </div>
        );
        
    }
}