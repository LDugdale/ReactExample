import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';
import './assets/styles/normalize.css';
import './assets/styles/customProperties.css';
import './assets/styles/layout.css';

render(
    <App />, document.getElementById('root')
);

registerServiceWorker();
