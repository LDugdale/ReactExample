import React from 'react';

const Icon = (props) => {

    const iconClassName = () => {
        let name = ' icon'; 
        return props.iconClassName ? props.iconClassName + name : name ;
    }

    return (
        <div className={iconClassName()}>
            <div className='icon-wrapper'>
                {props.icon}
            </div>
        </div>
    );
};

export default Icon;
export { icons } from '../constants/icons';
