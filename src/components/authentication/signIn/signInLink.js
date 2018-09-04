import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../../constants/routes';

export const SignInLink = () =>
    <p className="sign-in-link">
        <Link to={routes.SIGN_IN}>SIGN IN</Link>
    </p>
