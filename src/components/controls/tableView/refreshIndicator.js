import React, { Component } from 'react';
import Icon, { icons } from '../../../assets/icons';

class RefreshIndicator extends Component  {

    render() {
        return (
            <div ref='spinWrapper' className='spinner-wrapper'>
                <div 
                    ref='spinBackground'
                    className='table-spinner-background'
                />
                <div 
                    ref='spin'
                    className='spinner'
                >
                    <Icon icon={icons.SPINNER}/>
                </div>
            </div>
        )
    }
}
export default RefreshIndicator;