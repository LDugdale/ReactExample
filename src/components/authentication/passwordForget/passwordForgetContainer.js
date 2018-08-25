import React, { Component } from 'react';
import PasswordForgetForm from './passwordForgetForm';
import { auth } from '../../../firebase';

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

        auth.doPasswordReset(email)
        .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
        })
        .catch(error => {
            this.setState(updateByPropertyName('error', error));
        });
 
        event.preventDefault();      
    }

    handleChange(event){
        this.setState(updateByPropertyName('email', event.target.value))
    }

    render(){
        return(
            <div>
                <h1>PasswordForget</h1>
                <PasswordForgetForm 
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}