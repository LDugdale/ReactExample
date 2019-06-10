import React from 'react';

const SubMenu = (props) => {
    if(!props.showMenu){
        return null;
    }

    return(
        <div className='footer-menu-background'
            onClick={() => props.toggleMenu()}
        >
            <div className='footer-menu'>
                {props.createSubMenuItems()}
            </div>
        </div>
    );
}

export default SubMenu;