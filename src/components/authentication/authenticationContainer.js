import React from 'react';
import { appRoutes } from '../../routing';
import '../../styles/authentication.css';

const AuthenticationContainer = () => {

    return(
        <div className="auth-container">
            <div className="header">
                <h1>Planted</h1>
            </div>
            {appRoutes.authRoutes()}
        </div>
    );
}

export default AuthenticationContainer;