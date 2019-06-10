import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import './assets/styles/normalize.css';
import './assets/styles/customProperties.css';
import './assets/styles/layout.css';
import registerServiceWorker from './registerServiceWorker';


render(
    <App />, document.getElementById('root')
);

registerServiceWorker();
