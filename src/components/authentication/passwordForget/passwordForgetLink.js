import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../../constants/routes';

export const PasswordForgetLink = () =>
    <p>
        <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
    </p>
