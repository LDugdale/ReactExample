import React from 'react';

const PasswordForgetForm = (props) => {
    
        const isInvalid = props.email === '';

        return (
            <form onSubmit={event => props.onSubmit(event)}>
                <input
                    value={props.email}
                    onChange={event => props.onChange(event)}
                    type="text"
                    placeholder="Email Address"
                />
                <button disabled={isInvalid} type="submit">
                    Reset My Password
                </button>
            </form>
        );
};

export default PasswordForgetForm;