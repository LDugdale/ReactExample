import React, { Component } from 'react';
import PasswordForgetForm from './passwordForgetForm';
import { SignInLink } from '../signIn';
import { passwordReset } from '../../../services/userService';
import { Spinner, spinnerController } from '../../spinner';

const updateByPropertyName = (propertyName, value) => () => ({
    [propertyName]: value,
  });
  
  const INITIAL_STATE = {
    email: '',
    error: null,
  };

export default class PasswordForgetContainer extends Component {

    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event){
        const { email } = this.state; 
        spinnerController.show();
        passwordReset(email)
        .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            spinnerController.hide();
        })
        .catch(error => {
            this.setState(updateByPropertyName('error', error));
            spinnerController.hide();
        });
 
        event.preventDefault();      
    }

    handleChange(key, value){
        this.setState(updateByPropertyName(key, value))
    }

    render(){
        return(
            <div className="auth-content password-forget">
                <Spinner/>
                <PasswordForgetForm 
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}
                />
                <p className="auth-separator"><span>OR</span></p>
                <SignInLink />
            </div>
        );
    }
}