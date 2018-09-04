import React, { Component } from 'react';
import { headers } from '../../constants/headers';
import PrimaryHeader from './primaryHeader';
import SecondaryHeader from './secondaryHeader';
import '../../styles/header.css';

export default class HeaderContainer extends Component {

    createHeader(){
        return this.props.header === headers.PRIMARY ? <PrimaryHeader /> : <SecondaryHeader />
    }

    render(){
        return(
            <div className='header'>
                {this.createHeader()}
            </div>
        );
    }
}