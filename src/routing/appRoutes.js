import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LandingPage from '../components/landing';
import AuthenticationPage from '../components/authentication/';
import SignUpPage from '../components/authentication/signUp';
import SignInPage from '../components/authentication/signIn';
import PasswordForgetPage from '../components/authentication/passwordForget';
import HomePage from '../components/home';
import Plants from '../components/home/plants';
import AddPlant from '../components/singlePages/addPlant';
import UserPlant from '../components/singlePages/userPlant';
import SinglePage from '../components/singlePages'
import * as routes from '../constants/routes';

export const initialRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={routes.LANDING} component={LandingPage} />
                <Route path={routes.AUTHENTICATION} component={AuthenticationPage} />
                <Route path={routes.HOME} component={HomePage} />
                <Route path={routes.SINGLE} component={SinglePage} />
            </Switch>
        </BrowserRouter>
    );
}

export const authRoutes = () => {
    return (
        <Switch>
            <Route exact path={routes.SIGN_UP} component={SignUpPage} />
            <Route exact path={routes.SIGN_IN} component={SignInPage} />
            <Route exact path={routes.PASSWORD_FORGET} component={PasswordForgetPage} />            
        </Switch>
    );
}

export const homeRoutes = () => {
    return (
        <Switch>
            <Redirect exact from={routes.HOME} to={routes.PLANTS}/>
            <Route exact path={routes.SOCIAL} component={Plants} />
            <Route exact path={routes.PLANTS} component={Plants} />
            <Route exact path={routes.LIBRARY} component={Plants} />
        </Switch>
    );
}

export const singleRoutes = () => {
    return (
        <Switch>
            <Route exact path={routes.ADD_PLANT} component={AddPlant} />
            <Route path={routes.USER_PLANT(':userPlantId')} component={UserPlant} />
        </Switch>
    );
}