import React from 'react';
import MenuButton from '../controls/menuButton';
import Icon, { icons } from '../../assets/icons';

const PrimaryHeader = (props) => {
    return(
        <div className='primary-header'>
            <MenuButton open={props.menuOpen} onClick={props.handleMenuClick}/>
        </div>
    );
}

export default PrimaryHeader;