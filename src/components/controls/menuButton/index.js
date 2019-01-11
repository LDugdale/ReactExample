import React from 'react';
import MenuButtonContainer from './menuButtonContainer';

const MenuButton = (props) => 
    <MenuButtonContainer 
        open={props.open}
        onClick={props.onClick}
    />

export default MenuButton;