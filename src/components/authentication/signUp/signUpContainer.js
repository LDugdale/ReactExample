import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { createUser } from '../../../services/userService';
import SignUpForm from './signUpForm';
import * as routes from '../../../constants/routes';
import { SignInLink } from '../signIn'
import { Spinner, spinnerController } from '../../spinner';
import { validateSignUpFields } from '../../../services/formService';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  usernameError: '',
  emailError: '',
  passwordError: '',
  authenticationError: ''
};

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

    handleSubmit(event) {
      event.preventDefault();
      spinnerController.show();

      const {
        username,
        email,
        passwordOne,
        passwordTwo
      } = this.state;

        validateSignUpFields(username, email, passwordOne, passwordTwo)
          .then(() => {

              createUser(username, email, passwordOne)
              .then(() => {
                this.setState(() => ({ ...INITIAL_STATE }));
                spinnerController.hide();
                this.props.history.push(routes.HOME);
              })
              .catch(authenticationError => {
                this.setState(updateByPropertyName('authenticationError', authenticationError.error));
                spinnerController.hide();
              });
          })
          .catch((errors) => {
            this.setState({...errors});
            spinnerController.hide();
          });
    }

  handleChange(key, value){
    this.setState(updateByPropertyName(key, value));
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
