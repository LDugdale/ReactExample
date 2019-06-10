import React, { Component } from 'react';

export default class MenuItem extends Component {

    
    render(){
      const styles={
        menuItemWrapper: {
          animationDelay:this.props.delay,
        },
        menuItem:{
          animationDelay:this.props.delay,
  
        },
        line: {
          animationDelay:this.props.delay,
          
        }
      }
      return(
        <div className='menu-item-wrapper' style={styles.menuItemWrapper}>
          <div 
            className='menu-item'
            style={styles.menuItem} 
            onClick={this.props.onClick}
          >
            {this.props.name}  
          </div>
        <div className='menu-item-line' style={styles.line}/>
      </div>  
      )
    }
  }