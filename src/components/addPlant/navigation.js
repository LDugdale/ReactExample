import React from 'react';
import Icon, { icons } from '../../icons';

const Navigation = (props) => {

    let navigation;
    if(props.currentPage === 0 ){
        navigation = (
            <div className='navigation'>
                <Icon 
                    icon={icons.NEXT} 
                    iconClassName='nav-icon next'
                    onClick={props.onClick}
                />   
            </div>
        );
    }
    else {
        navigation = (
            <div className='navigation'>
                <Icon 
                    icon={icons.PREVIOUS} 
                    iconClassName='nav-icon previous'
                    onClick={props.onClick}
                />
                <Icon 
                    icon={icons.NEXT} 
                    iconClassName='nav-icon next'
                    onClick={props.onClick}
                />   
            </div>
        );
    }

    return navigation;
}

export default Navigation;