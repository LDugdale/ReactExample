import React from 'react';
import Input from '../controls/input';

const ChooseNickname = (props) => {
    return (
        <div className='nickname'>
            <h1>
                Give your plant a nickname!
            </h1>
            <Input 
                onChange={props.onChange}
                valueKey="nickname"
                type="text"
                placeholder='Nickname'
            />
        </div>
    );
}

export default ChooseNickname;