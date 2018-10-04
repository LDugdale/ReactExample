import React from 'react';
import Icon from '../../icons';
import { Link } from 'react-router-dom';

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
                <Link 
                    to={props.page.route}
                >
                    <Icon icon={props.page.pageIcon}/>
                </Link>
            </div>
        </div>
    );
}

export default Tab;