import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../../constants/routes';

export const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>