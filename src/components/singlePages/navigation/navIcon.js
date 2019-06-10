import React from 'react';
import Icon from '../../../assets/icons';


const NavIcon = (props) => {

    let isComplete = props.isComplete ? 'complete' : ''
    let iconName =  `nav-icon ${props.name} ${isComplete}`;

    return (
        <Icon 
            icon={props.icon} 
            iconClassName={iconName}
            onClick={props.onClick}
        />
    );
}

export default NavIcon;