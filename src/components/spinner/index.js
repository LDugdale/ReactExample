import React from 'react';
import { spinnerController } from './spinnerController';
import SpinnerContainer from './SpinnerContainer';

const Spinner = () => {
    return (
        <SpinnerContainer
            spinnerController={spinnerController}
        />
    );    
}

export {
    Spinner,
    spinnerController
}