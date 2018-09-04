import React from 'react';
import Underline from './underline';

const Tabs = (props) => {

    return (
      <div
        className="tabs"
      >
        {props.createTabs()}
        <Underline
          getUnderlineStyle={props.getUnderlineStyle}
        />
      </div>
    );
}

export default Tabs;