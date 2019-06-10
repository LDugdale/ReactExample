import React from 'react';

const Underline = (props) => {
    return(
        <div
            className="underline"
            style={props.getUnderlineStyle()}
      />
    );
}

export default Underline;