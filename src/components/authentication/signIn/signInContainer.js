import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SignInForm from './signInForm';
import { SignUpLink } from '../signUp';
import { PasswordForgetLink } from '../passwordForget';
import { auth } from '../../../firebase';
import * as routes from '../../../constants/routes';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInContainer extends Component {

  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.isInvalid = this.isInvalid.bind(this);
  }

  handleSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  handleChange(key, value){
    this.setState(updateByPropertyName(key, value));
  }

  isInvalid(){
    return this.state.password === '' || this.state.email === '';
  }

  render(){
    return (
      <div className="container sign-in">
        <h1>SignIn</h1>
        <SignInForm 
          values={this.state}
          isInvalid={this.isInvalid}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        <PasswordForgetLink />
        <SignUpLink />
      </div>
    );
  }  
}

export default withRouter(SignInContainer);