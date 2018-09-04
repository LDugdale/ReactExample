import React from 'react';
import HeaderContainer from './headerContainer';
export {headers} from '../../constants/headers';

const Header = (props) => 
    <HeaderContainer header={props.header} />

export default Header;