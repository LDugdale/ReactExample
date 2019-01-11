import React from 'react';
import Icon, {icons} from '../../assets/icons';

const Menu = (props) => {
    if(!props.showMenu){
        return null;
    }

    return(
        <div className='footer-menu-background'
            onClick={() => props.toggleMenu()}
        >
            <div className='footer-menu'>
                <div className='footer-menu-icon'>
                    <Icon icon={icons.FERTILISER} />
                </div>
                <div className='footer-menu-icon'>
                    <Icon icon={icons.MEASURE} />
                </div>
                <div className='footer-menu-icon'>
                    <Icon icon={icons.WATER} />
                </div>
                <div className='footer-menu-icon'>
                    <Icon icon={icons.CAMERA} />
                </div>
            </div>
        </div>
    );
}

export default Menu;