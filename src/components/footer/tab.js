import React from 'react';
import Icon from '../../icons';

const Tab = (props) => {
    const itemClass = `${props.page.pageKey} item`
    return(
        <div
            className={props.pageClass}
            onClick={() => props.onClick(props.page.pageKey)}
            ref={el => props.setElement(props.page.pageKey, el)}
        >
            <div className={itemClass} key={props.page.pageKey}>
            <div className='item-background' />
                <Icon icon={props.page.pageIcon}/>
            </div>
        </div>
    );
}

export default Tab;