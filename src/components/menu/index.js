import React from 'react';
import MenuContainer from './MenuContainer';

const Menu = (props) => 
    <MenuContainer
        open={props.open}
        closeMenu={props.closeMenu}
    />  

export default Menu;