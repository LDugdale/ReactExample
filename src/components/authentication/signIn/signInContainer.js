import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SignInForm from './signInForm';
import { SignUpLink } from '../signUp';
import { PasswordForgetLink } from '../passwordForget';
import * as routes from '../../../constants/routes';
import { signIn } from '../../../services/userService';
import { Spinner, spinnerController } from '../../spinner';

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
    spinnerController.show();
    signIn(email, password)
      .then(() => {
        debugger;
        spinnerController.hide();
        this.setState(() => ({ ...INITIAL_STATE }));
        this.props.history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
        spinnerController.hide();
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
      <div className="auth-content sign-in">
        <Spinner />
        <SignInForm 
          values={this.state}
          isInvalid={this.isInvalid}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        <PasswordForgetLink />
        <p className="auth-separator"><span>OR</span></p>
        <SignUpLink />
      </div>
    );
  }  
}

export default withRouter(SignInContainer);