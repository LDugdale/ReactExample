import React, { Component } from 'react';

export default class MenuButtonContainer extends Component {
  
    render(){
      const styles = {
        container: {
          height: '32px',
          width: '32px',
          display:'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          padding: '12px',
        },
        line: {
          height: '3px',
          width: '22px',
          background: 'var(--black)',
          transition: 'all 0.2s ease',
        },
        lineTop: {
          transform: this.props.open ? 'rotate(45deg)':'none',
          transformOrigin: 'top left',
          marginBottom: '5px',
        },
        lineMiddle: {
          opacity: this.props.open ? 0: 1,
          transform: this.props.open ? 'translateX(-16px)':'none',
        },
        lineBottom: {
          transform: this.props.open ? 'translateX(-1px) rotate(-45deg)':'none',
          transformOrigin: 'top left',
          marginTop: '5px',
        },       
      }
      return(
        <div 
          style={styles.container}
          onClick={() => this.props.onClick()}
        >
          <div style={{...styles.line,...styles.lineTop}}/>
          <div style={{...styles.line,...styles.lineMiddle}}/>
          <div style={{...styles.line,...styles.lineBottom}}/>
        </div>
      )
    }
  }
  