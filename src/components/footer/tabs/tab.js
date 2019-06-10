import React from 'react';
import Icon from '../../../assets/icons';
import { Link } from 'react-router-dom';

const Tab = (props) => {
    const pageClass = `${props.pageClass} ${props.page.pageKey}-tab`
    const itemClass = `${props.page.pageKey} item`
    return(
        <div
            className={pageClass}
            onClick={() => props.onClick(props.page.pageKey)}
            ref={el => props.setElement(props.page.pageKey, el)}
        >
            <div className="mask" />
            <div className="half-circle" />
            <div className={itemClass} key={props.page.pageKey}>
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