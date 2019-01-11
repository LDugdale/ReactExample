import validator from 'validator';
import * as form from '../constants/form';

export const validateSignInFields = (email, password) => {
    let emailError, passwordError;

    return new Promise((resolve, reject) => {
        emailError = validateEmail(email);
        passwordError = validatePassword(password);

        if(emailError || passwordError){
            let errors = {
                emailError: emailError,
                passwordError: passwordError
            };

            reject(errors);
        }
        resolve();
    });
}

export const validateSignUpFields = (username, email, passwordOne, passwordTwo) => {

    let usernameError, emailError, passwordError;
    return new Promise((resolve, reject) => {
        
        emailError = validateEmail(email);
        passwordError = validatePassword(passwordOne, passwordTwo);
        usernameError  = validateUsername(username);

        if(emailError || passwordError || usernameError){
            let errors = {
                emailError: emailError,
                passwordError: passwordError,
                usernameError: usernameError
            };

            reject(errors);
        }
        resolve();
    });
}

const validateUsername = (username) => {
    let usernameError;
    if(!username){
        usernameError = form.EMPTY_PASSWORD;
    }
    return usernameError;
}

const validateEmail = (email) => {
    let emailError;
    if(!email){
        emailError = form.EMPTY_EMAIL;
    } else if(!validator.isEmail(email)){
        emailError = form.INVALID_EMAIL;
    }
    return emailError;
}

const validatePassword = (passwordOne, passwordTwo) => {
    let passwordError;
    
    if(!passwordOne){
        passwordError = form.EMPTY_PASSWORD;
    }

    if(passwordTwo){
        if(passwordOne !== passwordTwo){
            passwordError = form.DIFFERENT_PASSWORDS;
        }
    }
    return passwordError;
}