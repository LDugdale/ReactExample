import React from 'react';
import Icon, { icons } from '../../icons';

const SecondaryHeader = () => {

    return(
        <div className='secondary-header'>
            <Icon icon={icons.BACK} iconClassName='action back' />
        </div>
    );
}

export default SecondaryHeader;