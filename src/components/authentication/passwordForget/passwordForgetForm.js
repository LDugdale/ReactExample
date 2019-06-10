import React from 'react';
import Input from '../../controls/input';

const PasswordForgetForm = (props) => {
    
    const isInvalid = props.email === '';

    return (
        <form onSubmit={event => props.onSubmit(event)}>
            <Input
                onChange={props.onChange}
                valueKey="email"
                type="text"
                placeholder="Email Address"
            />
            <button disabled={isInvalid} type="submit">
                RESET PASSWORD
            </button>
        </form>
    );
};

export default PasswordForgetForm;