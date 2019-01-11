import React from 'react';
import Input from '../../controls/input';

const ChooseNickname = (props) => {

    return (
        <div className='nickname'>
            <div className="add-plant-header">
                <h2 className="title">
                    Give your plant a nickname!
                </h2>
                <Input 
                    onChange={props.onChange}
                    valueKey="nickname"
                    type="text"
                    value={props.value}
                    placeholder='Nickname'
                />
            </div>
        </div>
    );
}

export default ChooseNickname;