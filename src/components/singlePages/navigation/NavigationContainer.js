import React, { Component } from 'react';
import NavIcon from './navIcon';
import { icons } from '../../../assets/icons';
import '../../../assets/styles/singlePageNavigation.css';

const INITIAL_STATE = {
    currentPage: 0
}

export default class Navigation extends Component {

    constructor(props){
        super(props);
        this.state = { ...INITIAL_STATE };
        this.handlePreviousClick = this.handlePreviousClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handleDoneClick = this.handleDoneClick.bind(this);
    }

    handlePreviousClick(){
        let currentPage = this.state.currentPage;
        if(this.state.currentPage > 0){
            currentPage --;
            this.setState({currentPage: currentPage});
        }
    }

    handleNextClick(){
        let currentPage = this.state.currentPage;
        if(this.props.children[currentPage].props.isComplete){
            currentPage ++;
            this.setState({currentPage: currentPage});
        }   
    }

    handleDoneClick(){

    }

    displayNavigationIcons(){
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
            <div>
                <div className='content'>
                    {this.props.children[this.state.currentPage]}
                </div>
                {this.displayNavigationIcons()}
            </div>
        );
        
    }
}