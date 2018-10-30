import React from 'react';

import AuthUserContext from './authUserContext';
import { auth } from '../data/amplify';

const withAuthentication = (Component) =>
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null,
      };
    }

    componentDidMount() {
      auth.getCurrentAuthenticatedUser()
          .then(authUser => {
            this.setState(() => ({ authUser })); 
          })
          .catch(err => {
            this.setState(() => ({ authUser: null }))
          });
    }

    render() {
      const { authUser } = this.state;

      return (
        <AuthUserContext.Provider value={authUser}>
          <Component />
        </AuthUserContext.Provider>
      );
    }
  }

export default withAuthentication;