import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SignInForm from './signInForm';
import * as routes from '../../../constants/routes';
import { SignUpLink } from '../signUp';
import { PasswordForgetLink } from '../passwordForget';
import { validateSignInFields } from '../../../services/formService';
import { signInUser } from '../../../services/userService';
import { Spinner, spinnerController} from '../../spinner';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  emailError: '',
  password: '',
  passwordError: '',
  authenticationError: ''
};

class SignInContainer extends Component {

  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    spinnerController.show();

    const {
      email,
      password,
    } = this.state;

    validateSignInFields(email, password)
      .then(() => {
        
        signInUser(email, password)
          .then(() => {
            spinnerController.hide();
            this.setState(() => ({ ...INITIAL_STATE }));
            this.props.history.push(routes.HOME);
          })
          .catch(authenticationError => {
            this.setState(updateByPropertyName('authenticationError', authenticationError.message));
            spinnerController.hide();
          });

      })
      .catch((errors) => {
        this.setState({...errors});
        spinnerController.hide();
      });

    
  }

  handleChange(value, key){
    this.setState(updateByPropertyName(key, value));
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