import React from 'react';
import Input from '../../controls/input';

const ChooseNickname = (props) => {

    return (
        <>
            <Input 
                onChange={props.onChange}
                valueKey="nickname"
                type="text"
                value={props.value}
                placeholder='Nickname'
            />        
        </>
    );
}

export default ChooseNickname;