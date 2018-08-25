import React from 'react';
import withAuthentication from '../../session/withAuthentication';
import { appRoutes } from '../../routing';

const App = () => {
    return (
      <div className="planted">
        {appRoutes.initialRoutes()}
      </div>
    );
}
export default withAuthentication(App);