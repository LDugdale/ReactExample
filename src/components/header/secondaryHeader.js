import React from 'react';
import Icon, { icons } from '../../assets/icons';

const SecondaryHeader = (props) => {

    return(
        <div className='secondary-header'>
            <Icon 
                icon={icons.BACK} 
                iconClassName='action back' 
                onClick={props.onClick}
            />
        </div>
    );
}

export default SecondaryHeader;