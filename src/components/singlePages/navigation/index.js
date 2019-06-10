import React from 'react';
import NavigationContainer from './NavigationContainer';

const Navigation = (props) => {
    return (
        <NavigationContainer>
            {props.children}
        </NavigationContainer>
    );
}

export default Navigation;