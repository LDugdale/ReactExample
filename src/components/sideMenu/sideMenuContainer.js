import React, { Component } from 'react';
import MenuItem from './MenuItem';

export default class SideMenuContainer extends Component {

    constructor(props){
      super(props);
      this.state={
        open: this.props.open ? this.props.open : false,
      }
      this.createMenuItems = this.createMenuItems.bind(this);
    }
      
    componentWillReceiveProps(nextProps) {

        if(nextProps.open !== this.state.open) {
            this.setState({open:nextProps.open});
        }
    }    

    createMenuItems() {
        const menu = ['Account', 'Notifications', 'Settings']
        return menu.map((val,index)=>{
            const delay = `${index * 0.1}s`;
            return (
                <MenuItem 
                    name={menu[index]}
                    key={index} 
                    delay={delay}
                />
            );
        });
    }

    render(){
      const styles={
        sideMenuBackground: {
          opacity: this.props.open ? 1: 0,
          width: this.state.open? '100%': 0,
        },
        sideMenu: {
          width: this.state.open? '75%': 0,
        },
        closeSideMenu: {
          width: this.state.open? '25%': 0,
        },
        menuList: {
          paddingTop: '3rem',
        }
      }
      return(
        <div className='side-menu-background' style={styles.sideMenuBackground}>
          <div className='side-menu' style={styles.sideMenu}>
            {
              this.state.open?
                <div className='menu-list'>
                  <div className='profile-mask'/>
                  <div className='profile'>
                  </div>
                  {this.createMenuItems()}
                </div>:null
            }
          </div>
          <div className='close-side-menu' style={styles.sideMenuBackground}
            onClick={() =>this.props.closeMenu()}
          />
        </div>
      )
    }
  }