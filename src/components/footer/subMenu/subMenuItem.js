import React from 'react';
import Icon from '../../../assets/icons';

const SubMenuItem = (props) => {

    const item = props.item;
    return(
        <div 
            className='footer-menu-icon'
            onClick={() => props.onClick(item)}
        >
            <Icon 
                icon={item.icon}
            />
        </div>
    );
}

export default SubMenuItem;