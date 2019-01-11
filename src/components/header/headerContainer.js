import React, { Component } from 'react';
import { withRouter } from "react-router";
import { headers } from '../../constants/headers';
import PrimaryHeader from './primaryHeader';
import SecondaryHeader from './secondaryHeader';
import Menu from '../menu';
import '../../assets/styles/header.css';

class HeaderContainer extends Component {

    constructor(props){
        super(props);
        this.handleBackClick = this.handleBackClick.bind(this);    
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.createHeader = this.createHeader.bind(this);
        this.state = {
            menuOpen:false,
          }
    }

    createHeader() {
        return this.props.header === headers.PRIMARY ? <PrimaryHeader menuOpen={this.state.menuOpen} handleMenuClick={this.handleMenuClick}/> : <SecondaryHeader onClick={this.handleBackClick} />
    }

    handleBackClick() {
        this.props.history.goBack();
    }

    handleMenuClick() {
        this.setState({menuOpen:!this.state.menuOpen});        
    }

    render(){
        return(
            <div className='header'>
                {this.createHeader()}
                <Menu 
                    open={this.state.menuOpen}
                    closeMenu={this.handleMenuClick}
                />
            </div>
        );
    }
}

export default withRouter(HeaderContainer);