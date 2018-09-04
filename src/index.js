import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';
import './styles/normalize.css';
import './styles/customProperties.css';
import './styles/layout.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
