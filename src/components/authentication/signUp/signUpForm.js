import React from 'react';
import Input from '../../controls/input';

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
          <Input
                value={username}
                onChange={props.onChange}
                valueKey="username"
                type="text"
                placeholder="Username"
            />
          <Input
                value={email}
                onChange={props.onChange}
                valueKey="email"
                type="text"
                placeholder="Email"
            />
          <Input
                value={passwordOne}
                onChange={props.onChange}
                valueKey="passwordOne"
                type="password"
                placeholder="Password"
            />
          <Input
                value={passwordTwo}
                onChange={props.onChange}
                valueKey="passwordTwo"
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