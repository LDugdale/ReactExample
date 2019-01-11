import React from 'react';
import Input from '../../controls/input';

const SignUpForm = (props) =>{

    const {
        username,
        email,
        passwordOne,
        passwordTwo,
        usernameError,
        emailError,
        passwordError,
        authenticationError
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
            <p className='form-error'>{usernameError}</p>
          <Input
                value={email}
                onChange={props.onChange}
                valueKey="email"
                type="text"
                placeholder="Email"
            />
            <p className='form-error'>{emailError}</p>
          <Input
                value={passwordOne}
                onChange={props.onChange}
                valueKey="passwordOne"
                type="password"
                placeholder="Password"
            />
            <p className='form-error'>{passwordError}</p>
          <Input
                value={passwordTwo}
                onChange={props.onChange}
                valueKey="passwordTwo"
                type="password"
                placeholder="Confirm Password"
            />
          <button type="submit">
            Sign Up
          </button>
  
          <p className='form-error'>{authenticationError}</p>
        </form>
      );
}

export default SignUpForm;