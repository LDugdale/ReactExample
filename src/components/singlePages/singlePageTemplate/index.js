import React from 'react';
import SinglePageTemplateContainer from './singlePageTemplateContainer';

const SinglePageTemplate = (props) => 
    <SinglePageTemplateContainer
        open={props.open}
        handlePageChange={props.handlePageChange}
        handleDone={props.handleDone}
        title={props.title}
        onClose={props.onClose}
    >
        {props.children}
    </SinglePageTemplateContainer>

export default SinglePageTemplate;