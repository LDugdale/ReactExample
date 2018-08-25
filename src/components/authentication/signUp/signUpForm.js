import React from 'react';

const SignUpForm = (props) =>{

    const {
        username,
        email,
        passwordOne,
        passwordTwo,
        error,
      } = props.values;
  
      return (
        <form onSubmit={event => props.onSubmit(event)}>
          <input
            value={username}
            onChange={event => props.onChange("username", event.target.value)}
            type="text"
            placeholder="Full Name"
          />
          <input
            value={email}
            onChange={event => props.onChange("email", event.target.value)}
            type="text"
            placeholder="Email Address"
          />
          <input
            value={passwordOne}
            onChange={event => props.onChange("passwordOne", event.target.value)}
            type="password"
            placeholder="Password"
          />
          <input
            value={passwordTwo}
            onChange={event => props.onChange("passwordTwo", event.target.value)}
            type="password"
            placeholder="Confirm Password"
          />
          <button disabled={props.isInvalid()} type="submit">
            Sign Up
          </button>
  
          { error && <p>{error.message}</p> }
        </form>
      );
}

export default SignUpForm;