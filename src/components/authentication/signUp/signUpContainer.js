import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SignUpForm from './signUpForm';
import { auth, db } from '../../../firebase';
import * as routes from '../../../constants/routes';

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

        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {

        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, username, email)
            .then(() => {
                this.setState(() => ({ ...INITIAL_STATE }));
                this.history.push(routes.HOME);
            })
            .catch(error => {
                this.setState(updateByPropertyName('error', error));
            });

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
    return this.state.passwordOne !== this.state.passwordTwo || this.state.passwordOne === '' || this.state.username === '' || this.state.email === '';
  }

  render(){
      return(
        <div>
            <h1>SignUp</h1>
            <SignUpForm 
                values={this.state}
                isInvalid={this.isInvalid}
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
            />
        </div>        
      );
  }
}

export default withRouter(SignUpContainer);
