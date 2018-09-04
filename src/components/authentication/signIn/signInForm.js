import React from 'react';
import Input from '../../controls/input'

const SignInForm = (props) => {

    const {
    email,
    password,
    error,
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
            <Input
                value={password}
                onChange={props.onChange}
                valueKey="password"
                type="password"
                placeholder="Password"
            />
            <button disabled={props.isInvalid()} type="submit">
                LOG IN
            </button>

            { error && <p>{error.message}</p> }
        </form>
    );
}

export default SignInForm;