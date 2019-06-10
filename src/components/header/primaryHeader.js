import React from 'react';
import MenuButton from '../controls/menuButton';

const PrimaryHeader = (props) => {
    return(
        <div className='primary-header'>
            <MenuButton open={props.menuOpen} onClick={props.handleMenuClick}/>
        </div>
    );
}

export default PrimaryHeader;