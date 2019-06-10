import React from 'react';
import Input from '../../controls/input'

const SignInForm = (props) => {

    const {
    email,
    password,
    emailError,
    passwordError,
    authenticationError,
    } = props.values;
    
    return (
        <form onSubmit={props.onSubmit}>
            <Input
                value={email}
                onChange={props.onChange}
                valueKey="email"
                type="text"
                placeholder="Email"
            />
            <p className='form-error'>{emailError}</p>
            <Input
                value={password}
                onChange={props.onChange}
                valueKey="password"
                type="password"
                placeholder="Password"
            />
            <p className='form-error'>{passwordError}</p>
            <button type="submit">
                LOG IN
            </button>
            <p className='form-error'>{authenticationError}</p>
        </form>
    );
}

export default SignInForm;