import React from 'react';

const SignInForm = (props) => {

    const {
    email,
    password,
    error,
    } = props.values;
    
    return (
        <form onSubmit={this.onSubmit}>
            <input
                value={email}s
                onChange={event => props.onChange("email", event.target.value)}
                type="text"
                placeholder="Email Address"
            />
            <input
                value={password}
                onChange={event => props.onChange("password", event.target.value)}
                type="password"
                placeholder="Password"
            />
            <button disabled={props.isInvalid()} type="submit">
                Sign In
            </button>

            { error && <p>{error.message}</p> }
        </form>
    );
}

export default SignInForm;