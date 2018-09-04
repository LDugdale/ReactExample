import React from 'react';
import Icon, { icons } from '../../icons';

const PrimaryHeader = () => {

    return(
        <div className='primary-header'>
            <Icon icon={icons.HAMBURGER} iconClassName='hamburger' />
        </div>
    );
}

export default PrimaryHeader;