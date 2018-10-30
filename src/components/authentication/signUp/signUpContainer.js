import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { createUser } from '../../../services/userService';
import SignUpForm from './signUpForm';
import * as routes from '../../../constants/routes';
import { SignInLink } from '../signIn'
import { Spinner, spinnerController } from '../../spinner';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.isInvalid = this.isInvalid.bind(this);
  }

    handleSubmit(event) {

        const {
            username,
            email,
            passwordOne,
        } = this.state;
        spinnerController.show();
        createUser(username, email, passwordOne)
        .then(() => {
          this.setState(() => ({ ...INITIAL_STATE }));
          spinnerController.hide();
          debugger;
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
    return this.state.passwordOne !== this.state.passwordTwo || this.state.passwordOne === '' || this.state.username === '' || this.state.email === '';
  }

  render(){
      return(
        <div className="auth-content sign-up">
          <Spinner />
          <SignUpForm 
              values={this.state}
              isInvalid={this.isInvalid}
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
          />
          <p className="auth-separator"><span>OR</span></p>
          <SignInLink />
        </div>        
      );
  }
}

export default withRouter(SignUpContainer);
