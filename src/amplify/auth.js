import { Auth } from 'aws-amplify';

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
    Auth.signUp({ username, password, attributes: {email}})

// Sign In
export const doSignInWithEmailAndPassword = (username, password) =>
    Auth.signIn(username, password)

// Sign out
export const doSignOut = () =>
    Auth.signOut()

// Password Reset
export const doPasswordReset = (username) =>
    Auth.forgotPassword(username)
