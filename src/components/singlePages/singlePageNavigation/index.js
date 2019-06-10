import React from 'react';
import SinglePageNavigationContainer from './singlePageNavigationContainer';

const SinglePageNavigation = (props) => {
    return (
        <SinglePageNavigationContainer
            handlePageChange={props.handlePageChange}
            handleDone={props.handleDone}
            onClose={props.onClose}
        >
            {props.children}
        </SinglePageNavigationContainer>
    );
}

export default SinglePageNavigation;