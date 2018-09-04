import React from 'react';
import FooterContainer from './footerContainer';

const Footer = (props) =>
    <FooterContainer
        pages={props.pages}
        active={props.active}
        onChange={props.onChange}
    />


export default Footer;