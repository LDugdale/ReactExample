import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import LandingPage from '../components/landing';
import SignUpPage from '../components/authentication/signUp';
import SignInPage from '../components/authentication/signIn';
import PasswordForgetPage from '../components/authentication/passwordForget';
import HomePage from '../components/home';
import * as routes from '../constants/routes';

export const initialRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
            <Route exact path={routes.LANDING} component={LandingPage} />
            <Route exact path={routes.SIGN_UP} component={SignUpPage} />
            <Route exact path={routes.SIGN_IN} component={SignInPage} />
            <Route exact path={routes.PASSWORD_FORGET} component={PasswordForgetPage} />
            <Route exact path={routes.HOME} component={HomePage} />
            </Switch>
        </BrowserRouter>
    );
}